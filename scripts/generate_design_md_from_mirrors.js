#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const previewDir = path.join(root, "preview-site");
const designDir = path.join(root, "design-md");
const stylesDataPath = path.join(previewDir, "styles-data.js");

function decodeHtml(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripTags(value) {
  return decodeHtml(String(value || "").replace(/<[^>]*>/g, " "));
}

function escapeCell(value) {
  return String(value || "").replace(/\|/g, "\\|").trim();
}

function loadCatalog() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(stylesDataPath, "utf8"), sandbox);
  return sandbox.window.STYLE_CATALOG || [];
}

function firstMatch(source, regex) {
  const match = source.match(regex);
  return match ? decodeHtml(match[1]) : "";
}

function extractRootTokens(html) {
  const rootBlock = firstMatch(html, /:root\s*\{([\s\S]*?)\}/);
  const tokens = [];
  for (const match of rootBlock.matchAll(/--([a-zA-Z0-9_-]+)\s*:\s*([^;]+);/g)) {
    tokens.push({ name: `--${match[1]}`, value: decodeHtml(match[2]) });
  }
  return tokens;
}

function extractColorGroups(html) {
  const groups = [];
  const labelRegex = /<(?:div|h3) class="(?:color-group-label|color-group-title)">([\s\S]*?)<\/(?:div|h3)>/g;
  const labels = [...html.matchAll(labelRegex)].map((match) => ({
    name: decodeHtml(match[1]),
    index: match.index,
    end: match.index + match[0].length,
  }));

  labels.forEach((label, index) => {
    const next = labels[index + 1]?.index ?? html.length;
    const segment = html.slice(label.end, next);
    const swatches = [];
    const swatchRegex =
      /<div class="color-swatch-name">([\s\S]*?)<\/div>\s*<div class="color-swatch-hex">([\s\S]*?)<\/div>\s*<div class="color-swatch-role">([\s\S]*?)<\/div>/g;
    for (const swatch of segment.matchAll(swatchRegex)) {
      swatches.push({
        name: decodeHtml(swatch[1]),
        value: decodeHtml(swatch[2]),
        role: decodeHtml(swatch[3]),
      });
    }
    if (swatches.length) groups.push({ name: label.name, swatches });
  });

  if (!groups.length) {
    const swatches = [];
    const swatchRegex =
      /<div class="color-swatch-name">([\s\S]*?)<\/div>\s*<div class="color-swatch-hex">([\s\S]*?)<\/div>\s*<div class="color-swatch-role">([\s\S]*?)<\/div>/g;
    for (const swatch of html.matchAll(swatchRegex)) {
      swatches.push({
        name: decodeHtml(swatch[1]),
        value: decodeHtml(swatch[2]),
        role: decodeHtml(swatch[3]),
      });
    }
    if (swatches.length) groups.push({ name: "Palette", swatches });
  }

  return groups;
}

function extractTypography(html) {
  const meta = [...html.matchAll(/<div class="type-meta">([\s\S]*?)<\/div>/g)].map((match) =>
    decodeHtml(match[1]),
  );
  if (meta.length) return meta;

  const rows = [];
  for (const match of html.matchAll(
    /<div class="type-(?:name|label)">([\s\S]*?)<\/div>[\s\S]*?<div class="type-(?:meta|spec)">([\s\S]*?)<\/div>/g,
  )) {
    rows.push(`${decodeHtml(match[1])} -- ${decodeHtml(match[2])}`);
  }
  return rows;
}

function extractButtonExamples(html) {
  const section = firstSection(html, "buttons");
  const examples = [];
  for (const match of section.matchAll(
    /<div class="button-item"[^>]*>([\s\S]*?<div class="button-label"[^>]*>[\s\S]*?<\/div>)\s*<\/div>/g,
  )) {
    const block = match[1];
    const label = firstMatch(block, /<div class="button-label"[^>]*>([\s\S]*?)<\/div>/);
    const sample = stripTags(block.replace(/<div class="button-label"[^>]*>[\s\S]*?<\/div>/, ""));
    if (label || sample) examples.push({ label, sample });
  }
  return examples;
}

function extractCards(html) {
  const section = firstSection(html, "cards");
  const cards = [];
  for (const match of section.matchAll(/<div class="card[^"]*"[^>]*>([\s\S]*?<p[\s\S]*?<\/p>)\s*<\/div>/g)) {
    const block = match[1];
    const badge =
      firstMatch(block, /<div class="card-(?:badge|label)"[^>]*>([\s\S]*?)<\/div>/) ||
      firstMatch(block, /<span class="card-(?:badge|label)"[^>]*>([\s\S]*?)<\/span>/);
    const title = firstMatch(block, /<h3>([\s\S]*?)<\/h3>/);
    const text = firstMatch(block, /<p[^>]*>([\s\S]*?)<\/p>/);
    if (title || text) cards.push({ badge, title, text });
  }
  return cards;
}

function extractForms(html) {
  const section = firstSection(html, "forms");
  const fields = [];
  for (const match of section.matchAll(/<div class="form-group"[^>]*>([\s\S]*?)(?=<div class="form-group"|<\/section>)/g)) {
    const block = match[1];
    const label = firstMatch(block, /<label class="form-label">([\s\S]*?)<\/label>/);
    const state = firstMatch(block, /<div class="form-(?:state-label|hint|help)"[^>]*>([\s\S]*?)<\/div>/);
    const placeholder = firstMatch(block, /placeholder="([^"]*)"/);
    const value = firstMatch(block, /value="([^"]*)"/);
    if (label) fields.push({ label, state, placeholder, value });
  }
  return fields;
}

function extractSimplePairs(html, sectionId, itemClass, labelClasses, contextClasses) {
  const section = firstSection(html, sectionId);
  const pairs = [];
  const regex = new RegExp(`<div class="${itemClass}[^"]*"[^>]*>([\\s\\S]*?)(?=<div class="${itemClass}|<\\/section>)`, "g");
  for (const match of section.matchAll(regex)) {
    const block = match[1];
    const label = firstClassText(block, labelClasses);
    const context = firstClassText(block, contextClasses);
    if (label || context) pairs.push({ label, context });
  }
  return pairs;
}

function firstClassText(block, classNames) {
  for (const className of classNames) {
    const found = firstMatch(block, new RegExp(`<div class="${className}"[^>]*>([\\s\\S]*?)<\\/div>`));
    if (found) return found;
  }
  return "";
}

function extractSpacing(html) {
  return [...firstSection(html, "spacing").matchAll(/<div class="spacing-value">([\s\S]*?)<\/div>/g)].map(
    (match) => decodeHtml(match[1]),
  );
}

function extractElevation(html) {
  return extractSimplePairs(
    html,
    "elevation",
    "elevation-card",
    ["elevation-label", "elevation-name"],
    ["elevation-desc", "elevation-level"],
  );
}

function extractRadius(html) {
  return extractSimplePairs(html, "radius", "radius-item", ["radius-label"], ["radius-context"]);
}

function firstSection(html, id) {
  const match = html.match(new RegExp(`<section class="section" id="${id}">([\\s\\S]*?)<\\/section>`));
  return match ? match[1] : "";
}

function extractPreviewText(html) {
  const title = firstMatch(html, /<title>([\s\S]*?)<\/title>/);
  const heroTitle = stripTags(firstMatch(html, /<section class="hero">[\s\S]*?<h1>([\s\S]*?)<\/h1>/));
  const heroText = firstMatch(html, /<section class="hero">[\s\S]*?<p>([\s\S]*?)<\/p>/);
  return { title, heroTitle, heroText };
}

function renderTable(rows, headings) {
  if (!rows.length) return "";
  const header = `| ${headings.join(" | ")} |`;
  const divider = `| ${headings.map(() => "---").join(" | ")} |`;
  const body = rows.map((row) => `| ${row.map((cell) => escapeCell(cell)).join(" | ")} |`);
  return [header, divider, ...body].join("\n");
}

function renderReadme(style, extracted) {
  const sourcePath = `preview-site/mirrors/${style.slug}-light.html`;
  const darkPath = `preview-site/mirrors/${style.slug}-dark.html`;
  const screenshotPath = `preview-site/screenshots/getdesign-${style.slug}.png`;
  const colorSections = extracted.colorGroups
    .map((group) => {
      const rows = group.swatches.map((item) => [item.name, item.value, item.role]);
      return `### ${group.name}\n\n${renderTable(rows, ["Token", "Value", "Role"])}`;
    })
    .join("\n\n");
  const tokenRows = extracted.rootTokens.map((token) => [token.name, token.value]);
  const buttonRows = extracted.buttons.map((button) => [button.label || "Example", button.sample]);
  const cardRows = extracted.cards.map((card) => [card.badge || "-", card.title, card.text]);
  const formRows = extracted.forms.map((field) => [
    field.label,
    field.state || "-",
    field.value || field.placeholder || "-",
  ]);
  const radiusRows = extracted.radius.map((item) => [item.label, item.context]);
  const elevationRows = extracted.elevation.map((item) => [item.label, item.context]);

  return `# ${style.name} Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 ${style.name} 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: \`${style.slug}\`
- Category: ${style.category}
- Visual direction: ${style.description}
- Local light preview: [${sourcePath}](../../${sourcePath})
- Local dark preview: [${darkPath}](../../${darkPath})
- Preview screenshot: [${screenshotPath}](../../${screenshotPath})

${extracted.preview.heroTitle ? `## Design Intent\n\n${extracted.preview.heroTitle}${extracted.preview.heroText ? `\n\n${extracted.preview.heroText}` : ""}\n` : ""}
## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

${renderTable(tokenRows, ["CSS Variable", "Value"])}

## Color Palette

${colorSections || "_No explicit color swatches were found in the local mirror._"}

## Typography

${extracted.typography.length ? extracted.typography.map((item) => `- ${item}`).join("\n") : "_No typography scale was found in the local mirror._"}

## Buttons And Interactive Elements

${buttonRows.length ? renderTable(buttonRows, ["Variant", "Visible Example"]) : "_No button examples were found in the local mirror._"}

## Cards

${cardRows.length ? renderTable(cardRows, ["Badge", "Title", "Usage"]) : "_No card examples were found in the local mirror._"}

## Forms

${formRows.length ? renderTable(formRows, ["Field", "State", "Example Value"]) : "_No form examples were found in the local mirror._"}

## Spacing

${extracted.spacing.length ? extracted.spacing.map((item) => `- ${item}px`).join("\n") : "_No spacing scale was found in the local mirror._"}

## Border Radius

${radiusRows.length ? renderTable(radiusRows, ["Radius", "Context"]) : "_No radius scale was found in the local mirror._"}

## Elevation

${elevationRows.length ? renderTable(elevationRows, ["Level", "Treatment"]) : "_No elevation examples were found in the local mirror._"}

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.
`;
}

function main() {
  const catalog = loadCatalog();
  if (!catalog.length) throw new Error("No styles found in preview-site/styles-data.js");

  let written = 0;
  for (const style of catalog) {
    const lightPath = path.join(previewDir, "mirrors", `${style.slug}-light.html`);
    const darkPath = path.join(previewDir, "mirrors", `${style.slug}-dark.html`);
    const sourcePath = fs.existsSync(lightPath) ? lightPath : darkPath;
    if (!sourcePath || !fs.existsSync(sourcePath)) {
      console.warn(`Skipping ${style.slug}: missing local mirror`);
      continue;
    }

    const html = fs.readFileSync(sourcePath, "utf8");
    const extracted = {
      preview: extractPreviewText(html),
      rootTokens: extractRootTokens(html),
      colorGroups: extractColorGroups(html),
      typography: extractTypography(html),
      buttons: extractButtonExamples(html),
      cards: extractCards(html),
      forms: extractForms(html),
      spacing: extractSpacing(html),
      radius: extractRadius(html),
      elevation: extractElevation(html),
    };

    const outDir = path.join(designDir, style.slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, "README.md"), renderReadme(style, extracted), "utf8");
    written += 1;
  }

  console.log(`Generated ${written} design-md README files.`);
}

main();

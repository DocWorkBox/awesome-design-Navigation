const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = __dirname;
const source = fs.readFileSync(path.join(root, "styles-data.js"), "utf8");
const sandbox = { window: {} };
vm.runInNewContext(source, sandbox);
const catalog = sandbox.window.STYLE_CATALOG || [];
const mirrorsDir = path.join(root, "mirrors");

fs.mkdirSync(mirrorsDir, { recursive: true });

function injectBase(html) {
  if (html.includes("<base ")) {
    return html;
  }
  return html.replace(
    /<head>/i,
    '<head><base href="https://getdesign.md/">'
  );
}

function stripStaleSourceControls(html) {
  return html
    .replace(/<a\b[^>]*>\s*(?:View Source|View DESIGN\.md|打开来源|打开原始规范页)\s*<\/a>/gi, "")
    .replace(/<button\b[^>]*>\s*(?:View Source|View DESIGN\.md|打开来源|打开原始规范页)\s*<\/button>/gi, "");
}

function injectPreviewSafetyCss(html) {
  if (html.includes("codex-mirror-preview-safety")) {
    return html;
  }

  const css = `<style id="codex-mirror-preview-safety">
  html,
  body {
    max-width: 100%;
    overflow-x: hidden;
  }

  html::-webkit-scrollbar:horizontal,
  body::-webkit-scrollbar:horizontal,
  *::-webkit-scrollbar:horizontal {
    width: 0;
    height: 0;
    display: none;
  }

  @media (max-width: 480px) {
    nav,
    header,
    .nav,
    .header {
      display: flex !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 8px !important;
      width: 100% !important;
      max-width: 100% !important;
      min-width: 0 !important;
      padding-left: 16px !important;
      padding-right: 16px !important;
      overflow: hidden !important;
    }

    .nav-links,
    [class*="nav-links"],
    .nav-github,
    [class*="github"] {
      display: none !important;
    }

    .nav-left,
    [class*="nav-left"],
    .nav-brand,
    [class*="nav-brand"] {
      min-width: 0 !important;
      max-width: calc(100% - 120px) !important;
      overflow: hidden !important;
      white-space: nowrap !important;
      text-overflow: ellipsis !important;
    }

    .nav-cta,
    [class*="nav-cta"] {
      flex: 0 0 auto !important;
      max-width: 110px !important;
      padding: 9px 12px !important;
      font-size: 13px !important;
      white-space: normal !important;
    }
  }
</style>`;

  return html.replace(/<\/head>/i, `${css}\n</head>`);
}

function sanitizeMirrorHtml(html) {
  return injectPreviewSafetyCss(stripStaleSourceControls(injectBase(html)));
}

async function fetchHtml(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 Codex Preview Mirror",
    },
  });
  if (!response.ok) {
    throw new Error(`Failed ${url}: ${response.status}`);
  }
  return sanitizeMirrorHtml(await response.text());
}

async function writeMirror(style, mode, url) {
  const html = await fetchHtml(url);
  const out = path.join(mirrorsDir, `${style.slug}-${mode}.html`);
  fs.writeFileSync(out, html, "utf8");
}

async function main() {
  for (const style of catalog) {
    await writeMirror(style, "light", `https://getdesign.md/design-md/${style.slug}/preview`);
    await writeMirror(style, "dark", `https://getdesign.md/design-md/${style.slug}/preview-dark`);
    console.log(`mirrored ${style.slug}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

---
name: awesome-design-navigation
description: Use when a user wants to browse, compare, choose, or apply visual styles from the awesome-design-md collection through a local graphical preview gallery before generating UI. This skill opens a local visual navigation page for DESIGN.md-inspired styles, resolves the selected style to local Markdown and mirror files, and applies that visual language to frontend design work without depending on remote getdesign.md pages.
---

# Awesome DESIGN.md Navigation

Use this skill when the user wants to choose, compare, or apply a visual direction from the `awesome-design-md` catalog before building or redesigning a UI.

This skill is a local-first workflow. The gallery, style specs, previews, and implementation examples should come from bundled or repository-local files unless the user explicitly asks for external research.

## Core Contract

- Start with the visual gallery when the user wants to choose a style.
- If the user already names a style, skip re-selection and resolve that style directly.
- Read local style specifications before generating UI.
- Treat the style as a visual language, not a component library or brand asset kit.
- Do not rely on live `getdesign.md` pages to apply a style.
- Do not depend on live `getdesign.md` pages for applying styles; local Markdown and local mirrors are the source of truth.
- Do not invoke unrelated third-party design skills when testing or using this skill unless the user explicitly asks for them.
- Keep generated examples self-contained whenever possible: local CSS, no external fonts, no CDN runtime dependency.

## Local Paths

When working inside this repository, resolve paths from the repository root:

```text
preview-site/index.html
design-md/<style>/README.md
preview-site/mirrors/<style>-light.html
preview-site/mirrors/<style>-dark.html
preview-site/screenshots/getdesign-<style>.png
```

When this skill is installed as a standalone skill, resolve paths from the directory that contains this `SKILL.md`:

```text
assets/preview-site/index.html
assets/design-md/<style>/README.md
assets/preview-site/mirrors/<style>-light.html
assets/preview-site/mirrors/<style>-dark.html
assets/preview-site/screenshots/getdesign-<style>.png
```

## Start With The Gallery

Before applying a style, open the bundled preview page so the user can choose visually.

Installed skill:

```bash
SKILL_DIR="/path/to/skills/awesome-design-navigation"
python3 -m http.server 8877 --directory "$SKILL_DIR/assets/preview-site"
```

Repository checkout:

```bash
python3 -m http.server 8877 --directory preview-site
```

Then open:

```text
http://127.0.0.1:8877/index.html
```

The selected style is stored in the URL, for example:

```text
http://127.0.0.1:8877/index.html?style=nvidia&demoTheme=light&demoSize=desktop
```

## Workflow

1. Determine whether the user is choosing a style, naming a style, or asking for a page to be generated.
2. If no style is named, open the local gallery and ask the user to choose one.
3. If a style is named or present in the URL query parameter, normalize it to the style key, for example `nvidia`, `claude`, or `linear.app`.
4. Resolve local source files using the rules in "Style Source Resolution".
5. Read the selected style README before making visual decisions.
6. Read the light or dark mirror only when exact CSS variables, component layout, or spacing details are needed.
7. Produce the requested UI/page using the selected visual language and the target project's existing architecture.
8. If the output belongs to this repository's preview site, also sync it into `skills/awesome-design-navigation/assets/preview-site/` so the installed skill contains the same example.
9. Verify the result with local checks before claiming completion.

## Style Source Resolution

Resolve the selected style in this order:

1. Repository Markdown: `design-md/<style>/README.md`.
2. Skill asset Markdown: `assets/design-md/<style>/README.md`.
3. Repository mirror HTML: `preview-site/mirrors/<style>-light.html` and `preview-site/mirrors/<style>-dark.html`.
4. Skill asset mirror HTML: `assets/preview-site/mirrors/<style>-light.html` and `assets/preview-site/mirrors/<style>-dark.html`.
5. If a style README explicitly says it has no mirror, treat that README as the source of truth.

Use local Markdown for the high-level design language:

- Visual direction and design DNA.
- CSS token snapshot.
- Color palette and semantic roles.
- Typography scale.
- Button, card, form, spacing, radius, and elevation guidance.
- Implementation guidance.

Use mirror HTML for exact implementation details:

- CSS variable names and computed examples.
- Component class patterns.
- Responsive behavior.
- Light/dark contrast treatment.
- Exact local visual comparison.

## Gallery Features

The bundled gallery includes:

- Chinese interface text.
- Search and category filters for the full style catalog.
- Real preview thumbnails for all catalog styles.
- Inline interactive demo preview in the same page.
- Light/dark and desktop/mobile preview controls.
- Local mirrored preview HTML so the gallery works in the in-app browser without remote iframe blank pages.

## Applying A Style

When implementing UI after a style is chosen:

- Preserve the target project's framework, routing, build tooling, and state-management conventions.
- Translate the style into practical UI choices: typography, color, density, spacing, controls, layout rhythm, and interaction feel.
- Use semantic token roles instead of copying colors randomly.
- Match the style's corner radius, elevation, border behavior, and hover/focus behavior.
- Prefer purposeful page structure over decorative imitation.
- Avoid copying brand marks, proprietary assets, or exact product identity unless the user explicitly has rights to use them.
- If the target app already has a design system, adapt the chosen style within that system instead of replacing everything.

## Output Requirements

For generated HTML examples:

- Use Chinese page copy when the user asks in Chinese or the surrounding project is Chinese.
- Keep the page self-contained unless project conventions require shared assets.
- Avoid external CDNs, remote fonts, or live third-party scripts by default.
- Include interactive behavior only when it clarifies the skill or style.
- Ensure desktop and mobile layouts do not create horizontal page overflow.
- If the example is part of `preview-site/`, copy the same file into `skills/awesome-design-navigation/assets/preview-site/`.

For generated app changes:

- Follow the host project's existing file structure.
- Keep style-specific code isolated enough to review and remove.
- Do not rewrite unrelated app architecture just to apply a visual style.

## Verification Checklist

Before saying the task is complete, run the checks that fit the change:

- Confirm the selected style README exists locally.
- Confirm no old redirect-only README is being used as the design source.
- For standalone HTML, parse or lint the file if tooling is available.
- Search for unwanted external dependencies such as CDN scripts or remote fonts.
- If served locally, request the page and confirm HTTP 200.
- For preview-site changes, run relevant local tests:

```bash
node preview-site/tests/interactive_demos.test.js
node preview-site/tests/layout_overflow.test.js
node preview-site/tests/mobile_overflow.test.js
node preview-site/tests/independent_scroll.test.js
node preview-site/tests/preview_size_stability.test.js
```

Use the available Node executable in the environment. On Windows-backed workspaces it may be:

```bash
'/mnt/c/Program Files/nodejs/node.exe' preview-site/tests/interactive_demos.test.js
```

## Maintenance

If local mirrors or the style catalog change, regenerate local Markdown specs from mirrors:

```bash
node scripts/generate_design_md_from_mirrors.js
```

Then sync `design-md` into the skill assets:

```bash
rm -rf skills/awesome-design-navigation/assets/design-md
cp -R design-md skills/awesome-design-navigation/assets/design-md
```

If preview examples are added under `preview-site/examples/`, copy them into:

```text
skills/awesome-design-navigation/assets/preview-site/examples/
```

## Source Attribution

This skill is based on the public `voltagent/awesome-design-md` catalog and adds a local graphical navigation layer, local mirrored previews, and local Markdown specifications for faster style selection and application.

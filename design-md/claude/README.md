# Claude Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Claude 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `claude`
- Category: AI 与大模型平台
- Visual direction: Anthropic 的 AI 助手。暖陶土色点缀，干净的编辑式排版。
- Local light preview: [preview-site/mirrors/claude-light.html](../../preview-site/mirrors/claude-light.html)
- Local dark preview: [preview-site/mirrors/claude-dark.html](../../preview-site/mirrors/claude-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-claude.png](../../preview-site/screenshots/getdesign-claude.png)

## Design Intent

Design System Inspired by Claude

Auto-generated design token catalog from DESIGN.md

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-near-black | #141413 |
| --color-terracotta | #c96442 |
| --color-coral | #d97757 |
| --color-error | #b53333 |
| --color-focus-blue | #3898ec |
| --color-parchment | #f5f4ed |
| --color-ivory | #faf9f5 |
| --color-white | #ffffff |
| --color-warm-sand | #e8e6dc |
| --color-dark-surface | #30302e |
| --color-deep-dark | #141413 |
| --color-charcoal-warm | #4d4c48 |
| --color-olive-gray | #5e5d59 |
| --color-stone-gray | #87867f |
| --color-dark-warm | #3d3d3a |
| --color-warm-silver | #b0aea5 |
| --color-border-cream | #f0eee6 |
| --color-border-warm | #e8e6dc |
| --color-border-dark | #30302e |
| --color-ring-warm | #d1cfc5 |
| --color-ring-deep | #c2c0b6 |
| --font-serif | Georgia, 'Times New Roman', Times, serif |
| --font-sans | Arial, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif |
| --font-mono | SFMono-Regular, Menlo, Monaco, Consolas, 'Courier New', monospace |
| --bg-page | #f5f4ed |
| --bg-card | #faf9f5 |
| --bg-nav | rgba(245,244,237,0.92) |
| --text-primary | #141413 |
| --text-secondary | #5e5d59 |
| --text-tertiary | #87867f |
| --border-color | #f0eee6 |
| --border-subtle | #f0eee6 |
| --section-label-color | #c96442 |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Anthropic Near Black | #141413 | Primary text, dark-theme surface |
| Terracotta Brand | #c96442 | Core brand color, primary CTA buttons |
| Coral Accent | #d97757 | Text accents, links on dark surfaces |

### Secondary & Accent

| Token | Value | Role |
| --- | --- | --- |
| Error Crimson | #b53333 | Error states, warm red |
| Focus Blue | #3898ec | Input focus rings (only cool color) |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Parchment | #f5f4ed | Primary page background |
| Ivory | #faf9f5 | Card surfaces, elevated containers |
| Pure White | #ffffff | Button surfaces, max contrast |
| Warm Sand | #e8e6dc | Button backgrounds, interactive surfaces |
| Dark Surface | #30302e | Dark-theme containers, nav borders |

### Neutrals & Text

| Token | Value | Role |
| --- | --- | --- |
| Charcoal Warm | #4d4c48 | Button text on light surfaces |
| Olive Gray | #5e5d59 | Secondary body text |
| Stone Gray | #87867f | Tertiary text, footnotes, metadata |
| Dark Warm | #3d3d3a | Dark text links, emphasized secondary |
| Warm Silver | #b0aea5 | Text on dark surfaces |

### Semantic & Borders

| Token | Value | Role |
| --- | --- | --- |
| Border Cream | #f0eee6 | Standard light-theme border |
| Border Warm | #e8e6dc | Prominent borders, section dividers |
| Ring Warm | #d1cfc5 | Button hover/focus ring shadow |
| Ring Deep | #c2c0b6 | Active/pressed ring states |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Standard Card | Border Cream Contained | Standard content card with 1px solid Border Cream and 8px radius. The default container for features and content sections on Ivory surface. |
| Whisper Shadow | Soft Elevated Card | Elevated card with whisper-soft shadow at 0.05 opacity and 24px blur. Suggests floating rather than casting. For featured product screenshots. |
| Ring Shadow | Warm Ring Halo | Interactive card using Claude's signature ring shadow system. The 0px 0px 0px 1px pattern creates a border-like halo that is softer than a true border. |

## Forms

_No form examples were found in the local mirror._

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow, no border. Parchment background and inline text. |
| Contained | 1px solid Border Cream. Standard cards and sections. |
| Ring | 0px 0px 0px 1px ring shadow using warm grays. Interactive cards, buttons, hover states. |
| Whisper | rgba(0,0,0,0.05) 0px 4px 24px. Elevated feature cards, product screenshots. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

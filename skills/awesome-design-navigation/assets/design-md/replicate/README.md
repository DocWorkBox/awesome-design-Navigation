# Replicate Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Replicate 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `replicate`
- Category: AI 与大模型平台
- Visual direction: 通过 API 运行机器学习模型。白色画布，代码感强。
- Local light preview: [preview-site/mirrors/replicate-light.html](../../preview-site/mirrors/replicate-light.html)
- Local dark preview: [preview-site/mirrors/replicate-dark.html](../../preview-site/mirrors/replicate-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-replicate.png](../../preview-site/screenshots/getdesign-replicate.png)

## Design Intent

Design System Inspired by Replicate

Auto-generated design token catalog from DESIGN.md

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-replicate-dark | #202020 |
| --color-replicate-red | #ea2804 |
| --color-secondary-red | #dd4425 |
| --color-status-green | #2b9a66 |
| --color-github-dark | #24292e |
| --color-white | #ffffff |
| --color-near-white | #fcfcfc |
| --color-medium-gray | #646464 |
| --color-warm-gray | #4e4e4e |
| --color-mid-silver | #8d8d8d |
| --color-light-silver | #bbbbbb |
| --color-pure-black | #000000 |
| --font-display | system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif |
| --font-body | 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif |
| --font-mono | 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace |
| --bg-page | #ffffff |
| --bg-card | #ffffff |
| --bg-nav | rgba(255,255,255,0.95) |
| --text-primary | #202020 |
| --text-secondary | #646464 |
| --text-muted | #8d8d8d |
| --border-color | #202020 |
| --border-subtle | #e0e0e0 |
| --section-label-color | var(--color-replicate-red) |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Replicate Dark | #202020 | Primary text, dark surfaces, borders |
| Replicate Red | #ea2804 | Core brand, hero gradient, accent borders |
| Secondary Red | #dd4425 | Button borders, link hover states |

### Secondary & Accent

| Token | Value | Role |
| --- | --- | --- |
| Status Green | #2b9a66 | Running/operational status badges |
| GitHub Dark | #24292e | Code block backgrounds |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Pure White | #ffffff | Primary page body background |
| Near White | #fcfcfc | Button text on dark surfaces |
| Hero Blaze Gradient | multi-stop | Hero section, maximum visual impact |

### Neutrals & Text

| Token | Value | Role |
| --- | --- | --- |
| Medium Gray | #646464 | Secondary body text |
| Warm Gray | #4e4e4e | Emphasized secondary text |
| Mid Silver | #8d8d8d | Tertiary text, footnotes |
| Light Silver | #bbbbbb | Dotted-underline link decoration |
| Pure Black | #000000 | Maximum-emphasis borders |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| standard card | Hard Border Pill | Content card with 1px solid #202020 border and 9999px pill radius. The default container for model galleries and feature sections. |
| accent highlighted | Red Accent Border | Featured or highlighted card with 1px solid Replicate Red border. Used for promoted models and primary emphasis. |
| dark surface | Dark Section Card | Dark background card for manifesto-style sections, code examples, and high-contrast feature showcases. |

## Forms

_No form examples were found in the local mirror._

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow, no border. White body and inline text blocks. |
| Bordered | 1px solid #202020. Cards, buttons, containers. |
| Accent Border | 1px solid #ea2804. Featured and highlighted items. |
| Gradient Hero | Full-width blaze gradient for maximum visual impact. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

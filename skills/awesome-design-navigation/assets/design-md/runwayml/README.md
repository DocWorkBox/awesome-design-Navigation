# RunwayML Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 RunwayML 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `runwayml`
- Category: AI 与大模型平台
- Visual direction: AI 视频生成平台。电影感深色界面，媒体内容丰富。
- Local light preview: [preview-site/mirrors/runwayml-light.html](../../preview-site/mirrors/runwayml-light.html)
- Local dark preview: [preview-site/mirrors/runwayml-dark.html](../../preview-site/mirrors/runwayml-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-runwayml.png](../../preview-site/screenshots/getdesign-runwayml.png)

## Design Intent

Design System Inspired by RunwayML

Cinematic, minimal, editorial design tokens from DESIGN.md

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-black | #000000 |
| --color-deep-black | #030303 |
| --color-dark-surface | #1a1a1a |
| --color-white | #ffffff |
| --color-near-white | #fefefe |
| --color-cool-cloud | #e9ecf2 |
| --color-charcoal | #404040 |
| --color-near-charcoal | #3f3f3f |
| --color-cool-slate | #767d88 |
| --color-mid-slate | #7d848e |
| --color-muted-gray | #a7a7a7 |
| --color-cool-silver | #c9ccd1 |
| --color-light-silver | #d0d4d4 |
| --color-tailwind-gray | #6b7280 |
| --color-dark-link | #0c0c0c |
| --color-footer-gray | #999999 |
| --color-border-dark | #27272a |
| --font-primary | 'DM Sans', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif |
| --font-mono | SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace |
| --bg-page | #ffffff |
| --bg-card | #fefefe |
| --bg-nav | rgba(255,255,255,0.95) |
| --text-primary | #000000 |
| --text-secondary | #404040 |
| --text-muted | #767d88 |
| --text-tertiary | #7d848e |
| --border-color | #c9ccd1 |
| --border-subtle | #e9ecf2 |
| --section-label-color | #767d88 |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Runway Black | #000000 | Primary page background, maximum-emphasis text |
| Deep Black | #030303 | Layered dark surfaces |
| Dark Surface | #1a1a1a | Card backgrounds, elevated dark containers |
| Pure White | #ffffff | Primary text on dark, light-section backgrounds |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Near White | #fefefe | Lightest surface variant |
| Cool Cloud | #e9ecf2 | Light section backgrounds, cool blue-gray tint |
| Border Dark | #27272a | Dark-mode border color |

### Cool Neutrals & Text

| Token | Value | Role |
| --- | --- | --- |
| Charcoal | #404040 | Primary body text on light surfaces |
| Cool Slate | #767d88 | Secondary body text, cool blue-gray |
| Mid Slate | #7d848e | Tertiary text, metadata |
| Muted Gray | #a7a7a7 | De-emphasized content, timestamps |
| Cool Silver | #c9ccd1 | Light borders and dividers |
| Light Silver | #d0d4d4 | Lightest border/divider variant |
| Tailwind Gray | #6b7280 | Supplementary text |
| Footer Gray | #999999 | Footer links, deeply muted content |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Bordered Card | Cool Silver Border | Standard content card with 1px solid cool-silver border and 8px radius. The default container for research articles and feature sections. |
| Dark Surface Card | Cinematic Container | Dark surface card on #1a1a1a with border-dark containment. Used for featured content on dark sections. |
| Minimal Card | Transparent Container | Minimal bordered card with transparent background and subtle border. The interface retreats to let content speak. |

## Forms

_No form examples were found in the local mirror._

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow, no border. The dominant state for everything. |
| Bordered | 1px solid border. Alert containers only. |
| Dark Section | Dark bg with light text. Hero, features, footer. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

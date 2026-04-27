# Sanity Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Sanity 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `sanity`
- Category: 后端、数据库与 DevOps
- Visual direction: 无头 CMS。红色强调，内容优先的编辑式布局。
- Local light preview: [preview-site/mirrors/sanity-light.html](../../preview-site/mirrors/sanity-light.html)
- Local dark preview: [preview-site/mirrors/sanity-dark.html](../../preview-site/mirrors/sanity-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-sanity.png](../../preview-site/screenshots/getdesign-sanity.png)

## Design Intent

Design System Inspired by Sanity

Structured content meets precise design. A dark-first, engineering-grade design language built on achromatic neutrals, tight typography, and vivid accent punctuation.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --bg-canvas | #f7f7f7 |
| --bg-surface | #ffffff |
| --bg-elevated | #f0f0f0 |
| --bg-dark-section | #0b0b0b |
| --bg-dark-surface | #212121 |
| --sanity-red | #f36458 |
| --sanity-red-hover | #e0544a |
| --electric-blue | #0052ef |
| --blue-300 | #55beff |
| --blue-dim | #afe3ff |
| --neon-green | #19d600 |
| --error-red | #dd0000 |
| --accent-magenta | #e600ff |
| --text-primary | #0b0b0b |
| --text-secondary | #797979 |
| --text-tertiary | #b9b9b9 |
| --text-on-dark | #ffffff |
| --text-on-dark-secondary | #b9b9b9 |
| --text-on-dark-tertiary | #797979 |
| --border-light | #ededed |
| --border-medium | #b9b9b9 |
| --border-dark | #212121 |
| --border-subtle-dark | #353535 |
| --shadow-card | 0 1px 3px rgba(0,0,0,0.08) |
| --shadow-elevated | 0 4px 12px rgba(0,0,0,0.06) |
| --font-display | 'Space Grotesk', ui-sans-serif, system-ui, sans-serif |
| --font-mono | 'IBM Plex Mono', ui-monospace, monospace |
| --radius-xs | 3px |
| --radius-sm | 5px |
| --radius-md | 6px |
| --radius-lg | 12px |
| --radius-pill | 99999px |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

- <span class="label">Display</span> <span>80px / 700</span> <span>LH: 1.00</span> <span>LS: -3.6px</span>
- <span class="label">Heading 1</span> <span>48px / 600</span> <span>LH: 1.08</span> <span>LS: -1.68px</span>
- <span class="label">Heading 2</span> <span>38px / 600</span> <span>LH: 1.10</span> <span>LS: -1.14px</span>
- <span class="label">Heading 3</span> <span>24px / 500</span> <span>LH: 1.24</span> <span>LS: -0.24px</span>
- <span class="label">Subheading</span> <span>20px / 500</span> <span>LH: 1.13</span> <span>LS: -0.2px</span>
- <span class="label">Body Large</span> <span>18px / 400</span> <span>LH: 1.50</span> <span>LS: -0.18px</span>
- <span class="label">Body</span> <span>16px / 400</span> <span>LH: 1.50</span>
- <span class="label">Caption</span> <span>13px / 400</span> <span>LH: 1.50</span> <span>LS: -0.13px</span>
- <span class="label">Mono Label</span> <span>12px / 500</span> <span>LH: 1.50</span> <span>UPPERCASE</span>
- <span class="label">Code</span> <span>15px / 400</span> <span>LH: 1.50</span> <span>IBM Plex Mono</span>

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

_No card examples were found in the local mirror._

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| First Name | - | Enter first name |
| Last Name | - | Enter last name |
| Project Name | - | my-sanity-project |
| Dataset | - | production |

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

_No elevation examples were found in the local mirror._

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

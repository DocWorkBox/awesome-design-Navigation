# BMW Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 BMW 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `bmw`
- Category: 汽车
- Visual direction: 豪华汽车。深色高端表面，精密的德式工程感。
- Local light preview: [preview-site/mirrors/bmw-light.html](../../preview-site/mirrors/bmw-light.html)
- Local dark preview: [preview-site/mirrors/bmw-dark.html](../../preview-site/mirrors/bmw-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-bmw.png](../../preview-site/screenshots/getdesign-bmw.png)

## Design Intent

Design System Inspired by BMW

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized with sharp precision.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #ffffff |
| --black | #262626 |
| --bmw-blue | #1c69d4 |
| --focus-blue | #0653b6 |
| --meta | #757575 |
| --silver | #bbbbbb |
| --dark | #1a1a1a |
| --font | 'Inter', Helvetica, Arial, sans-serif |

## Color Palette

### Brand

| Token | Value | Role |
| --- | --- | --- |
| BMW Blue | #1c69d4 | Highlight accent |
| Focus Blue | #0653b6 | Focus states |
| Theme White | #ffffff | Primary surface |

### Neutral

| Token | Value | Role |
| --- | --- | --- |
| Near Black | #262626 | Primary text |
| Meta Gray | #757575 | Secondary text |
| Silver | #bbbbbb | Muted text |

## Typography

- Display — 60px / 300 / 1.30 / uppercase / BMWTypeNextLatin Light
- Section — 32px / 400 / 1.30 / BMWTypeNextLatin
- Nav — 18px / 900 / 1.30 / BMWTypeNextLatin
- Body — 16px / 400 / 1.15 / BMWTypeNextLatin
- Button — 16px / 700 / 1.20 / BMWTypeNextLatin

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary | BMW Blue |
| Secondary | Outlined |
| Dark | Dark Surface |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | BMW iX | The future of sustainable mobility. All-electric, all BMW. Sharp corners, minimal borders. |
| - | BMW M Series | Performance without compromise. Track-ready engineering for the road. |
| - |  | Cards on dark surfaces. No border, no radius — pure geometry. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Model | Default (sharp corners) | BMW 3 Series |
| Location | Focus (BMW Focus Blue) | Munich |
| VIN | Error | invalid |

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

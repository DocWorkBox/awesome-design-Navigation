# Airbnb Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Airbnb 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `airbnb`
- Category: 电商与零售
- Visual direction: 旅行平台。暖珊瑚色点缀，摄影驱动，圆角界面。
- Local light preview: [preview-site/mirrors/airbnb-light.html](../../preview-site/mirrors/airbnb-light.html)
- Local dark preview: [preview-site/mirrors/airbnb-dark.html](../../preview-site/mirrors/airbnb-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-airbnb.png](../../preview-site/screenshots/getdesign-airbnb.png)

## Design Intent

Design System Inspired by Airbnb

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #ffffff |
| --near-black | #222222 |
| --rausch | #ff385c |
| --deep-rausch | #e00b41 |
| --secondary | #6a6a6a |
| --disabled | #929292 |
| --border | #c1c1c1 |
| --surface | #f2f2f2 |
| --luxe | #460479 |
| --plus | #92174d |
| --legal-blue | #428bff |
| --error | #c13515 |
| --shadow-card | rgba(0,0,0,0.02) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 6px, rgba(0,0,0,0.1) 0px 4px 8px |
| --shadow-hover | rgba(0,0,0,0.08) 0px 4px 12px |
| --font | 'Nunito Sans', -apple-system, system-ui, Roboto, Helvetica Neue, sans-serif |

## Color Palette

### Brand

| Token | Value | Role |
| --- | --- | --- |
| Rausch Red | #ff385c | Primary CTA |
| Deep Rausch | #e00b41 | Pressed state |
| Luxe Purple | #460479 | Luxe tier |
| Plus Magenta | #92174d | Plus tier |

### Text & Neutral

| Token | Value | Role |
| --- | --- | --- |
| Near Black | #222222 | Primary text |
| Secondary | #6a6a6a | Secondary text |
| Border | #c1c1c1 | Borders |
| Surface | #f2f2f2 | Circular buttons |
| Legal Blue | #428bff | Legal links |
| Error | #c13515 | Error text |

## Typography

- Section — 28px / 700 / 1.43 / Cereal VF
- Card — 22px / 600 / 1.18 / -0.44px
- Feature — 20px / 600 / 1.20 / -0.18px
- UI — 16px / 500 / 1.25
- Body — 14px / 400 / 1.43
- Tag Bold — 12px / 700 / 1.33
- Micro — 8px / 700 / uppercase / +0.32px

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Dark | Explore |
| Outlined | Host |
| Circle Nav | &#8592; |
| Circle Nav | &#8594; |
| Search | &#x1F50D; |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | Istanbul, Turkey | Entire apartment. 2 guests, 1 bed. $78 night. |
| - | Barcelona, Spain | Private room. 3 guests, 2 beds. $92 night. |
| - | Galveston, TX | Entire house. 6 guests, 3 beds. $145 night. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Where | Default | Search destinations |
| Check in | Focus (dark ring) | Apr 15, 2026 |
| Guests | Error | 0 guests |

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

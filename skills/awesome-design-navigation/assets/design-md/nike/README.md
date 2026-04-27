# Nike Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Nike 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `nike`
- Category: 电商与零售
- Visual direction: 运动零售。黑白单色界面，巨大 Futura 大写标题，全屏摄影。
- Local light preview: [preview-site/mirrors/nike-light.html](../../preview-site/mirrors/nike-light.html)
- Local dark preview: [preview-site/mirrors/nike-dark.html](../../preview-site/mirrors/nike-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-nike.png](../../preview-site/screenshots/getdesign-nike.png)

## Design Intent

Design System Inspired by Nike

Free standard shipping on orders $50+. Members get free shipping on all orders.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --nike-black | #111111 |
| --nike-white | #FFFFFF |
| --snow | #FAFAFA |
| --light-gray | #F5F5F5 |
| --hover-gray | #E5E5E5 |
| --border-secondary | #CACACB |
| --secondary-text | #707072 |
| --disabled-text | #9E9EA0 |
| --dark-surface | #28282A |
| --deep-charcoal | #1F1F21 |
| --nike-red | #D30005 |
| --success-green | #007D48 |
| --link-blue | #1151FF |
| --warning-yellow | #FEDF35 |
| --orange-flash | #FF5000 |
| --focus-ring | rgba(39, 93, 197, 1) |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - |  | Free standard shipping on orders $50+. Members get free shipping on all orders. |
| - |  | Not sure of your size? Use our fit guide to find the perfect match. |
| - |  | Free returns within 60 days of purchase. Nike Members get extended returns. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Search Input (24px radius) | - | Search |
| Default Input | - | Enter your email |
| Focus State | - | john@example.com |
| Error State | - | invalid-email |

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

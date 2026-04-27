# Shopify Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Shopify 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `shopify`
- Category: 电商与零售
- Visual direction: 电商平台。深色电影感主导，霓虹绿点缀，超轻展示字体。
- Local light preview: [preview-site/mirrors/shopify-light.html](../../preview-site/mirrors/shopify-light.html)
- Local dark preview: [preview-site/mirrors/shopify-dark.html](../../preview-site/mirrors/shopify-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-shopify.png](../../preview-site/screenshots/getdesign-shopify.png)

## Design Intent

Design System Inspired by Shopify

Build a beautiful storefront that converts visitors into customers.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #FFFFFF |
| --black | #000000 |
| --neon-green | #36F4A4 |
| --aloe | #C1FBD4 |
| --pistachio | #D4F9E0 |
| --deep-teal | #02090A |
| --dark-forest | #061A1C |
| --forest | #102620 |
| --card-border | #1E2C31 |
| --shade-30 | #D4D4D8 |
| --muted | #A1A1AA |
| --shade-50 | #71717A |
| --shade-60 | #52525B |
| --shade-70 | #3F3F46 |
| --light-border | #E4E4E7 |
| --link-muted | #9797A2 |
| --shadow-card | rgba(0,0,0,0.1) 0px 0px 0px 1px, rgba(0,0,0,0.1) 0px 2px 2px 0px, rgba(0,0,0,0.1) 0px 4px 4px 0px, rgba(0,0,0,0.1) 0px 8px 8px 0px, rgba(255,255,255,0.03) 0px 1px 0px 0px inset |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - |  | Build a beautiful storefront that converts visitors into customers. |
| - |  | Sell in-person with hardware designed for modern retail. |
| - |  | Accept every payment method with integrated processing. |
| - |  | Reach customers with built-in SEO and social tools. |
| - |  | Track performance with real-time dashboards and reports. |
| - |  | Ship globally with discounted rates and tracking. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Default Input | - | Enter your email |
| Focus State | - | merchant@shopify.com |
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

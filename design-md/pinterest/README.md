# Pinterest Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Pinterest 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `pinterest`
- Category: 媒体与消费科技
- Visual direction: 视觉发现平台。红色点缀，瀑布流网格，图片优先。
- Local light preview: [preview-site/mirrors/pinterest-light.html](../../preview-site/mirrors/pinterest-light.html)
- Local dark preview: [preview-site/mirrors/pinterest-dark.html](../../preview-site/mirrors/pinterest-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-pinterest.png](../../preview-site/screenshots/getdesign-pinterest.png)

## Design Intent

Design System Inspired by Pinterest

A design token catalog generated from DESIGN.md. Every color, font, and component — visualized with warm craft.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #ffffff |
| --plum | #211922 |
| --red | #e60023 |
| --olive | #62625b |
| --warm-silver | #91918c |
| --sand | #e5e5e0 |
| --warm-light | #e0e0d9 |
| --fog | #f6f6f3 |
| --dark | #33332e |
| --focus-blue | #435ee5 |
| --link-blue | #2b48d4 |
| --font | 'Nunito Sans',-apple-system,system-ui,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif |

## Color Palette

### Brand

| Token | Value | Role |
| --- | --- | --- |
| Pinterest Red | #e60023 | Primary CTA |
| Plum Black | #211922 | Primary text |
| Green 700 | #103c25 | Success |

### Warm Neutrals

| Token | Value | Role |
| --- | --- | --- |
| Olive Gray | #62625b | Secondary text |
| Warm Silver | #91918c | Borders, muted |
| Sand Gray | #e5e5e0 | Secondary button |
| Warm Light | #e0e0d9 | Circular buttons |
| Fog | #f6f6f3 | Light surface |
| Dark | #33332e | Footer |

### Interactive

| Token | Value | Role |
| --- | --- | --- |
| Focus Blue | #435ee5 | Focus ring |
| Link Blue | #2b48d4 | Links |
| Purple | #6845ab | Performance |

## Typography

- Display — 70px / 600 / Pin Sans
- Section — 28px / 700 / -1.2px
- Body — 16px / 400 / 1.40 / Pin Sans
- Caption Bold — 14px / 700
- Small — 12px / 500

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Red | Sign up |
| Secondary Sand | Log in |
| Circular | &#x2764; |
| Transparent | Ghost |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | Weeknight Dinner | Quick recipes for busy evenings |
| - | Home Decor | Inspiration for every room |
| - | Travel Ideas | Destinations worth exploring |
| - | Fashion | Outfit ideas for every season |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Email | Default (warm silver border) | Email address |
| Username | Focus (blue ring) | pinner123 |
| Password | Error | short |

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

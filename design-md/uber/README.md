# Uber Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Uber 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `uber`
- Category: 媒体与消费科技
- Visual direction: 出行平台。黑白强对比，紧凑排版，城市能量感。
- Local light preview: [preview-site/mirrors/uber-light.html](../../preview-site/mirrors/uber-light.html)
- Local dark preview: [preview-site/mirrors/uber-dark.html](../../preview-site/mirrors/uber-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-uber.png](../../preview-site/screenshots/getdesign-uber.png)

## Design Intent

Design System Inspired by Uber

A bold, black-and-white design language built for clarity, efficiency, and confident minimalism. Every element serves a purpose.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-black | #000000 |
| --color-white | #ffffff |
| --color-hover-gray | #e2e2e2 |
| --color-hover-light | #f3f3f3 |
| --color-chip-gray | #efefef |
| --color-body-gray | #4b4b4b |
| --color-muted-gray | #afafaf |
| --shadow-card | rgba(0, 0, 0, 0.12) 0px 4px 16px 0px |
| --shadow-medium | rgba(0, 0, 0, 0.16) 0px 4px 16px 0px |
| --shadow-float | rgba(0, 0, 0, 0.16) 0px 2px 8px 0px |
| --shadow-press | rgba(0, 0, 0, 0.08) 0px 0px 0px 999px inset |
| --font-display | 'DM Sans', system-ui, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif |
| --font-body | 'DM Sans', system-ui, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif |
| --bg-page | #ffffff |
| --bg-card | #ffffff |
| --bg-nav | rgba(255,255,255,0.92) |
| --text-primary | #000000 |
| --text-secondary | #4b4b4b |
| --text-tertiary | #afafaf |
| --border-color | #efefef |
| --section-label-color | #000000 |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

_No card examples were found in the local mirror._

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Pickup location | - | Enter pickup location |
| Destination | - | Where to? |
| Ride type | - | - |
| Special instructions | - | Add a note for your driver... |

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

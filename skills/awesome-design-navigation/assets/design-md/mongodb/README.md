# MongoDB Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 MongoDB 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `mongodb`
- Category: 后端、数据库与 DevOps
- Visual direction: 文档数据库。绿色叶形品牌元素，开发者文档导向。
- Local light preview: [preview-site/mirrors/mongodb-light.html](../../preview-site/mirrors/mongodb-light.html)
- Local dark preview: [preview-site/mirrors/mongodb-dark.html](../../preview-site/mirrors/mongodb-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-mongodb.png](../../preview-site/screenshots/getdesign-mongodb.png)

## Design Intent

Design System Inspired by MongoDB

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --forest | #001e2b |
| --green | #00ed64 |
| --dark-green | #00684a |
| --blue | #006cfa |
| --hover-blue | #3860be |
| --teal | #1c2d38 |
| --teal-gray | #3d4f58 |
| --cool-gray | #5c6c75 |
| --silver | #b8c4c2 |
| --white | #ffffff |
| --black | #000000 |
| --shadow-forest | rgba(0,30,43,0.12) 0px 26px 44px, rgba(0,0,0,0.13) 0px 7px 13px |
| --font-serif | 'DM Serif Display', Georgia, serif |
| --font-sans | 'Inter', system-ui, sans-serif |
| --font-mono | 'Source Code Pro', ui-monospace, monospace |

## Color Palette

### Brand

| Token | Value | Role |
| --- | --- | --- |
| Forest Black | #001e2b | Dark background |
| MongoDB Green | #00ed64 | Brand accent |
| Dark Green | #00684a | Buttons, links |
| Action Blue | #006cfa | Links, interactive |

### Neutral Scale

| Token | Value | Role |
| --- | --- | --- |
| Deep Teal | #1c2d38 | Dark buttons |
| Teal Gray | #3d4f58 | Dark borders |
| Cool Gray | #5c6c75 | Muted text |
| Silver Teal | #b8c4c2 | Light borders |

## Typography

- Display — 96px / 400 / 1.20 / MongoDB Value Serif
- Section — 36px / 500 / 1.33 / Euclid Circular A
- Sub — 24px / 500 / 1.33 / Euclid Circular A
- Body — 16px / 300 / 1.50 / Euclid Circular A
- Code Label — 14px / uppercase / +2px / Source Code Pro
- Code Body — 16px / 400 / Source Code Pro
- Code Micro — 9px / 600 / uppercase / +2.5px / Source Code Pro

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Green Pill | Try Free |
| Dark Teal | Explore |
| Outlined | Learn More |
| Dark Outlined | Dark Context |

## Cards

_No card examples were found in the local mirror._

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Cluster Name | Default | my-cluster-0 |
| Connection String | Focus (blue ring) | mongodb+srv://... |
| Database | Error | invalid name |

## Spacing

- 4px
- 8px
- 12px
- 16px
- 20px
- 24px
- 32px

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

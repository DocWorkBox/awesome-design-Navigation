# Webflow Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Webflow 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `webflow`
- Category: 设计与创意工具
- Visual direction: 可视化建站工具。蓝色强调，精致营销站审美。
- Local light preview: [preview-site/mirrors/webflow-light.html](../../preview-site/mirrors/webflow-light.html)
- Local dark preview: [preview-site/mirrors/webflow-dark.html](../../preview-site/mirrors/webflow-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-webflow.png](../../preview-site/screenshots/getdesign-webflow.png)

## Design Intent

Design System Inspired by Webflow

Every color, font, and component — smarter sites start here.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #fff |
| --black | #080808 |
| --blue | #146ef5 |
| --blue-400 | #3b89ff |
| --purple | #7a3dff |
| --pink | #ed52cb |
| --green | #00d722 |
| --orange | #ff6b00 |
| --yellow | #ffae13 |
| --red | #ee1d36 |
| --gray | #5a5a5a |
| --gray-300 | #ababab |
| --border | #d8d8d8 |
| --font | 'Inter',Arial,sans-serif |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

- WF Visual Sans — 80px / 600 / 1.04 / -0.8px
- WF Visual Sans — 32px / 500 / 1.30
- WF Visual Sans — 20px / 400 / 1.50
- WF Visual Sans — 16px / 500 / 1.60 / -0.16px
- WF Visual Sans — 15px / 500 / uppercase / +1.5px
- WF Visual Sans — 10px / 600 / uppercase / +1px

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Blue | Get started |
| Outlined | Contact |
| Badge | NEW |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | Design | Build visually with a flexible canvas and production-ready code output. |
| - | CMS | Create dynamic content with a powerful content management system. |
| - | Interactions | Craft complex animations without writing a single line of code. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Email | Default | you@company.com |
| Project | Focus (blue ring) | My Website |
| Domain | Error | invalid |

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

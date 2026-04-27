# Airtable Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Airtable 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `airtable`
- Category: 设计与创意工具
- Visual direction: 表格数据库混合工具。多彩、友好、结构化数据美感。
- Local light preview: [preview-site/mirrors/airtable-light.html](../../preview-site/mirrors/airtable-light.html)
- Local dark preview: [preview-site/mirrors/airtable-dark.html](../../preview-site/mirrors/airtable-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-airtable.png](../../preview-site/screenshots/getdesign-airtable.png)

## Design Intent

Design System Inspired by Airtable

Every color, font, and component — connected in one workspace.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #fff |
| --navy | #181d26 |
| --blue | #1b61c9 |
| --gray | #333 |
| --border | #e0e2e6 |
| --weak | rgba(4,14,32,0.69) |
| --light | #f8fafc |
| --font | 'Inter',-apple-system,system-ui,Segoe UI,Roboto,sans-serif |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

- Haas — 48px / 400 / 1.15
- Haas Groot Disp — 48px / 900 / 1.50
- Haas — 32px / 400 / 1.15
- Haas — 18px / 400 / 1.35 / +0.18px
- Haas — 16px / 500 / 1.30 / +0.16px
- Haas — 14px / 500 / 1.35 / +0.28px

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Blue | Sign up |
| Outlined | Contact |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | Product Development | Build products faster with connected workflows and real-time collaboration. |
| - | Marketing Campaigns | Plan, execute, and track campaigns from ideation to launch. |
| - | Operations | Streamline business processes with automated workflows. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Email | Default | you@company.com |
| Workspace | Focus (blue ring) | My Team |
| Base Name | Error | - |

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

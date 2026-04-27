# Intercom Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Intercom 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `intercom`
- Category: 效率与 SaaS
- Visual direction: 客户消息平台。友好的蓝色系，对话式界面模式。
- Local light preview: [preview-site/mirrors/intercom-light.html](../../preview-site/mirrors/intercom-light.html)
- Local dark preview: [preview-site/mirrors/intercom-dark.html](../../preview-site/mirrors/intercom-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-intercom.png](../../preview-site/screenshots/getdesign-intercom.png)

## Design Intent

Design System Inspired by Intercom

Every color, font, and component — visualized with warm precision.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --cream | #faf9f6 |
| --black | #111111 |
| --white | #ffffff |
| --orange | #ff5600 |
| --oat | #dedbd6 |
| --gray50 | #7b7b78 |
| --gray60 | #626260 |
| --gray80 | #313130 |
| --sand | #d3cec6 |
| --font | 'Inter',ui-sans-serif,system-ui,sans-serif |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Off Black | #111111 | Primary text, buttons |
| Warm Cream | #faf9f6 | Page background |
| Fin Orange | #ff5600 | Brand accent |

### Report Palette

| Token | Value | Role |
| --- | --- | --- |
| Blue | #65b5ff | Report blue |
| Green | #0bdf50 | Report green |
| Red | #c41c1c | Report red |
| Pink | #ff2067 | Report pink |
| Lime | #b3e01c | Report lime |

### Neutral

| Token | Value | Role |
| --- | --- | --- |
| Gray 50 | #7b7b78 | Muted text |
| Gray 60 | #626260 | Secondary text |
| Oat Border | #dedbd6 | Borders |
| Warm Sand | #d3cec6 | Light neutral |

## Typography

- Saans — 80px / 400 / 1.00 / -2.4px
- Saans — 54px / 400 / 1.00 / -1.6px
- Saans — 40px / 400 / 1.00 / -1.2px
- Saans — 24px / 400 / 1.00 / -0.48px
- Saans — 16px / 400 / 1.50
- Saans — 14px / 300 / 1.40
- SaansMono — 12px / 500 / uppercase / +1.2px

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Dark | Get a demo |
| Outlined | Start free trial |
| Warm Cream | Learn more |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | Fin AI Agent | Resolve 50% of support questions instantly with AI. No training needed. |
| - | Help Center | Help customers help themselves. Build a knowledge base with AI-powered search. |
| - | Workflows | Automate repetitive tasks. Route, assign, and resolve at scale. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Email | Default (oat border) | you@company.com |
| Company | Focus (black border) | Acme Inc |
| Website | Error (orange border) | invalid |

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

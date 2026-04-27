# Clay Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Clay 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `clay`
- Category: 设计与创意工具
- Visual direction: 创意机构风格。有机形状、柔和渐变、强艺术指导感。
- Local light preview: [preview-site/mirrors/clay-light.html](../../preview-site/mirrors/clay-light.html)
- Local dark preview: [preview-site/mirrors/clay-dark.html](../../preview-site/mirrors/clay-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-clay.png](../../preview-site/screenshots/getdesign-clay.png)

## Design Intent

Design System Inspired by Clay

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --cream | #faf9f7 |
| --black | #000000 |
| --white | #ffffff |
| --oat | #dad4c8 |
| --oat-light | #eee9df |
| --silver | #9f9b93 |
| --charcoal | #55534e |
| --matcha-300 | #84e7a5 |
| --matcha-600 | #078a52 |
| --matcha-800 | #02492a |
| --slushie-500 | #3bd3fd |
| --slushie-800 | #0089ad |
| --lemon-400 | #f8cc65 |
| --lemon-500 | #fbbd41 |
| --ube-300 | #c1b0ff |
| --ube-800 | #43089f |
| --pomegranate-400 | #fc7981 |
| --blueberry-800 | #01418d |
| --badge-bg | #f0f8ff |
| --badge-text | #3859f9 |
| --focus | rgb(20,110,245) |
| --font-sans | 'DM Sans', Arial, sans-serif |
| --font-mono | 'Space Mono', monospace |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Clay Black | #000000 | Text, headings |
| Pure White | #ffffff | Cards, buttons |
| Warm Cream | #faf9f7 | Page background |

### Swatch Palette

| Token | Value | Role |
| --- | --- | --- |
| Matcha 300 | #84e7a5 | Light green |
| Matcha 600 | #078a52 | Mid green |
| Matcha 800 | #02492a | Deep green sections |
| Slushie 500 | #3bd3fd | Bright cyan |
| Lemon 500 | #fbbd41 | Primary gold |
| Ube 300 | #c1b0ff | Soft lavender |
| Ube 800 | #43089f | Deep purple |
| Pomegranate 400 | #fc7981 | Coral pink |
| Blueberry 800 | #01418d | Deep navy |

### Neutral & Border

| Token | Value | Role |
| --- | --- | --- |
| Warm Silver | #9f9b93 | Secondary text |
| Warm Charcoal | #55534e | Tertiary text |
| Oat Border | #dad4c8 | Primary border |
| Oat Light | #eee9df | Secondary border |

## Typography

- Display — 80px / 600 / 1.00 / -3.2px / Roobert
- Secondary — 60px / 600 / 1.00 / -2.4px / Roobert
- Section — 44px / 600 / 1.10 / -1.32px / Roobert
- Card — 32px / 600 / 1.10 / -0.64px / Roobert
- Feature — 20px / 600 / 1.40 / -0.4px / Roobert
- Body — 18px / 400 / 1.60 / -0.36px / Roobert
- Button — 16px / 500 / 1.50 / -0.16px / Roobert
- Caption — 14px / 400 / 1.50 / Roobert
- Label — 12px / 600 / uppercase / 1.08px / Roobert
- Code — 14px / 400 / Space Mono

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Solid | Start Building |
| White Card | Learn More |
| Ghost Outlined | View Docs |
| Badge | NEW FEATURE |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Data Enrichment | Turn data into action | Enrich any record with 100+ data providers. Build automated workflows with Clay tables. |
| Dashed Border | Flexible integrations | Connect to any CRM, email tool, or data source. Dashed border variant for secondary content. |
| Colored Section | Growth on autopilot | Full-width colored section using the Matcha 800 swatch background. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Company Name | Default | Acme Corp |
| Email | Focus (blue ring) | user@clay.com |
| Domain | Error (pomegranate ring) | invalid |

## Spacing

- 2px
- 4px
- 8px
- 12px
- 16px
- 20px
- 24px

## Border Radius

| Radius | Context |
| --- | --- |
| 4px | Inputs |
| 8px | Small cards |
| 12px | Buttons |
| 24px | Feature cards |
| 40px | Sections |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | Cream canvas |
| Level 1: Clay | Multi-layer + inset |
| Level 2: Hover Hard | Hard offset shadow |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

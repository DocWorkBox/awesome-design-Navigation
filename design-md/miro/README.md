# Miro Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Miro 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `miro`
- Category: 设计与创意工具
- Visual direction: 视觉协作工具。亮黄色点缀，无限画布气质。
- Local light preview: [preview-site/mirrors/miro-light.html](../../preview-site/mirrors/miro-light.html)
- Local dark preview: [preview-site/mirrors/miro-dark.html](../../preview-site/mirrors/miro-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-miro.png](../../preview-site/screenshots/getdesign-miro.png)

## Design Intent

Design System Inspired by Miro

Every color, font, and component — visualized with collaborative precision.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #fff |
| --black | #1c1c1e |
| --blue | #5b76fe |
| --blue-pressed | #2a41b6 |
| --success | #00b473 |
| --coral-l | #ffc6c6 |
| --coral-d | #600000 |
| --rose-l | #ffd8f4 |
| --teal-l | #c3faf5 |
| --teal-d | #187574 |
| --orange-l | #ffe6cd |
| --pink | #fde0f0 |
| --slate | #555a6a |
| --placeholder | #a5a8b5 |
| --border | #c7cad5 |
| --ring | rgb(224,226,232) |
| --font | 'Inter',ui-sans-serif,system-ui,sans-serif |
| --font-body | 'Noto Sans','Inter',sans-serif |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

- Roobert PRO Medium — 56px / 1.15 / -1.68px
- Roobert PRO — 48px / 1.15 / -1.44px
- Roobert PRO — 24px / 1.15 / -0.72px
- Noto Sans — 18px / 1.45
- Roobert PRO — 17.5px / 700 / +0.175px
- Roobert PRO — 10.5px / uppercase

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Blue | Sign up free |
| Outlined | Contact sales |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | Brainstorming | Ideate together in real-time with sticky notes and voting. |
| - | Diagramming | Create flowcharts, mind maps, and org charts visually. |
| - | Workshops | Run engaging workshops with built-in templates. |
| - | Strategy | Align teams with visual strategic planning tools. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Email | Default | you@company.com |
| Team name | Focus (blue ring) | Design Team |
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

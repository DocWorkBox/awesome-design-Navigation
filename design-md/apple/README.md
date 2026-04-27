# Apple Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Apple 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `apple`
- Category: 媒体与消费科技
- Visual direction: 消费电子。高级留白，SF Pro 气质，电影感图像。
- Local light preview: [preview-site/mirrors/apple-light.html](../../preview-site/mirrors/apple-light.html)
- Local dark preview: [preview-site/mirrors/apple-dark.html](../../preview-site/mirrors/apple-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-apple.png](../../preview-site/screenshots/getdesign-apple.png)

## Design Intent

Design System Inspired by Apple

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --black | #1d1d1f |
| --white | #ffffff |
| --pure-black | #000000 |
| --light-gray | #f5f5f7 |
| --apple-blue | #0071e3 |
| --link-blue | #0066cc |
| --link-blue-dark | #2997ff |
| --gray-80 | rgba(0,0,0,0.8) |
| --gray-48 | rgba(0,0,0,0.48) |
| --button-active | #ededf2 |
| --filter-bg | #fafafc |
| --dark-surface-1 | #272729 |
| --dark-surface-2 | #28282a |
| --dark-surface-3 | #2a2a2d |
| --overlay | rgba(210,210,215,0.64) |
| --shadow-card | rgba(0,0,0,0.22) 3px 5px 30px 0px |
| --nav-bg | rgba(0,0,0,0.8) |
| --font-display | 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', Helvetica, Arial, sans-serif |
| --font-text | 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Pure Black | #000000 | Hero backgrounds |
| Light Gray | #f5f5f7 | Alternate sections |
| Near Black | #1d1d1f | Primary text, dark buttons |
| White | #ffffff | Text on dark, button text |

### Interactive

| Token | Value | Role |
| --- | --- | --- |
| Apple Blue | #0071e3 | Primary CTA, focus ring |
| Link Blue | #0066cc | Inline text links |
| Bright Blue | #2997ff | Links on dark bg |

### Text & Surface

| Token | Value | Role |
| --- | --- | --- |
| Black 80% | rgba(0,0,0,0.8) | Secondary text |
| Black 48% | rgba(0,0,0,0.48) | Tertiary text |
| Filter BG | #fafafc | Search/filter buttons |
| Button Active | #ededf2 | Pressed state |

### Dark Surfaces

| Token | Value | Role |
| --- | --- | --- |
| Surface 1 | #272729 | Dark section cards |
| Surface 2 | #28282a | Dark elevated cards |
| Surface 3 | #2a2a2d | Highest dark elevation |
| Surface 4 | #242426 | Deepest dark tone |

## Typography

- Display Hero -- 56px / 600 / 1.07 / -0.28px / SF Pro Display
- Section Heading -- 40px / 600 / 1.10 / normal / SF Pro Display
- Tile Heading -- 28px / 400 / 1.14 / 0.196px / SF Pro Display
- Card Title Bold -- 21px / 700 / 1.19 / 0.231px / SF Pro Display
- Card Title Regular -- 21px / 400 / 1.19 / 0.231px / SF Pro Display
- Body -- 17px / 400 / 1.47 / -0.374px / SF Pro Text
- Body Emphasis -- 17px / 600 / 1.24 / -0.374px / SF Pro Text
- Link / Caption -- 14px / 400 / 1.43 / -0.224px / SF Pro Text
- Micro -- 12px / 400 / 1.33 / -0.12px / SF Pro Text
- Nano -- 10px / 400 / 1.47 / -0.08px / SF Pro Text

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Blue | Buy |
| Outline Pill | Learn more |
| Dark Fill | Shop iPhone |
| Filter | Search |
| Media | &#9654; |
| Link Pill | Learn more > |

## Cards

_No card examples were found in the local mirror._

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Apple ID | Default | name@example.com |
| Password | Focus (blue ring) | mypassword123 |
| Email | Error (red ring) | invalid@ |

## Spacing

- 2px
- 4px
- 6px
- 8px
- 10px
- 14px
- 17px
- 20px
- 24px

## Border Radius

| Radius | Context |
| --- | --- |
| 5px | Micro |
| 8px | Buttons, Cards |
| 11px | Search |
| 12px | Features |
| 980px | Pills |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | No shadow, solid bg |
| Nav Glass | Translucent + blur |
| Card Shadow | 3px 5px 30px 0.22 |
| Focus | 2px solid Apple Blue |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

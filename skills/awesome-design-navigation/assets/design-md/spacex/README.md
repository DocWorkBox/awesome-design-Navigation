# SpaceX Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 SpaceX 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `spacex`
- Category: 媒体与消费科技
- Visual direction: 航天科技。黑白强对比，全屏图像，未来感。
- Local light preview: [preview-site/mirrors/spacex-light.html](../../preview-site/mirrors/spacex-light.html)
- Local dark preview: [preview-site/mirrors/spacex-dark.html](../../preview-site/mirrors/spacex-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-spacex.png](../../preview-site/screenshots/getdesign-spacex.png)

## Design Intent

Design System Inspired by SpaceX

A design token catalog generated from DESIGN.md. Every color, font, and spacing value — visualized against the void.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --black | #000000 |
| --spectral | #f0f0fa |
| --ghost-bg | rgba(240,240,250,0.1) |
| --ghost-border | rgba(240,240,250,0.35) |
| --overlay | rgba(0,0,0,0.5) |
| --font | 'Share Tech', Arial, Verdana, sans-serif |

## Color Palette

### Palette

| Token | Value | Role |
| --- | --- | --- |
| Space Black | #000000 | Page background |
| Spectral White | #f0f0fa | Text, headings |
| Ghost Surface | rgba(f0f0fa, 0.1) | Button background |
| Dark Overlay | rgba(0,0,0,0.5) | Photo overlay |

## Typography

- Display — 48px / bold / 1.00 / +0.96px / D-DIN-Bold / uppercase
- Body — 16px / 400 / 1.70 / D-DIN
- Nav Bold — 13px / 700 / 0.94 / +1.17px / uppercase
- Caption — 12px / 400 / 1.00 / uppercase / +1px
- Micro — 10px / 400 / 0.94 / uppercase / +1px

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Ghost Button | Learn More |
| Ghost Hover | Hover State |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | Falcon 9 | The world's first orbital-class reusable rocket. Designed for reliable and safe transport of people and payloads. |
| - | Starship | The most powerful launch vehicle ever developed. Designed to carry crew and cargo to Mars and beyond. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Mission Name | Default (ghost border) | STARSHIP MISSION |
| Launch Site | Focus (spectral white border) | STARBASE, TEXAS |
| Payload | Error | EXCEEDS CAPACITY |

## Spacing

- 3px
- 5px
- 12px
- 18px
- 24px
- 30px

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

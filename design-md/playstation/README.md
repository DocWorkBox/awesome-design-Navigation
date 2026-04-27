# PlayStation Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 PlayStation 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `playstation`
- Category: 媒体与消费科技
- Visual direction: 游戏主机零售。三层表面布局，青色悬停缩放交互。
- Local light preview: [preview-site/mirrors/playstation-light.html](../../preview-site/mirrors/playstation-light.html)
- Local dark preview: [preview-site/mirrors/playstation-dark.html](../../preview-site/mirrors/playstation-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-playstation.png](../../preview-site/screenshots/getdesign-playstation.png)

## Design Intent

Design System Inspiration of PlayStation

Quiet-authority display type, cyan hover-scale interactions, and a three-surface channel layout anchored by PlayStation Blue. Generated from DESIGN.md.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --ps-blue | #0070cc |
| --ps-blue-dark | #0068bd |
| --ps-cyan | #1eaedb |
| --link-hover-blue | #1883fd |
| --link-dark-blue | #53b1ff |
| --commerce-orange | #d53b00 |
| --commerce-orange-active | #aa2f00 |
| --warning-red | #c81b3a |
| --console-black | #000000 |
| --shadow-black | #121314 |
| --paper-white | #ffffff |
| --ice-mist | #f5f7fa |
| --divider-tint | #f3f3f3 |
| --display-ink | #000000 |
| --deep-charcoal | #1f1f1f |
| --body-gray | #6b6b6b |
| --mute-gray | #cccccc |
| --placeholder-ink | rgba(0, 0, 0, 0.6) |
| --shadow-feather | rgba(0, 0, 0, 0.06) |
| --shadow-light | rgba(0, 0, 0, 0.08) |
| --shadow-mid | rgba(0, 0, 0, 0.16) |
| --shadow-dramatic | rgba(0, 0, 0, 0.8) |
| --font-sans | 'Manrope', 'SST', Arial, Helvetica, sans-serif |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

- <strong>Hero Display XL</strong>SST · 54px / 300 / 1.25 / -0.1px
- <strong>Hero Display L</strong>SST · 44px / 300 / 1.25 / 0.1px
- <strong>Large Display</strong>SST · 35px / 300 / 1.25
- <strong>Mid Display</strong>SST · 28px / 300 / 1.25 / 0.1px
- <strong>Compact Display</strong>SST · 22px / 300 / 1.25 / 0.1px
- <strong>UI Heading</strong>SST · 18px / 600 / 1.00
- <strong>Primary Button</strong>SST · 18px / 500 / 1.25 / 0.4px
- <strong>Emphasized Button</strong>SST · 18px / 700 / 1.25 / 0.45px
- <strong>Body Relaxed</strong>SST · 18px / 400 / 1.50 / 0.1px
- <strong>Compact Button</strong>SST · 14px / 700 / 1.25 / 0.324px
- <strong>Utility Caption</strong>SST · 14px / 500 / 1.50
- <strong>Micro Caption</strong>SST · 12px / 500 / 1.50

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

_No card examples were found in the local mirror._

## Forms

_No form examples were found in the local mirror._

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

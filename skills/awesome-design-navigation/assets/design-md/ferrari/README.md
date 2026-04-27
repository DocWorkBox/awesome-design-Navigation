# Ferrari Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Ferrari 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `ferrari`
- Category: 汽车
- Visual direction: 豪华汽车。黑白明暗对照的编辑感，法拉利红极简点缀。
- Local light preview: [preview-site/mirrors/ferrari-light.html](../../preview-site/mirrors/ferrari-light.html)
- Local dark preview: [preview-site/mirrors/ferrari-dark.html](../../preview-site/mirrors/ferrari-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-ferrari.png](../../preview-site/screenshots/getdesign-ferrari.png)

## Design Intent

Design System Inspired by Ferrari

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --ferrari-red | #DA291C |
| --dark-red | #B01E0A |
| --deep-red | #9D2211 |
| --pure-white | #FFFFFF |
| --absolute-black | #000000 |
| --dark-surface | #303030 |
| --light-gray-surface | #D2D2D2 |
| --near-black | #181818 |
| --dark-gray | #666666 |
| --mid-gray | #8F8F8F |
| --silver-gray | #969696 |
| --border-gray | #CCCCCC |
| --border-mid | #909090 |
| --warning-red | #F13A2C |
| --success-green | #03904A |
| --info-blue | #4C98B9 |
| --link-blue | #3860BE |
| --teal-hover | #1EAEDB |
| --racing-yellow | #FFF200 |
| --modena-yellow | #F6E500 |
| --overlay-dark | hsla(0, 0%, 7%, 0.8) |
| --font-heading | 'DM Sans', Arial, Helvetica, sans-serif |
| --font-body | 'Barlow Condensed', Arial, Helvetica, sans-serif |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

_No typography scale was found in the local mirror._

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

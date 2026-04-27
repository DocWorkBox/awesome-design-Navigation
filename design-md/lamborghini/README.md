# Lamborghini Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Lamborghini 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `lamborghini`
- Category: 汽车
- Visual direction: 豪华汽车。纯黑殿堂感画布，金色点缀，定制新怪诞体。
- Local light preview: [preview-site/mirrors/lamborghini-light.html](../../preview-site/mirrors/lamborghini-light.html)
- Local dark preview: [preview-site/mirrors/lamborghini-dark.html](../../preview-site/mirrors/lamborghini-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-lamborghini.png](../../preview-site/screenshots/getdesign-lamborghini.png)

## Design Intent

Design System Inspired by Lamborghini

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --lambo-gold | #FFC000 |
| --dark-gold | #917300 |
| --gold-text | #FFCE3E |
| --pure-white | #FFFFFF |
| --absolute-black | #000000 |
| --charcoal | #202020 |
| --dark-iron | #181818 |
| --graphite | #494949 |
| --ash | #7D7D7D |
| --steel | #969696 |
| --slate | #666666 |
| --mist | #E6E6E6 |
| --near-white | #F8F8F8 |
| --cyan-pulse | #29ABE2 |
| --link-blue | #3860BE |
| --teal-action | #1EAEDB |
| --font-primary | 'Roboto', Helvetica Neue, Arial, sans-serif |

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

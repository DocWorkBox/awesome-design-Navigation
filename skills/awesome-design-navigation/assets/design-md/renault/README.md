# Renault Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Renault 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `renault`
- Category: 汽车
- Visual direction: 法国汽车品牌。鲜明极光渐变，NouvelR 字体，零圆角按钮。
- Local light preview: [preview-site/mirrors/renault-light.html](../../preview-site/mirrors/renault-light.html)
- Local dark preview: [preview-site/mirrors/renault-dark.html](../../preview-site/mirrors/renault-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-renault.png](../../preview-site/screenshots/getdesign-renault.png)

## Design Intent

Design System Inspired by Renault

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --renault-yellow | #EFDF00 |
| --soft-yellow | #F8EB4C |
| --renault-blue | #1883FD |
| --absolute-black | #000000 |
| --pure-white | #FFFFFF |
| --charcoal | #222222 |
| --pale-silver | #F2F2F2 |
| --warm-gray | #D9D9D6 |
| --border-gray | #D1D1D1 |
| --success-green | #8DC572 |
| --error-rose | #BE6464 |
| --warning-amber | #F0AD4E |
| --info-blue | #337AB7 |
| --font-main | 'Nunito Sans', sans-serif |

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

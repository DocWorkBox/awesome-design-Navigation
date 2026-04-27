# Tesla Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Tesla 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `tesla`
- Category: 汽车
- Visual direction: 电动车品牌。极致减法，全屏电影摄影，Universal Sans 气质。
- Local light preview: [preview-site/mirrors/tesla-light.html](../../preview-site/mirrors/tesla-light.html)
- Local dark preview: [preview-site/mirrors/tesla-dark.html](../../preview-site/mirrors/tesla-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-tesla.png](../../preview-site/screenshots/getdesign-tesla.png)

## Design Intent

Design System Inspired by Tesla

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --electric-blue | #3E6AE1 |
| --pure-white | #FFFFFF |
| --carbon-dark | #171A20 |
| --graphite | #393C41 |
| --pewter | #5C5E62 |
| --silver-fog | #8E8E8E |
| --cloud-gray | #EEEEEE |
| --pale-silver | #D0D1D2 |
| --light-ash | #F4F4F4 |
| --frosted-glass | rgba(255,255,255,0.75) |
| --overlay | rgba(128,128,128,0.65) |
| --subtle-shadow | rgba(0,0,0,0.05) |
| --font-display | 'Inter', -apple-system, Arial, sans-serif |
| --font-text | 'Inter', -apple-system, Arial, sans-serif |

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

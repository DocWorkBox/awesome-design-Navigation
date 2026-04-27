# Mastercard Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Mastercard 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `mastercard`
- Category: 金融科技与加密
- Visual direction: 全球支付网络。暖奶油色画布、轨道药丸形态、编辑式温度。
- Local light preview: [preview-site/mirrors/mastercard-light.html](../../preview-site/mirrors/mastercard-light.html)
- Local dark preview: [preview-site/mirrors/mastercard-dark.html](../../preview-site/mirrors/mastercard-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-mastercard.png](../../preview-site/screenshots/getdesign-mastercard.png)


## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --canvas | #F3F0EE |
| --lifted | #FCFBFA |
| --white | #FFFFFF |
| --ink | #141413 |
| --charcoal | #262627 |
| --slate | #696969 |
| --granite | #555555 |
| --taupe | #D1CDC7 |
| --bone | #F4F4F4 |
| --signal | #CF4500 |
| --signal-light | #F37338 |
| --clay | #9A3A0A |
| --link-blue | #3860BE |
| --mc-red | #EB001B |
| --mc-yellow | #F79E1B |
| --shadow-1 | 0 4px 24px rgba(0, 0, 0, 0.04) |
| --shadow-2 | 0 24px 48px rgba(0, 0, 0, 0.08) |
| --shadow-3 | 0 70px 110px rgba(0, 0, 0, 0.25) |
| --font | "Sofia Sans", MarkForMC, Arial, sans-serif |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

- <strong>H1 / Hero</strong>64px · 500 · 64 lh · −1.28 tr
- <strong>H2 / Section</strong>36px · 500 · 44 lh · −0.72 tr
- <strong>H3 / Card</strong>24px · 500 · 28.8 lh · −0.48 tr
- <strong>Eyebrow</strong>14px · 700 · 14 lh · +0.56 tr · uppercase
- <strong>Body</strong>16px · 450 · 22.4 lh
- <strong>Nav / Button</strong>16px · 500 · 16 lh · −0.48 tr
- <strong>Footer Link</strong>14px · 450 · 20 lh

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

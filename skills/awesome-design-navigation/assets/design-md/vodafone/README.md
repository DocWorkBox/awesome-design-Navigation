# Vodafone Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Vodafone 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `vodafone`
- Category: 媒体与消费科技
- Visual direction: 全球通信品牌。纪念碑式大写标题，Vodafone 红章节条带。
- Local light preview: [preview-site/mirrors/vodafone-light.html](../../preview-site/mirrors/vodafone-light.html)
- Local dark preview: [preview-site/mirrors/vodafone-dark.html](../../preview-site/mirrors/vodafone-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-vodafone.png](../../preview-site/screenshots/getdesign-vodafone.png)

## Design Intent

Design System Inspiration of Vodafone

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --red | #e60000 |
| --red-deep | #ac1811 |
| --white | #ffffff |
| --neutral | #f2f2f2 |
| --charcoal | #25282b |
| --grey-body | #7e7e7e |
| --grey-form | #333333 |
| --grey-disabled | #bebebe |
| --blue | #3860be |
| --divider | rgba(255,255,255,0.25) |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

- Display / Hero XL — 144 / 800 / 0.79 / -1px
- Display / Hero L — 126 / 800 / 0.9 / -1px
- Display / Hero M — 90 / 800 / 0.93
- Display / Impact — 70 / 800 / 1.17 / -1px
- H1 Light — 48 / 300 / 1.08
- H1 Bold — 48 / 800 / 1.0 / -1px
- H2 Light — 40 / 300 / 1.1
- H3 Bold — 32 / 700 / 1.25
- H4 Bold — 24 / 700 / 1.0
- H5 Bold — 20 / 700 / 1.3
- Lead Body — 20 / 400 / 1.4
- Body Large — 18 / 400 / 1.56
- Body Base — 16 / 400 / 1.38
- Label Uppercase — 16 / 800 / 1.5
- Eyebrow / Date — 14 / 700 / 1.43
- Tag Pill — 14 / 700 / 1.5
- Micro Label — 12 / 600 / 1.33 / uppercase
- Button Primary — 14.4 / 700 / 1.0 / 0.144

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

_No card examples were found in the local mirror._

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Default input | - | Type here |
| Error state | - | invalid@example |

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

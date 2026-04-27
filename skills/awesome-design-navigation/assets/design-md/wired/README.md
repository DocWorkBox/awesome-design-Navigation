# WIRED Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 WIRED 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `wired`
- Category: 媒体与消费科技
- Visual direction: 科技杂志。纸白色报刊密度，自定义衬线，墨蓝色链接。
- Local light preview: [preview-site/mirrors/wired-light.html](../../preview-site/mirrors/wired-light.html)
- Local dark preview: [preview-site/mirrors/wired-dark.html](../../preview-site/mirrors/wired-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-wired.png](../../preview-site/screenshots/getdesign-wired.png)

## Design Intent

Design System Inspiration of WIRED

A printerly, monochrome editorial system held together by hairline rules, hard 2px borders, and four typefaces with four distinct jobs. Generated from DESIGN.md.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --wired-black | #000000 |
| --page-ink | #1a1a1a |
| --paper-white | #ffffff |
| --caption-gray | #757575 |
| --disabled-gray | #999999 |
| --hairline-tint | #e2e8f0 |
| --hairline-mid | #4a5568 |
| --link-blue | #057dbc |
| --error-red | #e53e3e |
| --font-display | 'Playfair Display', 'WiredDisplay', Helvetica, serif |
| --font-serif | 'Lora', 'BreveText', Helvetica, serif |
| --font-sans | 'Inter', 'Apercu', Helvetica, sans-serif |
| --font-mono | 'JetBrains Mono', 'WiredMono', Monaco, 'Courier New', Courier, monospace |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

- <strong>Display Hero</strong>WiredDisplay · 64px / 0.93 / -0.5px
- <strong>Display Mid</strong>WiredDisplay · 26px / 1.08
- <strong>Section Heading</strong>Apercu · 20px / 700 / 1.20 / -0.28px
- <strong>Subheading</strong>Apercu · 17px / 700 / 1.29 / -0.144px
- <strong>Article Deck</strong>BreveText · 19px / 1.47 / 0.108px
- <strong>Article Body</strong>BreveText · 16px / 1.50 / 0.09px
- <strong>UI Heading / Button</strong>Apercu · 16px / 700 / 1.25 / 0.3px
- <strong>Inline Link</strong>Apercu · 14px / 1.29 / 0.4px
- <strong>Eyebrow / Kicker</strong>WiredMono · 13px / 1.23 / 0.92px / UPPER
- <strong>Section Ribbon</strong>WiredMono · 12px / 700 / 1.00 / 1.2px / UPPER
- <strong>Photo Caption</strong>BreveText · 12.73px / 700 / 2.20 / 0.108px
- <strong>Timestamp</strong>WiredMono · 12px / 1.33 / 1.1px / UPPER
- <strong>Footer Tertiary</strong>ProximaNova · 11px / 1.45

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

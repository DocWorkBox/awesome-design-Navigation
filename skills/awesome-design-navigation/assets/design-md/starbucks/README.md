# Starbucks Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Starbucks 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `starbucks`
- Category: 电商与零售
- Visual direction: 咖啡零售旗舰。四层大地绿色系统，暖奶油画布，SoDoSans 字体气质。
- Local light preview: [preview-site/mirrors/starbucks-light.html](../../preview-site/mirrors/starbucks-light.html)
- Local dark preview: [preview-site/mirrors/starbucks-dark.html](../../preview-site/mirrors/starbucks-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-starbucks.png](../../preview-site/screenshots/getdesign-starbucks.png)

## Design Intent

Design System Inspiration of Starbucks

12px radius with whisper-soft dual-shadow stack. Default content surface.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --green-starbucks | #006241 |
| --green-accent | #00754A |
| --green-house | #1E3932 |
| --green-uplift | #2b5148 |
| --green-light | #d4e9e2 |
| --rewards-green | #33433d |
| --gold | #cba258 |
| --gold-light | #dfc49d |
| --gold-lightest | #faf6ee |
| --white | #ffffff |
| --neutral-cool | #f9f9f9 |
| --neutral-warm | #f2f0eb |
| --ceramic | #edebe9 |
| --black | #000000 |
| --text-black | rgba(0, 0, 0, 0.87) |
| --text-black-soft | rgba(0, 0, 0, 0.58) |
| --red | #c82014 |
| --yellow | #fbbc05 |
| --card-shadow | 0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24) |
| --nav-shadow | 0 1px 3px rgba(0,0,0,0.1), 0 2px 2px rgba(0,0,0,0.06), 0 0 2px rgba(0,0,0,0.07) |
| --frap-shadow | 0 0 6px rgba(0,0,0,0.24), 0 8px 12px rgba(0,0,0,0.14) |
| --font-primary | "Inter", "SoDoSans", "Helvetica Neue", Helvetica, Arial, sans-serif |
| --font-serif | "Lora", "Iowan Old Style", Georgia, serif |
| --font-script | "Kalam", cursive |

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

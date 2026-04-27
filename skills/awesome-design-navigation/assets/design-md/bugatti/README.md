# Bugatti Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Bugatti 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `bugatti`
- Category: 汽车
- Visual direction: 超跑品牌。电影黑画布，黑白克制，纪念碑式展示字体。
- Local light preview: [preview-site/mirrors/bugatti-light.html](../../preview-site/mirrors/bugatti-light.html)
- Local dark preview: [preview-site/mirrors/bugatti-dark.html](../../preview-site/mirrors/bugatti-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-bugatti.png](../../preview-site/screenshots/getdesign-bugatti.png)

## Design Intent

Design System Inspiration of Bugatti

Cinematic negative space, monumental display typography, and a monochrome palette that refuses to compete with the product. Generated from DESIGN.md.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --velvet-black | #000000 |
| --showroom-white | #ffffff |
| --silver-mist | #999999 |
| --canvas | #ffffff |
| --canvas-inverted | #000000 |
| --primary-text | #000000 |
| --secondary-text | #4a4a4a |
| --tertiary-text | #999999 |
| --hairline | #e8e8e8 |
| --hairline-strong | #999999 |
| --font-display | 'Unbounded', 'Bugatti Display', ui-sans-serif, system-ui, sans-serif |
| --font-mono | 'Space Mono', 'Bugatti Monospace', ui-sans-serif, system-ui, monospace |
| --font-text | 'Inter', 'Bugatti Text Regular', ui-sans-serif, system-ui, sans-serif |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

- <strong>Monumental Hero</strong>Bugatti Display · 288px / 400 / 1.00
- <strong>Mid Display</strong>Bugatti Display · 60px / 400 / 1.00 / 1.4px
- <strong>Section Heading</strong>Bugatti Display · 36px / 400 / 1.11
- <strong>Monumental Mono</strong>Bugatti Monospace · 60px / 400 / 1.00
- <strong>Lead Body</strong>Bugatti Text Regular · 20px / 400 / 1.40
- <strong>Body Regular</strong>Bugatti Text Regular · 16px / 400 / 1.50
- <strong>UI Link / Button</strong>Bugatti Monospace · 14px / 400 / 1.43 / 1.4px / UPPER
- <strong>Compact Button</strong>Bugatti Monospace · 12px / 400 / 1.33 / 1.2px / UPPER
- <strong>Caption Wide</strong>Bugatti Monospace · 14px / 400 / 1.43 / 1.4px
- <strong>Caption Micro</strong>Bugatti Monospace · 12px / 400 / 1.33

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

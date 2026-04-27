# The Verge Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 The Verge 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `theverge`
- Category: 媒体与消费科技
- Visual direction: 科技媒体。酸性薄荷与紫外色点缀，Manuka 展示字体。
- Local light preview: [preview-site/mirrors/theverge-light.html](../../preview-site/mirrors/theverge-light.html)
- Local dark preview: [preview-site/mirrors/theverge-dark.html](../../preview-site/mirrors/theverge-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-theverge.png](../../preview-site/screenshots/getdesign-theverge.png)

## Design Intent

Design System Inspiration of The Verge

Hazard-tape editorial. Massive Manuka headlines, acid-mint + ultraviolet accents, and a StoryStream timeline that feels like a git log for the news. Generated from DESIGN.md.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --canvas | #ffffff |
| --canvas-inverted | #131313 |
| --surface-slate | #f2f2f2 |
| --surface-slate-2 | #e6e6e6 |
| --image-frame | #d4d4d4 |
| --hazard-white | #ffffff |
| --absolute-black | #000000 |
| --jelly-mint | #3cffd0 |
| --verge-ultraviolet | #5200ff |
| --console-mint-border | #309875 |
| --deep-link-blue | #3860be |
| --focus-cyan | #1eaedb |
| --purple-rule | #3d00bf |
| --dim-gray | #8c8c8c |
| --primary-text | #131313 |
| --secondary-text | #6a6a6a |
| --muted-text | #8c8c8c |
| --inverted-text | #ffffff |
| --font-display | 'Anton', Impact, Helvetica, sans-serif |
| --font-sans | 'Space Grotesk', Helvetica, Arial, sans-serif |
| --font-mono | 'Space Mono', 'Courier New', Courier, monospace |
| --font-serif | 'Newsreader', Georgia, serif |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

- <strong>Hero Wordmark</strong>Manuka · 107px / 900 / 0.80 / 1.07px
- <strong>Display Secondary</strong>Manuka · 60px / 900 / 0.80
- <strong>Large Headline</strong>PolySans · 34px / 700 / 1.00
- <strong>Heading Wide</strong>PolySans · 32px / 400 / 1.10 / 0.32px
- <strong>Heading Medium</strong>PolySans · 24px / 700 / 1.00
- <strong>Fashion Whisper</strong>PolySans · 19px / 300 / 1.20 / 1.9px / CAPITALIZE
- <strong>All-Caps XL</strong>PolySans · 18px / 400 / 1.10 / 1.8px / UPPER
- <strong>Body Relaxed</strong>PolySans · 16px / 500 / 1.60
- <strong>Eyebrow All-Caps</strong>PolySans · 12px / 400 / 1.30 / 1.8px / UPPER
- <strong>Mono Timestamp</strong>PolySans Mono · 11px / 500 / 1.20 / 1.1px / UPPER
- <strong>Mono Button</strong>PolySans Mono · 12px / 600 / 2.00 / 1.5px / UPPER
- <strong>Serif Body</strong>FK Roman Standard · 16px / 400 / 1.30 / -0.16px

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

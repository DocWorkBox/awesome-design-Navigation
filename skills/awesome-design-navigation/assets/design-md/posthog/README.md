# PostHog Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 PostHog 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `posthog`
- Category: 后端、数据库与 DevOps
- Visual direction: 产品分析平台。活泼刺猬品牌感，友好的开发者深色界面。
- Local light preview: [preview-site/mirrors/posthog-light.html](../../preview-site/mirrors/posthog-light.html)
- Local dark preview: [preview-site/mirrors/posthog-dark.html](../../preview-site/mirrors/posthog-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-posthog.png](../../preview-site/screenshots/getdesign-posthog.png)

## Design Intent

Design System Inspired by PostHog

No shadow, warm parchment background. The default for most surfaces.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --olive-ink | #4d4f46 |
| --deep-olive | #23251d |
| --posthog-orange | #F54E00 |
| --amber-gold | #F7A501 |
| --gold-border | #b17816 |
| --focus-blue | #3b82f6 |
| --warm-parchment | #fdfdf8 |
| --sage-cream | #eeefe9 |
| --light-sage | #e5e7e0 |
| --warm-tan | #d4c9b8 |
| --hover-white | #f4f4f4 |
| --muted-olive | #65675e |
| --sage-placeholder | #9ea096 |
| --sage-border | #bfc1b7 |
| --light-border | #b6b7af |
| --near-black | #1e1f23 |
| --dark-text | #111827 |
| --white | #ffffff |
| --font | 'IBM Plex Sans', -apple-system, system-ui, 'Segoe UI', 'Helvetica Neue', Helvetica, Ubuntu, Roboto, Noto, Arial, sans-serif |
| --mono | 'Source Code Pro', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - |  | White background with sage border. Hover to see lift. The standard container pattern. |
| - |  | Sage cream background for secondary content areas and grouped information. |
| - |  | The single dramatic shadow — reserved for modals, dropdowns, and floating elements. |

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

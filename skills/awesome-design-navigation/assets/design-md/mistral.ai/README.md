# Mistral AI Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Mistral AI 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `mistral.ai`
- Category: AI 与大模型平台
- Visual direction: 开源权重大模型提供商。法式工程极简，偏紫色调。
- Local light preview: [preview-site/mirrors/mistral.ai-light.html](../../preview-site/mirrors/mistral.ai-light.html)
- Local dark preview: [preview-site/mirrors/mistral.ai-dark.html](../../preview-site/mirrors/mistral.ai-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-mistral.ai.png](../../preview-site/screenshots/getdesign-mistral.ai.png)

## Design Intent

Design System Inspired by Mistral AI

Warm golden tokens from the sunshine gradient design system

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-mistral-orange | #fa520f |
| --color-flame | #fb6424 |
| --color-block-orange | #ff8105 |
| --color-sunshine-900 | #ff8a00 |
| --color-sunshine-700 | #ffa110 |
| --color-sunshine-500 | #ffb83e |
| --color-sunshine-300 | #ffd06a |
| --color-block-gold | #ffe295 |
| --color-bright-yellow | #ffd900 |
| --color-warm-ivory | #fffaeb |
| --color-cream | #fff0c2 |
| --color-white | #ffffff |
| --color-mistral-black | #1f1f1f |
| --color-black-tint | hsl(0, 0%, 24%) |
| --color-input-border | hsl(240, 5.9%, 90%) |
| --font-primary | Arial, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' |
| --bg-page | #fffaeb |
| --bg-card | #fff0c2 |
| --bg-nav | rgba(255, 250, 235, 0.92) |
| --text-primary | #1f1f1f |
| --text-secondary | hsl(0, 0%, 24%) |
| --text-muted | #7f6315 |
| --border-color | rgba(127, 99, 21, 0.15) |
| --border-subtle | rgba(127, 99, 21, 0.08) |
| --section-label-color | var(--color-mistral-orange) |
| --golden-shadow | -8px 16px 39px rgba(127, 99, 21, 0.12), -33px 64px 72px rgba(127, 99, 21, 0.10), -73px 144px 97px rgba(127, 99, 21, 0.06) |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Mistral Orange | #fa520f | Core brand color, primary emphasis, signal fire |
| Mistral Flame | #fb6424 | Hover states, secondary brand moments |
| Block Orange | #ff8105 | Gradient block system, warm pure orange |

### Sunshine Spectrum

| Token | Value | Role |
| --- | --- | --- |
| Bright Yellow | #ffd900 | Top of block identity gradient |
| Block Gold | #ffe295 | Pale gold, soft background accents |
| Sunshine 300 | #ffd06a | Subtle warm tints, secondary backgrounds |
| Sunshine 500 | #ffb83e | Medium golden, mid-level emphasis |
| Sunshine 700 | #ffa110 | Core sunshine accent, interactive elements |
| Sunshine 900 | #ff8a00 | Deep golden amber, strong accent |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Warm Ivory | #fffaeb | Page background, lightest canvas |
| Cream | #fff0c2 | Primary warm surface, button backgrounds |
| Pure White | #ffffff | Maximum contrast, popover surfaces |
| Mistral Black | #1f1f1f | Dark buttons, text, dark sections |

### Neutrals & Text

| Token | Value | Role |
| --- | --- | --- |
| Mistral Black | #1f1f1f | Primary text on light surfaces |
| Black Tint | hsl(0, 0%, 24%) | Secondary text on light backgrounds |
| Pure White | #ffffff | Text on dark surfaces, CTA labels |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| CREAM SURFACE | Warm Cream Card | Standard content card on cream background with sharp architectural corners. Containers defined by background color, not borders. The warm void breathes naturally. |
| GOLDEN FLOAT | Golden Shadow Card | Elevated card with the signature five-layer warm amber shadow system. The golden hour lighting effect makes content feel bathed in afternoon sunlight. |
| WHITE SURFACE | Pure White Card | Maximum contrast card on pure white with subtle golden border. Used for popover surfaces and moments requiring the highest visual clarity. |

## Forms

_No form examples were found in the local mirror._

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow, no border. Page backgrounds and inline text blocks sitting directly on the warm ivory canvas. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

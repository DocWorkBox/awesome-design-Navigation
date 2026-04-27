# Ollama Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Ollama 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `ollama`
- Category: AI 与大模型平台
- Visual direction: 本地运行大模型。终端优先，黑白极简。
- Local light preview: [preview-site/mirrors/ollama-light.html](../../preview-site/mirrors/ollama-light.html)
- Local dark preview: [preview-site/mirrors/ollama-dark.html](../../preview-site/mirrors/ollama-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-ollama.png](../../preview-site/screenshots/getdesign-ollama.png)

## Design Intent

Design System Inspired by Ollama

Radical minimalism in pure grayscale. Zero color, zero shadows, zero excess.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-black | #000000 |
| --color-near-black | #262626 |
| --color-darkest-surface | #090909 |
| --color-white | #ffffff |
| --color-snow | #fafafa |
| --color-light-gray | #e5e5e5 |
| --color-stone | #737373 |
| --color-mid-gray | #525252 |
| --color-silver | #a3a3a3 |
| --color-button-text-dark | #404040 |
| --color-border-light | #d4d4d4 |
| --font-display | system-ui, -apple-system, 'SF Pro Rounded', 'Segoe UI', Roboto, sans-serif |
| --font-body | ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif |
| --font-mono | ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace |
| --bg-page | #ffffff |
| --bg-card | #fafafa |
| --bg-nav | rgba(255,255,255,0.95) |
| --text-primary | #000000 |
| --text-secondary | #737373 |
| --text-muted | #a3a3a3 |
| --border-color | #e5e5e5 |
| --section-label-color | #737373 |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Pure Black | #000000 | Primary headlines, links, max emphasis |
| Near Black | #262626 | Button text on light surfaces |
| Darkest Surface | #090909 | Dark containers, footer background |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Pure White | #ffffff | Page background, button surfaces |
| Snow | #fafafa | Subtle surface distinction, section bg |
| Light Gray | #e5e5e5 | Button backgrounds, borders, containment |

### Neutrals & Text

| Token | Value | Role |
| --- | --- | --- |
| Stone | #737373 | Secondary text, footer links, muted tone |
| Mid Gray | #525252 | Emphasized secondary text |
| Silver | #a3a3a3 | Tertiary text, placeholders, metadata |
| Button Text Dark | #404040 | White-surface button text |
| Border Light | #d4d4d4 | White-surface button borders |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Standard Card | Bordered Container | Standard content card with 1px solid Light Gray border and 12px radius. The only container style in Ollama. Zero shadows. |
| Snow Surface | Subtle Background | Card distinguished by Snow (#fafafa) background instead of borders. The lightest possible surface distinction from pure white. |

## Forms

_No form examples were found in the local mirror._

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow, no border. Page background and inline content. The default state for most elements. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

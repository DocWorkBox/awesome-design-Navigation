# Cohere Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Cohere 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `cohere`
- Category: AI 与大模型平台
- Visual direction: 企业级 AI 平台。高饱和渐变，数据密集型仪表盘气质。
- Local light preview: [preview-site/mirrors/cohere-light.html](../../preview-site/mirrors/cohere-light.html)
- Local dark preview: [preview-site/mirrors/cohere-dark.html](../../preview-site/mirrors/cohere-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-cohere.png](../../preview-site/screenshots/getdesign-cohere.png)

## Design Intent

Design System Inspired by Cohere

Auto-generated design token catalog from DESIGN.md

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-black | #000000 |
| --color-near-black | #212121 |
| --color-deep-dark | #17171c |
| --color-interaction-blue | #1863dc |
| --color-ring-blue | rgba(76, 110, 230, 0.5) |
| --color-focus-purple | #9b60aa |
| --color-white | #ffffff |
| --color-snow | #fafafa |
| --color-lightest-gray | #f2f2f2 |
| --color-muted-slate | #93939f |
| --color-border-cool | #d9d9dd |
| --color-border-light | #e5e7eb |
| --font-display | 'Space Grotesk', Inter, ui-sans-serif, system-ui, sans-serif |
| --font-body | Inter, Arial, ui-sans-serif, system-ui, sans-serif |
| --font-mono | 'Space Mono', Arial, ui-sans-serif, system-ui, monospace |
| --bg-page | #ffffff |
| --bg-card | #ffffff |
| --bg-nav | rgba(255, 255, 255, 0.95) |
| --text-primary | #000000 |
| --text-secondary | #212121 |
| --text-muted | #93939f |
| --border-color | #d9d9dd |
| --border-subtle | #f2f2f2 |
| --section-label-color | #93939f |
| --accent | #1863dc |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Cohere Black | #000000 | Primary headline text, maximum emphasis |
| Near Black | #212121 | Standard body link color |
| Deep Dark | #17171c | Navigation and dark-section text |

### Secondary & Accent

| Token | Value | Role |
| --- | --- | --- |
| Interaction Blue | #1863dc | Hover, focus states, active links |
| Ring Blue | #4c6ee6 @ 50% | Keyboard focus indicators |
| Focus Purple | #9b60aa | Input focus border color |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Pure White | #ffffff | Primary page background, card surface |
| Snow | #fafafa | Subtle elevated surfaces, light sections |
| Lightest Gray | #f2f2f2 | Card borders, softest containment |

### Neutrals & Text

| Token | Value | Role |
| --- | --- | --- |
| Muted Slate | #93939f | Footer links, tertiary text |
| Border Cool | #d9d9dd | Section borders, list separators |
| Border Light | #e5e7eb | Lighter border variant (gray-200) |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| STANDARD CARD | Signature 22px Radius | The distinctive Cohere card with 22px border-radius and 1px solid #f2f2f2 border. Creates cloud-like, organic softness on the white canvas. |
| DIALOG CARD | Dialog 8px Radius | Modal and dialog containers use a tighter 8px radius with #d9d9dd border. Functional, secondary containment for transient UI. |
| GENEROUS CARD | Featured 16px Radius | Medium-sized containers for featured content. Uses 16px radius as a middle step in the radius scale with subtle #f2f2f2 border. |

## Forms

_No form examples were found in the local mirror._

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow, no border. Page background and text blocks. |
| Bordered (Light) | 1px solid #f2f2f2. Standard cards, subtle containment. |
| Bordered (Cool) | 1px solid #d9d9dd. Emphasized cards, list separators. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

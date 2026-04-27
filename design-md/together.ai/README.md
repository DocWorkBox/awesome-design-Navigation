# Together AI Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Together AI 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `together.ai`
- Category: AI 与大模型平台
- Visual direction: 开源 AI 基础设施。技术蓝图式设计语言。
- Local light preview: [preview-site/mirrors/together.ai-light.html](../../preview-site/mirrors/together.ai-light.html)
- Local dark preview: [preview-site/mirrors/together.ai-dark.html](../../preview-site/mirrors/together.ai-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-together.ai.png](../../preview-site/screenshots/getdesign-together.ai.png)

## Design Intent

Design System Inspired by Together AI

Auto-generated design token catalog from DESIGN.md

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-brand-magenta | #ef2cc1 |
| --color-brand-orange | #fc4c02 |
| --color-dark-blue | #010120 |
| --color-soft-lavender | #bdbbff |
| --color-black-40 | #00000066 |
| --color-white | #ffffff |
| --color-black | #000000 |
| --font-display | system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', Helvetica, Arial, sans-serif |
| --font-mono | 'Space Mono', 'Courier New', Consolas, monospace |
| --bg-page | #ffffff |
| --bg-card | #ffffff |
| --bg-nav | rgba(255,255,255,0.95) |
| --text-primary | #000000 |
| --text-secondary | #00000066 |
| --text-muted | #00000066 |
| --border-color | rgba(0,0,0,0.08) |
| --border-subtle | rgba(0,0,0,0.08) |
| --glass-bg | rgba(0,0,0,0.08) |
| --badge-bg | rgba(0,0,0,0.04) |
| --shadow-card | rgba(1, 1, 32, 0.1) 0px 4px 10px |
| --section-label-color | var(--color-black) |

## Color Palette

### Primary Brand

| Token | Value | Role |
| --- | --- | --- |
| Brand Magenta | #ef2cc1 | Gradient illustrations only, never UI chrome |
| Brand Orange | #fc4c02 | Gradient endpoints, warm accent moments |
| Dark Blue | #010120 | Dark surface, research sections, footer |

### Secondary & Accent

| Token | Value | Role |
| --- | --- | --- |
| Soft Lavender | #bdbbff | Subtle accents, secondary indicators, highlights |
| Black 40 | #00000066 | De-emphasized overlays, secondary text |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Pure White | #ffffff | Primary light-section page background |
| Dark Blue | #010120 | Research, footer, technical sections |
| Glass Light | rgba(255,255,255,0.12) | Frosted glass button backgrounds on dark |
| Glass Dark | rgba(0,0,0,0.08) | Subtle tinted surfaces on light sections |

### Neutrals & Text

| Token | Value | Role |
| --- | --- | --- |
| Pure Black | #000000 | Primary text on light surfaces |
| Pure White | #ffffff | Primary text on dark surfaces |
| Black 8% | rgba(0,0,0,0.08) | Borders on light surfaces |
| White 12% | rgba(255,255,255,0.12) | Borders on dark surfaces |

### Gradient System

| Token | Value | Role |
| --- | --- | --- |
| Pastel Cloud Gradient | pink -> lavender -> blue | Hero illustrations, decorative backgrounds, abstract forms |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| CONTAINED | Standard Card | Content card with 1px solid rgba(0,0,0,0.08) border and 8px radius. The default container for features and content sections on light surfaces. |
| ELEVATED | Shadow Card | Elevated card with dark-blue-tinted shadow (rgba(1,1,32,0.1) 0px 4px 10px). Used for feature cards and hover states. Subtle blue-ish cast. |
| ACCENT | Lavender Accent | Card with soft lavender border accent. Used for highlighted or selected content where a gentle visual distinction is needed. |
| RESEARCH | Research Paper | Card on Dark Blue (#010120) surface with rgba(255,255,255,0.12) border. Used in research and technical content sections. |
| TECHNICAL | Technical Content | The dark zone creates a distinct academic atmosphere, separating research messaging from the bright business sections. |

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
| Contained | 1px solid rgba(0,0,0,0.08) on light or rgba(255,255,255,0.12) on dark. Cards, badges, containers. |
| Elevated | Dark-blue-tinted shadow: rgba(1,1,32,0.1) 0px 4px 10px. Feature cards and hover states. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

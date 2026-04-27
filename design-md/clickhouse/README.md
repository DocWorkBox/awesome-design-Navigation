# ClickHouse Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 ClickHouse 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `clickhouse`
- Category: 后端、数据库与 DevOps
- Visual direction: 高速分析型数据库。黄色强调，技术文档风。
- Local light preview: [preview-site/mirrors/clickhouse-light.html](../../preview-site/mirrors/clickhouse-light.html)
- Local dark preview: [preview-site/mirrors/clickhouse-dark.html](../../preview-site/mirrors/clickhouse-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-clickhouse.png](../../preview-site/screenshots/getdesign-clickhouse.png)

## Design Intent

Design System Inspired by ClickHouse

Auto-generated design token catalog from DESIGN.md &mdash; Light mode (inverted)

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-neon-volt | #faff69 |
| --color-forest-green | #166534 |
| --color-dark-forest | #14572f |
| --color-pale-yellow | #f4f692 |
| --color-border-olive | #4f5100 |
| --color-olive-dark | #161600 |
| --color-pure-black | #000000 |
| --color-near-black | #141414 |
| --color-charcoal | #414141 |
| --color-deep-charcoal | #343434 |
| --color-hover-gray | #3a3a3a |
| --color-pure-white | #ffffff |
| --color-silver | #a0a0a0 |
| --color-mid-gray | #585858 |
| --color-border-gray | #e5e7eb |
| --font-body | 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif |
| --font-code | 'Inconsolata', SFMono-Regular, Menlo, Monaco, Consolas, monospace |
| --bg-page | #ffffff |
| --bg-card | #f8f8f8 |
| --bg-nav | rgba(255,255,255,0.95) |
| --text-primary | #000000 |
| --text-secondary | #414141 |
| --text-muted | #a0a0a0 |
| --border-color | #e5e7eb |
| --border-subtle | #f0f0f0 |
| --section-label-color | #166534 |

## Color Palette

### Primary &mdash; Neon Volt Family

| Token | Value | Role |
| --- | --- | --- |
| Neon Volt | #faff69 | Signature brand accent, CTAs, accent borders, link hovers |
| Pale Yellow | #f4f692 | Active/pressed state text color |
| Border Olive | #4f5100 | Ghost button borders, muted neon sibling |
| Olive Dark | #161600 | Darkest neon-tinted color for subtle brand text |

### CTA Greens

| Token | Value | Role |
| --- | --- | --- |
| Forest Green | #166534 | Secondary CTA buttons, Get Started actions |
| Dark Forest | #14572f | Darker green for borders and secondary accents |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Pure Black | #000000 | Primary page background, maximum contrast canvas |
| Near Black | #141414 | Button backgrounds, slightly elevated surfaces |
| Hover Gray | #3a3a3a | Button hover state background |

### Neutrals & Borders

| Token | Value | Role |
| --- | --- | --- |
| Pure White | #ffffff | Primary text on dark surfaces |
| Silver | #a0a0a0 | Secondary body text, muted content |
| Charcoal | #414141 | Primary border color at 80% opacity |
| Deep Charcoal | #343434 | Darker border variant for subtle division |
| Border Gray | #e5e7eb | Light border variant for light contexts |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Standard Card | Charcoal Border | Standard content card with 1px solid charcoal border at 80% opacity and 8px radius. The default container for features, stats, and content sections. |
| Neon Highlighted | Neon Volt Border | Featured or selected card with 2px solid Neon Volt border. Creates maximum emphasis against the dark canvas with the signature yellow-green accent. |
| Inset / Pressed | Inset Shadow | Card with inset shadow creating a "pressed into the surface" effect. Unique to ClickHouse's depth system for active or contained elements. |

## Forms

_No form examples were found in the local mirror._

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow. Black background, text blocks, inline content. |
| Bordered | 1px solid charcoal at 80% opacity. Standard cards and containers. |
| Subtle | Subtle shadow (1px 3px). Soft card lift on the dark canvas. |
| Elevated | Medium shadow (10px 15px). Feature cards and hover states. |
| Pressed / Inset | Inset shadow (4px 25px inset). "Sunk into the surface" effect, unique to ClickHouse. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

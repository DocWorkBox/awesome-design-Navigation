# VoltAgent Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 VoltAgent 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `voltagent`
- Category: AI 与大模型平台
- Visual direction: AI Agent 框架。虚空黑画布，祖母绿点缀，终端原生感。
- Local light preview: [preview-site/mirrors/voltagent-light.html](../../preview-site/mirrors/voltagent-light.html)
- Local dark preview: [preview-site/mirrors/voltagent-dark.html](../../preview-site/mirrors/voltagent-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-voltagent.png](../../preview-site/screenshots/getdesign-voltagent.png)

## Design Intent

Design System Inspired by VoltAgent

Auto-generated design token catalog from DESIGN.md

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-abyss | #050507 |
| --color-carbon | #101010 |
| --color-signal-green | #00d992 |
| --color-mint | #2fd6a1 |
| --color-emerald | #10b981 |
| --color-purple | #818cf8 |
| --color-warm-charcoal | #3d3a39 |
| --color-steel | #8b949e |
| --color-parchment | #b8b3b0 |
| --color-snow | #f2f2f2 |
| --color-white | #ffffff |
| --color-fog | #bdbdbd |
| --color-mist | #dcdcdc |
| --color-warning | #ffba00 |
| --color-danger | #fb565b |
| --color-info | #4cb3d4 |
| --color-success | #008b00 |
| --font-system | system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', Helvetica, Arial, sans-serif |
| --font-body | 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif |
| --font-mono | SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace |
| --bg-page | #ffffff |
| --bg-card | #f8f8f8 |
| --bg-nav | rgba(255,255,255,0.92) |
| --text-primary | #101010 |
| --text-secondary | #3d3a39 |
| --text-muted | #8b949e |
| --border-color | #e0e0e0 |
| --border-subtle | #f0f0f0 |
| --section-label-color | var(--color-signal-green) |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Emerald Signal Green | #00d992 | Core brand accent, glow effects, active borders |
| VoltAgent Mint | #2fd6a1 | CTA button text on dark surfaces |
| Tailwind Emerald | #10b981 | Ecosystem green, link defaults, background tints at 30% |

### Secondary & Accent

| Token | Value | Role |
| --- | --- | --- |
| Soft Purple | #818cf8 | Secondary categorization, code syntax highlights |
| Cobalt Primary | #306cce | Docs links, interactive focus states |
| Info Teal | #4cb3d4 | Informational callouts and tip admonitions |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Abyss Black | #050507 | Landing page canvas |
| Carbon Surface | #101010 | Card backgrounds, button surfaces |
| Warm Charcoal | #3d3a39 | Borders, containment lines |

### Neutrals & Text

| Token | Value | Role |
| --- | --- | --- |
| Snow White | #f2f2f2 | Primary text on dark surfaces (1008 instances) |
| Warm Parchment | #b8b3b0 | Secondary body text |
| Steel Slate | #8b949e | Tertiary text, metadata |

### Semantic

| Token | Value | Role |
| --- | --- | --- |
| Warning Amber | #ffba00 | Warning states and caution alerts |
| Danger Coral | #fb565b | Error states and destructive actions |
| Success Emerald | #008b00 | Success confirmations |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Standard Card | Warm Charcoal Border | Standard content card with 1px solid warm-charcoal border and 8px radius. The default container for features, code blocks, and content sections. |
| Accent Highlighted | Green Signal Border | Active or highlighted card with 2px solid Emerald Signal Green border. Used for selected features, active states, and primary emphasis. |
| Dramatic Float | Deep Shadow Elevation | Maximum-elevation card with dramatic shadow (20px 60px) and inset slate ring. Reserved for hero feature showcases and floating content. |

## Forms

_No form examples were found in the local mirror._

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow, no border. Page background and inline text. |
| Contained | 1px solid Warm Charcoal. Standard cards and code blocks. |
| Emphasized | 3px solid Warm Charcoal. Large interactive buttons and containers. |
| Accent | 2px solid Emerald Signal Green. Active/highlighted feature cards. |
| Ambient Glow | Warm diffused shadow (15px blur). Soft atmospheric lift. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

# Supabase Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Supabase 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `supabase`
- Category: 后端、数据库与 DevOps
- Visual direction: 开源 Firebase 替代方案。深色祖母绿主题，代码优先。
- Local light preview: [preview-site/mirrors/supabase-light.html](../../preview-site/mirrors/supabase-light.html)
- Local dark preview: [preview-site/mirrors/supabase-dark.html](../../preview-site/mirrors/supabase-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-supabase.png](../../preview-site/screenshots/getdesign-supabase.png)

## Design Intent

Design System Inspired by Supabase

Dark-mode-native developer platform aesthetic. Emerald green accents on near-black surfaces with border-defined depth.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-green | #3ecf8e |
| --color-green-link | #00c573 |
| --color-green-border | rgba(62, 207, 142, 0.3) |
| --color-near-black | #0f0f0f |
| --color-dark | #171717 |
| --color-dark-border | #242424 |
| --color-border-dark | #2e2e2e |
| --color-mid-border | #363636 |
| --color-border-light | #393939 |
| --color-charcoal | #434343 |
| --color-dark-gray | #4d4d4d |
| --color-mid-gray | #898989 |
| --color-light-gray | #b4b4b4 |
| --color-near-white | #efefef |
| --color-off-white | #fafafa |
| --color-glass-dark | rgba(41, 41, 41, 0.84) |
| --color-violet | hsl(251, 63.2%, 63.2%) |
| --color-crimson | hsl(348, 60%, 50%) |
| --color-purple | hsl(272, 51%, 54%) |
| --color-indigo | hsl(226, 70%, 55%) |
| --color-yellow | hsl(48, 90%, 55%) |
| --color-tomato | hsl(10, 78%, 54%) |
| --color-orange | hsl(24, 94%, 50%) |
| --font-primary | system-ui, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif |
| --font-mono | 'Source Code Pro', 'Office Code Pro', Menlo, monospace |
| --bg-page | #171717 |
| --bg-hero | #171717 |
| --bg-card | #171717 |
| --bg-input | #1a1328 |
| --bg-nav | rgba(23, 23, 23, 0.92) |
| --text-primary | #fafafa |
| --text-secondary | #b4b4b4 |
| --text-muted | #898989 |
| --border-color | #2e2e2e |
| --border-subtle | #242424 |
| --section-label-color | #3ecf8e |

## Color Palette

### Brand

| Token | Value | Role |
| --- | --- | --- |
| Supabase Green | #3ecf8e | Primary brand, logo, accent borders |
| Green Link | #00c573 | Interactive green for links and actions |
| Green Border | rgba(62,207,142,0.3) | Subtle green border accent |

### Neutral Scale

| Token | Value | Role |
| --- | --- | --- |
| Near Black | #0f0f0f | Primary button bg, deepest surface |
| Dark | #171717 | Page background, primary canvas |
| Dark Border | #242424 | Horizontal rules, section dividers |
| Border Dark | #2e2e2e | Card borders, tab borders |
| Mid Border | #363636 | Button borders, dividers |
| Border Light | #393939 | Secondary borders |
| Charcoal | #434343 | Tertiary borders, dark accents |
| Dark Gray | #4d4d4d | Heavy secondary text |
| Mid Gray | #898989 | Muted text, link color |
| Light Gray | #b4b4b4 | Secondary link text |
| Near White | #efefef | Light border, subtle surface |
| Off White | #fafafa | Primary text, button text |

### Radix Color Tokens

| Token | Value | Role |
| --- | --- | --- |
| Violet 10 | hsl(251, 63%, 63%) | Vibrant accent |
| Purple 5 | hsl(272, 51%, 54%) | Accent spectrum |
| Crimson 9 | hsl(348, 60%, 50%) | Warm accent / alert |
| Indigo | hsl(226, 70%, 55%) | Subtle blue wash |
| Yellow 7 | hsl(48, 90%, 55%) | Attention / warning |
| Tomato 4 | hsl(10, 78%, 54%) | Error accent |
| Orange 6 | hsl(24, 94%, 50%) | Warm accent |

### Surface & Overlay

| Token | Value | Role |
| --- | --- | --- |
| Glass Dark | rgba(41,41,41,0.84) | Translucent dark overlay |
| Slate Alpha | hsla(210,88%,16%,0.03) | Ultra-subtle blue wash |
| Fixed Scale Alpha | hsla(200,90%,93%,0.11) | Light frost overlay |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Standard Card | Border Dark Container | Default card with 1px solid #2e2e2e border and 16px radius. Depth defined through border contrast, not shadows. Background matches page at #171717. |
| Prominent Card | Mid Border Container | Elevated card using #363636 border for higher visual prominence. The lighter border creates the sense of depth in the dark environment. |
| Accent Card | Green Accent Container | Brand-highlighted card with rgba(62, 207, 142, 0.3) border. The green accent at 30% opacity is the highest elevation signal. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Default Input | - | Enter your project name |
| Focus State | - | my-supabase-project |
| Error State | - | invalid name! |
| Database Region | - | us-east-1 |

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow, border #2e2e2e. Default state for most surfaces and containers. |
| Subtle Border | Border #363636 or #393939. Interactive elements, hover states, prominent cards. |
| Focus | Minimal functional shadow: rgba(0,0,0,0.1) 0px 4px 12px. Focus states only. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

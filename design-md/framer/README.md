# Framer Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Framer 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `framer`
- Category: 设计与创意工具
- Visual direction: 网站构建器。大胆黑蓝配色，动效优先，设计感强。
- Local light preview: [preview-site/mirrors/framer-light.html](../../preview-site/mirrors/framer-light.html)
- Local dark preview: [preview-site/mirrors/framer-dark.html](../../preview-site/mirrors/framer-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-framer.png](../../preview-site/screenshots/getdesign-framer.png)

## Design Intent

Design System Inspired by Framer

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-black | #000000 |
| --color-white | #ffffff |
| --color-blue | #0099ff |
| --color-silver | #a6a6a6 |
| --color-near-black | #090909 |
| --color-frosted | rgba(255, 255, 255, 0.1) |
| --color-frosted-hover | rgba(255, 255, 255, 0.15) |
| --color-blue-glow | rgba(0, 153, 255, 0.15) |
| --color-ghost | rgba(255, 255, 255, 0.6) |
| --color-placeholder | rgba(255, 255, 255, 0.4) |
| --shadow-ring | rgba(0, 153, 255, 0.15) 0px 0px 0px 1px |
| --shadow-contained | rgb(9, 9, 9) 0px 0px 0px 2px |
| --shadow-floating | rgba(255, 255, 255, 0.1) 0px 0.5px 0px 0.5px, rgba(0, 0, 0, 0.25) 0px 10px 30px 0px |
| --font-display | 'Inter', -apple-system, BlinkMacSystemFont, sans-serif |
| --font-body | 'Inter', -apple-system, BlinkMacSystemFont, sans-serif |
| --font-mono | 'Azeret Mono', monospace |
| --radius-xs | 1px |
| --radius-sm | 5px |
| --radius-md | 8px |
| --radius-lg | 12px |
| --radius-xl | 15px |
| --radius-2xl | 20px |
| --radius-pill | 100px |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Void Black | #000000 | Primary background, void canvas |
| Pure White | #ffffff | Primary text, button fill |
| Framer Blue | #0099ff | Accent — links, borders, focus rings |

### Secondary & Accent

| Token | Value | Role |
| --- | --- | --- |
| Muted Silver | #a6a6a6 | Secondary text, descriptions |
| Near Black | #090909 | Elevated dark surface, card background |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Frosted White | rgba(255,255,255,0.1) | Glass-effect buttons, translucent surfaces |
| Ghost White | rgba(255,255,255,0.6) | Tertiary text, placeholders |

### Semantic

| Token | Value | Role |
| --- | --- | --- |
| Blue Glow | rgba(0,153,255,0.15) | Focus ring shadow, blue halo |
| Default Link Blue | #0000ee | Browser default links (rare) |

## Typography

- Display Hero — 110px / 500 / 0.85 / -5.5px -- GT Walsheim Framer Medium (shown in Inter fallback) — extreme negative tracking, compressed impact
- Section Display — 85px / 500 / 0.95 / -4.25px -- GT Walsheim Medium (shown in Inter fallback) — OpenType: ss02, tnum
- Section Heading — 62px / 500 / 1.00 / -3.1px -- GT Walsheim Medium — OpenType: ss02
- Feature Heading — 32px / 500 / 1.13 / -1px -- GT Walsheim Medium — tightest of the smaller headings
- Card Title — 24px / 400 / 1.30 / -0.01px -- Inter Variable — OpenType: cv01, cv05, cv09, cv11, ss03, ss07
- Feature Title — 22px / 700 / 1.20 / -0.8px -- Inter — OpenType: cv05
- Body Large — 18px / 400 / 1.30 / -0.01px -- Inter Variable — OpenType: cv01, cv05, cv09, cv11, ss03, ss07
- Body — 15px / 400 / 1.30 / -0.01px -- Inter Variable — OpenType: cv11
- Caption — 14px / 400 / 1.40 -- Inter Variable — OpenType: cv01, cv06, cv09, cv11, ss03, ss07
- Label — 13px / 500 / 1.60 -- Inter — OpenType: cv06, cv11, ss03
- Micro Code — 10.4px / 400 / 1.60 -- Azeret Mono — OpenType: cv06, cv11, ss03

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - |  | Build layouts with a true visual editor that outputs clean, production-ready code. Drag, resize, and animate with precision. |
| - |  | Create reusable components with built-in variants, interactions, and responsive overrides that scale across your project. |
| - |  | Sites built on Framer's infrastructure load instantly with optimized assets, code splitting, and edge delivery. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Full Name | - | Enter your name |
| Email Address (Focus State) | - | you@example.com |
| Project URL (Error State) | - | invalid-url |

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

| Radius | Context |
| --- | --- |
|  | Micro |
|  | Thumbnails |
|  | Components |
|  | Cards |
|  | Large cards |
|  | Containers |
|  | Nav pills |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0 — Flat | No shadow. Pure black surface. The void baseline that everything else rises from. |
| Level 1 — Ring | Framer Blue glow ring (rgba(0,153,255,0.15) 1px). Card borders, interactive outlines. |
| Level 2 — Contained | Near-black ring (rgb(9,9,9) 2px). Subtle containment on dark surfaces. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

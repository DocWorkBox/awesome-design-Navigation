# Raycast Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Raycast 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `raycast`
- Category: 开发工具与 IDE
- Visual direction: 效率启动器。光滑深色外壳，鲜艳渐变强调。
- Local light preview: [preview-site/mirrors/raycast-light.html](../../preview-site/mirrors/raycast-light.html)
- Local dark preview: [preview-site/mirrors/raycast-dark.html](../../preview-site/mirrors/raycast-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-raycast.png](../../preview-site/screenshots/getdesign-raycast.png)

## Design Intent

Design System Inspired by Raycast

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --bg | #07080a |
| --bg-100 | #101111 |
| --bg-card | #1b1c1e |
| --white | #ffffff |
| --fg | #f9f9f9 |
| --light-gray | #cecece |
| --silver | #c0c0c0 |
| --med-gray | #9c9c9d |
| --dim-gray | #6a6b6c |
| --dark-gray | #434345 |
| --border | #252829 |
| --dark-border | #2f3031 |
| --button-fg | #18191a |
| --red | #ff6363 |
| --blue | #55b3ff |
| --green | #5fc992 |
| --yellow | #ffbc33 |
| --red-t | rgba(255, 99, 99, 0.15) |
| --blue-t | rgba(85, 179, 255, 0.15) |
| --border-subtle | rgba(255, 255, 255, 0.06) |
| --border-med | rgba(255, 255, 255, 0.1) |
| --button-bg | hsla(0, 0%, 100%, 0.815) |
| --shadow-ring | rgb(27, 28, 30) 0px 0px 0px 1px, rgb(7, 8, 10) 0px 0px 0px 1px inset |
| --shadow-button | rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset |
| --shadow-float | rgba(0, 0, 0, 0.5) 0px 0px 0px 2px, rgba(255, 255, 255, 0.19) 0px 0px 14px 0px, rgba(0, 0, 0, 0.2) 0px -1px 0.4px 0px inset, rgb(255, 255, 255) 0px 1px 0.4px 0px inset |
| --font | 'Inter', -apple-system, BlinkMacSystemFont, sans-serif |
| --font-mono | 'GeistMono', ui-monospace, SFMono-Regular, monospace |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Near-Black Blue | #07080a | Page background |
| Near White | #f9f9f9 | Primary text |
| Raycast Red | #ff6363 | Brand accent, hero stripes |

### Secondary & Semantic

| Token | Value | Role |
| --- | --- | --- |
| Raycast Blue | #55b3ff | Links, interactive accent |
| Raycast Green | #5fc992 | Success states |
| Raycast Yellow | #ffbc33 | Warning, highlights |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Surface 100 | #101111 | Card backgrounds |
| Card Surface | #1b1c1e | Badge fills, elevated containers |
| Button White | hsla(0,0%,100%,0.815) | Primary CTA background |

### Neutrals & Text

| Token | Value | Role |
| --- | --- | --- |
| Light Gray | #cecece | Secondary text |
| Medium Gray | #9c9c9d | Links, nav, descriptions |
| Dim Gray | #6a6b6c | Disabled, low-emphasis |
| Dark Gray | #434345 | Muted borders, inactive |
| Border | #252829 | Card borders, dividers |

## Typography

- Display Hero — 64px / 600 / 1.10 / 0px -- Inter — OpenType: liga 0, ss02, ss08
- Section Display — 56px / 400 / 1.17 / +0.2px -- Inter — OpenType: calt, kern, liga, ss03
- Section Heading — 24px / 500 / normal / +0.2px -- Inter — OpenType: calt, kern, liga, ss03
- Card Heading — 22px / 400 / 1.15 -- Inter — OpenType: calt, kern, liga, ss03
- Body — 16px / 500 / 1.60 / +0.2px -- Inter — weight 500 baseline for dark-mode legibility
- Button — 16px / 600 / 1.15 / +0.3px -- Inter — semibold with wider tracking for CTAs
- Caption — 14px / 500 / 1.14 / +0.2px -- Inter — small labels, metadata
- Small — 12px / 600 / 1.33 -- Inter — badges, micro-labels
- Code — 14px / 500 / 1.60 / +0.3px -- GeistMono — code blocks, terminal output

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - |  | Browse thousands of extensions built by the community. Install with one click and customize to fit your workflow. |
| - |  | Chat with AI, generate text, translate, summarize — all from your command bar without switching context. |
| - |  | Never lose copied text again. Search your entire clipboard history and paste anything from the past. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Full Name | - | Enter your name |
| Email (Focus State) | - | you@raycast.com |
| API Key (Error State) | - | invalid-key-123 |

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

| Radius | Context |
| --- | --- |
|  | Micro |
|  | Keys |
|  | Buttons/Tags |
|  | Inputs |
|  | Cards |
|  | Large cards |
|  | Hero cards |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0 — Void | No shadow, flat on the dark canvas. The baseline everything rises from. |
| Level 1 — Subtle | Minimal lift. Fine drop shadow for inline elements. |
| Level 2 — Ring | Double-ring containment — outer + inset. The standard card treatment. |
| Level 3 — Button | macOS-native press — white top highlight, dark bottom inset, outer ring. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

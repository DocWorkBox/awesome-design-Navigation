# Warp Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Warp 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `warp`
- Category: 开发工具与 IDE
- Visual direction: 现代终端。深色 IDE 风格界面，块状命令交互。
- Local light preview: [preview-site/mirrors/warp-light.html](../../preview-site/mirrors/warp-light.html)
- Local dark preview: [preview-site/mirrors/warp-dark.html](../../preview-site/mirrors/warp-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-warp.png](../../preview-site/screenshots/getdesign-warp.png)

## Design Intent

Design System Inspired by Warp

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --bg | #0e0e0d |
| --bg-surface | #161615 |
| --parchment | #faf9f6 |
| --ash | #afaeac |
| --stone | #868584 |
| --purple-gray | #666469 |
| --earth | #353534 |
| --charcoal | #454545 |
| --border | rgba(226, 226, 226, 0.35) |
| --border-subtle | rgba(226, 226, 226, 0.15) |
| --frosted | rgba(255, 255, 255, 0.04) |
| --frosted-btn | rgba(255, 255, 255, 0.16) |
| --font | 'Inter', -apple-system, BlinkMacSystemFont, sans-serif |
| --font-mono | 'Geist Mono', ui-monospace, SFMono-Regular, monospace |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Warm Parchment | #faf9f6 | Primary text, barely-cream off-white |
| Earth Gray | #353534 | Button backgrounds, dark surfaces |
| Deep Void | #0e0e0d | Page background, warm near-black |

### Neutrals & Text

| Token | Value | Role |
| --- | --- | --- |
| Ash Gray | #afaeac | Body text, button text |
| Stone Gray | #868584 | Secondary text, labels |
| Purple-Tint Gray | #666469 | Link text, subtle purple undertone |

### Surface & Border

| Token | Value | Role |
| --- | --- | --- |
| Frosted Veil | rgba(255,255,255,0.04) | Subtle surface overlay |
| Mist Border | rgba(226,226,226,0.35) | Card borders, containment |
| Frosted Button | rgba(255,255,255,0.16) | Tag/inline button background |

## Typography

- Display Hero — 80px / 400 / 1.00 / -2.4px -- Matter Regular (shown in Inter fallback) — maximum compression
- Section Display — 56px / 400 / 1.20 / -0.56px -- Matter Regular — feature section headings
- Feature Heading — 40px / 400 / 1.10 / -0.4px -- Matter Regular — feature block titles
- Card Title — 22px / 500 / 1.14 -- Matter Medium — emphasized card headers
- Body Large — 20px / 400 / 1.40 / -0.2px -- Matter Regular — relaxed reading rhythm
- Body — 18px / 400 / 1.30 / -0.18px -- Matter Regular — standard body paragraphs
- Uppercase Label — 12px / 400 / 1.35 / 2.4px -- Matter Regular — editorial categorization, wide tracking
- Code — 16px / 400 / 1.00 -- Geist Mono / Matter Mono Regular — terminal display

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - |  | Blazingly fast terminal performance with native rendering and GPU acceleration for the smoothest experience. |
| - |  | Let AI agents handle complex terminal workflows — from debugging to deployment — while you focus on building. |
| - |  | Share terminal sessions, commands, and configurations with your team. Real-time collaborative development. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Full Name | - | Enter your name |
| Email (Focus) | - | you@warp.dev |
| API Key (Error) | - | invalid-key |

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

| Radius | Context |
| --- | --- |
|  | Tags |
|  | Buttons |
|  | Images |
|  | Cards |
|  | Large cards |
|  | Sections |
|  | Pill CTA |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0 — Flat | No shadow. The warm dark canvas baseline. Most surfaces rest here. |
| Level 1 — Veil | Ultra-subtle white overlay (rgba(255,255,255,0.04)). Barely visible differentiation. |
| Level 2 — Border | Semi-transparent border (rgba(226,226,226,0.35)). Ghostly containment for cards. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

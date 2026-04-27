# Mintlify Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Mintlify 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `mintlify`
- Category: 效率与 SaaS
- Visual direction: 文档平台。干净、绿色强调、阅读优化。
- Local light preview: [preview-site/mirrors/mintlify-light.html](../../preview-site/mirrors/mintlify-light.html)
- Local dark preview: [preview-site/mirrors/mintlify-dark.html](../../preview-site/mirrors/mintlify-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-mintlify.png](../../preview-site/screenshots/getdesign-mintlify.png)

## Design Intent

Design System Inspired by Mintlify

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --black | #0d0d0d |
| --white | #ffffff |
| --gray-50 | #fafafa |
| --gray-100 | #f5f5f5 |
| --gray-200 | #e5e5e5 |
| --gray-400 | #888888 |
| --gray-500 | #666666 |
| --gray-700 | #333333 |
| --brand | #18E299 |
| --brand-light | #d4fae8 |
| --brand-deep | #0fa76e |
| --warn | #c37d0d |
| --info-blue | #3772cf |
| --error | #d45656 |
| --border-subtle | rgba(0,0,0,0.05) |
| --border-medium | rgba(0,0,0,0.08) |
| --shadow-ambient | rgba(0,0,0,0.03) 0px 2px 4px |
| --shadow-button | rgba(0,0,0,0.06) 0px 1px 2px |
| --font-sans | 'Inter', system-ui, -apple-system, sans-serif |
| --font-mono | 'Geist Mono', ui-monospace, SFMono-Regular, 'Roboto Mono', Menlo, monospace |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Near Black | #0d0d0d | Primary text, headings |
| Pure White | #ffffff | Page background |
| Brand Green | #18E299 | Brand accent, CTAs |

### Brand Extended

| Token | Value | Role |
| --- | --- | --- |
| Green Light | #d4fae8 | Badge backgrounds |
| Green Deep | #0fa76e | Badge text |
| Annotate Green | #1ba673 | Code annotations |

### Semantic

| Token | Value | Role |
| --- | --- | --- |
| Info Blue | #3772cf | Tags, annotations |
| Warn Amber | #c37d0d | Warnings, caution |
| Error Red | #d45656 | Errors, destructive |

### Neutral Scale

| Token | Value | Role |
| --- | --- | --- |
| Gray 700 | #333333 | Secondary text |
| Gray 500 | #666666 | Tertiary text |
| Gray 400 | #888888 | Placeholders |
| Gray 200 | #e5e5e5 | Borders |
| Gray 100 | #f5f5f5 | Subtle surface |
| Gray 50 | #fafafa | Near-white tint |

## Typography

- Display Hero — 56px / 600 / 1.10 / -1.28px / Inter
- Section Heading — 40px / 600 / 1.10 / -0.8px / Inter
- Sub-heading — 24px / 500 / 1.30 / -0.24px / Inter
- Card Title — 20px / 600 / 1.30 / -0.2px / Inter
- Body Large — 18px / 400 / 1.50 / normal / Inter
- Body — 16px / 400 / 1.50 / normal / Inter
- Body Medium — 16px / 500 / 1.50 / Inter
- Button — 15px / 500 / 1.50 / Inter
- Link / Caption — 14px / 500 / 1.50 / Inter
- Label Uppercase — 13px / 500 / uppercase / 0.65px / Inter
- Mono Code — 12px / 500 / uppercase / 0.6px / Geist Mono
- Mono Micro — 10px / 500 / uppercase / Geist Mono

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Dark | Get Started |
| Ghost / Outline | Documentation |
| Brand Accent | Start Building |
| Pill Badge | Documentation |
| Info Badge | Info |
| Warning Badge | Warning |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Docs | Intelligent Search | AI-powered search that understands your documentation and delivers precise answers to developer questions. |
| API | API Reference | Auto-generated API documentation with interactive examples, authentication flows, and code snippets. |
| Analytics | Documentation Analytics | Track what developers search for, which pages perform best, and where they get stuck. |
| Featured | The Intelligent Knowledge Platform | Build beautiful documentation that powers your developer community. AI-enhanced, automatically updated, and always in sync with your codebase. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Email Address | Default (pill shape) | you@company.com |
| Organization | Focus (green ring) | Mintlify |
| API Key | Error (red ring) | invalid-key |

## Spacing

- 2px
- 4px
- 6px
- 8px
- 10px
- 12px
- 16px
- 24px
- 32px
- 48px
- 64px

## Border Radius

| Radius | Context |
| --- | --- |
| 4px | Code, tags |
| 8px | Nav buttons |
| 16px | Cards |
| 24px | Featured |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | No shadow |
| Level 1: Subtle | 5% border + ambient |
| Level 2: Medium | 8% border + ambient |
| Level 3: Raised | Stronger shadow |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

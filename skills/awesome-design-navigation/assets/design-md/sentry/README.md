# Sentry Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Sentry 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `sentry`
- Category: 后端、数据库与 DevOps
- Visual direction: 错误监控平台。深色仪表盘，数据密集，粉紫点缀。
- Local light preview: [preview-site/mirrors/sentry-light.html](../../preview-site/mirrors/sentry-light.html)
- Local dark preview: [preview-site/mirrors/sentry-dark.html](../../preview-site/mirrors/sentry-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-sentry.png](../../preview-site/screenshots/getdesign-sentry.png)

## Design Intent

Design System Inspired by Sentry

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --bg-primary | #1f1633 |
| --bg-deeper | #150f23 |
| --border-purple | #362d59 |
| --sentry-purple | #6a5fc1 |
| --muted-purple | #79628c |
| --deep-violet | #422082 |
| --lime-green | #c2ef4e |
| --coral | #ffb287 |
| --pink | #fa7faa |
| --button-border | #584674 |
| --text-primary | #ffffff |
| --text-secondary | #e5e7eb |
| --code-yellow | #dcdcaa |
| --glass-white | rgba(255, 255, 255, 0.18) |
| --glass-dark | rgba(54, 22, 107, 0.14) |
| --input-bg | #ffffff |
| --input-border | #cfcfdb |
| --shadow-ambient | rgba(22, 15, 36, 0.9) 0px 4px 4px 9px |
| --shadow-hover | rgba(0, 0, 0, 0.18) 0px 0.5rem 1.5rem |
| --shadow-card | rgba(0, 0, 0, 0.1) 0px 10px 15px -3px |
| --shadow-inset | rgba(0, 0, 0, 0.1) 0px 1px 3px 0px inset |
| --shadow-glass | rgba(0, 0, 0, 0.08) 0px 2px 8px |
| --font-ui | 'Rubik', -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif |
| --font-mono | Monaco, Menlo, 'Ubuntu Mono', monospace |
| --page-bg | #1f1633 |
| --section-bg | #150f23 |

## Color Palette

### Primary Brand

| Token | Value | Role |
| --- | --- | --- |
| Deep Purple | #1f1633 | Primary background |
| Darker Purple | #150f23 | Deeper sections, footer |
| Border Purple | #362d59 | Borders, dividers |

### Accent Colors

| Token | Value | Role |
| --- | --- | --- |
| Sentry Purple | #6a5fc1 | Links, hover, focus rings |
| Muted Purple | #79628c | Button backgrounds |
| Deep Violet | #422082 | Selects, active states |
| Lime Green | #c2ef4e | High-visibility accent |
| Coral | #ffb287 | Focus state backgrounds |
| Pink | #fa7faa | Focus outlines, decor |

### Text Colors

| Token | Value | Role |
| --- | --- | --- |
| Pure White | #ffffff | Primary text on dark |
| Light Gray | #e5e7eb | Secondary text |
| Code Yellow | #dcdcaa | Syntax highlighting |

### Surface & Overlay

| Token | Value | Role |
| --- | --- | --- |
| Glass White | rgba(255,255,255,0.18) | Frosted glass buttons |
| Glass Dark | rgba(54,22,107,0.14) | Hover overlay |
| Input Border | #cfcfdb | Form field borders |

## Typography

- Display Hero — 88px / 700 / 1.20 / Dammit Sans (approximated)
- Display Secondary — 60px / 500 / 1.10 / Dammit Sans (approximated)
- Section Heading — 30px / 400 / 1.20 / Rubik
- Sub-heading — 27px / 500 / 1.25 / Rubik
- Card Title — 24px / 500 / 1.25 / Rubik
- Feature Title — 20px / 600 / 1.25 / Rubik
- Body — 16px / 400 / 1.50 / Rubik
- Body Emphasis — 16px / 600 / 1.50 / Rubik
- Nav Label — 15px / 500 / 1.40 / Rubik
- Uppercase Label — 15px / 500 / 1.25 / Rubik / uppercase
- Button Text — 14px / 700 / 1.14 / Rubik / uppercase / 0.2px spacing
- Caption — 14px / 500 / 1.43 / Rubik / uppercase / 0.2px spacing
- Small Caption — 12px / 600 / 2.00 / Rubik
- Micro Label — 10px / 600 / 1.80 / Rubik / uppercase / 0.25px spacing
- Code — 16px / 400 / 1.50 / Monaco

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| White Solid | Start Building |
| Primary Muted | Get Started |
| Glass White | View Docs |
| Deep Violet | Select Plan |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | Error Tracking | Automatically capture and organize errors from your application. Get full stack traces, breadcrumbs, and context for every issue. |
| - | Performance Monitoring | Track transactions and identify slow database queries, API calls, and rendering issues. Card shown with hover elevation. |
| - |  | Frosted glass surface using backdrop-filter blur and white alpha overlay. Used for layered panels on dark backgrounds. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Email Address | Default state | you@example.com |
| Project Name | Focus state (inset shadow) | my-sentry-project |
| API Key | Error state (pink ring) | invalid-key-format |

## Spacing

- 1px
- 2px
- 4px
- 8px
- 12px
- 16px
- 24px
- 32px
- 40px
- 48px

## Border Radius

| Radius | Context |
| --- | --- |
| 6px | Inputs |
| 8px | Buttons, cards |
| 10px | Containers |
| 12px | Glass panels |
| 13px | Primary buttons |

## Elevation

| Level | Treatment |
| --- | --- |
| Level -1: Sunken | Inset shadow — tactile pressed buttons |
| Level 0: Flat | No shadow — default surfaces |
| Level 1: Surface | Glass buttons, subtle cards |
| Level 2: Elevated | Cards, floating panels |
| Level 3: Prominent | Hover states, modals |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

# Zapier Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Zapier 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `zapier`
- Category: 效率与 SaaS
- Visual direction: 自动化平台。暖橙色调，友好的插画驱动感。
- Local light preview: [preview-site/mirrors/zapier-light.html](../../preview-site/mirrors/zapier-light.html)
- Local dark preview: [preview-site/mirrors/zapier-dark.html](../../preview-site/mirrors/zapier-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-zapier.png](../../preview-site/screenshots/getdesign-zapier.png)

## Design Intent

Design System Inspired by Zapier

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --zapier-black | #201515 |
| --cream | #fffefb |
| --off-white | #fffdf9 |
| --charcoal | #36342e |
| --warm-gray | #939084 |
| --sand | #c5c0b1 |
| --light-sand | #eceae3 |
| --mid-warm | #b5b2aa |
| --orange | #ff4f00 |
| --shadow-tab-active | rgb(255, 79, 0) 0px -4px 0px 0px inset |
| --shadow-tab-hover | rgb(197, 192, 177) 0px -4px 0px 0px inset |
| --font-display | 'Degular Display', 'Inter', system-ui, -apple-system, sans-serif |
| --font-sans | 'Inter', Helvetica, Arial, sans-serif |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Zapier Black | #201515 | Primary text, headings |
| Cream White | #fffefb | Page background |
| Off White | #fffdf9 | Secondary surface |

### Brand Accent

| Token | Value | Role |
| --- | --- | --- |
| Zapier Orange | #ff4f00 | Primary CTA, active states |

### Neutral Scale

| Token | Value | Role |
| --- | --- | --- |
| Dark Charcoal | #36342e | Secondary text, borders |
| Warm Gray | #939084 | Muted text, labels |
| Sand | #c5c0b1 | Borders, dividers |
| Mid Warm | #b5b2aa | Alternate borders |
| Light Sand | #eceae3 | Ghost button bg, surfaces |

## Typography

- Display Hero — 56px / 500 / 0.90 / Degular Display
- Display Hero SM — 40px / 500 / 0.90 / Degular Display
- Section Heading — 48px / 500 / 1.04 / Inter
- Sub-heading LG — 36px / 500 / normal / -1px / Inter
- Card Title — 24px / 600 / normal / -0.48px / Inter
- Body Large — 20px / 400 / 1.40 / -0.2px / Inter
- Body Emphasis — 18px / 600 / 1.00 / Inter
- Body Medium — 16px / 500 / 1.25 / Inter
- Body Semibold — 16px / 600 / 1.16 / Inter
- Button — 14px / 600 / normal / Inter
- Caption — 14px / 500 / 1.43 / Inter
- Caption Upper — 14px / 600 / uppercase / 0.5px / Inter
- Micro — 12px / 600 / uppercase / 0.5px / Inter

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Orange | Start Free |
| Dark CTA | Get Started |
| Ghost / Light | Learn More |
| Pill | Integrations |
| Overlay | Play Video |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Integration | Connect Your Apps | Link your favorite tools and automate workflows between them. No code required, set up in minutes. |
| Featured | AI Automation | Build intelligent workflows with AI-powered actions. Transform, summarize, and route data automatically. |
| Workflow | Multi-step Zaps | Chain multiple actions together for complex automations. Trigger once, automate everything downstream. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Zap Name | Default (sand border) | My automation |
| Trigger App | Focus (orange border) | Gmail |
| Webhook URL | Error (red border) | invalid-url |

## Spacing

- 4px
- 8px
- 12px
- 16px
- 20px
- 24px
- 32px
- 40px
- 48px
- 64px

## Border Radius

| Radius | Context |
| --- | --- |
| 3px | Spans |
| 4px | Buttons |
| 5px | Cards |
| 8px | Large buttons |
| 14px | Social icons |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | No border emphasis |
| Level 1: Sand Border | 1px solid #c5c0b1 |
| Level 1b: Strong | 1px solid #36342e |
| Level 2: Active Tab | Inset orange underline |
| Level 2b: Hover Tab | Inset sand underline |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

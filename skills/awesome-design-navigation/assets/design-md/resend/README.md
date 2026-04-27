# Resend Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Resend 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `resend`
- Category: 效率与 SaaS
- Visual direction: 面向开发者的邮件 API。极简深色主题，等宽字细节。
- Local light preview: [preview-site/mirrors/resend-light.html](../../preview-site/mirrors/resend-light.html)
- Local dark preview: [preview-site/mirrors/resend-dark.html](../../preview-site/mirrors/resend-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-resend.png](../../preview-site/screenshots/getdesign-resend.png)

## Design Intent

Design System Inspired by Resend

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --void | #000000 |
| --near-white | #f0f0f0 |
| --white | #ffffff |
| --silver | #a1a4a5 |
| --dark-gray | #464a4d |
| --mid-gray | #5c5c5c |
| --orange-10 | #ff801f |
| --orange-11 | #ffa057 |
| --green-4 | #11ff99 |
| --blue-10 | #3b9eff |
| --yellow-9 | #ffc53d |
| --red-5 | #ff2047 |
| --frost-border | rgba(214, 235, 253, 0.19) |
| --frost-border-alt | rgba(217, 237, 254, 0.145) |
| --ring-shadow | rgba(176, 199, 217, 0.145) 0px 0px 0px 1px |
| --font-serif | 'DM Serif Display', Georgia, serif |
| --font-sans | 'Inter', ui-sans-serif, system-ui, sans-serif |
| --font-mono | 'Commit Mono', ui-monospace, SFMono-Regular, Menlo, monospace |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Void Black | #000000 | Page background |
| Near White | #f0f0f0 | Primary text |
| Pure White | #ffffff | Maximum emphasis |

### Accent Scale

| Token | Value | Role |
| --- | --- | --- |
| Orange 10 | #ff801f | Primary orange accent |
| Orange 11 | #ffa057 | Light orange |
| Green 4 | #11ff99 | Success / green accent |
| Blue 10 | #3b9eff | Interactive blue |
| Yellow 9 | #ffc53d | Warning / gold |
| Red 5 | #ff2047 | Error / destructive |

### Neutral Scale

| Token | Value | Role |
| --- | --- | --- |
| Silver | #a1a4a5 | Secondary text |
| Mid Gray | #5c5c5c | Muted labels |
| Dark Gray | #464a4d | Tertiary text |

### Border & Surface

| Token | Value | Role |
| --- | --- | --- |
| Frost Border | rgba(214,235,253,0.19) | Signature icy border |
| White Hover | rgba(255,255,255,0.28) | Button hover |

## Typography

- Display Hero — 96px / 400 / 1.00 / -0.96px / Domaine Display
- Section Heading — 56px / 400 / 1.20 / -2.8px / ABC Favorit
- Sub-heading — 20px / 400 / 1.30 / ABC Favorit
- Feature Title — 24px / 500 / 1.50 / Inter
- Body Large — 18px / 400 / 1.50 / Inter
- Body — 16px / 400 / 1.50 / Inter
- Nav Link — 14px / 500 / 1.43 / +0.35px / ABC Favorit
- Button — 14px / 500 / 1.43 / Inter
- Small Uppercase — 12px / 500 / uppercase / Inter
- Code Body — 16px / 400 / 1.50 / Commit Mono
- Code Small — 12px / 400 / 1.33 / Commit Mono

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| White Solid Pill | Get Started |
| Frost Pill | Documentation |
| Ghost | Learn more |
| Accent Badge | Email API |
| Blue Badge | Webhooks |
| Green Badge | Delivered |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Email API | First-class developer experience | Build with a simple, elegant interface that gets out of your way. Send emails with just a few lines of code. |
| Elevated | Reach humans, not spam | Deliver transactional emails at scale. Card shown with brighter frost border on hover. |
| Section | React Email | Build beautiful emails using React components. 24px radius section panel variant. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| API Key | Default (frost border) | re_123456789 |
| To Address | Focus (blue border) | user@example.com |
| Domain | Error (red border) | invalid-domain |

## Spacing

- 2px
- 4px
- 8px
- 12px
- 16px
- 20px
- 24px
- 32px
- 40px

## Border Radius

| Radius | Context |
| --- | --- |
| 4px | Inputs |
| 6px | Menus |
| 8px | Tabs |
| 12px | Containers |
| 16px | Cards |
| 24px | Sections |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | No shadow — void background |
| Level 1: Ring | Blue-tinted ring shadow |
| Level 1b: Frost | Icy frost border |
| Level 2: Subtle | Minimal card elevation |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

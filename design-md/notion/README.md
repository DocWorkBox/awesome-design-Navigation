# Notion Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Notion 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `notion`
- Category: 效率与 SaaS
- Visual direction: 一体化工作空间。温和极简、衬线标题、柔和表面。
- Local light preview: [preview-site/mirrors/notion-light.html](../../preview-site/mirrors/notion-light.html)
- Local dark preview: [preview-site/mirrors/notion-dark.html](../../preview-site/mirrors/notion-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-notion.png](../../preview-site/screenshots/getdesign-notion.png)

## Design Intent

Design System Inspired by Notion

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --black | rgba(0,0,0,0.95) |
| --black-solid | #000000 |
| --white | #ffffff |
| --warm-white | #f6f5f4 |
| --warm-dark | #31302e |
| --gray-500 | #615d59 |
| --gray-300 | #a39e98 |
| --notion-blue | #0075de |
| --active-blue | #005bab |
| --focus-blue | #097fe8 |
| --link-light-blue | #62aef0 |
| --badge-bg | #f2f9ff |
| --badge-text | #097fe8 |
| --teal | #2a9d99 |
| --green | #1aae39 |
| --orange | #dd5b00 |
| --pink | #ff64c8 |
| --purple | #391c57 |
| --brown | #523410 |
| --deep-navy | #213183 |
| --border-whisper | 1px solid rgba(0,0,0,0.1) |
| --shadow-card | rgba(0,0,0,0.04) 0px 4px 18px 0px, rgba(0,0,0,0.027) 0px 2.025px 7.85px 0px, rgba(0,0,0,0.02) 0px 0.8px 2.93px 0px, rgba(0,0,0,0.01) 0px 0.175px 1.04px 0px |
| --shadow-deep | rgba(0,0,0,0.01) 0px 1px 3px 0px, rgba(0,0,0,0.02) 0px 3px 7px 0px, rgba(0,0,0,0.02) 0px 7px 15px 0px, rgba(0,0,0,0.04) 0px 14px 28px 0px, rgba(0,0,0,0.05) 0px 23px 52px 0px |
| --font-sans | 'Inter', -apple-system, system-ui, 'Segoe UI', Helvetica, Arial, sans-serif |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Notion Black | rgba(0,0,0,0.95) | Primary text, headings |
| Pure White | #ffffff | Page background |
| Notion Blue | #0075de | Primary CTA, links |

### Warm Neutrals

| Token | Value | Role |
| --- | --- | --- |
| Warm White | #f6f5f4 | Surface tint, sections |
| Warm Dark | #31302e | Dark surfaces |
| Warm Gray 500 | #615d59 | Secondary text |
| Warm Gray 300 | #a39e98 | Placeholder, muted |

### Semantic Accents

| Token | Value | Role |
| --- | --- | --- |
| Teal | #2a9d99 | Success states |
| Green | #1aae39 | Confirmation |
| Orange | #dd5b00 | Warning |
| Pink | #ff64c8 | Decorative accent |
| Purple | #391c57 | Premium features |
| Brown | #523410 | Earthy accent |

### Interactive

| Token | Value | Role |
| --- | --- | --- |
| Active Blue | #005bab | Button active state |
| Focus Blue | #097fe8 | Focus ring |
| Deep Navy | #213183 | Brand secondary |
| Badge Bg | #f2f9ff | Pill badge surface |

## Typography

- Display Hero -- 64px / 700 / 1.00 / -2.125px / Inter
- Display Secondary -- 54px / 700 / 1.04 / -1.875px / Inter
- Section Heading -- 48px / 700 / 1.00 / -1.5px / Inter
- Sub-heading Large -- 40px / 700 / 1.50 / normal / Inter
- Sub-heading -- 26px / 700 / 1.23 / -0.625px / Inter
- Card Title -- 22px / 700 / 1.27 / -0.25px / Inter
- Body Large -- 20px / 600 / 1.40 / -0.125px / Inter
- Body Medium -- 16px / 500 / 1.50 / Inter
- Body -- 16px / 400 / 1.50 / Inter
- Nav / Button -- 15px / 600 / 1.33 / Inter
- Caption -- 14px / 500 / 1.43 / Inter
- Badge -- 12px / 600 / 1.33 / 0.125px / Inter

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Blue | Get Notion free |
| Secondary | Request a demo |
| Pill Badge | New |
| Teal Badge | Available |
| Orange Badge | Warning |
| Green Badge | Confirmed |

## Cards

_No card examples were found in the local mirror._

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Workspace Name | Default | My Team Workspace |
| Email Address | Focus (blue ring) | team@company.com |
| Domain | Error (orange ring) | invalid domain |

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

| Radius | Context |
| --- | --- |
| 4px | Buttons, inputs |
| 5px | Links, menus |
| 8px | Small cards |
| 12px | Cards |
| 16px | Hero cards |
| 9999px | Badges |

## Elevation

_No elevation examples were found in the local mirror._

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

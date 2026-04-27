# Linear Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Linear 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `linear.app`
- Category: 效率与 SaaS
- Visual direction: 面向工程团队的项目管理。极简、精确、紫色强调。
- Local light preview: [preview-site/mirrors/linear.app-light.html](../../preview-site/mirrors/linear.app-light.html)
- Local dark preview: [preview-site/mirrors/linear.app-dark.html](../../preview-site/mirrors/linear.app-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-linear.app.png](../../preview-site/screenshots/getdesign-linear.app.png)

## Design Intent

Design System Inspired by Linear

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --bg-page | #f7f8f8 |
| --bg-surface | #ffffff |
| --bg-panel | #f3f4f5 |
| --text-primary | #1a1a1e |
| --text-secondary | #3c3c43 |
| --text-tertiary | #62666d |
| --text-quaternary | #8a8f98 |
| --brand | #5e6ad2 |
| --accent | #7170ff |
| --accent-hover | #828fff |
| --success | #27a644 |
| --emerald | #10b981 |
| --border-primary | #d0d6e0 |
| --border-subtle | #e6e6e6 |
| --border-light | rgba(0,0,0,0.08) |
| --shadow-ring | rgba(0,0,0,0.08) 0px 0px 0px 1px |
| --shadow-subtle | rgba(0,0,0,0.04) 0px 2px 4px 0px |
| --shadow-card | rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 4px 0px |
| --shadow-elevated | rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 4px 12px 0px |
| --font-sans | 'Inter', -apple-system, system-ui, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif |
| --font-mono | 'Berkeley Mono', ui-monospace, 'SF Mono', Menlo, monospace |

## Color Palette

### Background Surfaces

| Token | Value | Role |
| --- | --- | --- |
| Marketing Black | #08090a | Hero backgrounds |
| Panel Dark | #0f1011 | Sidebar, panels |
| Level 3 | #191a1b | Elevated surfaces |
| Secondary | #28282c | Hover states |

### Text & Content

| Token | Value | Role |
| --- | --- | --- |
| Primary Text | #f7f8f8 | Headings, primary |
| Secondary Text | #d0d6e0 | Body text |
| Tertiary Text | #8a8f98 | Placeholders |
| Quaternary Text | #62666d | Disabled, timestamps |

### Brand & Accent

| Token | Value | Role |
| --- | --- | --- |
| Brand Indigo | #5e6ad2 | CTA backgrounds |
| Accent Violet | #7170ff | Links, active states |
| Accent Hover | #828fff | Hover states |
| Security Lavender | #7a7fad | Security UI |

### Status

| Token | Value | Role |
| --- | --- | --- |
| Green | #27a644 | Success, active |
| Emerald | #10b981 | Badges, completion |

### Border & Dividers

| Token | Value | Role |
| --- | --- | --- |
| Border Primary | #23252a | Strong borders |
| Border Secondary | #34343a | Medium borders |
| Border Tertiary | #3e3e44 | Lighter borders |
| Light Border | #e6e6e6 | Light mode borders |

### Light Mode Neutrals

| Token | Value | Role |
| --- | --- | --- |
| Light Bg | #f7f8f8 | Light page background |
| Light Surface | #f3f4f5 | Surface tint |
| Pure White | #ffffff | Card surfaces |
| Light Border | #d0d6e0 | Light mode dividers |

## Typography

- Display — 48px / 510 / 1.00 / -1.056px / Inter Variable
- Heading 1 — 32px / 400 / 1.13 / -0.704px / Inter Variable
- Heading 2 — 24px / 400 / 1.33 / -0.288px / Inter Variable
- Heading 3 — 20px / 590 / 1.33 / -0.24px / Inter Variable
- Body Large — 18px / 400 / 1.60 / -0.165px / Inter Variable
- Body Medium — 16px / 510 / 1.50 / Inter Variable
- Small — 15px / 400 / 1.60 / -0.165px / Inter Variable
- Caption — 14px / 510 / 1.50 / -0.182px / Inter Variable
- Meta — 13px / 510 / 1.50 / -0.13px / Inter Variable
- Label — 12px / 510 / 1.40 / Inter Variable
- Mono Body — 14px / 400 / 1.50 / Berkeley Mono
- Mono Label — 12px / 400 / uppercase / Berkeley Mono

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Brand | Start Building |
| Ghost | Documentation |
| Status Pill | In Progress |
| Success Pill | Done |
| Subtle Badge | v2.4 |
| Pill Chip | Filter |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Issues | Issue Tracking | Plan and track work across teams. Linear's issue tracker is designed for speed, with keyboard shortcuts for every action. |
| Cycles | Sprint Cycles | Time-boxed work periods that keep teams focused. Automatic rollover and progress tracking built in. |
| Roadmaps | Product Roadmaps | Visualize direction and progress. Connect issues to projects and track milestones across your entire product. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Issue Title | Default | Enter issue title... |
| Assignee | Focus (accent ring) | @alice |
| Priority | Error (red ring) | invalid priority |

## Spacing

- 4px
- 8px
- 12px
- 16px
- 20px
- 24px
- 32px
- 35px

## Border Radius

| Radius | Context |
| --- | --- |
| 2px | Badges |
| 4px | Small |
| 6px | Buttons |
| 8px | Cards |
| 12px | Panels |
| 22px | Large |
| 9999px | Pills |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | No shadow |
| Level 1: Subtle | Micro-elevation |
| Level 2: Card | Ring + subtle lift |
| Level 3: Elevated | Ring + deeper shadow |
| Focus | Accent ring |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

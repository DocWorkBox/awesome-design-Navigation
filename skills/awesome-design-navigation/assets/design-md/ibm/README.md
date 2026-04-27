# IBM Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 IBM 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `ibm`
- Category: 媒体与消费科技
- Visual direction: 企业科技。Carbon 设计系统，结构化蓝色体系。
- Local light preview: [preview-site/mirrors/ibm-light.html](../../preview-site/mirrors/ibm-light.html)
- Local dark preview: [preview-site/mirrors/ibm-dark.html](../../preview-site/mirrors/ibm-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-ibm.png](../../preview-site/screenshots/getdesign-ibm.png)

## Design Intent

Design System Inspired by IBM

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value from the Carbon Design System — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #ffffff |
| --gray-10 | #f4f4f4 |
| --gray-10-hover | #e8e8e8 |
| --gray-20 | #e0e0e0 |
| --gray-30 | #c6c6c6 |
| --gray-50 | #8d8d8d |
| --gray-60 | #6f6f6f |
| --gray-70 | #525252 |
| --gray-80 | #393939 |
| --gray-90 | #262626 |
| --gray-100 | #161616 |
| --blue-10 | #edf5ff |
| --blue-60 | #0f62fe |
| --blue-70 | #0043ce |
| --blue-80 | #002d9c |
| --red-60 | #da1e28 |
| --green-50 | #24a148 |
| --yellow-30 | #f1c21b |
| --font-sans | 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif |
| --font-mono | 'IBM Plex Mono', Menlo, Courier, monospace |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Blue 60 | #0f62fe | Primary interactive |
| White | #ffffff | Page background |
| Gray 100 | #161616 | Primary text, nav |

### Blue Scale

| Token | Value | Role |
| --- | --- | --- |
| Blue 10 | #edf5ff | Tint surface |
| Blue 60 | #0f62fe | Primary action |
| Blue 70 | #0043ce | Link hover |
| Blue 80 | #002d9c | Active/pressed |

### Neutral Scale

| Token | Value | Role |
| --- | --- | --- |
| Gray 10 | #f4f4f4 | Layer 01 surface |
| Gray 20 | #e0e0e0 | Subtle borders |
| Gray 30 | #c6c6c6 | Borders, dividers |
| Gray 50 | #8d8d8d | Disabled icons |
| Gray 60 | #6f6f6f | Placeholder text |
| Gray 70 | #525252 | Secondary text |
| Gray 80 | #393939 | Secondary button |
| Gray 90 | #262626 | Dark surfaces |
| Gray 100 | #161616 | Primary text |

### Support & Status

| Token | Value | Role |
| --- | --- | --- |
| Red 60 | #da1e28 | Error / Danger |
| Green 50 | #24a148 | Success |
| Yellow 30 | #f1c21b | Warning |
| Blue 60 | #0f62fe | Informational |

## Typography

- Display 01 — 60px / 300 / 1.17 / IBM Plex Sans
- Display 02 — 48px / 300 / 1.17 / IBM Plex Sans
- Heading 01 — 42px / 300 / 1.19 / IBM Plex Sans
- Heading 02 — 32px / 400 / 1.25 / IBM Plex Sans
- Heading 03 — 24px / 400 / 1.33 / IBM Plex Sans
- Heading 04 — 20px / 600 / 1.40 / IBM Plex Sans
- Body Long 01 — 16px / 400 / 1.50 / IBM Plex Sans
- Body Short 01 — 14px / 400 / 1.29 / 0.16px / IBM Plex Sans
- Caption 01 — 12px / 400 / 1.33 / 0.32px / IBM Plex Sans
- Code 01 — 14px / 400 / 1.43 / 0.16px / IBM Plex Mono
- Mono Display — 42px / 400 / 1.19 / IBM Plex Mono

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary (Blue 60) | Primary button |
| Secondary (Gray 80) | Secondary button |
| Tertiary (Ghost Blue) | Tertiary button |
| Ghost | Ghost button |
| Danger (Red 60) | Delete resource |
| Tag / Label | AI Ready |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | IBM Cloud Pak | Modernize and build cloud-native applications anywhere with an open, faster, and more secure foundation. |
| - | watsonx | Scale and accelerate the impact of AI across your business with a next-generation enterprise studio. |
| - | Business Automation | Automate business and IT operations with AI-powered decision-making and intelligent workflows. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Project name | - | e.g. my-cloud-project |
| API endpoint | - | https://api.ibm.com/v1 |
| Region | - | invalid-region |

## Spacing

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
| 0px | Buttons, inputs, cards |
| 2px | Small elements |
| 24px | Tags / Labels |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | White surface, no shadow |
| Layer 01 | Gray 10 (#f4f4f4) |
| Layer 02 | Gray 20 (#e0e0e0) |
| Raised | Dropdowns, tooltips |
| Focus | 2px inset Blue 60 |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

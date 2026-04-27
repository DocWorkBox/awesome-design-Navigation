# Vercel Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Vercel 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `vercel`
- Category: 开发工具与 IDE
- Visual direction: 前端部署平台。黑白精密感，Geist 字体气质。
- Local light preview: [preview-site/mirrors/vercel-light.html](../../preview-site/mirrors/vercel-light.html)
- Local dark preview: [preview-site/mirrors/vercel-dark.html](../../preview-site/mirrors/vercel-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-vercel.png](../../preview-site/screenshots/getdesign-vercel.png)

## Design Intent

Design System Inspired by Vercel

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --black | #171717 |
| --white | #ffffff |
| --gray-50 | #fafafa |
| --gray-100 | #ebebeb |
| --gray-400 | #808080 |
| --gray-500 | #666666 |
| --gray-600 | #4d4d4d |
| --link-blue | #0072f5 |
| --focus-blue | hsl(212,100%,48%) |
| --ship-red | #ff5b4f |
| --preview-pink | #de1d8d |
| --develop-blue | #0a72ef |
| --console-blue | #0070f3 |
| --console-purple | #7928ca |
| --console-pink | #eb367f |
| --badge-bg | #ebf5ff |
| --badge-text | #0068d6 |
| --shadow-ring | rgba(0,0,0,0.08) 0px 0px 0px 1px |
| --shadow-ring-light | rgb(235,235,235) 0px 0px 0px 1px |
| --shadow-subtle | rgba(0,0,0,0.04) 0px 2px 2px 0px |
| --shadow-card | rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px 0px, rgb(250,250,250) 0px 0px 0px 1px |
| --shadow-card-full | rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px 0px, rgba(0,0,0,0.04) 0px 8px 8px -8px, rgb(250,250,250) 0px 0px 0px 1px |
| --font-sans | 'Geist', system-ui, -apple-system, Arial, sans-serif |
| --font-mono | 'Geist Mono', ui-monospace, SFMono-Regular, 'Roboto Mono', Menlo, monospace |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Vercel Black | #171717 | Primary text, headings |
| Pure White | #ffffff | Page background |
| True Black | #000000 | Console text default |

### Workflow Accents

| Token | Value | Role |
| --- | --- | --- |
| Develop Blue | #0a72ef | Development workflow |
| Preview Pink | #de1d8d | Preview deployments |
| Ship Red | #ff5b4f | Ship to production |

### Console Colors

| Token | Value | Role |
| --- | --- | --- |
| Console Blue | #0070f3 | Syntax blue |
| Console Purple | #7928ca | Syntax purple |
| Console Pink | #eb367f | Syntax pink |

### Neutral Scale

| Token | Value | Role |
| --- | --- | --- |
| Gray 600 | #4d4d4d | Secondary text |
| Gray 500 | #666666 | Tertiary text |
| Gray 400 | #808080 | Placeholders |
| Gray 100 | #ebebeb | Borders, dividers |
| Gray 50 | #fafafa | Subtle surface tint |

### Interactive

| Token | Value | Role |
| --- | --- | --- |
| Link Blue | #0072f5 | Links |
| Focus Blue | hsl(212,100%,48%) | Focus ring |
| Badge Bg | #ebf5ff | Pill badge surface |

## Typography

- Display Hero — 48px / 600 / 1.00 / -2.4px / Geist
- Section Heading — 40px / 600 / 1.20 / -2.4px / Geist
- Sub-heading — 32px / 600 / 1.25 / -1.28px / Geist
- Card Title — 24px / 600 / 1.33 / -0.96px / Geist
- Card Title Light — 24px / 500 / 1.33 / -0.96px / Geist
- Body Large — 20px / 400 / 1.80 / normal / Geist
- Body Medium — 16px / 500 / 1.50 / Geist
- Body Semibold — 16px / 600 / 1.50 / -0.32px / Geist
- Button / Link — 14px / 500 / 1.43 / Geist
- Caption — 12px / 500 / 1.33 / Geist
- Mono Body — 16px / 400 / 1.50 / Geist Mono
- Mono Label — 12px / 500 / uppercase / Geist Mono
- Micro Badge — 7px / 700 / uppercase / Geist

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Dark | Start Deploying |
| Ghost / Shadow | Documentation |
| Pill Badge | AI Optimized |
| Workflow Pill | Develop |
| Workflow Pill | Preview |
| Workflow Pill | Ship |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Framework | Next.js Integration | Zero-config deployments for Next.js applications. Automatic optimizations, edge rendering, and instant rollbacks. |
| Elevated | Edge Functions | Run serverless functions at the edge with sub-millisecond cold starts. Card shown with full shadow stack. |
| AI | v0 by Vercel | Generate UI with AI. Describe what you want and v0 creates the code using shadcn/ui and Tailwind CSS. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Project Name | Default (shadow-border) | my-next-app |
| Repository | Focus (blue ring) | vercel/next.js |
| Domain | Error (red ring) | invalid domain |

## Spacing

- 2px
- 4px
- 6px
- 8px
- 12px
- 16px
- 32px
- 40px

## Border Radius

| Radius | Context |
| --- | --- |
| 2px | Code spans |
| 4px | Small |
| 6px | Buttons |
| 8px | Cards |
| 12px | Images |
| 64px | Tabs |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | No shadow |
| Level 1: Ring | Shadow-as-border |
| Level 1b: Light Ring | Lighter ring |
| Level 2: Card | Ring + subtle lift |
| Level 3: Full Card | Ring + lift + ambient + glow |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

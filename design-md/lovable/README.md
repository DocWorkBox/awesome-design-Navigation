# Lovable Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Lovable 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `lovable`
- Category: 开发工具与 IDE
- Visual direction: AI 全栈构建器。活泼渐变，亲和的开发者审美。
- Local light preview: [preview-site/mirrors/lovable-light.html](../../preview-site/mirrors/lovable-light.html)
- Local dark preview: [preview-site/mirrors/lovable-dark.html](../../preview-site/mirrors/lovable-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-lovable.png](../../preview-site/screenshots/getdesign-lovable.png)

## Design Intent

Design System Inspired by Lovable

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --cream | #f7f4ed |
| --charcoal | #1c1c1c |
| --off-white | #fcfbf8 |
| --border-light | #eceae4 |
| --muted | #5f5f5d |
| --charcoal-40 | rgba(28,28,28,0.4) |
| --charcoal-83 | rgba(28,28,28,0.83) |
| --charcoal-04 | rgba(28,28,28,0.04) |
| --charcoal-03 | rgba(28,28,28,0.03) |
| --ring-blue | rgba(59,130,246,0.5) |
| --focus-shadow | rgba(0,0,0,0.1) 0px 4px 12px |
| --shadow-inset | rgba(255,255,255,0.2) 0px 0.5px 0px 0px inset, rgba(0,0,0,0.2) 0px 0px 0px 0.5px inset, rgba(0,0,0,0.05) 0px 1px 2px 0px |
| --font-primary | 'DM Sans', ui-sans-serif, system-ui, -apple-system, sans-serif |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Cream | #f7f4ed | Page background |
| Charcoal | #1c1c1c | Primary text, headings |
| Off-White | #fcfbf8 | Button text on dark |

### Neutral Scale (Opacity-Based)

| Token | Value | Role |
| --- | --- | --- |
| Charcoal 83% | rgba(28,28,28,0.83) | Strong secondary |
| Muted Gray | #5f5f5d | Body text, captions |
| Charcoal 40% | rgba(28,28,28,0.4) | Interactive borders |
| Charcoal 4% | rgba(28,28,28,0.04) | Hover tint |
| Charcoal 3% | rgba(28,28,28,0.03) | Subtle overlay |

### Surface & Border

| Token | Value | Role |
| --- | --- | --- |
| Light Cream | #eceae4 | Borders, dividers |

### Interactive

| Token | Value | Role |
| --- | --- | --- |
| Ring Blue | rgba(59,130,246,0.5) | Focus ring |

## Typography

- Display Hero — 60px / 600 / 1.10 / -1.5px / Camera Plain Variable
- Section Heading — 48px / 600 / 1.00 / -1.2px / Camera Plain Variable
- Sub-heading — 36px / 600 / 1.10 / -0.9px / Camera Plain Variable
- Card Title — 20px / 400 / 1.25 / Camera Plain Variable
- Body Large — 18px / 400 / 1.38 / Camera Plain Variable
- Body — 16px / 400 / 1.50 / Camera Plain Variable
- Button / Link — 14px / 400 / 1.50 / Camera Plain Variable
- Caption — 14px / 400 / 1.50 / Camera Plain Variable

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Dark | Start Building |
| Ghost / Outline | Documentation |
| Cream Surface | Settings |
| Pill Icon | + |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Template | Portfolio Website | A minimal portfolio template with project showcase, about section, and contact form. Built with modern design principles. |
| Featured | AI Chat Application | Full-stack AI chat interface with streaming responses, conversation history, and customizable prompts. Hover-state border shown. |
| Starter | SaaS Dashboard | Analytics dashboard with charts, data tables, and user management. Integrates with common APIs and databases. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Project Name | Default (border) | my-lovable-app |
| Repository | Focus (blue ring) | lovable/my-project |
| Domain | Error (red ring) | invalid domain |

## Spacing

- 8px
- 10px
- 12px
- 16px
- 24px
- 32px
- 40px
- 56px
- 80px

## Border Radius

| Radius | Context |
| --- | --- |
| 4px | Small |
| 6px | Buttons |
| 8px | Compact |
| 12px | Cards |
| 16px | Containers |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | No shadow, cream bg |
| Level 1: Bordered | 1px solid #eceae4 |
| Level 2: Inset | Button inset shadow |
| Level 3: Focus | Focus shadow glow |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

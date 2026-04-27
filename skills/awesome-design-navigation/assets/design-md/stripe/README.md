# Stripe Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Stripe 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `stripe`
- Category: 金融科技与加密
- Visual direction: 支付基础设施。标志性紫色渐变，轻量字重的优雅感。
- Local light preview: [preview-site/mirrors/stripe-light.html](../../preview-site/mirrors/stripe-light.html)
- Local dark preview: [preview-site/mirrors/stripe-dark.html](../../preview-site/mirrors/stripe-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-stripe.png](../../preview-site/screenshots/getdesign-stripe.png)

## Design Intent

Design System Inspired by Stripe

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value -- visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --purple | #533afd |
| --purple-hover | #4434d4 |
| --purple-deep | #2e2b8c |
| --purple-light | #b9b9f9 |
| --purple-mid | #665efd |
| --navy | #061b31 |
| --dark-navy | #0d253d |
| --brand-dark | #1c1e54 |
| --white | #ffffff |
| --ruby | #ea2261 |
| --magenta | #f96bee |
| --magenta-light | #ffd7ef |
| --success | #15be53 |
| --success-text | #108c3d |
| --lemon | #9b6829 |
| --slate | #64748d |
| --dark-slate | #273951 |
| --border | #e5edf5 |
| --border-purple | #b9b9f9 |
| --border-soft | #d6d9fc |
| --shadow-blue | rgba(50,50,93,0.25) |
| --shadow-dark-blue | rgba(3,3,39,0.25) |
| --shadow-black | rgba(0,0,0,0.1) |
| --shadow-ambient | rgba(23,23,23,0.08) |
| --shadow-soft | rgba(23,23,23,0.06) |
| --shadow-card | rgba(50,50,93,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px |
| --shadow-ambient-card | rgba(23,23,23,0.08) 0px 15px 35px 0px |
| --shadow-subtle | rgba(23,23,23,0.06) 0px 3px 6px 0px |
| --font-primary | 'sohne-var', 'SF Pro Display', -apple-system, system-ui, sans-serif |
| --font-mono | 'Source Code Pro', SFMono-Regular, ui-monospace, Menlo, monospace |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Stripe Purple | #533afd | Primary brand, CTA |
| Deep Navy | #061b31 | Headings |
| White | #ffffff | Page background |

### Brand & Dark

| Token | Value | Role |
| --- | --- | --- |
| Brand Dark | #1c1e54 | Dark sections |
| Dark Navy | #0d253d | Darkest neutral |

### Accent

| Token | Value | Role |
| --- | --- | --- |
| Ruby | #ea2261 | Accent, alerts |
| Magenta | #f96bee | Gradients, decorative |
| Magenta Light | #ffd7ef | Tinted surface |

### Interactive Purple Scale

| Token | Value | Role |
| --- | --- | --- |
| Purple Hover | #4434d4 | CTA hover state |
| Purple Mid | #665efd | Range selectors |
| Purple Light | #b9b9f9 | Subdued hover bg |
| Purple Deep | #2e2b8c | Icon hover |

### Neutral & Status

| Token | Value | Role |
| --- | --- | --- |
| Dark Slate | #273951 | Labels |
| Slate | #64748d | Body text |
| Border | #e5edf5 | Default border |
| Success | #15be53 | Status, badges |
| Lemon | #9b6829 | Warning accent |

### Border & Surface

| Token | Value | Role |
| --- | --- | --- |
| Border Soft | #d6d9fc | Purple-tinted border |
| Dashed Border | #362baa | Drop zones |

## Typography

- Display Hero -- 56px / 300 / 1.03 / -1.4px / sohne-var "ss01"
- Display Large -- 48px / 300 / 1.15 / -0.96px / sohne-var "ss01"
- Section Heading -- 32px / 300 / 1.10 / -0.64px / sohne-var "ss01"
- Sub-heading -- 26px / 300 / 1.12 / -0.26px / sohne-var "ss01"
- Sub-heading -- 22px / 300 / 1.10 / -0.22px / sohne-var "ss01"
- Body Large -- 18px / 300 / 1.40 / normal / sohne-var "ss01"
- Body -- 16px / 300 / 1.40 / normal / sohne-var "ss01"
- Button -- 16px / 400 / 1.00 / normal / sohne-var "ss01"
- Link -- 14px / 400 / 1.00 / normal / sohne-var "ss01"
- Caption -- 12px / 300 / 1.45 / normal / sohne-var "ss01"
- Tabular Numbers -- 12px / 300 / 1.33 / -0.36px / sohne-var "tnum"
- Code Body -- 12px / 500 / 2.00 / Source Code Pro
- Code Label -- 12px / 500 / uppercase / Source Code Pro

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Purple | Start now |
| Ghost / Outlined | Documentation |
| Transparent Info | Learn more |
| Neutral Ghost | Disabled |
| Success Badge | Active |
| Neutral Badge | v2024-12 |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Payments | Online Payments | Accept payments online with a fully integrated suite of payment products. Optimized for conversion with pre-built checkout pages. |
| Elevated | Revenue Recognition | Automate your revenue reporting. Card shown with full blue-tinted shadow stack for elevated importance. |
| Connect | Platform Payments | Build a marketplace or platform with multi-party payments, instant payouts, and flexible revenue sharing. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| API Key Name | Default | my-api-key |
| Webhook URL | Focus (purple ring) | https://api.example.com/webhook |
| Email Address | Error (ruby ring) | invalid-email |

## Spacing

- 2px
- 4px
- 6px
- 8px
- 10px
- 12px
- 14px
- 16px
- 18px
- 20px

## Border Radius

| Radius | Context |
| --- | --- |
| 1px | Micro |
| 4px | Buttons, inputs |
| 5px | Standard cards |
| 6px | Nav, large cards |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | No shadow |
| Level 1: Subtle | Ambient soft |
| Level 2: Standard | Ambient card |
| Level 3: Elevated | Blue-tinted dual layer |
| Level 4: Deep | Dark blue-tinted |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

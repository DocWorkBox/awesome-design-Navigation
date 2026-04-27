# Wise Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Wise 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `wise`
- Category: 金融科技与加密
- Visual direction: 国际汇款平台。明亮绿色强调，清晰且友好。
- Local light preview: [preview-site/mirrors/wise-light.html](../../preview-site/mirrors/wise-light.html)
- Local dark preview: [preview-site/mirrors/wise-dark.html](../../preview-site/mirrors/wise-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-wise.png](../../preview-site/screenshots/getdesign-wise.png)

## Design Intent

Design System Inspired by Wise

A design token catalog generated from DESIGN.md. Every color, font, and component — bold, green, and borderless.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #ffffff |
| --black | #0e0f0c |
| --green | #9fe870 |
| --dark-green | #163300 |
| --mint | #e2f6d5 |
| --gray | #868685 |
| --warm-dark | #454745 |
| --light | #e8ebe6 |
| --danger | #d03238 |
| --warning | #ffd11a |
| --font | 'Inter',Helvetica,Arial,sans-serif |

## Color Palette

### Brand

| Token | Value | Role |
| --- | --- | --- |
| Near Black | #0e0f0c | Primary text |
| Wise Green | #9fe870 | Primary CTA |
| Dark Green | #163300 | Button text on green |
| Mint | #e2f6d5 | Soft green surface |

### Semantic

| Token | Value | Role |
| --- | --- | --- |
| Positive | #054d28 | Success |
| Danger | #d03238 | Error |
| Warning | #ffd11a | Warning |
| Orange | #ffc091 | Warm accent |

### Neutral

| Token | Value | Role |
| --- | --- | --- |
| Warm Dark | #454745 | Secondary text |
| Gray | #868685 | Muted text |
| Light | #e8ebe6 | Light surface |

## Typography

- Display — 126px / 900 / 0.85 / Wise Sans / "calt"
- Section — 40px / 900 / 0.85 / Wise Sans
- Card — 22px / 600 / 1.25 / -0.396px / Inter
- Body — 18px / 400 / 1.44 / +0.18px / Inter
- Semibold — 18px / 600 / 1.44 / -0.108px / Inter
- Caption — 14px / 600 / 1.55 / -0.084px / Inter

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Green | Send Money |
| Subtle | Learn More |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | International Transfers | Send money to 80+ countries at the real exchange rate. No markup, just a small, transparent fee. |
| - | Multi-currency Account | Hold and convert 40+ currencies. Spend abroad with the Wise card. Green accent card variant. |
| - | Business Account | Pay invoices, receive payments, and manage your international finances in one place. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Amount | Default | 1,000.00 GBP |
| Recipient | Focus (green ring) | John Smith |
| IBAN | Error | invalid |

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

_No elevation examples were found in the local mirror._

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

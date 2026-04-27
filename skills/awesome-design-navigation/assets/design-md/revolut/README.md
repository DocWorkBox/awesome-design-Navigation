# Revolut Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Revolut 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `revolut`
- Category: 金融科技与加密
- Visual direction: 数字银行。流畅深色界面，渐变卡片，金融科技精密感。
- Local light preview: [preview-site/mirrors/revolut-light.html](../../preview-site/mirrors/revolut-light.html)
- Local dark preview: [preview-site/mirrors/revolut-dark.html](../../preview-site/mirrors/revolut-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-revolut.png](../../preview-site/screenshots/getdesign-revolut.png)

## Design Intent

Design System Inspired by Revolut

A design token catalog generated from DESIGN.md. Every color, font, and component — visualized with fintech precision.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #ffffff |
| --dark | #191c1f |
| --light | #f4f4f4 |
| --blue | #494fdf |
| --action | #4f55f1 |
| --danger | #e23b4a |
| --pink | #e61e49 |
| --warning | #ec7e00 |
| --teal | #00a87e |
| --yellow | #b09000 |
| --gray | #8d969e |
| --slate | #505a63 |
| --border | #c9c9cd |
| --font-display | 'DM Sans',system-ui,sans-serif |
| --font-body | 'Inter',system-ui,sans-serif |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Revolut Dark | #191c1f | Dark surface, text |
| White | #ffffff | Light surface |
| Light | #f4f4f4 | Secondary surface |

### Semantic

| Token | Value | Role |
| --- | --- | --- |
| Blue | #494fdf | Brand blue |
| Danger | #e23b4a | Error |
| Teal | #00a87e | Success |
| Warning | #ec7e00 | Warning |
| Deep Pink | #e61e49 | Critical |
| Yellow | #b09000 | Attention |

### Neutral

| Token | Value | Role |
| --- | --- | --- |
| Slate | #505a63 | Secondary text |
| Gray | #8d969e | Muted text |
| Border | #c9c9cd | Borders |

## Typography

- Display — 136px / 500 / 1.00 / -2.72px / Aeonik Pro
- Section — 48px / 500 / 1.21 / -0.48px / Aeonik Pro
- Card — 32px / 500 / 1.19 / -0.32px / Aeonik Pro
- Body — 18px / 400 / 1.56 / -0.09px / Inter
- Semibold — 16px / 600 / 1.50 / +0.16px / Inter

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Dark | Get Started |
| Secondary Light | Learn More |
| Outlined | Contact |

## Cards

_No card examples were found in the local mirror._

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Phone number | Default | +44 7700 900000 |
| Email | Focus (blue ring) | user@revolut.com |
| Amount | Error (danger ring) | -500 |

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

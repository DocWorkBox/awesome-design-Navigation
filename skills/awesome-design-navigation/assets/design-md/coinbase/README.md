# Coinbase Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Coinbase 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `coinbase`
- Category: 金融科技与加密
- Visual direction: 加密货币交易所。干净蓝色识别，强调信任与机构感。
- Local light preview: [preview-site/mirrors/coinbase-light.html](../../preview-site/mirrors/coinbase-light.html)
- Local dark preview: [preview-site/mirrors/coinbase-dark.html](../../preview-site/mirrors/coinbase-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-coinbase.png](../../preview-site/screenshots/getdesign-coinbase.png)

## Design Intent

Design System Inspired by Coinbase

Every color, font, and component — visualized with crypto-grade precision.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #fff |
| --black | #0a0b0d |
| --blue | #0052ff |
| --hover-blue | #578bfa |
| --gray-surface | #eef0f3 |
| --dark | #282b31 |
| --muted | #5b616e |
| --font | 'Inter',system-ui,sans-serif |

## Color Palette

### Brand

| Token | Value | Role |
| --- | --- | --- |
| Coinbase Blue | #0052ff | Primary brand |
| Hover Blue | #578bfa | Hover state |
| Cool Gray | #eef0f3 | Secondary surface |
| Near Black | #0a0b0d | Text, dark sections |
| Dark Card | #282b31 | Dark buttons |
| Muted | #5b616e | Secondary text |

## Typography

- CoinbaseDisplay — 80px / 400 / 1.00
- CoinbaseSans — 36px / 400 / 1.11
- CoinbaseSans — 18px / 600 / 1.33
- CoinbaseText — 18px / 400 / 1.56
- CoinbaseSans — 16px / 600 / 1.20 / +0.16px

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Blue | Sign Up |
| Gray Surface | Learn More |
| Dark | Explore |
| Blue Outline | Details |

## Cards

_No card examples were found in the local mirror._

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Email | Default | you@email.com |
| Amount | Focus (blue ring) | 0.5 BTC |
| Address | Error | invalid |

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

# Binance Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Binance 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `binance`
- Category: 金融科技与加密
- Visual direction: 加密货币交易所。币安黄配黑白底，交易大厅般紧迫感。
- Local light preview: [preview-site/mirrors/binance-light.html](../../preview-site/mirrors/binance-light.html)
- Local dark preview: [preview-site/mirrors/binance-dark.html](../../preview-site/mirrors/binance-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-binance.png](../../preview-site/screenshots/getdesign-binance.png)

## Design Intent

Design System Inspired by Binance

Trade with competitive fees starting at 0.1% for makers and takers.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --binance-yellow | #F0B90B |
| --binance-gold | #FFD000 |
| --light-gold | #F8D12F |
| --active-yellow | #D0980B |
| --focus-blue | #1EAEDB |
| --white | #FFFFFF |
| --snow | #F5F5F5 |
| --binance-dark | #222126 |
| --dark-card | #2B2F36 |
| --ink | #1E2026 |
| --secondary-text | #32313A |
| --slate | #848E9C |
| --steel | #686A6C |
| --muted | #777E90 |
| --hover-dark | #1A1A1A |
| --crypto-green | #0ECB81 |
| --crypto-red | #F6465D |
| --border-light | #E6E8EA |
| --shadow-subtle | rgba(32, 32, 37, 0.05) |
| --shadow-pill | rgb(153, 153, 153) |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - |  | Trade with competitive fees starting at 0.1% for makers and takers. |
| - |  | Institutional-grade security with SOC 2 compliance and cold storage. |
| - |  | Round-the-clock customer service with real human agents. |
| - |  | Access 150+ cryptocurrencies with advanced charting tools. |
| - |  | Earn rewards on your holdings with flexible staking options. |
| - |  | Track your holdings in real-time with detailed analytics. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Search (50px pill radius) | - | Search coins... |
| Default Input | - | Enter your email |
| Focus State | - | user@example.com |
| Error State | - | invalid@ |

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

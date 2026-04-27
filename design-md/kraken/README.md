# Kraken Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Kraken 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `kraken`
- Category: 金融科技与加密
- Visual direction: 加密交易平台。紫色强调深色界面，数据密集型仪表盘。
- Local light preview: [preview-site/mirrors/kraken-light.html](../../preview-site/mirrors/kraken-light.html)
- Local dark preview: [preview-site/mirrors/kraken-dark.html](../../preview-site/mirrors/kraken-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-kraken.png](../../preview-site/screenshots/getdesign-kraken.png)

## Design Intent

Design System Inspired by Kraken

Every color, font, and component — visualized with crypto-exchange precision.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #fff |
| --black | #101114 |
| --purple | #7132f5 |
| --purple-dark | #5741d8 |
| --purple-subtle | rgba(133,91,251,0.16) |
| --gray | #686b82 |
| --silver | #9497a9 |
| --border | #dedee5 |
| --green | rgba(20,158,97,0.16) |
| --green-text | #026b3f |
| --font | 'IBM Plex Sans',Helvetica,Arial,sans-serif |

## Color Palette

### Brand

| Token | Value | Role |
| --- | --- | --- |
| Kraken Purple | #7132f5 | Primary CTA |
| Purple Dark | #5741d8 | Borders, outlined |
| Purple Deep | #5b1ecf | Deepest variant |
| Purple Subtle | rgba(133,91,251,0.16) | Subtle button bg |

### Neutral

| Token | Value | Role |
| --- | --- | --- |
| Near Black | #101114 | Primary text |
| Cool Gray | #686b82 | Borders |
| Silver Blue | #9497a9 | Secondary text |

## Typography

- Kraken-Brand — 48px / 700 / 1.17 / -1px
- Kraken-Brand — 36px / 700 / 1.22 / -0.5px
- Kraken-Product — 22px / 600 / 1.20
- Kraken-Product — 16px / 400 / 1.38
- Kraken-Product — 14px / 600 / 1.71

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Purple | Create Account |
| Purple Outlined | Explore |
| Purple Subtle | Learn |
| White Shadow | Details |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | Bitcoin (BTC) | The most trusted cryptocurrency. Buy and sell with low fees on Kraken. |
| - | Ethereum (ETH) | Smart contracts and DeFi. Trade ETH and hundreds of tokens. |
| - | Staking | Earn rewards by staking your crypto. Flexible and bonded options available. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Email | Default | you@email.com |
| Amount | Focus (purple ring) | 0.25 BTC |
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

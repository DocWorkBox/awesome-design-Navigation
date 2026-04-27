# HashiCorp Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 HashiCorp 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `hashicorp`
- Category: 后端、数据库与 DevOps
- Visual direction: 基础设施自动化。企业级黑白极简。
- Local light preview: [preview-site/mirrors/hashicorp-light.html](../../preview-site/mirrors/hashicorp-light.html)
- Local dark preview: [preview-site/mirrors/hashicorp-dark.html](../../preview-site/mirrors/hashicorp-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-hashicorp.png](../../preview-site/screenshots/getdesign-hashicorp.png)

## Design Intent

Design System Inspired by HashiCorp

Enterprise infrastructure typography, product color systems, and whisper-level shadows — all distilled into a single-page design reference.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-black | #000000 |
| --color-dark-charcoal | #15181e |
| --color-near-black | #0d0e12 |
| --color-light-gray | #f1f2f3 |
| --color-mid-gray | #d5d7db |
| --color-cool-gray | #b2b6bd |
| --color-dark-gray | #656a76 |
| --color-charcoal | #3b3d45 |
| --color-near-white | #efeff1 |
| --color-terraform | #7b42bc |
| --color-vault | #ffcf25 |
| --color-waypoint | #14c6cb |
| --color-waypoint-hover | #12b6bb |
| --color-vagrant | #1868f2 |
| --color-purple-accent | #911ced |
| --color-visited-purple | #a737ff |
| --color-action-blue | #1060ff |
| --color-link-blue | #2264d6 |
| --color-bright-blue | #2b89ff |
| --color-amber | #bb5a00 |
| --color-amber-light | #fbeabf |
| --color-red | #731e25 |
| --color-navy | #101a59 |
| --color-orange | #a9722e |
| --shadow-whisper | rgba(97, 104, 117, 0.05) 0px 1px 1px, rgba(97, 104, 117, 0.05) 0px 2px 2px |
| --font-brand | 'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif |
| --font-system | system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif |
| --bg-page | #ffffff |
| --bg-card | #ffffff |
| --bg-section | #f1f2f3 |
| --bg-nav | rgba(255, 255, 255, 0.95) |
| --text-primary | #000000 |
| --text-secondary | #3b3d45 |
| --text-muted | #656a76 |
| --border-color | rgba(178, 182, 189, 0.4) |
| --section-label-color | #656a76 |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

- <div class="meta-role">Display Hero
- <div class="meta-role">Section Heading
- <div class="meta-role">Feature Heading
- <div class="meta-role">Sub-heading
- <div class="meta-role">Card Title
- <div class="meta-role">Small Title
- <div class="meta-role">Body Emphasis
- <div class="meta-role">Body Large
- <div class="meta-role">Body
- <div class="meta-role">Nav Link
- <div class="meta-role">Small Body
- <div class="meta-role">Caption
- <div class="meta-role">Uppercase Label

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

_No card examples were found in the local mirror._

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Default Input | - | Enter your email address |
| Focus State | - | terraform@hashicorp.com |
| Error State | - | invalid-email |
| Textarea | - | Describe your infrastructure needs... |
| Default Input | - | Enter your email address |
| Focus State | - | vault@hashicorp.com |
| Error State | - | invalid-input |

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

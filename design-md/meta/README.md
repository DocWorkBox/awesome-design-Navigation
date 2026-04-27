# Meta Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Meta 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `meta`
- Category: 电商与零售
- Visual direction: 科技零售商店。摄影优先，明暗双表面，Meta 蓝 CTA。
- Local light preview: [preview-site/mirrors/meta-light.html](../../preview-site/mirrors/meta-light.html)
- Local dark preview: [preview-site/mirrors/meta-dark.html](../../preview-site/mirrors/meta-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-meta.png](../../preview-site/screenshots/getdesign-meta.png)

## Design Intent

Design System Inspired by Meta

A visual token catalog generated from DESIGN.md — every color, type scale, and component in one page.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --meta-blue | #0064E0 |
| --meta-blue-hover | #0143B5 |
| --meta-blue-pressed | #004BB9 |
| --meta-blue-light | #47A5FA |
| --facebook-blue | #1877F2 |
| --ray-ban-red | #D6311F |
| --oculus-purple | #A121CE |
| --work-purple | #6441D2 |
| --portal-blue | #1B365D |
| --portal-hero-blue | #C8E4E8 |
| --portal-light-blue | #ADD4E0 |
| --white | #FFFFFF |
| --soft-gray | #F1F4F7 |
| --warm-gray | #F7F8FA |
| --web-wash | #F0F2F5 |
| --linen | #F2F0E6 |
| --baby-blue | #E8F3FF |
| --near-black | #1C1E21 |
| --oculus-light | #181A1B |
| --primary-text | #050505 |
| --dark-charcoal | #1C2B33 |
| --icon-secondary | #465A69 |
| --secondary-text | #65676B |
| --slate-gray | #5D6C7B |
| --section-header | #4B4C4F |
| --button-text-gray | #444950 |
| --disabled-text | #BCC0C4 |
| --cta-disabled-text | #8595A4 |
| --divider | #CED0D4 |
| --divider-gray | #DEE3E9 |
| --cta-gray-border | #CBD2D9 |
| --dark-gray-border | #909396 |
| --success-green | #31A24C |
| --store-success | #007D1E |
| --error-red | #E41E3F |
| --store-error | #C80A28 |
| --warning-amber | #F7B928 |
| --cherry | #F3425F |
| --grape | #9360F7 |
| --lime | #45BD62 |
| --seafoam | #54C7EC |
| --teal | #2ABBA7 |
| --tomato | #FB724B |
| --pink | #FF66BF |
| --cta-disabled | #DEE3E9 |
| --font-primary | 'Montserrat', Helvetica, Arial, sans-serif |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Meta Blue #0064E0<br>100px radius, 10px 22px | Primary Button |
| Outlined pill<br>2px border rgba(10,19,23,0.12) | Secondary Button |
| Link Blue #385898<br>24px radius, 4px 12px | Ghost Button |
| BG #DEE3E9<br>Text #8595A4 | Disabled Button |

## Cards

_No card examples were found in the local mirror._

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Default Input | - | Enter your name |
| Focus State | - | Focused input |

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

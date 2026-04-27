# Figma Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Figma 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `figma`
- Category: 设计与创意工具
- Visual direction: 协作设计工具。高彩度多色，活泼但专业。
- Local light preview: [preview-site/mirrors/figma-light.html](../../preview-site/mirrors/figma-light.html)
- Local dark preview: [preview-site/mirrors/figma-dark.html](../../preview-site/mirrors/figma-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-figma.png](../../preview-site/screenshots/getdesign-figma.png)

## Design Intent

Design System Inspired by Figma

Auto-generated design token catalog from DESIGN.md

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-black | #000000 |
| --color-white | #ffffff |
| --glass-dark | rgba(0, 0, 0, 0.08) |
| --glass-light | rgba(255, 255, 255, 0.16) |
| --font-sans | system-ui, -apple-system, 'Segoe UI', 'SF Pro Display', Helvetica, Arial, sans-serif |
| --font-mono | 'Space Mono', 'SF Mono', Menlo, monospace |
| --bg-page | #ffffff |
| --bg-card | #ffffff |
| --bg-nav | rgba(255, 255, 255, 0.92) |
| --text-primary | #000000 |
| --text-secondary | #000000 |
| --text-muted | rgba(0, 0, 0, 0.5) |
| --border-color | rgba(0, 0, 0, 0.12) |
| --border-subtle | rgba(0, 0, 0, 0.06) |
| --section-label-color | #000000 |
| --glass-surface | rgba(0, 0, 0, 0.08) |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Pure Black | #000000 | All text, solid buttons, all borders. The sole interface color. |
| Pure White | #ffffff | All backgrounds, white buttons, text on dark surfaces. |

### Surface & Glass

| Token | Value | Role |
| --- | --- | --- |
| Glass Black | rgba(0,0,0,0.08) | Secondary circular buttons, glass overlays on light surfaces. |
| Glass White | rgba(255,255,255,0.16) | Frosted glass overlay for buttons on dark or colored surfaces. |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| STANDARD CARD | Minimal Border | Standard content card with subtle border and 8px radius. The default container for features and content sections on the white gallery surface. |
| ELEVATED CARD | Subtle Shadow | Floating card with subtle shadow elevation. Used for product showcases and hover states where the card lifts off the surface. |
| GLASS SURFACE | Glass Overlay | Glass-effect card using rgba(0,0,0,0.08) background. Secondary containers and grouped content areas with a translucent feel. |

## Forms

_No form examples were found in the local mirror._

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow. Page background and most text. The default surface. |
| Surface | White card on gradient or dark section. Primary depth through background contrast. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

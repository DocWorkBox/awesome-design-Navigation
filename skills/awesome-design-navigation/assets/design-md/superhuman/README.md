# Superhuman Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Superhuman 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `superhuman`
- Category: 开发工具与 IDE
- Visual direction: 高速邮件客户端。高级感深色界面，键盘优先，紫色辉光。
- Local light preview: [preview-site/mirrors/superhuman-light.html](../../preview-site/mirrors/superhuman-light.html)
- Local dark preview: [preview-site/mirrors/superhuman-dark.html](../../preview-site/mirrors/superhuman-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-superhuman.png](../../preview-site/screenshots/getdesign-superhuman.png)

## Design Intent

Design System Inspired by Superhuman

No shadow, white background. The primary canvas for most content surfaces.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --mysteria-purple | #1b1938 |
| --lavender-glow | #cbb7fb |
| --charcoal-ink | #292827 |
| --amethyst-link | #714cb6 |
| --translucent-white-95 | rgba(255,255,255,0.95) |
| --translucent-white-80 | rgba(255,255,255,0.8) |
| --pure-white | #ffffff |
| --warm-cream | #e9e5dd |
| --parchment-border | #dcd7d3 |
| --font-family | system-ui, -apple-system, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - |  | White background with Parchment Border, 16px radius. Hover to see lift effect. |
| - |  | Charcoal Ink background with warm-neutral tone for dark sections of the page. |
| - |  | Deep purple background with semi-transparent white border for elements on the hero gradient. |

## Forms

_No form examples were found in the local mirror._

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

# Cal.com Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Cal.com 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `cal`
- Category: 效率与 SaaS
- Visual direction: 开源排程工具。中性干净，开发者导向的简洁感。
- Local light preview: [preview-site/mirrors/cal-light.html](../../preview-site/mirrors/cal-light.html)
- Local dark preview: [preview-site/mirrors/cal-dark.html](../../preview-site/mirrors/cal-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-cal.png](../../preview-site/screenshots/getdesign-cal.png)

## Design Intent

Design System Inspired by Cal.com

No shadow. Page canvas and basic containers.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --charcoal | #242424 |
| --midnight | #111111 |
| --mid-gray | #898989 |
| --white | #ffffff |
| --link-blue | #0099ff |
| --focus-blue | #3b82f6 |
| --shadow-ring | rgba(34, 42, 53, 0.08) |
| --shadow-soft | rgba(34, 42, 53, 0.05) |
| --shadow-contact | rgba(19, 19, 22, 0.7) |
| --font-display | 'Cal Sans', system-ui, sans-serif |
| --font-body | 'Inter', -apple-system, system-ui, 'Segoe UI', sans-serif |
| --font-mono | 'Roboto Mono', ui-monospace, monospace |

## Color Palette

_No explicit color swatches were found in the local mirror._

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - |  | Ring shadow + contact shadow + diffused shadow. The workhorse card pattern. Hover to see lift. |
| - |  | Contact shadow + soft shadow without the ring border. Lighter elevation. |
| - |  | Inset shadow creates a recessed, pressed-in appearance for input wells and secondary containers. |

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

# xAI Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 xAI 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `x.ai`
- Category: AI 与大模型平台
- Visual direction: Elon Musk 的 AI 实验室。黑白极简，未来感强。
- Local light preview: [preview-site/mirrors/x.ai-light.html](../../preview-site/mirrors/x.ai-light.html)
- Local dark preview: [preview-site/mirrors/x.ai-dark.html](../../preview-site/mirrors/x.ai-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-x.ai.png](../../preview-site/screenshots/getdesign-x.ai.png)

## Design Intent

Design System Inspired by xAI

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value -- visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --bg | #f8f8f8 |
| --bg-page | #ffffff |
| --dark | #1f2228 |
| --white | #ffffff |
| --text-primary | #1f2228 |
| --text-secondary | rgba(31, 34, 40, 0.7) |
| --text-muted | rgba(31, 34, 40, 0.5) |
| --text-disabled | rgba(31, 34, 40, 0.3) |
| --border | rgba(31, 34, 40, 0.1) |
| --border-strong | rgba(31, 34, 40, 0.2) |
| --surface | rgba(31, 34, 40, 0.03) |
| --surface-hover | rgba(31, 34, 40, 0.06) |
| --ring-blue | rgb(59, 130, 246) |
| --font-display | 'Geist Mono', ui-monospace, SFMono-Regular, 'Roboto Mono', Menlo, Monaco, monospace |
| --font-body | 'Inter', -apple-system, system-ui, sans-serif |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Dark Background | #1f2228 | Page background |
| Pure White | #ffffff | Text, foreground |

### Text Opacity Scale

| Token | Value | Role |
| --- | --- | --- |
| Text Primary | rgba(255,255,255,1) | Headings, labels |
| Text Secondary | rgba(255,255,255,0.7) | Descriptions |
| Text Muted | rgba(255,255,255,0.5) | Hover state, placeholders |
| Text Disabled | rgba(255,255,255,0.3) | Disabled states |

### Border & Surface

| Token | Value | Role |
| --- | --- | --- |
| Border Default | rgba(255,255,255,0.1) | Cards, dividers |
| Border Strong | rgba(255,255,255,0.2) | Active, buttons |
| Surface Subtle | rgba(255,255,255,0.03) | Card backgrounds |
| Surface Hover | rgba(255,255,255,0.08) | Hover surfaces |

### Functional

| Token | Value | Role |
| --- | --- | --- |
| Focus Ring | rgb(59, 130, 246) | Keyboard focus |

## Typography

- Display Hero -- 320px (shown at 72px) / GeistMono / 300 / 1.50
- Section Heading -- 30px / universalSans / 400 / 1.20
- Body -- 16px / universalSans / 400 / 1.50
- Button -- 14px / GeistMono / 400 / uppercase / 1.4px tracking
- Label -- 14px / universalSans / 400 / 1.50
- Small -- 12px / universalSans / 400 / 1.50
- Tag -- 12px / GeistMono / uppercase / 1px tracking

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary | GET STARTED |
| Ghost / Outlined | LEARN MORE |
| Text Link | Text Link |
| Mono Tag | API v2 |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | Grok | An AI assistant built to be maximally helpful. Grok has real-time knowledge, a conversational style, and handles complex reasoning tasks. |
| - | Understanding AI | Advancing fundamental research in artificial intelligence. Card shown with stronger border for elevated emphasis. |
| - | Developer Access | Build with Grok through the xAI API. Enterprise-grade performance with straightforward integration. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| API Key Name | Default | my-api-key |
| Endpoint URL | Focus (blue ring) | https://api.x.ai/v1/chat |

## Spacing

- 4px
- 8px
- 24px
- 48px

## Border Radius

| Radius | Context |
| --- | --- |
| 0px | Primary (buttons, cards) |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | No border, no shadow |
| Level 1: Surface | Subtle bg (0.03 opacity) |
| Level 2: Bordered | 0.1 opacity border |
| Level 3: Active | 0.2 opacity border |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

# Minimax Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Minimax 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `minimax`
- Category: AI 与大模型平台
- Visual direction: AI 模型提供商。大胆深色界面，配霓虹强调。
- Local light preview: [preview-site/mirrors/minimax-light.html](../../preview-site/mirrors/minimax-light.html)
- Local dark preview: [preview-site/mirrors/minimax-dark.html](../../preview-site/mirrors/minimax-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-minimax.png](../../preview-site/screenshots/getdesign-minimax.png)

## Design Intent

Design System Inspired by MiniMax

A clean, approachable design language that bridges consumer-friendly appeal with technical credibility through white-space-driven layouts and colorful product accents.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --brand-blue | #1456f0 |
| --sky-blue | #3daeff |
| --brand-pink | #ea5ec1 |
| --primary-200 | #bfdbfe |
| --primary-light | #60a5fa |
| --primary-500 | #3b82f6 |
| --primary-600 | #2563eb |
| --primary-700 | #1d4ed8 |
| --brand-deep | #17437d |
| --text-near-black | #222222 |
| --text-dark | #18181b |
| --text-charcoal | #181e25 |
| --text-dark-gray | #45515e |
| --text-mid-gray | #8e8e93 |
| --text-light-gray | #5f5f5f |
| --bg-white | #ffffff |
| --bg-light-gray | #f0f0f0 |
| --border-light | #f2f3f5 |
| --border-gray | #e5e7eb |
| --shadow-standard | rgba(0, 0, 0, 0.08) 0px 4px 6px |
| --shadow-soft-glow | rgba(0, 0, 0, 0.08) 0px 0px 22.576px |
| --shadow-brand-purple | rgba(44, 30, 116, 0.16) 0px 0px 15px |
| --shadow-brand-purple-offset | rgba(44, 30, 116, 0.11) 6.5px 2px 17.5px |
| --shadow-card-elevation | rgba(36, 36, 36, 0.08) 0px 12px 16px -4px |
| --font-primary | 'DM Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif |
| --font-display | 'Outfit', 'Helvetica Neue', Helvetica, Arial, sans-serif |
| --font-mid | 'Poppins', sans-serif |
| --font-data | 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif |

## Color Palette

### Brand Primary

| Token | Value | Role |
| --- | --- | --- |
| Brand Blue | #1456f0 | Primary brand identity |
| Sky Blue | #3daeff | Lighter brand accent |
| Brand Pink | #ea5ec1 | Secondary brand accent |

### Blue Scale (Primary)

| Token | Value | Role |
| --- | --- | --- |
| Primary 200 | #bfdbfe | Light blue backgrounds |
| Primary Light | #60a5fa | Active states, highlights |
| Primary 500 | #3b82f6 | Standard blue actions |
| Primary 600 | #2563eb | Hover states |
| Primary 700 | #1d4ed8 | Pressed/active states |
| Brand Deep | #17437d | Deep blue emphasis |

### Text Colors

| Token | Value | Role |
| --- | --- | --- |
| Near Black | #222222 | Primary text |
| Dark | #18181b | Button text, headings |
| Charcoal | #181e25 | Dark surfaces, footer |
| Dark Gray | #45515e | Secondary text |
| Mid Gray | #8e8e93 | Tertiary text, muted |
| Light Gray | #5f5f5f | Helper text |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Pure White | #ffffff | Primary background |
| Light Gray | #f0f0f0 | Secondary backgrounds |
| Border Light | #f2f3f5 | Subtle section dividers |
| Border Gray | #e5e7eb | Component borders |

### Semantic

| Token | Value | Role |
| --- | --- | --- |
| Success Background | #e8ffea | Positive state backgrounds |

## Typography

- <div class="type-label">Display Hero
- <div class="type-label">Section Heading
- <div class="type-label">Section Heading Alt
- <div class="type-label">Card Title
- <div class="type-label">Sub-heading
- <div class="type-label">Feature Label
- <div class="type-label">Body Large
- <div class="type-label">Body
- <div class="type-label">Body Bold
- <div class="type-label">Nav / Link
- <div class="type-label">Button Small
- <div class="type-label">Caption
- <div class="type-label">Small Label
- <div class="type-label">Micro

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | AI Chat | Conversational AI powered by advanced language models for natural dialogue and creative content generation. |
| - | Video Generation | Transform text descriptions into high-quality video content with state-of-the-art generative models. |
| - | Music Studio | Create original music compositions with AI-driven arrangement and production tools. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Full Name | - | Jane Cooper |
| Email Address | - | you@example.com |
| Focused Input | - | Click to focus |

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

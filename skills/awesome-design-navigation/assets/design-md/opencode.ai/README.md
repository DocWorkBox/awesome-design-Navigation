# OpenCode AI Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 OpenCode AI 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `opencode.ai`
- Category: AI 与大模型平台
- Visual direction: AI 编码平台。开发者导向的深色主题。
- Local light preview: [preview-site/mirrors/opencode.ai-light.html](../../preview-site/mirrors/opencode.ai-light.html)
- Local dark preview: [preview-site/mirrors/opencode.ai-dark.html](../../preview-site/mirrors/opencode.ai-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-opencode.ai.png](../../preview-site/screenshots/getdesign-opencode.ai.png)

## Design Intent

Design System Inspired by OpenCode

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value -- visualized in monospace precision.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --oc-dark | #201d1d |
| --oc-light | #fdfcfc |
| --oc-gray | #9a9898 |
| --oc-dark-surface | #302c2c |
| --oc-border-gray | #646262 |
| --oc-light-surface | #f1eeee |
| --oc-input-bg | #f8f7f7 |
| --accent | #007aff |
| --accent-hover | #0056b3 |
| --accent-active | #004085 |
| --danger | #ff3b30 |
| --danger-hover | #d70015 |
| --danger-active | #a50011 |
| --success | #30d158 |
| --warning | #ff9f0a |
| --warning-hover | #cc7f08 |
| --warning-active | #995f06 |
| --text-primary | #201d1d |
| --text-secondary | #9a9898 |
| --text-muted | #6e6e73 |
| --text-caption | #424245 |
| --border-warm | rgba(15, 0, 0, 0.12) |
| --border-tab | #9a9898 |
| --border-outline | #646262 |
| --font-mono | 'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| OpenCode Dark | #201d1d | Background, buttons |
| OpenCode Light | #fdfcfc | Primary text |
| Mid Gray | #9a9898 | Secondary text |
| Dark Surface | #302c2c | Elevated surface |

### Surface & Border

| Token | Value | Role |
| --- | --- | --- |
| Light Surface | #f1eeee | Light background |
| Input BG | #f8f7f7 | Form inputs |
| Border Gray | #646262 | Outline borders |
| Text Muted | #6e6e73 | Muted labels |

### Accent

| Token | Value | Role |
| --- | --- | --- |
| Accent Blue | #007aff | Primary accent |
| Accent Hover | #0056b3 | Hover state |
| Accent Active | #004085 | Active state |

### Semantic

| Token | Value | Role |
| --- | --- | --- |
| Danger | #ff3b30 | Error, destructive |
| Success | #30d158 | Success state |
| Warning | #ff9f0a | Caution, alerts |
| Text Secondary | #424245 | Captions on light |

## Typography

- Heading 1 -- 38px / 700 / 1.50 / Berkeley Mono
- Heading 2 -- 16px / 700 / 1.50 / Berkeley Mono
- Body Medium -- 16px / 500 / 1.50 / Berkeley Mono
- Body Regular -- 16px / 400 / 1.50 / Berkeley Mono
- Body Tight -- 16px / 500 / 1.00 / Berkeley Mono
- Caption -- 14px / 400 / 2.00 / Berkeley Mono
- Code -- 14px / 400 / 1.50 / Berkeley Mono (monospace)

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Dark | Install OpenCode |
| Secondary Outline | View on GitHub |
| Accent Blue | Learn More |
| Danger | Delete |
| Success | Success |
| Warning | Warning |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| AI Agent | Terminal-Native Coding | An open source AI coding agent that runs in your terminal. No IDE required -- just you, your code, and the command line. |
| Open Source | Multi-Provider Support | Works with Anthropic, OpenAI, and other LLM providers. Choose the model that fits your workflow and budget. |
| CLI | Context-Aware Editing | Understands your entire codebase context. Make changes across multiple files with natural language instructions. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Email Address | Default (warm border, 20px padding) | you@example.com |
| API Key | Focus (accent blue border) | sk-ant-... |

## Spacing

- 1px
- 2px
- 4px
- 8px
- 12px
- 16px
- 20px
- 24px
- 32px
- 40px
- 48px
- 64px

## Border Radius

| Radius | Context |
| --- | --- |
| 4px | Default (buttons, cards) |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | No border, no shadow |
| Level 1: Subtle | 1px rgba(15,0,0,0.12) |
| Level 2: Tab | 2px solid #9a9898 |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

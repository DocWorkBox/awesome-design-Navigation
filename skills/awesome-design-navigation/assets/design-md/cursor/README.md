# Cursor Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Cursor 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `cursor`
- Category: 开发工具与 IDE
- Visual direction: AI 优先代码编辑器。流畅深色界面，带渐变点缀。
- Local light preview: [preview-site/mirrors/cursor-light.html](../../preview-site/mirrors/cursor-light.html)
- Local dark preview: [preview-site/mirrors/cursor-dark.html](../../preview-site/mirrors/cursor-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-cursor.png](../../preview-site/screenshots/getdesign-cursor.png)

## Design Intent

Design System Inspired by Cursor

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value -- visualized in warm cream tones.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --cursor-dark | #26251e |
| --cursor-cream | #f2f1ed |
| --cursor-light | #e6e5e0 |
| --surface-100 | #f7f7f4 |
| --surface-200 | #f2f1ed |
| --surface-300 | #ebeae5 |
| --surface-400 | #e6e5e0 |
| --surface-500 | #e1e0db |
| --white | #ffffff |
| --black | #000000 |
| --accent | #f54e00 |
| --error | #cf2d56 |
| --success | #1f8a65 |
| --gold | #c08532 |
| --thinking | #dfa88f |
| --grep | #9fc9a2 |
| --read | #9fbbe0 |
| --edit | #c0a8dd |
| --text-primary | #26251e |
| --text-secondary | rgba(38, 37, 30, 0.55) |
| --text-tertiary | rgba(38, 37, 30, 0.4) |
| --border-default | rgba(38, 37, 30, 0.1) |
| --border-medium | rgba(38, 37, 30, 0.2) |
| --border-strong | rgba(38, 37, 30, 0.55) |
| --shadow-card | rgba(0,0,0,0.14) 0px 28px 70px 0px, rgba(0,0,0,0.1) 0px 14px 32px 0px, rgba(38,37,30,0.1) 0px 0px 0px 1px |
| --shadow-ambient | rgba(0,0,0,0.02) 0px 0px 16px 0px, rgba(0,0,0,0.008) 0px 0px 8px 0px |
| --shadow-focus | rgba(0,0,0,0.1) 0px 4px 12px |
| --font-gothic | system-ui, -apple-system, 'Helvetica Neue', Helvetica, Arial, sans-serif |
| --font-serif | 'Source Serif 4', 'Iowan Old Style', 'Palatino Linotype', Georgia, Cambria, 'Times New Roman', Times, serif |
| --font-mono | ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace |
| --font-ui | system-ui, -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Cursor Dark | #26251e | Primary text, headings |
| Cursor Cream | #f2f1ed | Page background |
| Cursor Light | #e6e5e0 | Secondary surface |
| Pure White | #ffffff | Card surfaces |

### Accent & Semantic

| Token | Value | Role |
| --- | --- | --- |
| Cursor Orange | #f54e00 | Brand accent |
| Gold | #c08532 | Secondary accent |
| Error | #cf2d56 | Error, hover state |
| Success | #1f8a65 | Success state |

### AI Timeline Colors

| Token | Value | Role |
| --- | --- | --- |
| Thinking | #dfa88f | AI thinking state |
| Grep | #9fc9a2 | Search operations |
| Read | #9fbbe0 | File reading |
| Edit | #c0a8dd | Code editing |

### Surface Scale

| Token | Value | Role |
| --- | --- | --- |
| Surface 100 | #f7f7f4 | Lightest surface |
| Surface 200 | #f2f1ed | Page background |
| Surface 300 | #ebeae5 | Button default |
| Surface 400 | #e6e5e0 | Card backgrounds |
| Surface 500 | #e1e0db | Active/pressed |

## Typography

- Display Hero -- 72px / 400 / 1.10 / -2.16px / CursorGothic
- Section Heading -- 36px / 400 / 1.20 / -0.72px / CursorGothic
- Sub-heading -- 26px / 400 / 1.25 / -0.325px / CursorGothic
- Title Small -- 22px / 400 / 1.30 / -0.11px / CursorGothic
- Body Serif -- 19.2px / 500 / 1.50 / jjannon (with cswh)
- Body Serif SM -- 17.28px / 400 / 1.35 / jjannon
- Body Sans -- 16px / 400 / 1.50 / CursorGothic
- Button Label -- 14px / 400 / 1.00 / CursorGothic
- Caption -- 11px / 500 / 1.50 / CursorGothic
- Mono Body -- 12px / 400 / 1.67 / berkeleyMono
- System Micro -- 11px / 500 / uppercase / system-ui

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary Dark | Download Cursor |
| Primary Surface | Documentation |
| Ghost | Learn More |
| Pill Tag | AI-First |
| Timeline Pill | Thinking |
| Timeline Pill | Grep |
| Timeline Pill | Read |
| Timeline Pill | Edit |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| AI | Tab Autocomplete | Cursor predicts your next edit and suggests multi-line changes. Accept with a single tab press for flow-state coding. |
| Elevated | Chat with Codebase | Ask questions about your entire repository. Cursor understands project structure, dependencies, and conventions. |
| Agent | Agentic Editing | Describe what you want in natural language. Cursor's agent mode makes multi-file changes across your codebase. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Project Name | Default (warm border) | my-cursor-project |
| Repository | Focus (accent orange) | cursor/editor |
| API Key | Error (warm crimson) | invalid-key |

## Spacing

- 2px
- 3px
- 4px
- 5px
- 6px
- 8px
- 10px
- 12px
- 16px
- 24px
- 32px
- 48px

## Border Radius

| Radius | Context |
| --- | --- |
| 1.5px | Micro |
| 2px | Inline |
| 3px | Small |
| 4px | Cards, inputs |
| 8px | Buttons, cards |
| 10px | Featured |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | No shadow |
| Level 1: Border Ring | oklab warm border |
| Level 1b: Medium | Emphasized border |
| Level 2: Ambient | Subtle glow |
| Level 3: Elevated | Modal / popover |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

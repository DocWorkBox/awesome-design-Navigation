# ElevenLabs Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 ElevenLabs 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `elevenlabs`
- Category: AI 与大模型平台
- Visual direction: AI 语音平台。电影感深色界面，带音波可视化气质。
- Local light preview: [preview-site/mirrors/elevenlabs-light.html](../../preview-site/mirrors/elevenlabs-light.html)
- Local dark preview: [preview-site/mirrors/elevenlabs-dark.html](../../preview-site/mirrors/elevenlabs-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-elevenlabs.png](../../preview-site/screenshots/getdesign-elevenlabs.png)

## Design Intent

Design System Inspired by ElevenLabs

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value — visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --white | #ffffff |
| --light | #f5f5f5 |
| --warm-stone | rgba(245,242,239,0.8) |
| --black | #000000 |
| --dark-gray | #4e4e4e |
| --warm-gray | #777169 |
| --border | #e5e5e5 |
| --border-subtle | rgba(0,0,0,0.05) |
| --shadow-card | rgba(0,0,0,0.06) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 1px 2px, rgba(0,0,0,0.04) 0px 2px 4px |
| --shadow-btn | rgba(0,0,0,0.4) 0px 0px 1px, rgba(0,0,0,0.04) 0px 4px 4px |
| --shadow-warm | rgba(78,50,23,0.04) 0px 6px 16px |
| --shadow-inset | rgb(255,255,255) 0px 0px 0px 0px inset, rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset |
| --font-sans | 'Inter', system-ui, sans-serif |
| --font-mono | 'Geist Mono', ui-monospace, SFMono-Regular, Menlo, monospace |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Pure White | #ffffff | Primary surface |
| Light Gray | #f5f5f5 | Section background |
| Warm Stone | rgba(245,242,239,0.8) | Featured CTA |
| Black | #000000 | Text, buttons |

### Neutral Scale

| Token | Value | Role |
| --- | --- | --- |
| Dark Gray | #4e4e4e | Secondary text |
| Warm Gray | #777169 | Muted text, links |
| Border | #e5e5e5 | Borders, dividers |
| Near Black | #292524 | Dark sections |

## Typography

- Display — 48px / 300 / 1.08 / -0.96px / Waldenburg
- Section — 36px / 300 / 1.17 / Waldenburg
- Card — 32px / 300 / 1.13 / Waldenburg
- Body Large — 20px / 400 / 1.35 / Inter
- Body — 18px / 400 / 1.60 / +0.18px / Inter
- Nav — 15px / 500 / 1.47 / +0.15px / Inter
- CTA — 14px / 700 / uppercase / +0.7px / WaldenburgFH
- Caption — 14px / 400 / 1.43 / +0.14px / Inter
- Code — 13px / 400 / 1.85 / Geist Mono

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Black Pill | Try for Free |
| Warm Stone | Explore Voice AI |
| White Shadow | Learn More |
| Uppercase Bold | Get Started |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | Text to Speech | Generate natural, expressive speech from text in any language with the most realistic AI voices. |
| - | Voice Cloning | Create a digital replica of any voice with just a few minutes of audio. Elevated shadow variant. |
| - | Audio Native | Turn any written content into engaging audio. Light gray background variant for section differentiation. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Voice Name | Default (inset border shadow) | My Custom Voice |
| Language | Focus (blue ring) | English |
| API Key | Error (red ring) | invalid_key |

## Spacing

- 4px
- 8px
- 12px
- 16px
- 20px
- 24px
- 32px
- 40px

## Border Radius

| Radius | Context |
| --- | --- |
| 4px | Tags |
| 8px | Small |
| 12px | Inputs |
| 16px | Cards |
| 20px | Panels |
| 24px | Sections |

## Elevation

| Level | Treatment |
| --- | --- |
| Inset Edge | 0.5px inset border |
| Card | Outline + subtle lift |
| Button | Strong outline + lift |
| Warm Lift | Warm-tinted shadow |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

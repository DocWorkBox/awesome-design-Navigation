# NVIDIA Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 NVIDIA 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `nvidia`
- Category: 媒体与消费科技
- Visual direction: GPU 计算平台。绿色与黑色能量感，技术力量审美。
- Local light preview: [preview-site/mirrors/nvidia-light.html](../../preview-site/mirrors/nvidia-light.html)
- Local dark preview: [preview-site/mirrors/nvidia-dark.html](../../preview-site/mirrors/nvidia-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-nvidia.png](../../preview-site/screenshots/getdesign-nvidia.png)

## Design Intent

Design System Inspired by NVIDIA

A design token catalog generated from DESIGN.md. Every color, font, component, and spacing value -- visualized.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --nvidia-green | #76b900 |
| --nvidia-green-light | #bff230 |
| --black | #000000 |
| --white | #ffffff |
| --near-black | #1a1a1a |
| --gray-300 | #a7a7a7 |
| --gray-400 | #898989 |
| --gray-500 | #757575 |
| --gray-border | #5e5e5e |
| --link-hover | #3860be |
| --btn-hover | #1eaedb |
| --btn-active | #007fff |
| --orange-400 | #df6500 |
| --yellow-300 | #ef9100 |
| --red-500 | #e52020 |
| --green-500 | #3f8500 |
| --blue-700 | #0046a4 |
| --purple-800 | #4d1368 |
| --fuchsia-700 | #8c1c55 |
| --purple-100 | #f9d4ff |
| --yellow-050 | #feeeb2 |
| --shadow-card | rgba(0,0,0,0.3) 0px 0px 5px 0px |
| --font-primary | 'Inter', Arial, Helvetica, sans-serif |

## Color Palette

### Primary Brand

| Token | Value | Role |
| --- | --- | --- |
| NVIDIA Green | #76b900 | Accent, borders, CTAs |
| True Black | #000000 | Primary background |
| Pure White | #ffffff | Light backgrounds, text |
| Green Light | #bff230 | Bright accents |

### Extended Palette

| Token | Value | Role |
| --- | --- | --- |
| Orange 400 | #df6500 | Warm accent |
| Yellow 300 | #ef9100 | Secondary warm |
| Purple 800 | #4d1368 | AI / Premium |
| Fuchsia 700 | #8c1c55 | Promotions |
| Blue 700 | #0046a4 | Informational |

### Status

| Token | Value | Role |
| --- | --- | --- |
| Red 500 | #e52020 | Error, destructive |
| Green 500 | #3f8500 | Success |
| Yellow 050 | #feeeb2 | Warning surface |
| Purple 100 | #f9d4ff | Info surface |

### Neutral Scale

| Token | Value | Role |
| --- | --- | --- |
| Near Black | #1a1a1a | Dark surfaces |
| Gray Border | #5e5e5e | Borders, dividers |
| Gray 500 | #757575 | Tertiary text |
| Gray 400 | #898989 | Secondary text |
| Gray 300 | #a7a7a7 | Muted text |

### Interactive

| Token | Value | Role |
| --- | --- | --- |
| Link Hover | #3860be | Hover state |
| Button Hover | #1eaedb | CTA hover |
| Button Active | #007fff | CTA active/pressed |

## Typography

- Display Hero -- 36px / 700 / 1.25 / NVIDIA-EMEA
- Section Heading -- 24px / 700 / 1.25 / NVIDIA-EMEA
- Sub-heading -- 22px / 400 / 1.75 / NVIDIA-EMEA
- Card Title -- 20px / 700 / 1.25 / NVIDIA-EMEA
- Body Large -- 18px / 700 / 1.67 / NVIDIA-EMEA
- Body -- 16px / 400 / 1.50 / NVIDIA-EMEA
- Body Bold -- 16px / 700 / 1.50 / NVIDIA-EMEA
- Body Small -- 15px / 400 / 1.67 / NVIDIA-EMEA
- Link Uppercase -- 14px / 700 / 1.43 / uppercase / NVIDIA-EMEA
- Caption -- 14px / 600 / 1.50 / NVIDIA-EMEA
- Caption Small -- 12px / 400 / 1.25 / NVIDIA-EMEA
- Micro Label -- 10px / 700 / uppercase / NVIDIA-EMEA

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Primary (Light BG) | Explore Solutions |
| Primary (Dark BG) | Explore GPUs |
| Secondary | Documentation |
| Hover | Hover State |
| Active | Active State |
| Compact Link | Learn More > |
| Micro Badge | NEW |
| Category Badge | AI |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| GPU | GeForce RTX Series | The ultimate in PC gaming performance. Ray tracing, DLSS, and AI-powered graphics for immersive experiences. |
| AI | NVIDIA AI Enterprise | End-to-end AI software platform that accelerates data science pipelines and streamlines development. |
| DATA CENTER | DGX Systems | Purpose-built AI infrastructure integrating hardware and software for the most demanding workloads. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Project Name | Default | my-gpu-project |
| CUDA Version | Focus (green border) | CUDA 12.4 |
| GPU Count | Error (red border) | invalid |

## Spacing

- 2px
- 4px
- 6px
- 8px
- 10px
- 12px
- 16px
- 24px
- 32px

## Border Radius

| Radius | Context |
| --- | --- |
| 1px | Inline spans |
| 2px | Buttons, cards |

## Elevation

| Level | Treatment |
| --- | --- |
| Level 0: Flat | No shadow |
| Level 1: Card | rgba(0,0,0,0.3) 0 0 5px |
| Level 1b: Border | 1px solid #5e5e5e |
| Level 2: Accent | 2px solid #76b900 |
| Level 3: Elevated | Hover intensified |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

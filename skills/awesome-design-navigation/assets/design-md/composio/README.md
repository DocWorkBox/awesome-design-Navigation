# Composio Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Composio 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `composio`
- Category: 后端、数据库与 DevOps
- Visual direction: 工具集成平台。现代深色界面，配彩色集成图标。
- Local light preview: [preview-site/mirrors/composio-light.html](../../preview-site/mirrors/composio-light.html)
- Local dark preview: [preview-site/mirrors/composio-dark.html](../../preview-site/mirrors/composio-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-composio.png](../../preview-site/screenshots/getdesign-composio.png)

## Design Intent

Design System Inspired by Composio

Auto-generated design token catalog from DESIGN.md

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-white | #ffffff |
| --color-brand | #0007cd |
| --color-black | #000000 |
| --color-void | #0f0f0f |
| --color-charcoal | #2c2c2c |
| --color-muted-smoke | #444444 |
| --color-cyan | #00ffff |
| --color-signal-blue | #0089ff |
| --color-ocean-blue | #0096ff |
| --color-light-border | #e0e0e0 |
| --ghost-white | rgba(255,255,255,0.6) |
| --whisper-white | rgba(255,255,255,0.5) |
| --phantom-white | rgba(255,255,255,0.2) |
| --border-mist-12 | rgba(255,255,255,0.12) |
| --border-mist-10 | rgba(255,255,255,0.10) |
| --border-mist-08 | rgba(255,255,255,0.08) |
| --border-mist-06 | rgba(255,255,255,0.06) |
| --border-mist-04 | rgba(255,255,255,0.04) |
| --cyan-12 | rgba(0,255,255,0.12) |
| --font-sans | 'abcDiatype', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif |
| --font-mono | 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Composio Cobalt | #0007cd | Core brand color for high-priority interactive elements |

### Secondary & Accent

| Token | Value | Role |
| --- | --- | --- |
| Electric Cyan | #00ffff | Attention-grabbing accent for glows and highlights |
| Signal Blue | #0089ff | Button borders and interactive focus states |
| Ocean Blue | #0096ff | CTA button accent borders |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Void Black | #0f0f0f | Primary page background |
| Pure Black | #000000 | Card interiors and deep-nested containers |
| Charcoal | #2c2c2c | Secondary button borders and dividers |

### Neutrals & Text

| Token | Value | Role |
| --- | --- | --- |
| Pure White | #ffffff | Primary headings and high-emphasis text |
| Muted Smoke | #444444 | De-emphasized body text, metadata |
| Ghost White | rgba(255,255,255,0.6) | Secondary body text and link labels |
| Whisper White | rgba(255,255,255,0.5) | Tertiary button text and placeholders |
| Phantom White | rgba(255,255,255,0.2) | Subtle button backgrounds and receded UI |

### Border System

| Token | Value | Role |
| --- | --- | --- |
| Border Mist 12 | rgba(255,255,255,0.12) | Prominent card edges, content separators |
| Border Mist 10 | rgba(255,255,255,0.10) | Standard container borders |
| Border Mist 06 | rgba(255,255,255,0.06) | Section dividers, subtle groupings |
| Border Mist 04 | rgba(255,255,255,0.04) | Faintest atmospheric separation |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Standard Card | Border Mist 10 | Standard content card with subtle white border at 10% opacity and 4px radius. The default container for most content blocks. |
| Brutalist Shadow | Hard Offset 4px | Distinctive hard-offset shadow (4px right, 4px down) at 15% opacity. Adds a raw, retro-computing personality to select elements. |
| Floating + Glow | Cyan Glow Halo | Soft diffuse shadow (8px 32px) with a radial cyan gradient halo. Used for highest-emphasis elevated content and feature highlights. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Default Input | - | Enter your API key... |
| Focus State | - | composio-api-key-xxxxx |
| Error State | - | invalid-key |

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow, no border. Page background and inline text. |
| Contained | Border Mist 04-08. Background groupings, subtle sections. |
| Card | Border Mist 10-12. Standard content cards, code blocks. |
| Brutalist | Hard offset shadow (4px 4px, 15% black). Distinctive feature highlights. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

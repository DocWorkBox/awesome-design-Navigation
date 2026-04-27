# Expo Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Expo 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `expo`
- Category: 开发工具与 IDE
- Visual direction: React Native 平台。深色主题、紧凑字距、强代码感。
- Local light preview: [preview-site/mirrors/expo-light.html](../../preview-site/mirrors/expo-light.html)
- Local dark preview: [preview-site/mirrors/expo-dark.html](../../preview-site/mirrors/expo-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-expo.png](../../preview-site/screenshots/getdesign-expo.png)

## Design Intent

Design System Inspired by Expo

Auto-generated design token catalog from DESIGN.md

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --color-expo-black | #000000 |
| --color-near-black | #1c2024 |
| --color-link-cobalt | #0d74ce |
| --color-legal-blue | #476cff |
| --color-widget-sky | #47c2ff |
| --color-preview-purple | #8145b5 |
| --color-cloud-gray | #f0f0f3 |
| --color-pure-white | #ffffff |
| --color-widget-dark | #1a1a1a |
| --color-banner-dark | #171717 |
| --color-slate-gray | #60646c |
| --color-mid-slate | #555860 |
| --color-silver | #b0b4ba |
| --color-pewter | #999999 |
| --color-light-silver | #cccccc |
| --color-dark-slate | #363a3f |
| --color-charcoal | #333333 |
| --color-warning | #ab6400 |
| --color-destructive | #eb8e90 |
| --color-border-lavender | #e0e1e6 |
| --color-input-border | #d9d9e0 |
| --color-focus-ring | #2547d0 |
| --font-body | 'Inter', -apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif |
| --font-mono | 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace |
| --bg-page | var(--color-cloud-gray) |
| --bg-card | var(--color-pure-white) |
| --bg-nav | rgba(240,240,243,0.92) |
| --text-primary | var(--color-near-black) |
| --text-secondary | var(--color-slate-gray) |
| --text-muted | var(--color-silver) |
| --border-color | var(--color-border-lavender) |
| --border-subtle | rgba(224,225,230,0.5) |
| --section-label-color | var(--color-expo-black) |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Expo Black | #000000 | Primary headlines, CTA buttons, brand anchor |
| Near Black | #1c2024 | Body text, softer than pure black for reading |

### Secondary & Accent

| Token | Value | Role |
| --- | --- | --- |
| Link Cobalt | #0d74ce | Standard links, interactive signals |
| Legal Blue | #476cff | Footer/legal links, brighter accent |
| Widget Sky | #47c2ff | Widget branding, lightest accent |
| Preview Purple | #8145b5 | Beta/preview feature indicators |

### Surface & Background

| Token | Value | Role |
| --- | --- | --- |
| Cloud Gray | #f0f0f3 | Primary page background |
| Pure White | #ffffff | Card surfaces, elevated containers |
| Widget Dark | #1a1a1a | Dark theme widgets, overlays |
| Banner Dark | #171717 | Promo banners, high-contrast surfaces |

### Neutrals & Text

| Token | Value | Role |
| --- | --- | --- |
| Slate Gray | #60646c | Secondary text (305 instances) |
| Mid Slate | #555860 | Emphasized secondary text |
| Silver | #b0b4ba | Tertiary text, placeholders, metadata |
| Dark Slate | #363a3f | Borders on dark surfaces, switch tracks |

### Semantic

| Token | Value | Role |
| --- | --- | --- |
| Warning Amber | #ab6400 | Warning states, deep amber for seriousness |
| Destructive Rose | #eb8e90 | Disabled destructive actions, gentle alarm |
| Border Lavender | #e0e1e6 | Standard card/container borders |
| Input Border | #d9d9e0 | Buttons, form elements, interactive borders |

## Typography

_No typography scale was found in the local mirror._

## Buttons And Interactive Elements

_No button examples were found in the local mirror._

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| Standard Card | Border Lavender Container | Standard content card with 1px Border Lavender border and 8px radius. White surface clearly lifted from Cloud Gray page background. |
| Elevated (Whisper) | Whisper Shadow Lift | Subtle card elevation with whisper-soft shadow. Barely perceptible lift for hover states and highlighted content. |
| Featured (Glow) | Standard Elevation | Clear floating elevation with generous 16px radius. For feature showcases, product screenshots, and hero content containers. |

## Forms

_No form examples were found in the local mirror._

## Spacing

_No spacing scale was found in the local mirror._

## Border Radius

_No radius scale was found in the local mirror._

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow. Cloud Gray page background, inline text. |
| Surface | White bg, no shadow. Standard white cards on Cloud Gray. |
| Whisper | Whisper-soft shadow. Subtle card lift, hover states. |
| Elevated | Standard floating shadow. Feature showcases, screenshots. |

## Implementation Guidance

- Start from the local mirror HTML when exact layout behavior matters.
- Reuse the extracted CSS variables as the first pass of a new page theme.
- Keep CTAs, cards, inputs, and navigation visually aligned with the examples above.
- If adapting to a different product, change copy and information architecture first; only adjust tokens when the style stops supporting the content.
- Do not depend on the external getdesign.md page at runtime; this README and the mirror files are the local source of truth.

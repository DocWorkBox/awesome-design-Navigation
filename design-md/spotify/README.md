# Spotify Inspired Design System

> 本规范由本仓库的本地预览镜像生成，用于替代外部跳转说明。它保留 Spotify 风格的可执行设计 token、组件模式和页面气质，便于 Codex 在离线或 getdesign.md 不可用时直接读取。

## Overview

- Style key: `spotify`
- Category: 媒体与消费科技
- Visual direction: 音乐流媒体。深色底上的鲜绿强调，粗体标题，专辑封面驱动。
- Local light preview: [preview-site/mirrors/spotify-light.html](../../preview-site/mirrors/spotify-light.html)
- Local dark preview: [preview-site/mirrors/spotify-dark.html](../../preview-site/mirrors/spotify-dark.html)
- Preview screenshot: [preview-site/screenshots/getdesign-spotify.png](../../preview-site/screenshots/getdesign-spotify.png)

## Design Intent

Design System Inspired by Spotify

A design token catalog generated from DESIGN.md. Every color, font, and component — visualized in the dark.

## Design DNA

- Treat this as a working design language, not a brand asset kit.
- Preserve the source style's contrast, spacing rhythm, typography weight, corner radius, and interaction density before changing content.
- Use the color roles below as semantic tokens: background, text, accent, state, border, and surface.
- Prefer components shown in the local mirror over generic defaults when building new pages.

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --bg | #121212 |
| --surface | #181818 |
| --mid | #1f1f1f |
| --card | #252525 |
| --green | #1ed760 |
| --white | #ffffff |
| --silver | #b3b3b3 |
| --muted | #7c7c7c |
| --neg | #f3727f |
| --warn | #ffa42b |
| --info | #539df5 |
| --border | #4d4d4d |
| --light-border | #7c7c7c |
| --shadow-heavy | rgba(0,0,0,0.5) 0px 8px 24px |
| --shadow-med | rgba(0,0,0,0.3) 0px 8px 8px |
| --font | 'Inter', Helvetica Neue, helvetica, arial, sans-serif |

## Color Palette

### Brand

| Token | Value | Role |
| --- | --- | --- |
| Spotify Green | #1ed760 | Brand accent |
| Near Black | #121212 | Page background |
| Surface | #181818 | Cards, containers |
| Mid Dark | #1f1f1f | Buttons, inputs |

### Text & Semantic

| Token | Value | Role |
| --- | --- | --- |
| White | #ffffff | Primary text |
| Silver | #b3b3b3 | Secondary text |
| Negative | #f3727f | Error states |
| Warning | #ffa42b | Warning states |
| Announcement | #539df5 | Info states |

## Typography

- Title — 24px / 700 / SpotifyMixUITitle
- Feature — 18px / 600 / 1.30
- Body Bold — 16px / 700
- Caption — 14px / 400
- Button Uppercase — 14px / 700 / uppercase / +1.4px
- Small Bold — 12px / 700
- Badge — 10.5px / 600 / capitalize

## Buttons And Interactive Elements

| Variant | Visible Example |
| --- | --- |
| Green Pill | Shuffle Play |
| Dark Pill | Browse |
| Outlined | Follow |
| Play Circle | &#9654; |

## Cards

| Badge | Title | Usage |
| --- | --- | --- |
| - | Discover Weekly | Your personal playlist, updated every Monday. |
| - | Release Radar | New releases from artists you follow. Elevated shadow. |
| - | Daily Mix 1 | Made for you based on your listening. |
| - | Liked Songs | Your saved songs collection. |

## Forms

| Field | State | Example Value |
| --- | --- | --- |
| Search | Default (inset border) | Artists, songs, or podcasts |
| Playlist Name | Focus (green ring) | Chill Vibes |
| Email | Error (red ring) | invalid |

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

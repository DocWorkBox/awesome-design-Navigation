# Semrush Inspired Design System

> 本地遗留规范。`semrush` 不在当前预览站点的 69 个风格卡片中，也没有对应的本地 mirror 文件；这里保留一份可读、可执行的 Semrush 风格规范，避免 README 继续依赖已经不可稳定访问的外部跳转页。

## Overview

- Style key: `semrush`
- Category: 营销与增长工具
- Visual direction: SEO 与数字营销平台。高能橙色 CTA、深海军蓝信息面板、数据密集但友好的 SaaS 仪表盘气质。
- Local preview: 当前没有对应的 `preview-site/mirrors/semrush-*.html`。

## Design DNA

- 用橙色作为行动与增长信号，适合 CTA、关键指标、提示条和选中状态。
- 用深海军蓝承载导航、侧栏、仪表盘顶部区域，建立专业可信的营销工具感。
- 信息密度可以偏高，但需要用卡片、分组标题、浅灰背景和清晰表格维持可读性。
- 圆角适中，按钮直接，图表和指标卡优先表达业务增长、搜索排名、流量变化。

## CSS Token Snapshot

| CSS Variable | Value |
| --- | --- |
| --semrush-orange | #ff642d |
| --semrush-orange-dark | #e85b2a |
| --semrush-navy | #111827 |
| --semrush-blue | #421983 |
| --semrush-cyan | #00c3ff |
| --semrush-green | #00b884 |
| --semrush-red | #ff4d4f |
| --semrush-yellow | #ffc107 |
| --surface | #ffffff |
| --surface-muted | #f5f7fb |
| --border | #dfe3eb |
| --text-primary | #191b23 |
| --text-secondary | #5b6472 |
| --text-muted | #8b95a5 |
| --shadow-card | 0 8px 24px rgba(17, 24, 39, 0.08) |
| --font-sans | Inter, Arial, Helvetica, sans-serif |

## Color Palette

### Primary

| Token | Value | Role |
| --- | --- | --- |
| Semrush Orange | #ff642d | Primary CTA, selected states, growth highlights |
| Deep Navy | #111827 | Top navigation, dark panels, high-contrast text |
| White | #ffffff | Main cards, forms, content background |

### Data And Status

| Token | Value | Role |
| --- | --- | --- |
| Cyan | #00c3ff | Informational data, chart line highlight |
| Green | #00b884 | Positive growth, success, ranking improvement |
| Red | #ff4d4f | Warnings, rank drops, validation errors |
| Yellow | #ffc107 | Attention states, opportunities, warnings |

### Neutral

| Token | Value | Role |
| --- | --- | --- |
| Surface Muted | #f5f7fb | Dashboard background |
| Border | #dfe3eb | Card and table dividers |
| Text Secondary | #5b6472 | Supporting copy |
| Text Muted | #8b95a5 | Captions, metadata, disabled state |

## Typography

- Display -- 48px / 700 / 1.08 / tight SaaS marketing headline
- H1 -- 40px / 700 / 1.15 / landing hero and major dashboard pages
- H2 -- 28px / 700 / 1.25 / section titles
- Card Title -- 18px / 700 / 1.35 / dashboard cards
- Body -- 16px / 400 / 1.6 / page copy
- Table -- 14px / 500 / 1.45 / dense metrics and keyword lists
- Caption -- 12px / 500 / 1.35 / metadata, tags, small labels

## Buttons And Interactive Elements

| Variant | Treatment |
| --- | --- |
| Primary CTA | Orange fill, white text, 10px radius, bold label |
| Secondary | White fill, navy text, 1px border, same height as primary |
| Ghost | Transparent on dark navy, white text, orange hover underline |
| Metric chip | Light orange background, orange text, compact pill |
| Chart toggle | Segmented control with orange active state |

## Cards

| Type | Treatment | Usage |
| --- | --- | --- |
| KPI Card | White surface, subtle shadow, compact label, large number, delta chip | Traffic, keyword volume, visibility score |
| Audit Card | Border-left orange or status color | SEO issues, crawl warnings, opportunities |
| Data Table | White surface, sticky header, zebra rows, compact cells | Keyword lists, competitor domains, backlink reports |
| Dark Insight Panel | Navy background with orange CTA and cyan/green data accents | Hero summaries and executive reports |

## Forms

| Field | Treatment |
| --- | --- |
| Search input | Large rounded field, search icon, orange submit button |
| Select | White surface, subtle border, navy text, orange focus ring |
| Error | Red border and compact message |
| Success | Green border or delta chip |

## Spacing

- 4px micro gap
- 8px compact controls
- 12px chip and table rhythm
- 16px card internal grouping
- 24px section card gap
- 32px dashboard grid gap
- 48px landing section spacing

## Border Radius

| Radius | Context |
| --- | --- |
| 6px | Inputs, table cells, compact tags |
| 10px | Primary buttons, cards |
| 16px | Large panels, hero containers |
| 999px | Pills, filters, status chips |

## Elevation

| Level | Treatment |
| --- | --- |
| Flat | No shadow, muted dashboard background |
| Card | `0 8px 24px rgba(17, 24, 39, 0.08)` |
| Hover | Slight translateY(-2px), stronger shadow |
| Focus | 2px orange focus ring with 2px offset |

## Implementation Guidance

- Use orange sparingly but confidently; it should mark action, attention, and business movement.
- Prioritize dashboard readability: short labels, aligned numbers, visible deltas, and obvious filters.
- Pair dark navy areas with bright orange and cyan/green accents for a marketing analytics feel.
- This file is a local fallback specification; if a future Semrush mirror is added, regenerate this README from that source.

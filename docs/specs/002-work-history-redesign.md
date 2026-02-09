# 002 - Work History Section Bento Grid Redesign

## Overview

Complete overhaul of the Work History section from a vertical timeline layout to a modern bento grid design with richer interactivity, better readability, and a more visually striking presentation.

## Layout

- **Grid**: CSS Grid with `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **Featured cards**: Indices 0 and 3 span `md:col-span-2` (larger, more prominent)
- **CTA tile**: Full-width `md:col-span-2 lg:col-span-3`
- **Gap**: `gap-4 md:gap-5 lg:gap-6`

## Components

| Component         | File                                                    | Purpose                                                 |
|-------------------|---------------------------------------------------------|---------------------------------------------------------|
| WorkHistoryHeader | `src/features/landing/components/WorkHistoryHeader.tsx` | Bold headline + stat pills                              |
| BentoGrid         | `src/features/landing/components/BentoGrid.tsx`         | CSS Grid container                                      |
| BentoCard         | `src/features/landing/components/BentoCard.tsx`         | Individual card with gradient, key metric, hover reveal |
| BentoCtaCard      | `src/features/landing/components/BentoCtaCard.tsx`      | Full-width CTA tile                                     |

## Card Design

### Key Elements
- **Gradient overlay**: Per-company oklch gradient at ~8% opacity
- **Key metric**: Large bold number (text-3xl/4xl) as primary visual
- **Company logo**: Inline 24px in header + 128px watermark at low opacity
- **Role**: Below the metric
- **Achievements**: Hidden by default, revealed on hover (desktop) or tap (mobile)
- **Tech badges**: Bottom of card using Badge component

### Interactions
- **Desktop**: CSS `group-hover` reveals achievements
- **Mobile**: `useState` toggle with "Details" button
- **Hover lift**: `-translate-y-0.5` with `shadow-lg`

## Header
- Headline: "Building What Matters"
- Subtitle: "A track record of delivering impactful solutions across industries"
- Stats: "12+ Years", "7 Companies", "6 Industries" as pills

## CTA Tile
- Vibrant purple gradient background
- Handshake icon + "Your project next?" headline
- "Start a conversation" button linking to `/#contact`

## Animations
- Scroll-triggered via `useInView` hook (existing)
- `slide-up-blur-in` utility (existing) with stagger delay utilities (`stagger-0` through `stagger-7`)
- `@media (prefers-reduced-motion: reduce)` disables all animations

## Data Changes

Added to `work-history.json`:
- `keyMetric`: `{ value: string, label: string }` - primary achievement number
- `gradient`: `{ from: string, to: string }` - oklch gradient colors

## Theme Support
- Light and dark mode via existing CSS variables
- Logos use `dark:invert` for SVG compatibility
- Gradient overlays work on both `bg-card` values

## Deleted Components
- `TimelineCard.tsx` - replaced by BentoCard
- `TimelineCtaCard.tsx` - replaced by BentoCtaCard

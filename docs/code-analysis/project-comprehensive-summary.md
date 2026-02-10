# Portfolio Project - Comprehensive Context Document

> DevPlusCoder.com - Personal portfolio of Mohammed Zaghloul
> Last updated: 2026-02-10

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Dependencies](#2-tech-stack--dependencies)
3. [Project Structure](#3-project-structure)
4. [Architecture & Data Flow](#4-architecture--data-flow)
5. [Routing](#5-routing)
6. [Landing Page Sections](#6-landing-page-sections)
7. [Theme System](#7-theme-system)
8. [Internationalization (i18n)](#8-internationalization-i18n)
9. [Backend / Server Functions](#9-backend--server-functions)
10. [Animation System](#10-animation-system)
11. [Tailwind CSS & Styling](#11-tailwind-css--styling)
12. [Component Library (Shadcn UI)](#12-component-library-shadcn-ui)
13. [Core Components & Hooks](#13-core-components--hooks)
14. [Form System](#14-form-system)
15. [Data Layer](#15-data-layer)
16. [Testing](#16-testing)
17. [Build & Configuration](#17-build--configuration)
18. [CI/CD & Deployment](#18-cicd--deployment)
19. [Static Assets](#19-static-assets)
20. [Environment Variables](#20-environment-variables)
21. [Code Quality & Linting](#21-code-quality--linting)
22. [Key Patterns & Conventions](#22-key-patterns--conventions)

---

## 1. Project Overview

A modern fullstack React application serving as a personal portfolio for Mohammed Zaghloul, an independent software developer and consultant with 12+ years of experience. The site showcases work history, career stats, and core values.

- **Domain:** devpluscoder.com
- **Contact:** hello@devpluscoder.com
- **Type:** SSR single-page portfolio with server-side preferences (theme/language via cookies)
- **Source files:** ~61 TypeScript/TSX files (excluding tests and generated files)

---

## 2. Tech Stack & Dependencies

### Core Framework

| Layer | Technology | Version |
|-------|-----------|---------|
| Meta-framework | TanStack Start | ^1.158.1 |
| UI Library | React | ^19.2.4 |
| Router | TanStack Router (file-based) | ^1.158.1 |
| Data Fetching | TanStack React Query | ^5.90.20 |
| State Management | TanStack Store | ^0.8.0 |
| Forms | TanStack React Form | ^1.28.0 |
| Language | TypeScript | ^5.9.3 |
| Bundler | Vite | ^7.3.1 |

### Styling & UI

| Technology | Purpose |
|-----------|---------|
| Tailwind CSS v4 | Utility-first CSS |
| Shadcn UI (new-york style) | Component library |
| tw-animate-css | Entrance animations |
| Inter Variable | Primary font |
| Lucide React | Icons |
| Radix UI | Accessible primitives |

### Backend & Deployment

| Technology | Purpose |
|-----------|---------|
| Cloudflare Workers | Hosting / SSR runtime |
| Wrangler | Cloudflare CLI |
| Resend | Email service (templates present, integration scaffolded) |
| Sentry | Error tracking |

### Internationalization

| Technology | Purpose |
|-----------|---------|
| i18next | Translation framework |
| react-i18next | React bindings |
| i18next-browser-languagedetector | Auto language detection |

### Dev Tools

| Technology | Purpose |
|-----------|---------|
| Vitest + jsdom | Unit testing |
| React Testing Library | Component testing |
| ESLint + Prettier | Linting & formatting |
| Husky | Git hooks |
| babel-plugin-react-compiler | React Compiler (experimental) |
| TanStack Devtools | Router, Query, and Store debugging |

### Validation

| Technology | Purpose |
|-----------|---------|
| Zod | Schema validation |
| T3 Env | Type-safe env variables |

---

## 3. Project Structure

```
portfolio/
├── .claude/                    # Claude Code configuration
│   ├── CLAUDE.md               # Project instructions
│   └── skills/                 # Custom Claude skills
├── .github/
│   └── workflows/ci.yml        # CI pipeline
├── .husky/                     # Git hooks
├── docs/
│   ├── business/               # Business context docs
│   ├── specs/                  # Design & feature specs
│   └── code-analysis/          # Codebase analysis (this file)
├── public/
│   ├── companies/              # Company logo SVGs (7 logos)
│   ├── icons/                  # Badge icons
│   ├── images/                 # Section images
│   ├── favicon.svg             # Site favicon
│   ├── headshot.jpeg           # Hero headshot photo
│   ├── manifest.json           # PWA manifest
│   └── robots.txt              # Search engine directives
├── src/
│   ├── backend/                # Server-side code
│   │   └── preferences/        # Cookie-based preferences (theme, language)
│   ├── core/                   # Shared application code
│   │   ├── components/         # Reusable components (AnimatedNum, Marquee, NotFound)
│   │   ├── hooks/              # Custom hooks (useInView)
│   │   ├── locales/            # Translation JSON files (en, ar)
│   │   ├── theme/              # Theme system (Provider, Toggle, useTheme)
│   │   ├── utils/              # Utility functions (noop)
│   │   └── schemas.ts          # Zod schemas (Theme, Language, Cookie config)
│   ├── data/                   # Static data files
│   │   └── work-history.json   # Work history entries
│   ├── env.client.ts           # Type-safe client env vars
│   ├── features/
│   │   └── landing/
│   │       └── components/     # All landing page section components
│   ├── integrations/
│   │   ├── i18n/               # i18next setup & providers
│   │   ├── resend/             # Email templates (scaffolded)
│   │   ├── shadcn/             # Shadcn UI components & utilities
│   │   ├── tanstack-form/      # Form field components & hooks
│   │   └── tanstack-query/     # Query client provider & devtools
│   ├── router.tsx              # Router factory with Sentry init
│   ├── routes/
│   │   ├── __root.tsx          # Root layout (providers, meta, shell)
│   │   └── index.tsx           # Home page (landing sections)
│   ├── styles.css              # Global styles, theme vars, custom animations
│   └── test/
│       └── setup.ts            # Vitest setup (jest-dom, cleanup)
├── components.json             # Shadcn UI configuration
├── eslint.config.js            # ESLint configuration
├── package.json                # Dependencies & scripts
├── prettier.config.js          # Prettier configuration
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite + Cloudflare + TanStack Start
└── vitest.config.ts            # Vitest configuration
```

---

## 4. Architecture & Data Flow

### Application Bootstrap

```
vite.config.ts
  └── Plugins: cloudflare → viteTsConfigPaths → tailwindcss → tanstackStart → viteReact

router.tsx (getRouter)
  ├── Creates i18n instance
  ├── Creates QueryClient (5min stale, 30min gc)
  ├── Creates Router with context: { i18n, initialTheme, initialLanguage, queryClient }
  ├── Wraps app in QueryClientProvider
  ├── Initializes Sentry on client side
  └── Enables scroll restoration + intent preloading
```

### Provider Hierarchy

```
Router (TanStack Query Provider wraps all)
  └── RootDocument (from __root.tsx)
      └── LanguageProvider (i18next + LanguageContext Store)
          └── ThemeProvider (ThemeContext Store)
              └── RootDocumentContent
                  └── <html lang={...} dir={...}>
                      └── <body className={theme}>
                          └── <Outlet /> (page content)
                          └── TanStack Devtools (conditional)
```

### Data Flow for Preferences

```
1. Server: beforeLoad() → getInitialPreferencesFn() → reads cookies
2. Server → Client: initialTheme + initialLanguage in route context
3. Client: ThemeProvider creates TanStack Store with initial value
4. Client: useTheme() reads store + mutates via server function to update cookie
5. Theme class applied to <body> element ("dark" or "light")
6. CSS custom variant: @custom-variant dark (&:is(.dark *))
```

---

## 5. Routing

### Setup

- **Type:** File-based routing via TanStack Router
- **Route directory:** `src/routes/`
- **Generated file:** `src/routeTree.gen.ts` (auto-generated)

### Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `src/routes/index.tsx` | Landing page (all sections) |
| `*` (404) | `src/routes/__root.tsx` | Not found page |

### Root Route (`__root.tsx`)

- Uses `createRootRouteWithContext<MyRouterContext>()` with typed context
- `beforeLoad`: Fetches initial preferences from server cookies
- `shellComponent`: `RootDocument` - wraps everything in providers
- `notFoundComponent`: Shows header + NotFound + footer
- `head`: Sets meta tags (charset, viewport, title, description, author, favicon, stylesheet)

### Landing Page Composition (`index.tsx`)

```tsx
<HeroSection />      // Hero with header, headshot, companies marquee
<AboutSection />     // Core values grid with image
<StatsSection />     // Career & Upwork stats with animated counters
<WorkHistorySection /> // Bento grid of work history cards
<FooterSection />    // Logo, links, social, copyright
```

---

## 6. Landing Page Sections

### HeroSection (`src/features/landing/components/HeroSection.tsx`)

The top section of the page. Composed of:

- **HeroHeader** - Fixed navigation bar with logo, section links (About, Stats, Work), mobile hamburger menu, theme toggle, and scroll progress indicator
- **TopEndLight** - Decorative radial gradient light effect (desktop only, `lg:block`)
- **Hero content** - "Hello, I'm Mohammed Zaghloul" headline, subtitle, tagline, CTA button ("Let's work together" mailto link), social links
- **HeroHeadshot** - Headshot image with CSS radial mask vignette effect, dark mode blend
- **HeroCompanies** - Scrolling marquee of company logos ("Helping the best teams")

All hero text elements use `slide-up-blur-in` with staggered delays (50ms-250ms).

### AboutSection (`src/features/landing/components/AboutSection.tsx`)

Presents core values with a business meeting image. Contains:

- Headline: "Bring measurable impact to your business"
- Description about blending business background with technical expertise
- Business meeting image (grayscale)
- 4-column grid of core values:
  - Ownership & Delivery (Zap icon)
  - Quality & Reliability (Cpu icon)
  - Scalability & Growth (Scaling icon)
  - Innovation & Adaptability (Sparkles icon)

### StatsSection (`src/features/landing/components/StatsSections.tsx`)

Displays career and Upwork statistics with animated number counters:

- **Career Stats** (left side): 12+ years, 100+ projects, 75+ clients, 45+ skills
- **Upwork Stats** (right side, links to Upwork profile): 100%+ job success, 5427 worked hours, 40 jobs, Top Rated Plus badge
- Uses `AnimatedNum` component with `whileInView` for viewport-triggered counting
- Typography uses gradient text: `bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text`

### WorkHistorySection (`src/features/landing/components/WorkHistorySection.tsx`)

Bento grid layout showcasing 7 work history entries:

- **WorkHistoryHeader** - "Building What Matters" title, description, pill stats (12+ Years, 10+ Companies, 6+ Industries)
- **BentoGrid** - Responsive CSS Grid: 1-col mobile, 2-col tablet, 3-col desktop
- **BentoCard** - Individual work entry cards with:
  - Gradient overlay background (unique per company)
  - Watermark company logo (subtle, hover-intensifies)
  - Company name, date range, key metric (bold value + label), role title
  - Achievements list (visible on hover/always on mobile)
  - Technology badges
  - Featured cards span 2 columns (`md:col-span-2`)
  - Staggered slide-up animation triggered by `useInView`
- **BentoCtaCard** - "Your project next?" CTA spanning full width, links to mailto

### FooterSection (`src/features/landing/components/FooterSection.tsx`)

Simple footer with logo, navigation links, social links, and copyright notice.

---

## 7. Theme System

### Architecture

```
ThemeProvider (src/core/theme/ThemeProvider.tsx)
  ├── Creates TanStack Store<{ theme: Theme }>
  └── Exposes via React Context (ThemeContext)

useTheme (src/core/theme/useTheme.tsx)
  ├── Reads theme from TanStack Store via useStore()
  ├── setTheme: updates store + calls server function to persist cookie
  └── Server function: setThemeCookieFn (POST, validated with Zod)

ThemeToggle (src/core/theme/ThemeToggle.tsx)
  └── Button with MoonIcon/SunIcon, toggles light/dark
```

### How Theme is Applied

1. Server reads `theme` cookie on every request via `beforeLoad()`
2. Cookie defaults to `'dark'` if not set
3. Theme class (`dark` or `light`) applied to `<body>` element
4. CSS uses `@custom-variant dark (&:is(.dark *))` for dark mode styles
5. All Shadcn components and custom styles reference CSS variables that change under `.dark`

### Schemas (`src/core/schemas.ts`)

```typescript
type Theme = 'light' | 'dark'       // default: 'dark'
type Language = 'en' | 'ar'         // default: 'en'
type Direction = 'ltr' | 'rtl'

// Cookie options: path '/', maxAge 1 year, secure, httpOnly, sameSite 'lax'
```

---

## 8. Internationalization (i18n)

### Setup

- i18next configured in `src/integrations/i18n/i18next.ts`
- Language detection: navigator → htmlTag
- Supported languages: English (`en`) and Arabic (`ar`)
- Default namespace: `core`
- Translation files: `src/core/locales/en.json`, `src/core/locales/ar.json`

### Provider Chain

```
LanguageProvider (src/integrations/i18n/LanguageProvider.tsx)
  ├── Creates TanStack Store<{ language: Language }>
  ├── Syncs i18n.changeLanguage() on mount
  └── Wraps children in I18nextProvider + LanguageContext
```

### Language Persistence

Same cookie-based pattern as theme:
- Server reads `language` cookie via `parseLanguageCookie()`
- Client toggles via `setLanguageCookieFn` server function
- `<html>` element gets `lang` and `dir` attributes from i18n

### RTL Support

The `<html>` element's `dir` attribute is set dynamically:
```tsx
<html lang={i18n.language} dir={i18n.dir(i18n.language)}>
```

---

## 9. Backend / Server Functions

All server code lives in `src/backend/preferences/`.

### Server Functions (TanStack Start)

| Function | Method | File | Purpose |
|----------|--------|------|---------|
| `getInitialPreferencesFn` | GET | `queries.ts` | Reads theme + language cookies |
| `setThemeCookieFn` | POST | `mutations.ts` | Sets theme cookie (Zod validated) |
| `setLanguageCookieFn` | POST | `mutations.ts` | Sets language cookie (Zod validated) |

### Middleware

```typescript
// src/backend/preferences/middlewares.ts
preferencesMiddleware - reads initial preferences and adds to server context
```

### Cookie Library (`lib.ts`)

Pure utility functions for parsing/setting cookies:
- `parseThemeCookie()` - reads + validates with Zod
- `setThemeCookie(theme)` - sets with standard options
- `parseLanguageCookie()` - reads + validates with Zod
- `setLanguageCookie(language)` - sets with standard options
- `getInitialPreferences()` - combines both with defaults

---

## 10. Animation System

### Custom Utility: `slide-up-blur-in`

Defined in `src/styles.css`:
```css
@utility slide-up-blur-in {
  @apply animate-in slide-in-from-bottom-15 blur-in fill-mode-backwards duration-1000 ease-out;
}
```
Uses `tw-animate-css` library classes. Applied throughout hero and work sections with staggered delays.

### Animated Counter (`AnimatedNum` component)

- Component: `src/core/components/AnimatedNum.tsx`
- CSS: Uses `@property --num` and `@property --target` for pure CSS counter animation
- Triggers on viewport entry via `useInView` hook (when `whileInView=true`)
- Animation: `counter 1s ease-out forwards` from 0 to `--target`
- Counter displayed via CSS `counter-reset: num var(--num)` and `content: counter(num)`

### Marquee

- Component: `src/core/components/Marquee.tsx`
- CSS: Pure CSS animation using `translateX(-50%)` / `translateY(-50%)`
- Configurable: duration (default 40s), gap (default 5rem), repeat count (default 4), direction, pause-on-hover
- Mask: Gradient fade on edges via `mask-image`
- Used in HeroCompanies with `[--duration:20s]`

### Scroll Progress Indicator

- Class: `scroll-progress-indicator`
- Pure CSS using `animation-timeline: scroll()` for native scroll-linked progress bar
- Fixed position at top of page, `0.25rem` height, foreground color

### IntersectionObserver Hook (`useInView`)

- File: `src/core/hooks/useInView.ts`
- Returns `{ ref, inView }` - `ref` attached to element, `inView` becomes true once
- Default threshold: 0.5 (50% visible)
- Disconnects after first intersection (one-time trigger)
- Used in: WorkHistorySection, WorkHistoryHeader, BentoCtaCard, StatsSection

### Stagger Pattern

Elements within sections use sequential delays:
```tsx
style={{ animationDelay: `${index * 100}ms` }}
// Combined with conditional class: inView ? 'slide-up-blur-in' : 'opacity-0'
```

---

## 11. Tailwind CSS & Styling

### Configuration

- Tailwind CSS **v4** using `@tailwindcss/vite` plugin
- No `tailwind.config.ts` file - configured in `src/styles.css` via CSS-native config
- Dark mode: class-based via `@custom-variant dark (&:is(.dark *))`

### Theme Variables (OKLCH Color System)

Defined as CSS custom properties in `src/styles.css` with light (`:root`) and dark (`.dark`) variants:

**Key tokens:** `--background`, `--foreground`, `--card`, `--primary`, `--secondary`, `--muted`, `--accent`, `--destructive`, `--border`, `--input`, `--ring`, `--chart-1` through `--chart-5`, `--sidebar-*`

Mapped to Tailwind via `@theme inline` block:
```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: 'Inter Variable', sans-serif;
  --radius-lg: var(--radius);  /* base: 0.45rem */
  /* ... etc */
}
```

### Typography

- **Font:** Inter Variable (imported from `@fontsource-variable/inter`)
- **Gradient text pattern:** `bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-transparent` (dark: `dark:from-white dark:to-zinc-800`)
- **Antialiasing:** `-webkit-font-smoothing: antialiased`

### Responsive Breakpoints

| Prefix | Min Width | Typical Use |
|--------|-----------|-------------|
| `sm:` | 640px | Small adjustments |
| `md:` | 768px | Tablet layout, grid changes |
| `lg:` | 1024px | Desktop layout, side-by-side |
| `xl:` | 1280px | Extra large text sizes |

### Common Layout Patterns

- **Section wrapper:** `py-16 md:py-32`
- **Content container:** `mx-auto max-w-6xl px-6`
- **Spacing:** `space-y-8 md:space-y-12`
- **Grid:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6`

---

## 12. Component Library (Shadcn UI)

### Configuration (`components.json`)

```json
{
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": { "css": "src/styles.css", "baseColor": "zinc", "cssVariables": true },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/integrations/shadcn/components",
    "ui": "@/integrations/shadcn/components/ui",
    "utils": "@/integrations/shadcn/lib/utils",
    "lib": "@/integrations/shadcn/lib",
    "hooks": "@/integrations/shadcn/hooks"
  }
}
```

### Installed Components

| Component | File | Custom Variants |
|-----------|------|-----------------|
| Badge | `badge.tsx` | default, secondary, destructive, outline |
| Button | `button.tsx` | Sizes: default, xs, sm, lg, icon, icon-xs, icon-sm, icon-lg; Variants: default, destructive, outline, secondary, ghost, link |
| Card | `card.tsx` | Standard card parts |
| Checkbox | `checkbox.tsx` | - |
| Field | `field.tsx` | Form field wrapper |
| Input | `input.tsx` | - |
| Label | `label.tsx` | - |
| Select | `select.tsx` | - |
| Separator | `separator.tsx` | - |
| Spinner | `spinner.tsx` | Loading indicator |
| Textarea | `textarea.tsx` | - |

### Utility: `cn()`

From `src/integrations/shadcn/lib/utils.ts` - combines `clsx` + `tailwind-merge` for conditional class merging.

---

## 13. Core Components & Hooks

### Components (`src/core/components/`)

| Component | Props | Purpose |
|-----------|-------|---------|
| `AnimatedNum` | `value: number, whileInView?: boolean, options?: IntersectionObserverInit` | CSS counter animation triggered on viewport entry |
| `Marquee` | `reverse?, pauseOnHover?, vertical?, repeat?, duration?, gap?` | Infinite scroll animation for content |
| `NotFound` | Standard div props | 404 page with translated text and "Go Home" button |
| `WithTranslation` | `children: (t) => ReactNode` | Translation wrapper |
| `WithOutTranslation` | `children: ReactNode` | Non-translated wrapper |

### Hooks (`src/core/hooks/`)

| Hook | Returns | Purpose |
|------|---------|---------|
| `useInView<T>` | `{ ref: RefObject<T>, inView: boolean }` | One-time IntersectionObserver trigger |

### Theme (`src/core/theme/`)

| Export | Purpose |
|--------|---------|
| `ThemeProvider` | Context provider with TanStack Store |
| `ThemeToggle` | Sun/Moon button component |
| `ThemeToggleButton` | Stateless toggle (data-down, action-up) |
| `ThemeToggleIcon` | Icon renderer by theme |
| `useTheme()` | `{ theme, setTheme }` hook with cookie persistence |

---

## 14. Form System

### TanStack Form Integration (`src/integrations/tanstack-form/`)

Pre-built form components:

| Component | File | Purpose |
|-----------|------|---------|
| `InputField` | `components/InputField.tsx` | Text input with label, validation, error display |
| `TextareaField` | `components/TextareaField.tsx` | Textarea with label, validation, error display |
| `SubmitButton` | `components/SubmitButton.tsx` | Submit button with loading state |
| `ResetButton` | `components/ResetButton.tsx` | Form reset button |

### Form Hooks

| Hook | File | Purpose |
|------|------|---------|
| `form` | `hooks/form.tsx` | Form creation and configuration |
| `formContext` | `hooks/formContext.tsx` | Form context provider |

---

## 15. Data Layer

### Static Data

Work history is stored as JSON at `src/data/work-history.json`:

```typescript
interface WorkHistoryEntry {
  company: string
  logo: string            // path to SVG in /public/companies/
  role: string
  startDate: string
  endDate: string
  achievements: string[]
  technologies: string[]
  keyMetric: { value: string; label: string }
  gradient: { from: string; to: string }  // OKLCH colors
  project?: { name: string; url: string | null; description: string }
}
```

**7 entries** covering:
1. Ark Knowledge Networks - Lead Full-Stack Developer (2025)
2. Bloowatch - Senior Software Consultant (2023-2025)
3. Plenty - Senior Full-Stack Engineer (2023-2024)
4. Lead Liaison - Senior Software Consultant (2022-2024)
5. Diwala - Senior Full-Stack Engineer (2022-2023)
6. Lead Liaison - Lead Frontend Developer (2020-2022)
7. Genesys - Lead Frontend Engineer (2019-2021)

### Career Stats (hardcoded in StatsSection)

- Career: 12+ years, 100+ projects, 75+ clients, 45+ skills
- Upwork: 100%+ job success, 5427 hours, 40 jobs, Top Rated Plus

### Core Values (hardcoded in AboutSection)

4 values: Ownership & Delivery, Quality & Reliability, Scalability & Growth, Innovation & Adaptability

---

## 16. Testing

### Setup

- **Framework:** Vitest with jsdom environment
- **Utilities:** React Testing Library + jest-dom matchers
- **Config:** `vitest.config.ts` with path alias support
- **Setup file:** `src/test/setup.ts` - imports jest-dom/vitest, auto-cleanup after each test
- **Pattern:** `src/**/*.test.{ts,tsx}`
- **Exclusions:** Worker-specific tests (`*.worker.test.*`)

### Existing Test Files

```
src/core/theme/ThemeProvider.test.tsx
src/core/theme/ThemeToggle.test.tsx
src/core/theme/useTheme.test.tsx
```

### Running Tests

```bash
pnpm test        # vitest run (single run)
```

---

## 17. Build & Configuration

### Vite Configuration (`vite.config.ts`)

Plugins loaded in order:
1. `devtools()` - TanStack DevTools
2. `cloudflare({ viteEnvironment: { name: 'ssr' } })` - Cloudflare Workers SSR
3. `viteTsConfigPaths()` - Path alias resolution
4. `tailwindcss()` - Tailwind CSS v4
5. `tanstackStart()` - TanStack Start framework
6. `viteReact({ babel: { plugins: ['babel-plugin-react-compiler'] } })` - React + React Compiler

### TypeScript Configuration (`tsconfig.json`)

- Target: ES2022
- Module: ESNext with bundler resolution
- Strict mode enabled
- No unused locals/parameters
- Path alias: `@/*` → `./src/*`

### NPM Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server on port 3000 |
| `pnpm build` | Production build via Vite |
| `pnpm preview` | Preview production build |
| `pnpm test` | Run Vitest |
| `pnpm lint` | ESLint check |
| `pnpm format` | Prettier format |
| `pnpm format:check` | Prettier check |
| `pnpm typecheck` | TypeScript type check |
| `pnpm check` | Prettier write + ESLint fix + TypeScript check |
| `pnpm deploy` | Build + Wrangler deploy |

---

## 18. CI/CD & Deployment

### GitHub Actions (`.github/workflows/ci.yml`)

**Trigger:** Push to main or PR to main (ignoring docs, dotfiles, markdown, husky)

**Pipeline steps:**
1. Checkout code
2. Install pnpm v10
3. Setup Node.js 24 with pnpm cache
4. Install dependencies (frozen lockfile)
5. Run linting
6. Check formatting
7. Type check
8. Run tests
9. Build application

**Features:** Concurrency control (cancel-in-progress), 10-minute timeout

### Deployment

- **Platform:** Cloudflare Workers
- **Deploy command:** `pnpm deploy` (build + wrangler deploy)
- **Output:** `.output/` directory with server-side rendering support

---

## 19. Static Assets

### Public Directory (`public/`)

| Path | Description |
|------|-------------|
| `favicon.svg` | Site favicon (SVG) |
| `headshot.jpeg` | Mohammed's headshot photo |
| `headshot.jpg` | Alternate headshot format |
| `manifest.json` | PWA manifest |
| `robots.txt` | Search engine directives |
| `companies/*.svg` | Company logos: Genesys, Bloowatch, Plenty, ARK Knowledge Networks, Diwala, Lead Liaison, Upwork |
| `icons/upwork-top-rated-plus.svg` | Upwork Top Rated Plus badge |
| `images/business-meeting.webp` | About section image |

---

## 20. Environment Variables

### Client Variables (`src/env.client.ts`)

Managed via T3 Env with `VITE_` prefix requirement:

| Variable | Type | Default | Purpose |
|----------|------|---------|---------|
| `VITE_ENABLE_TANSTACK_DEVTOOLS` | `'true' \| 'false'` | `'false'` | Toggle TanStack DevTools panel |
| `VITE_ENABLE_I18N_DEBUG` | `'true' \| 'false'` | `'false'` | Toggle i18next debug logging |

### Server Variables

| Variable | Purpose |
|----------|---------|
| `VITE_SENTRY_DSN` | Sentry error tracking DSN |

---

## 21. Code Quality & Linting

### ESLint (`eslint.config.js`)

Flat config with:
- `@tanstack/eslint-config` base
- `eslint-plugin-react-hooks` (recommended)
- `eslint-plugin-react-refresh` (recommended)
- `@tanstack/eslint-plugin-router` (recommended)
- `eslint-plugin-no-barrel-files` (enforces no barrel exports)
- `eslint-config-prettier` (disables conflicting rules)
- Custom overrides: `react/no-multi-comp: off`, `react-refresh/only-export-components: off`

### Prettier

Configured via `prettier.config.js` with `prettier-plugin-tailwindcss` for class sorting.

### Git Hooks

Husky configured via `.husky/` directory for pre-commit checks.

---

## 22. Key Patterns & Conventions

### Component Patterns

1. **Stateless/presentational components** - Components receive data via props, no internal state management for business logic
2. **Data-down, action-up** - ThemeToggleButton receives `theme` + `onChange`, doesn't manage state
3. **Feature-based organization** - `src/features/landing/components/` groups all landing page components
4. **Integration isolation** - Third-party libraries wrapped in `src/integrations/` (shadcn, i18n, tanstack-form, tanstack-query)
5. **No barrel files** - Enforced via ESLint plugin; all imports are direct file paths

### Naming Conventions

- Components: PascalCase (`HeroSection.tsx`)
- Hooks: camelCase with `use` prefix (`useTheme.tsx`, `useInView.ts`)
- Data/config: camelCase (`schemas.ts`, `resources.ts`)
- Tests: `[name].test.tsx` co-located with source

### CSS Patterns

- Theme colors via CSS custom properties (OKLCH)
- Dark mode via `.dark` class on `<body>`
- Animations prefer pure CSS over JavaScript
- `cn()` utility for all conditional class composition
- Responsive: mobile-first with `sm:`, `md:`, `lg:`, `xl:` breakpoints
- Never dynamically compose Tailwind class names (JIT limitation)

### Server Function Pattern

```typescript
// Query (GET)
export const getFn = createServerFn().handler(() => { /* read cookie */ })

// Mutation (POST)
export const setFn = createServerFn({ method: 'POST' })
  .inputValidator(zodSchema)
  .handler(({ data }) => { /* set cookie */ })
```

### State Management

- TanStack Store for global state (theme, language)
- TanStack React Query for server state (5min stale, 30min gc)
- React `useState` for local UI state (menu toggle)
- No Redux, Zustand, or other external state libraries

### Path Aliases

`@/*` maps to `./src/*` - configured in both `tsconfig.json` and Vite.

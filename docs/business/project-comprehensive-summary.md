# Portfolio Project Exploration - Complete Analysis

---
       1. LANDING SECTION DESIGN PATTERNS

       File Locations:
       - /Users/mohammedz/projects/portfolio/src/features/landing/components/HeroSection.tsx
       - /Users/mohammedz/projects/portfolio/src/features/landing/components/AboutSection.tsx
       - /Users/mohammedz/projects/portfolio/src/features/landing/components/WorkHistorySection.tsx
       - /Users/mohammedz/projects/portfolio/src/features/landing/components/StatsSections.tsx
       - /Users/mohammedz/projects/portfolio/src/features/landing/components/ContactSection.tsx
       - /Users/mohammedz/projects/portfolio/src/features/landing/components/HeroCompanies.tsx
       - /Users/mohammedz/projects/portfolio/src/features/landing/components/FooterSection.tsx

       Common Patterns Observed:

       1. Section Structure: py-16 md:py-32 for vertical padding with responsive adjustments
       2. Container Layout: mx-auto max-w-6xl px-6 for centered max-width container with side padding
       3. Content Grid: space-y-8 md:space-y-12 for vertical spacing between sections
       4. Heading Hierarchy: Sections use h2 for section titles, often with text-4xl font-medium text-balance lg:text-5xl
       5. ID Anchors: Each section has an id attribute for navigation (about, stats, work, contact)
       6. Responsive Design: Extensive use of md: and lg: prefixes for tablet/desktop breakpoints

       ---
       2. ANIMATION UTILITIES & PATTERNS

       Available Custom Animation Classes:

       1. slide-up-blur-in (Custom utility in styles.css)
         - Definition: @apply animate-in slide-in-from-bottom-15 blur-in fill-mode-backwards duration-1000 ease-out
         - Used extensively on hero section text and cards
         - Creates an upward entrance with blur effect
       2. animate-fade-in-up (from tw-animate-css library)
         - Used in SocialLinks component
         - Combines fade-in with upward motion
       3. animate-in family (from tw-animate-css)
         - slide-in-from-bottom-15, blur-in, animate-in, etc.
         - Provides comprehensive entrance animations
       4. Animated Counter (Custom CSS in styles.css)
         - Class: animated-num and animated-num.in-view
         - Used with AnimatedNum component for number animations
         - Uses CSS @property --num for counter animation
       5. Marquee Animation (Custom CSS in styles.css)
         - Classes: marquee-container, marquee-content, marquee-vertical, marquee-reverse, marquee-pause-on-hover
         - Configurable duration and gap via CSS variables: --marquee-duration and --marquee-gap

       Intersection Observer Hook:
       - useInView hook (/Users/mohammedz/projects/portfolio/src/core/hooks/useInView.ts)
         - Triggers animations when element comes into view
         - Default threshold: 0.5 (customizable)
         - Returns { ref, inView } for conditional className application
         - Used in WorkHistorySection, ContactSection, etc.

       Delay Classes:
       - Tailwind animation delays: delay-50, delay-100, delay-150, delay-200, delay-250, delay-500
       - Stagger effect example: style={{ animationDelay: ${150 + index * 100}ms }} in WorkHistorySection

       ---
       3. TAILWIND THEME CONFIGURATION

       Color Scheme (OKLCH Format):
       Located in /Users/mohammedz/projects/portfolio/src/styles.css (lines 22-91)

       Light Mode Variables:
       - Primary: oklch(0.21 0.006 285.885) (dark blue-ish)
       - Primary-foreground: oklch(0.985 0 0) (white)
       - Secondary: oklch(0.967 0.001 286.375) (very light)
       - Muted-foreground: oklch(0.552 0.016 285.938) (gray)
       - Destructive: oklch(0.577 0.245 27.325) (red)

       Dark Mode Variables:
       - Background: oklch(0.141 0.005 285.823) (very dark)
       - Foreground: oklch(0.985 0 0) (white)
       - Primary: oklch(0.92 0.004 286.32) (light gray)
       - Accent/Secondary: oklch(0.274 0.006 286.033) (dark purple-gray)

       Custom Radius Values:
       - Base --radius: 0.45rem (7.2px)
       - Extends to: sm, md, lg, xl, 2xl, 3xl, 4xl

       Font:
       - Primary: Inter Variable (from @fontsource-variable/inter)
       - Fallback: sans-serif

       Chart Colors:
       - 5 chart colors defined for data visualization (oklch format)

       ---
       4. CUSTOM CSS ANIMATIONS & STYLES

       In /Users/mohammedz/projects/portfolio/src/styles.css:

       1. Scroll Progress Indicator
         - Class: scroll-progress-indicator
         - Animation: grow-progress (scaleX transform)
         - Uses CSS animation-timeline: scroll() for native scroll tracking
         - Fixed position, 0.25rem height, 100% width
       2. Animated Counter
         - Uses CSS custom properties: @property --target and @property --num
         - Counter resets on view with animation: counter 1s ease-out forwards
         - Applied to AnimatedNum component
       3. Marquee System
         - Horizontal and vertical modes
         - Mask gradient for fade effect: mask-image: linear-gradient(to right, transparent, black 10%, black 95%, transparent)
         - CSS variables for duration and gap customization
         - Supports reverse direction and pause-on-hover
       4. Base Layer Styles
         - All elements: border-border outline-ring/50
         - Body: bg-background text-foreground font-sans
         - HTML: scroll-smooth

       ---
       5. SHADCN UI COMPONENTS AVAILABLE

       Located: /Users/mohammedz/projects/portfolio/src/integrations/shadcn/components/ui/

       - Badge (badge.tsx) - Status/tag indicators
       - Button (button.tsx) - Primary interactive element with variants (default, destructive, outline, secondary, ghost, link)
       - Card (card.tsx) - Container component for grouped content
       - Checkbox (checkbox.tsx) - Input control
       - Input (input.tsx) - Text input field
       - Label (label.tsx) - Form label
       - Select (select.tsx) - Dropdown/select control
       - Separator (separator.tsx) - Visual divider
       - Textarea (textarea.tsx) - Multi-line text input

       Button Variants:
       - Sizes: default, xs, sm, lg, icon, icon-xs, icon-sm, icon-lg
       - Variants: default, destructive, outline, secondary, ghost, link

       ---
       6. CORE COMPONENTS & UTILITIES

       Animation Components:

       1. AnimatedNum (/Users/mohammedz/projects/portfolio/src/core/components/AnimatedNum.tsx)
         - Props: value: number, whileInView?: boolean, options?: IntersectionObserverInit
         - Uses useInView hook to trigger counter animation
         - Applies --target CSS variable for counter value
       2. Marquee (/Users/mohammedz/projects/portfolio/src/core/components/Marquee.tsx)
         - Props: reverse, pauseOnHover, vertical, repeat, duration, gap
         - Default repeat: 4 (duplicates content 4 times)
         - Default duration: 40s, gap: 5rem
         - Used in HeroCompanies section with duration [--duration:20s]

       Theme Components:
       - ThemeProvider, ThemeToggle, useTheme - Dark mode support

       Utilities:
       - cn() from shadcn/lib/utils - Class merging utility

       ---
       7. SPECIFIC STYLING PATTERNS OBSERVED

       Typography Gradients:
       bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-2xl font-bold text-transparent
       dark:from-white dark:to-zinc-800
       Used for high-impact headings (Stats, Work metrics)

       Radial Gradient Overlays:
       - TopEndLight component uses multiple radial gradients with HSLA colors
       - Creates subtle background light effects
       - Uses custom CSS with arbitrary values: bg-[radial-gradient(...)]

       Image Masking:
       - HeroHeadshot uses radial mask utilities: mask-y-from-85% mask-y-to-95% mask-x-from-85% mask-x-to-95% mask-radial-from-50%
       mask-radial-to-55%
       - Creates circular vignette effect

       Card/Container Styling:
       - Borders: border-border (from theme)
       - Rounded corners: typically rounded-xl, rounded-2xl, rounded-3xl
       - Padding: p-6, p-8, p-10
       - Background on muted sections: dark:bg-background bg-muted/50

       ---
       8. RESPONSIVE BREAKPOINTS & DESIGN

       Used Extensively:
       - sm: - Small screens (640px)
       - md: - Medium screens (768px)
       - lg: - Large screens (1024px)
       - xl: - Extra large screens (1280px)

       Example Pattern (HeroSection):
       - Mobile: full-width flex column, centered text
       - Tablet (md:): adjustments to text size and spacing
       - Desktop (lg:): side-by-side layout with image on right

       Max-width Containers:
       - Hero/main sections: max-w-6xl (1152px)
       - Text/content sections: max-w-xl, max-w-2xl, max-w-5xl

       ---
       9. COMPONENT COMPOSITION HIERARCHY

       Landing Page Structure:
       HeroSection
       ├── HeroHeader (fixed nav)
       ├── TopEndLight (background gradient elements)
       ├── Main section
       │   ├── Hero text (title, subtitle, CTA)
       │   ├── HeroHeadshot (image with mask)
       │   └── HeroCompanies (Marquee component)
       └── (Additional sections mounted separately)

       Individual Section Pattern:
       <section id="about" className="py-16 md:py-32">
         <div className="mx-auto max-w-6xl space-y-8 px-6">
           <div className="text-center">
             <h2>Title</h2>
             <p>Subtitle/description</p>
           </div>
           {/* Content grid/list */}
         </div>
       </section>

       ---
       10. ANIMATION TIMING & STAGGER STRATEGY

       Slide-up-blur-in application:
       - Applied to multiple elements in hero for waterfall effect
       - Combined with delay classes: delay-50, delay-100, delay-150, delay-200, delay-250, delay-500

       In-view animations (WorkHistorySection example):
       {WORK_HISTORY.map((item, index) => (
         <div
           className={cn(
             'border rounded-xl border p-6',
             inView ? 'slide-up-blur-in' : 'opacity-0'
           )}
           style={{ animationDelay: `${150 + index * 100}ms` }}
         >
       - Each card gets 100ms additional delay per index
       - Starts at 150ms base delay

       ---
       11. BUILD & STYLING SETUP

       CSS Imports (in styles.css):
       - @import 'tailwindcss' - Core Tailwind
       - @import 'tw-animate-css' - Animation utilities library
       - @import 'shadcn/tailwind.css' - Shadcn theming
       - @import '@fontsource-variable/inter' - Font

       Build Tools:
       - Vite with TailwindCSS v4.1 via @tailwindcss/vite plugin
       - TanStack Start framework
       - Tailwind configured via vite.config.ts (line 24: tailwindcss())

       ---
       SUMMARY

       The portfolio uses a sophisticated layered approach:
       1. Tailwind CSS v4 with OKLCH color system for theme consistency
       2. Custom CSS animations (scroll progress, counter, marquee) in styles.css
       3. tw-animate-css library for entrance animations
       4. Intersection Observer pattern via useInView hook for scroll-triggered animations
       5. Staggered animation delays for cascade effects
       6. Shadcn UI components with custom variants for consistent UI
       7. Responsive mobile-first design with clear breakpoint strategy
       8. Gradient overlays and image masking for visual polish

       All animations are performant, using CSS where possible and React state minimally. The design is highly componentized with
       consistent spacing (4/6/8/12/16/32px scale) and a clean color palette supporting both light and dark modes.

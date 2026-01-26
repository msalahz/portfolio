# 001: Landing Page

**Status:** Partial (Hero implemented, highlight sections planned)
**Route:** `/`
**Live:** devpluscoder.com
**Scope:** Current

## Overview

Single-page landing for Mohammed Zaghloul's personal website, positioning him as an Independent Software Developer & Consultant with a focus on measurable business impact.

The page includes a hero section (implemented) and three highlight sections (planned): About Me, Career Stats, and Work History.

## Components

| Component      | Location                                         | Purpose                                       |
|----------------|--------------------------------------------------|-----------------------------------------------|
| HeroHeader     | `features/landing/components/HeroHeader.tsx`     | Navigation bar with logo, links, theme toggle |
| HeroSection    | `features/landing/components/HeroSection.tsx`    | Main hero content                             |
| HeroHeadshot   | `features/landing/components/HeroHeadshot.tsx`   | Professional photo                            |
| SocialLinks    | `features/landing/components/SocialLinks.tsx`    | GitHub, LinkedIn, Upwork icons                |
| HeroCompanies  | `features/landing/components/HeroCompanies.tsx`  | Company logos carousel                        |
| FooterSection  | `features/landing/components/FooterSection.tsx`  | Page footer                                   |
| LandingLinks   | `features/landing/components/LandingLinks.tsx`   | Navigation links config                       |
| AboutSection   | `features/landing/components/AboutSection.tsx`   | About me with values (planned)                |
| CareerStats    | `features/landing/components/CareerStats.tsx`    | Key metrics display (planned)                 |
| WorkHistory    | `features/landing/components/WorkHistory.tsx`    | Featured roles showcase (planned)             |
| ContactSection | `features/landing/components/ContactSection.tsx` | Contact form and info                         |

## Hero Content

- **Greeting:** "Hey, I'm"
- **Name:** Mohammed Zaghloul
- **Title:** Independent Software Developer & Consultant
- **Tagline:** "I build end-to-end web solutions that deliver measurable business impact—from MVPs to enterprise platforms."
- **CTA:** "Let's work together" → mailto:hello@devpluscoder.com

## Social Links

1. LinkedIn → linkedin.com/in/msalahz
2. GitHub → github.com/msalahz
3. Upwork → upwork.com/freelancers/msalahz

## Companies Displayed

- Plenty
- Genesys
- Bloowatch
- Lead Liaison
- Ark Knowledge Network
- Diwala

## Navigation

Current links in header:

- Contact (mailto link)
- About (commented out, placeholder)
- Blog (commented out, placeholder)

## Features

- Dark/light theme toggle
- Mobile responsive hamburger menu
- Animated text effects (fade-in-blur)
- Animated component groups
- Company logos with dark mode invert

## About Me Section (Planned)

Short introductory section highlighting Mohammed's unique blend of business and technical expertise.

**Section Title:** About Me

**Content:**

> I combine a business background with 12+ years of technical expertise to deliver web solutions with measurable business impact. From MVPs to enterprise platforms, I focus on shipping quality software that drives real results.

Or

> Blending business background with 12+ years of technical expertise to create impactful web solutions.

> From MVPs to enterprise platforms, I focus on shipping quality software that drives real results.

**Core Values:**

- **Ownership & Delivery** - End-to-end ownership, shipping on time, measurable outcomes
- **Quality & Reliability** - Best practices, comprehensive testing, maintainable architecture
- **Scalability & Growth** - Building solutions that grow with the business
- **Innovation & Adaptability** - Continuous learning, and adapting to industry changes

**CTA:** "Learn more" link → `/about` (future page)

**Tone:** Professional but warm, approachable

## Career Stats Section (Planned)

Key metrics displayed prominently to establish credibility.

**Section Title:** Career Stats

| Stat     | Value | Label                 |
|----------|-------|-----------------------|
| Years    | 12+   | Years of Experience   |
| Projects | 100+  | Projects Completed    |
| Clients  | 75+   | Satisfied Clients     |
| Skills   | 45+   | Technologies & Skills |

**Upwork Verified Stats:**

| Stat            | Value           |
|-----------------|-----------------|
| Job Success     | 100%            |
| Jobs Completed  | 40              |
| Hours Worked    | 5,427           |
| Badge           | Top Rated Plus  |

**Display:** Grid layout, prominent numbers with supporting labels. Consider featuring Upwork badge/stats as a credibility indicator.

## Work History Section (Planned)

Showcase 5 most impactful roles with measurable achievements.

**Section Title:** Work History

| Company                | Role                       | Project            | Key Metric                      |
|------------------------|----------------------------|--------------------|---------------------------------|
| Ark Knowledge Networks | Lead Full-Stack Developer  | Qarib              | MVP delivered in 8 weeks        |
| Bloowatch              | Senior Software Consultant | E-commerce System  | 45% frontend dev speed increase |
| Plenty                 | Senior Full-Stack Engineer | FarmOS             | 95% on-time delivery            |
| Lead Liaison           | Lead Frontend Developer    | Event Gen          | 30% dev speed boost             |
| Genesys                | Lead Frontend Engineer     | Rich Messages Tool | 75% authoring time reduction    |

**Role Details:**

1. **Qarib** (Ark Knowledge Networks) - Aug 2025 – Nov 2025
   - AI-powered bilingual transcript management platform
   - MVP delivered in 8 weeks with full RTL/LTR support

2. **Bloowatch** - Jul 2023 – Aug 2025
   - Management & e-commerce system for watersports centers
   - Increased frontend dev speed by 45% via Ember→React migration

3. **FarmOS** (Plenty) - Dec 2023 – Oct 2024
   - Farm management tool for vertical indoor cultivation
   - Achieved 95% on-time delivery, reduced E2E test time by 23%

4. **Event Gen** (Lead Liaison) - Apr 2020 – Mar 2022
   - Event management & CRM web application
   - Boosted dev speed by 30% via PHP→React transition

5. **Rich Messages Tool** (Genesys) - Mar 2019 – Dec 2021
   - Authoring tool for rich messages
   - Shortened authoring time by 75% with intuitive forms/JSON editor

**Display:** Cards or compact list format
**CTA:** "View all experience" link → `/experience` (future page)

## Contact Section

Two-column layout (stacked on mobile):
- **Left:** Contact form
- **Right:** Contact info, social links, Calendly CTA

### Contact Form

**Fields:**
- Name (required, text input)
- Email (required, email input with validation)
- Message (required, textarea)

**Submit Button:** "Send Message"

**Backend:** Resend/SendGrid email API
- On submit: Send email to hello@devpluscoder.com
- Success state: Show confirmation message
- Error state: Show error message with retry option

### Contact Info

- **Email:** hello@devpluscoder.com (mailto link)
- **Social Links:** LinkedIn, GitHub, Upwork (reuse existing SocialLinks component)
- **Calendly CTA:** "Schedule a Call" button → https://calendly.com/mohammedzaghloul/1-1-consultation

### Contact Section Acceptance Criteria

- [ ] ContactSection component created
- [ ] Contact form with Name, Email, Message fields
- [ ] Form validation (required fields, email format)
- [ ] Email API integration (Resend/SendGrid)
- [ ] Success/error states for form submission
- [ ] Contact info displayed (email, social links)
- [ ] Calendly "Schedule a Call" button
- [ ] Dark/light mode works
- [ ] Mobile responsive
- [ ] Animations consistent with existing landing page

## Design Guidelines

- Match existing landing page aesthetic
- Use same animation patterns (TextEffect, AnimatedGroup)
- Dark/light mode support
- Mobile responsive
- Keep it minimal - no unnecessary flourishes

## Future Detail Pages

Full detail pages planned for future specs:

- `/about` - Complete about page with full narrative, values deep-dive
- `/experience` - Complete work history with all roles and detailed achievements

## Tech Used

- TanStack Router (file-based routing)
- Tailwind CSS 4
- Shadcn UI (Button component)
- Lucide icons (Menu, X)
- Custom animation components (TextEffect, AnimatedGroup, AnimatedPresence)

## Acceptance Criteria

- [x] Hero section with greeting, name, title, tagline, and CTA
- [x] Social links (LinkedIn, GitHub, Upwork)
- [x] Company logos carousel
- [x] Dark/light theme toggle
- [x] Mobile responsive navigation
- [ ] About Me section added with journey summary and values
- [ ] Career Stats section with 4 primary metrics
- [ ] Upwork credibility stats/badge displayed
- [ ] Work History section with 5 featured roles and metrics
- [ ] "Learn more" and "View all experience" links present (can be disabled/placeholder until future pages exist)
- [ ] Contact Section with form and contact info
- [ ] Contact form submits to email API
- [ ] Calendly scheduling link functional
- [ ] Animations consistent with existing landing page

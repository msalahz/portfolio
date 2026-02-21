<div align="center">
  <img src="public/images/devpluscoder-banner.png" alt="DevPlusCoder.com Banner" width="100%" />

  <h1>Mohammed Zaghloul — DevPlusCoder.com</h1>

  <p>
    Personal portfolio — 12+ years building web software, consulting, and shipping end-to-end products.
  </p>

  <a href="https://devpluscoder.com" target="_blank">
    <img src="https://img.shields.io/badge/Live%20Site-devpluscoder.com-blue?style=for-the-badge" alt="Live Site" />
  </a>
  &nbsp;
  <img src="https://img.shields.io/badge/Built%20with-TanStack%20Start-orange?style=for-the-badge" alt="TanStack Start" />
  &nbsp;
  <img src="https://img.shields.io/badge/Deployed%20on-Cloudflare%20Workers-f38020?style=for-the-badge&logo=cloudflare&logoColor=white" alt="Cloudflare Workers" />
</div>

---

## Features

- **Work history** — Visual timeline of experience and milestones
- **Contact** — Reach out via email or book a call
- **Light & dark mode** — Full design support for both themes
- **Edge deployed** — Runs on Cloudflare Workers, close to the user
- **TypeScript end-to-end** — Strict type checking across the full stack
- **Mobile first** — Designed for small screens, scales up cleanly

---

## Tech stack

| Category | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Routing | [TanStack Router](https://tanstack.com/router) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Components | [Shadcn UI](https://ui.shadcn.com/) |
| Build tool | [Vite](https://vitejs.dev/) |
| Hosting | [Cloudflare Workers](https://workers.cloudflare.com/) |
| CI/CD | [GitHub Actions](https://github.com/features/actions) |
| Testing | [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/) |
| Monitoring | [Cloudflare Analytics](https://www.cloudflare.com/web-analytics/) |
| Error tracking | [Sentry](https://sentry.io/) |
| Env variables | [t3-env](https://env.t3.gg/) |

---

## Project structure

```
portfolio/
├── public/                     # Static assets
│   └── images/
├── src/
│   ├── backend/                # Server-side logic
│   │   └── preferences/        # User preference mutations & queries
│   ├── core/                   # Shared, reusable primitives
│   │   ├── components/         # Generic UI components (Marquee, RiseReveal, …)
│   │   ├── hooks/              # Shared React hooks
│   │   ├── locales/            # i18n translation files (en, ar)
│   │   ├── theme/              # ThemeProvider, ThemeToggle, useTheme
│   │   └── utils/
│   ├── data/                   # Static data (work-history.json, …)
│   ├── features/
│   │   └── landing/
│   │       └── components/     # Page sections (Hero, About, WorkHistory, Contact, …)
│   ├── integrations/           # Third-party integration wrappers
│   │   ├── i18n/               # i18next setup & language toggle
│   │   ├── shadcn/             # Shadcn UI component overrides
│   │   ├── tanstack-form/      # Form field components & hooks
│   │   └── tanstack-query/     # Query client & devtools
│   ├── routes/                 # TanStack Router file-based routes
│   │   ├── __root.tsx
│   │   └── index.tsx
│   ├── router.tsx
│   ├── styles.css              # Global styles & theme tokens
│   └── env.client.ts           # Client-side env (t3-env)
├── docs/                       # Project documentation & specs
├── vite.config.ts
├── vitest.config.ts
├── wrangler.jsonc              # Cloudflare Workers config
└── tsconfig.json
```

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) 9+

### Installation

```bash
git clone https://github.com/mohammedz/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

The app runs at `http://localhost:3000`.

---

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the development server |
| `pnpm build` | Build for production |
| `pnpm test` | Run tests with Vitest |
| `pnpm lint` | Lint with ESLint |
| `pnpm format` | Format with Prettier |
| `pnpm check` | Run lint, format, and type checks |
| `pnpm typecheck` | Run TypeScript type checking |

---

## Deployment

Deployed to **Cloudflare Workers** via **GitHub Actions**. Every push to `main` goes straight to production. Environment variables are managed with [t3-env](https://env.t3.gg/) and GitHub Actions secrets.

---

## License

MIT

---

<div align="center">
  Built by <a href="https://devpluscoder.com">Mohammed Zaghloul</a>
</div>

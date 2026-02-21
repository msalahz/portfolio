<div align="center">
  <img src="public/images/devpluscoder-banner.png" alt="DevPlusCoder.com Banner" width="100%" />

  <h1>Mohammed Zaghloul — DevPlusCoder.com</h1>

  <p>
    Personal portfolio showcasing 12+ years of software engineering, consulting, and end-to-end web solutions.
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

- **Work History & Timeline** — A visual timeline of professional experience and milestones
- **Contact / Let's Work Together** — Reach out via email or book a call to discuss potential projects and collaborations
- **Light & Dark Mode** — Seamless theme switching with full design support for both modes
- **Edge Deployed** — Hosted on Cloudflare Workers for low-latency global delivery
- **Type-Safe End to End** — TypeScript across the full stack with strict type checking
- **Responsive & Mobile First** — Optimised for all screen sizes, from mobile to desktop

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Routing | [TanStack Router](https://tanstack.com/router) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Components | [Shadcn UI](https://ui.shadcn.com/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Hosting | [Cloudflare Workers](https://workers.cloudflare.com/) |
| CI/CD | [GitHub Actions](https://github.com/features/actions) |
| Testing | [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/) |
| Monitoring | [Cloudflare Analytics](https://www.cloudflare.com/web-analytics/) |
| Error Tracking | [Sentry](https://sentry.io/) |
| Env Variables | [t3-env](https://env.t3.gg/) |

---

## Project Structure

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

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/mohammedz/portfolio.git
cd portfolio

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The app will be available at `http://localhost:3000`.

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

This project is deployed to **Cloudflare Workers** via **GitHub Actions**.

- Every push to `main` triggers a production deployment through the CI/CD pipeline.
- Environment variables are managed securely using [t3-env](https://env.t3.gg/) and GitHub Actions secrets.

---

## License

This project is licensed under the MIT License.

---

<div align="center">
  Built by <a href="https://devpluscoder.com">Mohammed Zaghloul</a>
</div>

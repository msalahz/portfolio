# Project overview

DevPlusCoder.com is the personal website of Mohammed Zaghloul, an independent software developer and consultant with over 12 years of experience. The site showcases his expertise in building end-to-end web solutions that deliver measurable business impact, from MVPs to enterprise platforms.


# Tech stack

- Framework: TanStack Start
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion
- Forms: Tanstack Forms
- Routing: Tanstack Router
- Build Tool: Vite
- CI/CD: GitHub Actions
- Hosting: Cloudflare Workers
- Testing: Vitest, React Testing Library
- Linting: ESLint
- Formatting: Prettier
- Type Checking: TypeScript
- Environment Variables: t3-env
- Monitoring: Cloudflare Analytics
- Error Tracking: Sentry
- Component Library: Shadcn UI
- AI Agents: GitHub Copilot & Junie & Claude AI


# Build and test commands

- Install dependencies: `pnpm install`
- Run development server: `pnpm dev`
- Build for production: `pnpm build`
- Lint code: `pnpm lint`
- Run tests: `pnpm test`
- Format code: `pnpm format`
- Type check: `pnpm typecheck`
- Overall check(lint,format,types): `pnpm check`


# Documentation

- For business context, refer to `docs/business/`.
- For specifications, refer to `docs/specs/`.
- For project exploration comprehensive base summary, refer to `docs/business/project-comprehensive-summary.md`.


# Security considerations

- Ensure environment variables are securely managed using t3-env.
- Regularly update dependencies to patch security vulnerabilities.
- Use HTTPS for all communications to protect data in transit.
- Implement proper input validation and sanitization to prevent injection attacks.
- Regularly audit code for security best practices.
- Use GitHub Actions secrets to manage sensitive information in CI/CD pipelines.
- Monitor site traffic for unusual activity that may indicate a security breach.

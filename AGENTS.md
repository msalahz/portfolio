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
- For  project code analysis and exploration for the codebase structure, refer to `docs/code-analysis/*.md`.


# Security considerations

- Ensure environment variables are securely managed using t3-env.
- Regularly update dependencies to patch security vulnerabilities.
- Use HTTPS for all communications to protect data in transit.
- Implement proper input validation and sanitization to prevent injection attacks.
- Regularly audit code for security best practices.
- Use GitHub Actions secrets to manage sensitive information in CI/CD pipelines.
- Monitor site traffic for unusual activity that may indicate a security breach.

# Rules

- Use askUserQuestions() to ask the user questions and get their input.
- provide a recommended answer when askUserQuestions() is called, but allow the user to modify it.
- Use frontend design skill when a design is needed.

# Instructions

- Keep track of project code analysis and exploration for the codebase structure as Markdown file on 
  `docs/code-analysis/*.md` directory.

# Code preferences

- Always use TypeScript for type safety and better developer experience.
- Follow the DRY (Don't Repeat Yourself) principle to avoid code duplication.
- Use functional components and hooks in React for better readability and maintainability.
- UI components should be stateless (data-down - action-up) and reusable, with state management handled at a higher 
  level when necessary.
- Use Tailwind CSS for styling to maintain consistency and speed up development.
- Don't use Framer Motion, use existing tailwind CSS and plain CSS for animation.
- Match themes colors at /src/styles.css
- Always build responsive designs for light and dark themes, and ensure the UI adapts seamlessly to both.
- Always build mobile first designs, ensuring the UI is optimized for smaller screens before scaling up to larger devices.

## Browser Automation

Use `agent-browser` for web automation. Run `agent-browser --help` for all commands.

Core workflow:
1. `agent-browser open <url>` - Navigate to page
2. `agent-browser snapshot -i` - Get interactive elements with refs (@e1, @e2)
3. `agent-browser click @e1` / `fill @e2 "text"` - Interact using refs
4. Re-snapshot after page changes

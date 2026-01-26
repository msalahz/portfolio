# Git Commit Generation Instructions (Conventional Commits)

These instructions define how to generate git commit messages for this repository. Always follow the Conventional Commits specification (v1.0.0).

## Format

Use this exact structure:

```
<type>[optional scope][!]: <description>

[optional body]

[optional footer(s)]
```

### Rules

- Use lowercase for `<type>` and `scope`.
- Use imperative, present tense for `<description>` (e.g. `add`, `fix`, `update` not `added`, `fixed`).
- Do not end `<description>` with a period.
- Keep the header concise (aim for ~50-72 characters when practical).
- If you include a body or footers, add a blank line after the header.
- Wrap body lines at ~72 characters when practical.
- Break body to bullet points.
- One commit should represent one logical change. Don’t mix unrelated changes.

## Types

Use one of the following types:

- `feat`: a new feature
- `fix`: a bug fix
- `docs`: documentation only changes
- `style`: formatting/whitespace (no behavior change)
- `refactor`: code change that neither fixes a bug nor adds a feature
- `perf`: performance improvement
- `test`: adding or correcting tests
- `build`: build system or external dependencies
- `ci`: CI configuration
- `chore`: maintenance tasks that don’t fit other types
- `revert`: revert a previous commit

## Scope

Add a scope when it increases clarity. Prefer scopes that match the code area being changed, for example:

- Application areas: `auth`, `router`, `ui`, `api`
- Folder/layer scopes: `routes`, `integrations`, `features`, `lib`, `db`
- Tooling scopes: `deps`, `eslint`, `typescript`, `vite`

Examples:

- `feat(auth): add email sign-in`
- `fix(routes): handle missing session`
- `chore(deps): bump zod`

## Breaking Changes

If a change is not backward compatible:

- Add `!` in the header: `feat(auth)!: remove legacy session cookie`
- Include a footer describing the breaking change:

```
BREAKING CHANGE: session cookie name changed from X to Y.
```

## Body

Use the body to explain what changed and why. Include:

- motivation and context
- important implementation notes
- tradeoffs or constraints
- migration steps (especially for breaking changes)

Don’t repeat the header.

## Footers

Use footers for metadata and references. Each footer goes on its own line:

- `BREAKING CHANGE: ...`
- `Refs: #123`
- `Fixes: #123`
- `Closes: #123`

If multiple issues apply, use multiple footer lines.

## Reverts

Use this format:

```
revert: <original header>

This reverts commit <sha>.
```

Add more context in the body if needed.

## Examples

Feature:

```
feat(auth): add password reset flow
```

Fix with issue reference:

```
fix(integrations): handle null provider response

Fixes: #214
```

Breaking change:

```
feat(routes)!: rename console route to dashboard

BREAKING CHANGE: update links from /console to /dashboard.
```

## Output Requirements (for commit message generation)

- Output the commit message only (no extra commentary).
- Ensure it matches the format exactly.
- Prefer adding a `scope` when the affected area is clear.
- Include `Fixes:`/`Refs:` footers when issue numbers are provided.

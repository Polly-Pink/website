# Contributing to Polly Pink

Thanks for your interest in contributing. This is a community project — feedback, bug reports, and PRs are all welcome.

## Before you start

- Check [open issues](https://github.com/Polly-Pink/website/issues) to avoid duplicating work
- For anything beyond a small fix, open an issue first to align on direction
- All PRs target `main` and go through Netlify deploy preview automatically

## Setup

```bash
pnpm install
pnpm dev
```

## Workflow

1. Fork the repo and create a branch from `main`
2. Name your branch with a prefix: `feat/`, `fix/`, `chore/`, `refactor/`
3. Make your changes (see conventions below)
4. Open a PR — the deploy preview link will appear automatically

## Commit style

[Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add roadmap section
fix: correct wave SVG clipping on mobile
chore: update dependencies
refactor: extract SocialLinks component
```

## Code conventions

### TypeScript

- Extend the native HTML element interface and spread `...rest` onto the root element
- JSDoc every exported component with an `@example`
- No type annotations in JSDoc — TypeScript resolves those

```tsx
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Heading displayed at the top of the card. */
  title: string;
}

/**
 * Content card with glassmorphism background.
 *
 * @example
 * <Card title="Hello" />
 */
export function Card({ title, ...rest }: CardProps) {
  return <div {...rest}>{title}</div>;
}
```

### SCSS

- BEM naming: block `__` element `--` modifier
- Every module imports tokens via `includePaths` (no relative path needed):

```scss
@use 'colors' as colors;
@use 'tokens' as t;
@use 'mixins' as mix;
```

- Colors via `colors.pick($palette, $shade)`, spacing via `t.space($step)`, breakpoints via `@include mix.bp($size)`
- Always mobile-first — base styles first, then `@include mix.bp(sm)` upward
- Use `rgba($color: ..., $alpha: ...)` named-argument form

### Components

- Each component lives in its own folder under `src/components/ui/`
- Export from `index.ts` in the folder, and re-export from `src/components/ui/index.ts`
- Subcomponents that are reusable in other contexts get their own folder — don't co-locate them

### Linting

Biome runs as a pre-commit hook. Fix any issues before pushing:

```bash
pnpm lint
pnpm format
```

## Design

Design references are in `.designs/` (Desktop.png, Mobile.png). Match spacing, typography, and colour tokens from the existing system — don't introduce new hardcoded hex values.

## Questions

Open a [GitHub Discussion](https://github.com/Polly-Pink/website/discussions) or reach out via [Telegram](https://t.me/PollyCommunity).

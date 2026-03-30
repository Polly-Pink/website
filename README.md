# Polly Pink

[![Documentation](https://github.com/Polly-Pink/website/actions/workflows/docs.yml/badge.svg)](https://github.com/Polly-Pink/website/actions/workflows/docs.yml)
[![Deployment](https://api.netlify.com/api/v1/badges/24946d1b-56fb-419b-911b-ff4f11cbd611/deploy-status)](https://app.netlify.com/sites/polly-pink-website/deploys)

![Next.js](https://img.shields.io/badge/Next.js_15-black?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?logo=pnpm&logoColor=white)
![Biome](https://img.shields.io/badge/Biome-60A5FA?logo=biome&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)

Mobile-first memecoin landing page for the Polly Pink community. Built with Next.js 15, TypeScript, and SCSS Modules.

> [!WARNING]
> 🚧 Under construction — [polly-pink-website.netlify.app](https://polly-pink-website.netlify.app)

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | SCSS Modules + BEM |
| Fonts | Fredoka, TT Trailers, Shantell Sans |
| Icons | `simple-icons` |
| Interactive | `@headlessui/react` |
| Linter/Formatter | Biome |
| Package manager | pnpm |

## Project structure

```
src/
  app/
    layout.tsx        # Root layout — Nav, Footer, global SCSS
    globals.scss      # @font-face declarations, resets
    page.tsx          # Page composition (section order)
  assets/
    fonts/            # Local font files (TT Trailers)
    images/           # Static images (coin.png, polly_fact.png, …)
  components/
    footer/           # <Footer />
    hero/             # <Hero />
    navbar/           # <Navbar />
    ui/               # Shared primitives
      button/         # <Button />
      card/           # <Card />
      icon-button/    # <IconButton />
      section/        # <Section /> + <SectionHeading />
      stat-block/     # <StatBlock />
      tabbed-card/    # <TabbedCard />
      text/           # <Text />
      title/          # <Title />
      tooltip/        # <Tooltip />
      wave/           # <Wave />
  config/
    socials.ts        # Social links config (X, GitHub, TikTok, Telegram)
    tokenomics.ts     # Tokenomics stats config
  lib/
    fonts.ts          # next/font definitions
  sections/
    tokenomics/       # <Tokenomics />
    who-is-she/       # <WhoIsShe />
  styles/
    _colors.scss      # $colors map + pick() function
    _tokens.scss      # space() + $breakpoints
    _mixins.scss      # bp() breakpoint mixin
    _fonts.scss       # $font-* CSS var references
.designs/             # Design reference PNGs (Desktop.png, Mobile.png)
```

## Getting started

**Prerequisites:** Node.js 20+, pnpm 10+

```bash
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm start` | Start production server |
| `pnpm lint` | Lint with Biome |
| `pnpm format` | Format with Biome |
| `pnpm generate` | Generate TypeDoc component docs |

## Docs

Component docs are auto-generated with TypeDoc and deployed to GitHub Pages on every push to `main`.

**[polly-pink.github.io/website](https://polly-pink.github.io/website)**

```bash
pnpm generate
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

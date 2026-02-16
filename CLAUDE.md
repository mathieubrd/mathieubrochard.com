# Project: mathieubrochard.com

Personal portfolio website for Mathieu Brochard, Software Engineer.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with React 19 and TypeScript
- **Styling**: Tailwind CSS 4 (CSS-based config in `app/globals.css`)
- **UI Library**: HeroUI (v2 beta) + Heroicons
- **Animations**: Framer Motion
- **Email**: Resend
- **CAPTCHA**: Cloudflare Turnstile
- **Analytics**: Vercel Analytics + Speed Insights
- **Package Manager**: npm

## Project Structure

```
app/            → Next.js App Router (single-page site)
  layout.tsx    → Root layout (dark mode, HeroUI provider, analytics)
  page.tsx      → Home page composing all sections
  globals.css   → Tailwind 4 config, HeroUI theme, custom plugin
  actions.ts    → Server actions (contact form submission)
  hero.ts       → Custom Tailwind plugin
components/     → React components (PascalCase filenames)
public/         → Static assets (images, logos)
```

## Architecture

- Single-page portfolio with sections: Hero, About, Skills, Experience, Contact
- Server actions for form handling (no API routes)
- Contact form validates with Zod and sends email via Resend
- Cloudflare Turnstile protects form submissions

## Conventions

- **No semicolons** (Prettier config)
- **Spaces** for indentation (no tabs)
- **Conventional commits** enforced via commitlint + Husky
- **Path alias**: `@/*` maps to project root
- **Client components** use `"use client"` directive
- **Component files**: PascalCase (e.g., `ContactForm.tsx`)
- **Utility files**: camelCase (e.g., `actions.ts`)

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Prettier format + ESLint

## CI/CD

- **Pre-commit hook**: lint-staged (ESLint + Prettier on staged files)
- **Commit-msg hook**: commitlint (conventional commits)
- **GitHub Actions**: Lint workflow on every push
- **Deployment**: Vercel

## Environment Variables

- `RESEND_API_KEY` — Resend email API key
- `TURNSTILE_SECRET_KEY` — Cloudflare Turnstile secret
- `NEXT_PUBLIC_TURNSTILE_SITEKEY` — Cloudflare Turnstile site key (public)
- Dev mode uses test keys for Turnstile and a test email address

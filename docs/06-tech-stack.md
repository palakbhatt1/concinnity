# 06 — Tech stack

Decisions only. Build order and structure are in `04-build-guide`.

## Core
| Layer | Choice | Why |
|-------|--------|-----|
| Framework | **React + TypeScript** | Component-per-module maps cleanly to the workbench views |
| Bundler | **Vite** | Single static page, no SSR needed, instant dev server |
| Styling | **Tailwind CSS** | Tokens from `02-design-spec` map to the theme config; fast iteration |
| Animation | **Framer Motion** | Layout animation for fragments snapping into slots, springs for counters, `useReducedMotion` built in |
| State | **Zustand** | One tiny store shared by every module view; less boilerplate than reducer + context |
| Icons | **lucide-react** | Clean, consistent, tree-shakes |
| Fonts | **@fontsource** package for the brand font | Self-hosted, no layout shift. Confirm the exact font in devtools first |
| Hosting | **Vercel** (Netlify is fine) | Live link in minutes, preview URL per push |

## Why not the alternatives
- **Next.js:** the live site uses it, but this is one static page with no routing, SSR, or data fetching. It adds setup for no gain here.
- **Plain HTML/CSS/JS:** the shared-state click flow gets messy without components.
- **GSAP / Lottie:** heavier, and Framer Motion already covers every motion in the spec.
- **Redux:** overkill for one invoice, one task, and a few counters.
- **A component library (MUI, Chakra):** fights the existing brand and adds weight. Build the few components needed (button, chip, card, toast).

## Optional
- **clsx** for conditional classes.
- **Playwright** for one smoke test of the 3-step click flow, only if time remains.
- **Lighthouse** (built into Chrome) for a final performance and accessibility check.

## Setup
```bash
npm create vite@latest solopreneur-home -- --template react-ts
cd solopreneur-home
npm i framer-motion zustand lucide-react clsx
npm i -D tailwindcss @tailwindcss/vite
```
Then follow the current Tailwind + Vite install page for the plugin and CSS import, and add the tokens from `02-design-spec` to the theme.

Run: `npm run dev`. Build: `npm run build`.

## Conventions
- TypeScript strict mode on.
- Mock data only in `src/data/mock.ts`. No fetch calls, no env vars.
- One store file: `src/store/workspace.ts`.
- Tailwind for styling. Inline styles only for computed values (ghost cursor position).
- Components under 150 lines. Split when they grow.

## Budgets
- JS bundle: aim for under 200 KB gzipped.
- Hero interactive in under 2s on a mid-range phone.
- No images above the fold except inline SVG.

## Deploy
1. Push to GitHub.
2. Import the repo in Vercel (framework preset: Vite).
3. Deploy after build step 3 in `04-build-guide`, then keep redeploying.

## Browser support
Latest Chrome, Safari, Firefox, Edge. Test iOS Safari at 375px for the bottom-sheet client panel.

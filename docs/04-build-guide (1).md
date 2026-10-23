# 04 — Build guide

## Stack
React + TypeScript + Tailwind + Framer Motion + Zustand on Vite. Single page. Mock data only. No backend, no auth. Full reasoning in `06-tech-stack`.

## Structure
```
src/
  data/mock.ts              // client, invoice, task, booking, modules, businessTypes
  store/workspace.ts        // state + actions from 03-interaction-spec
  components/
    Nav.tsx
    Hero.tsx
    Workbench/
      Workbench.tsx         // frame, rail, view switch
      FragmentsIntro.tsx    // phases 0-1
      GhostCursor.tsx
      BillingView.tsx
      ClientPanel.tsx
      CrmView.tsx
      TasksView.tsx
      BookingsView.tsx
      SolosPreview.tsx      // stretch
    ProblemRows.tsx
    BusinessPicker.tsx
    ModulesGrid.tsx
    IntegrationsRow.tsx
    AccessSteps.tsx
    Faq.tsx
    FinalCta.tsx
    Footer.tsx
  App.tsx
  tokens.css                // tokens from 02-design-spec
```

## Build order
Do these in order. Stop after any step and you still have something presentable.

1. **Tokens + Nav + static Hero** (copy + empty workbench frame). Check the 5-second test here first.
2. **Store + BillingView + ClientPanel.** Wire `openClient`, `sendReminder`, `receivePayment`. Get the click flow working with no animation.
3. **Counters and cascade.** Animate Revenue/Outstanding, task check-off, CRM tag change, toasts.
4. **FragmentsIntro.** Phases 0–1 with Framer Motion `layout` or `animate` to slot positions.
5. **GhostCursor + affordance labels + step indicator.**
6. **Remaining views** (CRM, Tasks, Bookings) reading the same store. Module chips switch `view`.
7. **ProblemRows, BusinessPicker, ModulesGrid.**
8. **IntegrationsRow, AccessSteps, Faq, FinalCta, Footer.**
9. **Responsive, reduced-motion, deploy.**
10. **SolosPreview** only if time remains.

## Implementation notes
- Use one store (Zustand or `useReducer` + context). Every view reads from it. Do not duplicate invoice or task state inside views.
- Intro timing: one `useEffect` with a phase state (`'mess' | 'assemble' | 'ready'`). Use `setTimeout` chain or Framer Motion `onAnimationComplete`.
- Ghost cursor: absolutely positioned, animated to the overdue row's bounding box via `getBoundingClientRect()`. Cancel on `pointerdown`/`keydown`.
- Counters: animate with Framer Motion `useSpring` or a small `requestAnimationFrame` tween.
- Business picker: filters the rail and the modules grid from `businessTypes[type].modules`.
- Reduced motion: `useReducedMotion()` from Framer Motion. Branch once at the top of `Hero`.

## Performance
- Hero interactive in under 2s on a mid-range phone.
- No heavy libraries. Inline SVG icons.
- Lazy-load everything below the hero.

## Accessibility
- Demo is keyboard operable (tab to the overdue row, Enter to open, Enter on `Send reminder`).
- Visible focus rings.
- `aria-live="polite"` on the toast.
- Contrast AA in both themes.

## Test sizes
375, 768, 1280, 1440. Light and dark.

## Deploy
Vercel or Netlify. Get a live link by the end of step 3 and redeploy as you go, so a working version always exists.

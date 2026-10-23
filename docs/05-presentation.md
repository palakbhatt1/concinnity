# 05 — Presentation (Saturday)

## Talk track (5–7 min)
1. **Product in one sentence (30s).** "One subscription for the tools a small team needs, with shared data and AI on the roadmap."
2. **What's broken (60s).** Top weaknesses from `01-audit`: no product in the hero, features-not-outcome headline, silent demo, off-message dashboard, static module tables.
3. **5-second test (60s).** Old hero vs new hero. Run it live on someone if possible.
4. **The interaction (2 min).** Run the flow: mess → workbench → click overdue invoice → reminder → payment → everything updates. Don't narrate over the cascade, let it land.
5. **Decisions (90s).** Pick 4 from the table below.
6. **Beyond the homepage (30s).** One or two observations on logic and workflows (below).
7. **What's next (30s).** What you'd test or build with more time.

## Before/after screenshots to prepare
| Slide | Before | After |
|-------|--------|-------|
| Hero | Screenshot 1 | New hero at 1280×720 |
| Demo | Screenshots 2–3 | Phase 0 → Phase 2 |
| Modules | Screenshots 5–8 | Business picker + grid |

## Decision log
| Decision | Reason |
|----------|--------|
| Headline about replacing subscriptions | Leads with cost and scatter, the founder's core pitch |
| Audience in the eyebrow | Answers "who is it for" before reading |
| Workbench in the hero | Product visible in 5 seconds, no scroll |
| Kept the mess → dashboard idea | Respects what already works; fixes timing, content, affordance |
| Literal tool fragments for the mess | Matches "your stack today"; the old cards didn't |
| Money-first dashboard | Matches the headline; old one led with attendance |
| One client across modules | Proves the real differentiator: shared data |
| Ghost cursor + "click anything" label | Fixes the undiscoverable interactivity |
| Pick-your-business selector | Solves module overload for different business types |
| Fewer CTAs | One per section purpose instead of eight repeats |
| Solos labeled "in development" | Shows direction without overpromising |
| One currency | Polish and trust |

## Observations beyond the homepage (pick 1–2, 30s)
- The demo only works if modules share one client record. That's the product's real logic, and the homepage should reflect it.
- Different business types need different default module sets and onboarding paths. The business picker hints at this.
- Module overload is a workflow problem too: default-on modules per plan or business type could reduce it.

Do not turn this into a dashboard redesign.

## Questions to expect
- Why not keep scroll-assemble? (Below the fold, scroll-gated, no affordance. Kept the idea, moved it to the hero.)
- Does this hurt conversion, given invite-only? (Demo builds desire before the ask. Measure demo click-through and request-access rate.)
- How is it different from Odoo? (Small-team focus, bundled pricing without per-user charges, AI direction. Verify against the site.)
- Why show Solos if it isn't built? (Labeled as direction. Core reliability comes first, as the founder said.)
- How would you test it? (5-second test, demo completion rate, request-access conversion.)
- What would you do with another week?

## Timeline (Saturday is tomorrow)
Confirm the deadline with the founder: the notes say 3–4 days, but 24 Oct is tomorrow.

| Block | Time |
|-------|------|
| Skim `/roadmap`, `/pricing`; capture before screenshots | 30m |
| Build steps 1–3 (hero, store, click flow) | 3h |
| Build steps 4–5 (intro, ghost cursor) | 1.5h |
| Build steps 6–8 (views, remaining sections) | 2h |
| Responsive, deploy | 1h |
| Slides/talk track, rehearse once | 1h |

Cut order if short: Solos → integrations row → "where it's going" → business-type sync → intro animation. Never cut the hero or the click flow.

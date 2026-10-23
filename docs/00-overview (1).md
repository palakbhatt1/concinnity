# 00 — Overview

Solopreneur OS homepage redesign. Homepage only. Deadline: **Sat 24 Oct 2026**. Result feeds the internship decision.

Files in this set (read in order):
`00-overview` · `01-audit` · `02-design-spec` · `03-interaction-spec` · `04-build-guide` · `05-presentation` · `06-tech-stack`

## Goal
1. **5-second clarity:** what it is, who it's for, the problem, why it beats separate tools. Above the fold.
2. **One memorable interaction** that is obviously interactive.

5-second test: show the hero to a stranger for 5s. They must answer: what is it, who is it for, why use it.

## Scope
- In: homepage only.
- Out: real dashboard (a product designer is already revamping it), other pages, real module logic, backend.

## Product snapshot
- **What:** all-in-one business platform (Odoo-like concept) for small businesses.
- **Audience:** solopreneurs, freelancers, agencies, early-stage startups, teams of about 2–10.
- **Problem:** many subscriptions (cost), scattered data, manual CRM updates, no consolidated founder view, no spare team time.
- **Value prop:** one subscription with the tools a small business needs. Bundled tiers, team members included, not charged per user. (Verify wording on `/pricing`.)
- **Modular:** each business turns on only the modules it needs.
- **Public site modules:** Billing, CRM, Tasks, Bookings, Team, Gear, Finance, Marketing.
- **Founder demo also showed:** WhatsApp (marketing + chat widget), E-commerce, Storefront builder, HRMS, Attendance, Org chart, Roles/access, Subscription management.
- **Integrations:** Gmail, Google Drive, Google Calendar, WhatsApp API, payment gateways.
- **Solos (AI assistant):** answers "what happened today?", summarizes, may later act and update records. **Vision, not confirmed shipped.**
- **Status:** E-commerce partial, storefront editor pending, one active customer. Founder priority: core logic before more AI.
- **Access:** invite-only, 90 days free on the chosen plan, no card. Solo $29, Hustler $59, Empire $129 per month.
- **Founder's own challenge:** too many modules can feel complicated. Visitors should reach what's relevant fast.

> TODO: skim `/roadmap`, `/why-us`, `/pricing`. Add 3 bullets on product direction here.

## Brand (observed from screenshots)
- Black logo tile with orange infinity "OS" mark.
- White background, near-black headings, gray body text.
- Single orange accent (about Tailwind `orange-500`) for CTAs, links, status.
- Neo-grotesque sans (confirm exact font in devtools). Light theme with a toggle in the nav.
- macOS-style window frames (red/yellow/green dots) around module previews.

Keep the brand. Redesign structure, copy and interaction, not identity.

## Acceptance checklist
- [ ] Stranger passes the 5-second test
- [ ] Headline, subline, audience, CTA and demo all above the fold at 1280×720
- [ ] Demo is obviously interactive without being told
- [ ] Click flow updates shared state across modules
- [ ] "Pick your business" selector changes the highlighted modules
- [ ] Unbuilt features labeled as direction/preview
- [ ] Pricing / "team included" claims verified against `/pricing`
- [ ] Works at 375px; reduced-motion fallback works
- [ ] One currency, same client names everywhere
- [ ] Deployed link works; before/after screenshots ready

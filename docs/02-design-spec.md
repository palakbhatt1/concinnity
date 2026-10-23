# 02 — Design spec

Clean, minimal, professional. No decorative color. Clear hierarchy.

## Hero copy
- **Eyebrow:** `For freelancers, agencies & small teams`
- **Headline:** `Replace five subscriptions with one workspace.`
- **Subline:** `CRM, invoicing, tasks, marketing and finance in one place, so nothing slips between tools. Built for teams of up to 10.`
- **Primary CTA:** `Request access`
- **Secondary CTA:** `Try the demo ↓` (focuses the workbench)
- **Microcopy (one line only):** `Invite-only · 90 days free · No card`

Alternate headline: `Run your whole small business from one screen.` Pick one and defend it. Verify any "team included" or per-seat claim against `/pricing` before adding it.

## Hero layout
- Desktop: copy left (about 45%), live workbench right (about 55%). Both visible at 1280×720 with no scroll.
- Mobile: eyebrow, headline, CTA, then the workbench directly under, all in the first two screens.
- Remove the big centered logo and the duplicate wordmark. The nav already has the logo.
- Nav stays: Modules, Why us, Pricing, Blog, theme toggle, Sign in, Request access.

## Page structure
1. **Hero** (copy + workbench). The mess → workbench animation plays here.
2. **Problem → fix rows.** Keep the current strikethrough pattern. Add one row: "Subscriptions stacking up → One plan, team included."
3. **Pick your business.** Chips: `Freelancer`, `Agency`, `E-commerce`, `Small SaaS`. Selecting one highlights relevant modules and updates the workbench rail.
   - E-commerce → E-commerce + Billing
   - Agency → Tasks + Billing + CRM
   - Small SaaS → CRM + Tasks + Finance
4. **Modules grid.** Replace the four static window frames with one compact grid of module cards. Hover shows a one-line outcome. Clicking switches the hero workbench view.
5. **Integrations row.** Gmail, Google Calendar, Drive, WhatsApp, payments. Small and quiet.
6. **Where it's going.** Short strip on Solos, labeled "In development". Use only what the founder said or the roadmap shows.
7. **How access works.** Keep the 3-step timeline, tighten the copy.
8. **FAQ.** 4 questions. Drop "Is this a Notion template?" to the bottom or remove.
9. **Final CTA + footer.** Keep.

CTA rule: one primary CTA in the hero, one mid-page, one at the end. Not eight.

## Tokens
```
--bg:        #FFFFFF
--text:      #0A0A0A
--muted:     #6B7280
--border:    #E5E7EB
--accent:    #F97316   /* actions + status only */
--accent-bg: #FFF1E6
--success:   #16A34A
--danger:    #DC2626
--radius:    10px
```
Dark theme: keep the existing toggle; define the same tokens inverted.

## Type and spacing
- One sans family (existing). Headline 56–64px desktop, 36px mobile. Body 18px. Max 3 sizes per section.
- 8px spacing scale. Generous whitespace around the hero.
- Thin borders, subtle shadows. Status chips: Paid (green), Sent (neutral), Overdue (red), Draft (gray).

## Data rules
- One currency across the demo (USD, to match the dashboard and pricing).
- Same names everywhere: Brightline (client), INV-198 (invoice), Emily (task owner).
- Checked boxes for done tasks.

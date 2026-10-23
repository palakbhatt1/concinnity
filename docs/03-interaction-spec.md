# 03 — Interaction spec (the wow)

**Concept: "Mess → Workbench → Money."**

Evolve the existing mess-to-dashboard idea instead of replacing it. Fix three things: make it start in the hero, make the mess literal (real tool fragments), and make the assembled workbench money-first and clickable.

## Phases

### Phase 0: the mess (0–1.2s, on load)
Six tilted fragments in the existing floating-card style, generic icons, no real brands:
- Chat bubble: "Did you get my payment?"
- Sheet row: `Brightline | $1,200 | ?`
- Calendar slot: `Tue 14:00 · call?`
- File chip: `INV-198.pdf`
- Email: `Re: estimate`
- Sticky note: `follow up Fri`

Small label: `Your stack today`.

### Phase 1: assemble (1.2–2.4s)
Fragments fly into slots in the workbench frame. Counter animates `6 tools → 1`. Label swaps to `Your week with Solopreneur OS`.

### Phase 2: idle, inviting
The workbench settles on a **money-first** view:
- Top cards: Revenue, Outstanding, Tasks due.
- Invoice list with one overdue row: `Brightline · INV-198 · $1,200 · Overdue`, pulsing ring.
- Frame label: `Live demo · click anything`.
- Ghost cursor appears after 3s idle and moves to the overdue row with the bubble `Try it: click Brightline`. Any real input cancels it.
- Rail icons now have labels on hover and a visible active state.

### Phase 3: the click flow (3 steps, under 15s)
1. **Click the overdue row.** A client panel slides in showing the same client across modules:
   - CRM: `Brightline · Client`
   - Booking: `Tue 14:00 call`
   - Task: `Follow up INV-198 · Emily`
   - Invoice: `INV-198 · Overdue`
2. **Click `Send reminder`.** Toast: `Reminder sent`. Status becomes `Reminder sent`.
3. **Cascade (automatic, about 2s):** `Payment received`. Then:
   - Invoice → Paid
   - Outstanding ticks down, Revenue ticks up
   - Task `Follow up INV-198` checks itself off
   - CRM tag → Active customer
   - Toast: `One client. One workspace. Everything updated.`

Then show chips: `Explore CRM`, `Explore Tasks`, `Explore Bookings`. Each switches the workbench to that module with the same client visible.

### Optional step 4 (stretch)
`Ask Solos` chip → short summary of the day built from the same state: "Brightline paid $1,200. 1 task closed. 2 invoices open." Label it `Solos · in development`. Never present as shipped.

## Affordance rules (fixes the "nobody knows it's clickable" problem)
- Visible label: `Live demo · click anything`.
- Step indicator: `1 of 3`.
- Hover state on every clickable element (cursor, lift, highlight).
- Ghost cursor after 3s idle, hands control back on input.
- A `Replay` link after the flow completes.

## Shared state
One store drives every module view. This is what makes the demo prove the pitch.

```ts
type State = {
  invoice: { id: 'INV-198'; client: 'Brightline'; amount: 1200;
             status: 'overdue' | 'reminded' | 'paid' };
  task:    { id: 'T-12'; title: 'Follow up INV-198'; done: boolean };
  crmTag:  'Client' | 'Active customer';
  revenue: number;      // starts 24000
  outstanding: number;  // starts 4820
  step: 0 | 1 | 2 | 3;
  view: 'billing' | 'crm' | 'tasks' | 'bookings';
  businessType: 'freelancer' | 'agency' | 'ecommerce' | 'saas';
}
```

Actions: `openClient`, `sendReminder`, `receivePayment`, `setView`, `setBusinessType`, `replay`.

## Mobile
- 3 fragments instead of 6.
- Client panel becomes a bottom sheet.
- Same 3 steps.

## Reduced motion
Skip phases 0–1 and the ghost cursor. Show the final workbench with static numbered annotations (1, 2, 3) that explain the flow.

## Fallback if time runs short
Cut Solos, then the business-type sync, then the ghost cursor. Never cut the shared-state click flow.

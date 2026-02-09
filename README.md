# Title Voice — Master Reference (Source of Truth)

> **For**: Devs, sales, anyone touching Title Voice
>
> **Rule**: If this doc and anything else disagree, **this doc wins**.
>
> **Last Updated**: 2026-02-09

---

## The Product

AI-powered voice receptionist for title companies. Handles inbound calls, provides deal status updates, routes callers to escrow officers, logs everything with transcripts.

**Provider**: Title Voice by Voltaris Labs
**Entity**: Voltaris Labs (Jamison Williams, Managing Member)
**Jurisdiction**: Ohio — Cuyahoga County courts
**Existing Client**: Pinnacle Escrow & Title Agency, LLC (Russ Abrams) — signed 10/13/2025

---

## Two Plans

### Professional — $1,500/month

| Term | Value |
|------|-------|
| Monthly Fee | $1,500 |
| Hours | Mon–Fri, 9 AM – 5 PM EST |
| Included Minutes | 2,000 (1,500 base + 500 bonus) |
| Overage Rate | $0.27/min |
| Setup Fee | $5,000 one-time (non-refundable) |
| Availability | Business hours only |
| Support | Email + phone, business hours |

### Enterprise — $3,500/month

| Term | Value |
|------|-------|
| Monthly Fee | $3,500 |
| Hours | 24/7/365 |
| Included Minutes | 3,500 |
| Overage Rate | $0.21/min |
| Setup Fee | $5,000 one-time (non-refundable) |
| Availability | Around the clock |
| Support | Priority 24/7 + dedicated account manager |

---

## Contract Terms (Both Plans)

These are the actual terms from the signed Pinnacle contract. Apply to all future clients.

| Term | Details |
|------|---------|
| **Initial Term** | 3 months |
| **After Initial Term** | Auto-converts to 12-month commitment |
| **Renewal** | Auto-renews yearly after that |
| **Cancellation Notice** | 30 days written, acknowledged by Provider |
| **Early Termination** | Client pays ALL remaining monthly fees for that term |
| **Payment** | Due upon receipt, ACH or card on file |
| **Late Payment** | Pause service at 10 days late, terminate at 30 days |
| **Late Interest** | 2% monthly on overdue balance |
| **Price Increases** | After 6 months, max 10% per 6-month period, 30 days notice |
| **Uptime SLA** | 99% during covered hours |
| **Service Pause** | Not allowed — billing continues once activated |
| **Fulfillment** | Live within 2 weeks of payment + onboarding info received |
| **Data After Cancel** | Retained 30 days, then deleted. $250 fee for export after termination |
| **Non-Solicitation** | 12 months post-termination |

---

## Service Features (Both Plans)

- Greeting & call handling
- Call routing to escrow officers
- Deal status updates
- Call logging & compliance transcripts
- Escalation alerts

### What The Agent Will NOT Do

- Provide or confirm wire instructions (directs to secure email)
- Give legal or financial advice

### IP & Ownership

- All AI configs, prompts, automations, workflows → **Provider owns**
- Call data and transcripts → **Client owns**
- Client cannot replicate Provider's systems outside the agreement

---

## What Needs to Change

### Website (Pricing.jsx)

| Current (Wrong) | Correct |
|---|---|
| Professional: 1,500 minutes | **2,000 minutes** (1,500 + 500 bonus) |
| Professional overage: $0.15/min | **$0.27/min** |
| Enterprise overage: $0.12/min | **$0.21/min** |
| No contract terms shown | **Add: "3-month pilot, then annual"** |
| "Cancel anytime" implied | **Remove. Replace with cancellation terms** |
| Setup fee buried in FAQ | **Make visible on pricing cards** |

**Add to pricing page:**
- Contract structure (3-month pilot → 12-month)
- 30-day cancellation notice requirement
- Setup fee ($5,000) prominently displayed
- Fair use policy note (25% overage for 2 consecutive months triggers review)

### Sales Emails (AGGRESSIVE-CLOSE-SYSTEM.md)

| Current (Wrong) | Correct |
|---|---|
| "Cancel anytime" | **"Start with a 3-month pilot"** |
| "No contracts" | **"Simple 3-month pilot agreement"** |
| "No commitment" | **Remove entirely** |
| "24/7/365" (generic) | **Specify: "24/7 on Enterprise" or "Business hours on Professional"** |
| "Captured Deals Guarantee" | **Replace with "30-Day Money-Back Guarantee"** |
| `{{FLASH50}}` $750 first month | **Replace with `TITLE20` — 20% off first month ($1,200 Pro / $2,800 Enterprise)** |
| `{{ZRIP_PDF_LINK}}` | **Remove or replace with onboarding page link** |
| Overage rates not mentioned | **Include correct rates if discussed** |

### Contract Template

The Pinnacle contract is the Professional template. Need to create an Enterprise version:
- Same structure and legal terms
- Update pricing table to Enterprise numbers ($3,500, 3,500 min, $0.21 overage)
- Change hours from "Mon–Fri, 9 AM–5 PM EST" to "24/7/365"
- Keep the $5,000 setup fee
- Keep all other clauses identical

---

## Decisions Made (Feb 9, 2026)

### 1. Guarantee — 30-Day Money-Back

**Replaces**: "Captured Deals Guarantee" (removed from all emails)

> "If you're not satisfied within the first 30 days, we'll refund your first month's fee. Setup fee ($5,000) is non-refundable."

- Remove all references to "Captured Deals Guarantee" from email templates
- Replace with "30-Day Money-Back Guarantee" language

### 2. Promo Code — TITLE20 (20% Off First Month)

| Tier | Normal | With TITLE20 |
|------|--------|--------------|
| Professional | $1,500 | **$1,200** first month |
| Enterprise | $3,500 | **$2,800** first month |

- Setup fee stays at **$5,000** (no discount on setup)
- Applies to both tiers
- Replaces old FLASH50 ($750) references — update all email templates

### 3. Free Trial — None

No free trial. The 3-month pilot IS the trial period. Client can cancel with 30 days written notice before it auto-converts to the 12-month commitment.

### 4. Case Studies — Generic, No Real Names

Remove fictional character names. Keep the stories but make them generic:
- ~~"Patricia from Metro Title in Orlando"~~ → "A title company in Florida"
- ~~"Jessica from Coastal Title"~~ → "A coastal title agency"
- ~~"Chicago title company"~~ → "A Midwest title company"

Protects real clients while keeping social proof credible. No disclaimer needed since no specific claims are attributed to named individuals.

### 5. Payment System — Fanbasis + Manual DocuSign

**Sales flow**:
1. Lead books call via Cal.com
2. Sales call happens
3. Send contract via DocuSign (manual — no automation needed yet)
4. Collect payment via Fanbasis
5. Start onboarding

Automate DocuSign integration later when doing 10+ clients/month.

### 6. AI Platform — Retell AI

Title Voice runs on **Retell AI**. Real call recordings can be pulled from Retell dashboard for:
- Demo video
- Case study proof
- Quality assurance

### 7. Demo Video — Screen Recording + ElevenLabs VO

**Format:** Screen recording with AI voiceover (ElevenLabs). No face on camera.
**Length:** ~4.5 minutes
**Host:** Loom (view tracking built in)
**Replaces:** `{{VIDEO_LINK}}` in all email templates

**Production steps:**
1. Pull best Retell call recording from Pinnacle (one showing scheduling or deal status)
2. Write VO script (see below)
3. Generate voiceover in ElevenLabs (professional female voice — "Rachel" primary, "Bella" backup)
4. Screen-record: product dashboard, call logs, transcripts
5. Edit together: VO + screen recordings + Retell call audio
6. Upload to Loom, grab link

**Script + timeline:**

```
[0:00-0:30] HOOK
Screen: Title company phone ringing graphic, clock showing 7:15 PM
VO: "It's 7pm. A realtor calls about tomorrow's closing.
     Nobody answers. That deal just got complicated.
     Here's how title companies are fixing this."

[0:30-1:30] THE PROOF — REAL AI CALL (60 seconds, unnarrated)
Screen: Waveform or simple "Live Call Recording" visual
Audio: RAW Retell call recording — AI handling a real title call
       (No voiceover here. Let the AI speak for itself.)

[1:30-2:30] HOW IT WORKS
Screen: Product dashboard, call logs, transcript view
VO: "That was Title Voice. Every call is answered, logged,
     and transcribed automatically. Your team sees exactly
     what happened — who called, what they needed, what
     the AI handled."

[2:30-3:15] SETUP + INTEGRATION
Screen: Simple slides showing ResWare/RamQuest/Qualia logos, setup timeline
VO: "Title Voice connects to your existing systems —
     ResWare, RamQuest, Qualia, SoftPro. We handle
     the entire setup. Your team does nothing.
     Live in two weeks."

[3:15-3:45] PRICING
Screen: Clean pricing slide (Professional $1,500 / Enterprise $3,500)
VO: "Plans start at fifteen hundred a month.
     Two thousand minutes included. If it doesn't
     work for you in the first 30 days, full refund.
     No questions asked."

[3:45-4:15] SOCIAL PROOF
Screen: Generic metrics — "Title companies using Title Voice see..."
VO: "One title company in Florida caught 34 missed calls
     in their first week. A Midwest firm saved over
     fifteen thousand dollars in recovered deals
     within the first month."

[4:15-4:30] CTA
Screen: Cal.com booking link, clean CTA
VO: "See if Title Voice fits your office.
     Book a fifteen-minute call below."
```

**Key rules:**
- The Retell call segment (0:30-1:30) plays RAW — no voiceover, no music. Let them hear it.
- ElevenLabs voice should sound calm and knowledgeable, not salesy.
- Total production: one afternoon with ElevenLabs ($5/mo) + screen recorder + basic video editor.

### 8. ZRIP PDF — Skipped

Not creating a PDF. Onboarding details will live on a website page instead. Remove `{{ZRIP_PDF_LINK}}` from email templates or replace with a link to the onboarding page.

---

## Assets Still Missing

### P0 — Can't Scale Without These

| # | Asset | Owner | Status | Notes |
|---|-------|-------|--------|-------|
| 1 | **Demo video (~4.5 min)** | You | Not recorded | Screen recording + ElevenLabs VO + real Retell call. No face on camera. Host on Loom. Full script in Decision #7. **#1 blocker.** |
| 2 | **Enterprise contract template** | You | Not created | Clone Pinnacle contract via DocuSign, swap in Enterprise numbers ($3,500, 3,500 min, $0.21, 24/7). |
| 3 | **Email template updates** | You/Devs | Not done | Fix all campaigns: FLASH50→TITLE20, "cancel anytime"→"3-month pilot", Captured Deals→30-day money-back, remove ZRIP PDF links, genericize case study names. |
| 4 | **Website pricing fix** | Devs | **DONE** | Pricing.jsx updated: 2,000 min, $0.27 overage (Pro), $0.21 overage (Enterprise), setup fee + contract terms shown. Home.jsx fixed from 3-tier to 2-tier. FAQ corrected. |

### P1 — Needed for Full Sales System

| # | Asset | Owner | Status | Notes |
|---|-------|-------|--------|-------|
| 5 | **Fanbasis payment setup** | You | Unknown | Ensure Fanbasis can handle both tiers + TITLE20 promo code. |
| 6 | **ROI Calculator page** | Devs | Not built | Referenced as `{{ROI_CALCULATOR_LINK}}`. Interactive web page. |
| 7 | **Onboarding page (replaces ZRIP PDF)** | Devs | Not built | Website page explaining: 2-week setup, what we collect, 30-day guarantee. |
| 8 | **Terms of Service** | Devs | Partially exists | `/terms` page exists but needs to match actual contract language. |
| 9 | **Privacy Policy** | Devs | Partially exists | `/privacy` page needs data retention terms (30 days, $250 export fee). |

### P2 — Nice to Have

| # | Asset | Owner | Status | Notes |
|---|-------|-------|--------|-------|
| 10 | **Case study page** | Devs | Not built | Use generic stories (no real names). Pull real metrics from Pinnacle if Russ approves. |
| 11 | **Comparison page** | Devs | Not built | Referenced as `{{COMPARISON_LINK}}`. |
| 12 | **FAQ standalone page** | Devs | Not built | Currently only in Pricing accordion. |
| 13 | **Email campaigns 8-13** | You | Not created | Campaigns 1-7 exist, 8-13 referenced as TODO. |

---

## Website Technical Fixes

Bugs/mismatches in the codebase:

| Issue | File | Status | Fix |
|---|---|---|---|
| 3 pages not routed | `App.jsx` | **DONE** | Routes added for TitleSoftware, VirtualAssistant, WorkflowIntegration |
| WorkflowIntegration build error | `WorkflowIntegration.jsx` | **DONE** | Fixed SVG data URL encoding + JSX syntax error |
| Synthetic reviews hardcoded | `TestimonialsSection.jsx`, `Home.jsx` | **DONE** | Genericized all fake names → role + region only |
| Home.jsx had 3-tier pricing | `Home.jsx` | **DONE** | Collapsed to 2-tier (Professional $1,500 / Enterprise $3,500), removed "Cancel anytime" and "$0 setup fee" |
| Pricing.jsx wrong numbers | `Pricing.jsx` | **DONE** | Fixed: 2,000 min, $0.27/$0.21 overage, FAQ corrected, trust badges updated |
| No `src/data/pricingData.js` | README claims it exists | **DONE** | File exists at `src/data/pricingData.js` |
| No audio demo files | `public/` | **DONE** | Audio files exist in `public/audio/` |
| BookingModal doesn't exist | README claims it does | **DONE** | BookingModal exists at `src/components/BookingModal.jsx` |

---

## Onboarding Checklist (What to Collect from New Clients)

Per contract Section 1 and Section 11:

```
1. Company name & legal entity
2. Main phone number (forward or port)
3. Business hours (per day)
4. Holiday schedule
5. Team directory (names, roles, extensions)
6. CRM system (ResWare / RamQuest / Qualia / SoftPro / Other)
7. CRM API access or credentials
8. Common caller questions (top 10)
9. Transfer rules (when to route to human)
10. After-hours behavior (Enterprise only: 24/7 active)
11. Signed contract
12. Payment method (ACH or card)
13. $5,000 setup fee collected
```

---

## Quick Reference

| Item | Value |
|------|-------|
| Website | titlevoice.ai |
| Booking | cal.com/title-voice-ai-tsigyx/30min |
| Support Email | support@titlevoice.ai |
| Location | Akron, OH |
| Legal Entity | Voltaris Labs |
| Jurisdiction | Ohio, Cuyahoga County |
| AI Platform | Retell AI |
| Payment System | Fanbasis |
| Contracts | DocuSign (manual) |
| Promo Code | TITLE20 (20% off first month) |
| Existing Client | Pinnacle Escrow & Title Agency (since 10/13/2025) |
| Client Contact | Russ Abrams, 440-201-9038 |

---

## Document History

| Date | Change |
|------|--------|
| 2026-02-09 | Created from signed Pinnacle contract + website audit + sales email review |
| 2026-02-09 | All decisions finalized: 30-day money-back, TITLE20 promo, Fanbasis + manual DocuSign, generic case studies, Loom video, skip ZRIP PDF, Retell AI platform |
| 2026-02-09 | **Code fixes applied**: Pricing.jsx (2,000 min, $0.27/$0.21 overage, contract terms, trust badges), Home.jsx (3-tier→2-tier, removed "cancel anytime"/"$0 setup"), App.jsx (3 missing routes added), TestimonialsSection.jsx + Home.jsx (genericized all fake names), WorkflowIntegration.jsx (fixed SVG + JSX build errors). Build passes. |
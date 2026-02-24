# Title Voice — Backend Architecture Decision

**Decision:** Keep React + Vite SPA. Handle backend separately — no Next.js migration.

**Date:** February 14, 2026

---

## Why Not Next.js

- Frontend UI is ~90% built as a Vite SPA
- Migrating means rewriting routing, folder structure, and page components
- Zero user-facing benefit for that effort
- Supabase + Convex + n8n cover every backend need without a custom server

---

## Backend Responsibility Map

| Spec's API Route | Handled By | Notes |
|------------------|------------|-------|
| `/api/auth/*` | **Supabase Auth** | Signup, login, verify, sessions — already integrated |
| `/api/tenant` | **Supabase client + RLS** | Direct queries from frontend, RLS enforces tenant isolation |
| `/api/locations` | **Supabase client + RLS** | CRUD directly, RLS handles access control |
| `/api/team`, `/api/team/invite` | **Supabase client + RLS** | Invite via Supabase Auth invite, RLS for team isolation |
| `/api/ai-config/:locationId` | **Supabase client + RLS** | Direct read/write per location |
| `/api/faqs/:locationId` | **Supabase client + RLS** | Direct CRUD |
| `/api/stripe/create-checkout` | **Supabase Edge Function** | Server-side — needs Stripe secret key |
| `/api/stripe/create-portal` | **Supabase Edge Function** | Server-side — needs Stripe secret key |
| `/api/stripe/webhook` | **Supabase Edge Function** or **n8n WF-001** | Webhook receiver, updates tenant subscription status |
| `/api/onboarding/complete` | **Supabase RPC** or direct update | Flips `onboarding_completed = true` on tenant |

---

## Stack Overview

```
Browser (React + Vite SPA)
│
├── Supabase Auth           → Sessions, users, email verification, invites
├── Supabase PostgreSQL     → Tenants, locations, team, config, FAQs, business hours
│   └── RLS Policies        → Tenant isolation, role-based access (no custom middleware needed)
├── Supabase Edge Functions  → Stripe checkout session, billing portal (2-3 functions total)
│
├── Convex                  → Real-time data layer
│   ├── calls               → Call history + active calls (live)
│   ├── usageDaily          → Daily usage stats
│   ├── usageMonthly        → Monthly usage + billing estimates
│   ├── billingEvents       → Invoice history
│   ├── notifications       → In-app notifications (real-time)
│   └── aiInsights          → Pre-computed AI insights
│
├── Stripe                  → Payments, subscriptions, metered billing
│
└── n8n                     → Background automation
    ├── WF-001              → Stripe webhook handler
    ├── WF-002              → Call logger (VAPI/Twilio → Convex)
    ├── WF-003              → Usage aggregator (daily cron)
    ├── WF-004              → Renewal reminder emails
    ├── WF-005              → Overage warning emails
    ├── WF-006              → Welcome email (post-payment)
    ├── WF-007              → Failed payment handler
    ├── WF-008              → Monthly report + AI insights
    └── WF-009              → Hot lead alerts
```

---

## Auth & Security (No Middleware Needed)

- **ProtectedRoute.jsx** — Client-side route guard (already exists)
- **Supabase RLS** — Server-side data security on every table
- **Supabase Auth tokens** — Passed automatically with every query
- **Edge Functions** — Handle Stripe secrets server-side, never exposed to client
- **RBAC** — Enforced via RLS policies checking user role in `public.users` table

---

## Supabase Edge Functions Needed (Only 2-3)

### 1. `create-checkout-session`
- Receives: `tenantId`, `priceId`, `plan`
- Creates/retrieves Stripe customer
- Creates Stripe Checkout Session with subscription + metered overage line item
- Returns: checkout URL

### 2. `create-billing-portal`
- Receives: `tenantId`
- Creates Stripe Billing Portal session
- Returns: portal URL

### 3. `stripe-webhook` (alternative to n8n WF-001)
- Receives: Stripe webhook events
- Verifies signature
- Updates tenant subscription status in Supabase
- Logs billing events to Convex

---

## What Connects Where (Data Flow)

```
User signs up → Supabase Auth → creates user + tenant row in Supabase
User picks plan → Edge Function → Stripe Checkout → Stripe webhook → n8n WF-001 → updates tenant
User completes onboarding → Supabase direct update → onboarding_completed = true

Call comes in → VAPI/Twilio → n8n WF-002 → logs to Convex calls table
Call ends → n8n WF-003 (cron) → aggregates to Convex usageDaily/usageMonthly

Dashboard loads → React app reads Supabase (tenant, config) + Convex (calls, usage, notifications)
Live calls → Convex subscription → real-time updates in header + stat cards
```

---

## Implementation Priority

1. Wire Supabase Auth (signup/login/verify) — replace mock auth
2. Wire Supabase tables (tenant, locations, team, config) — replace mockData.js
3. Set up Convex schema + seed with test data
4. Build 2-3 Supabase Edge Functions for Stripe
5. Connect dashboard pages to real Supabase/Convex queries
6. Set up n8n workflows for automation
7. Wire real-time Convex subscriptions for live features

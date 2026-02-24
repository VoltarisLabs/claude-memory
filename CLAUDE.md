<!-- MEMORY:START -->
# claude-memory

_Last updated: 2026-02-24 | Auth mobile UX rework, overlay removal, 2.5s delayed card pattern_

## Current Phase: PHASE 2 (Product Launch) → Auto-Provisioning LIVE
- **Phase 2** = Launch product WITH auto-provisioning via n8n workflows
- **Phase 3** = Polish, admin panel, advanced features
- Onboarding completion auto-triggers: KB creation (WF-013) → Agent + LLM + Phone provisioning (WF-012)
- Phone number creation currently **MOCKED for testing** (see WF-012 section below)
- **handle-signup** edge function deployed with `verify_jwt = false` (config.toml) — gateway was rejecting fresh PKCE tokens with 401; function validates JWT internally via `supabaseAdmin.auth.getUser()`

## Retell AI Integration
- **Retell API Key**: `key_7d07c0fd9b5aa9565a091a3b4175`
- **Retell API Base**: `https://api.retellai.com`
- **List Calls**: `POST https://api.retellai.com/v2/list-calls`
- **Get Call**: `GET https://api.retellai.com/v2/get-call/{call_id}`
- **Webhook Events**: `call_started`, `transcript_updated`, `call_ended`, `call_analyzed`
- **Retell Webhook URL (to configure)**: `https://app.titlevoice.ai/api/webhooks/retell`
- **Pinnacle Title Agent ID**: `agent_78f71368921c1d4827ed5d325d`
- **Key NOT in .env yet** - needs to be stored server-side only (Supabase secret or Edge Function)
- **NO Retell SDK installed** - using raw fetch calls

## Call Records Architecture (What Exists vs What's Needed)

**Already Built (Frontend):**
- `src/pages/dashboard/Calls.jsx` - Full call log page with filters, search, pagination, CSV export
- `src/components/dashboard/CallDetailPanel.jsx` - Side panel with transcript, recording player, AI analysis
- `src/hooks/useCalls.js` - Queries `calls` table from Supabase
- `src/hooks/useActiveCalls.js` - Queries `active_calls` with Supabase Realtime subscription
- `src/hooks/useRealtimeCalls.js` - Subscribes to INSERT events on `calls` table
- `src/lib/mappers.js:mapCall()` - Maps DB columns to UI fields
- `src/pages/dashboard/Overview.jsx` - Uses `useRecentCalls(5)` + `useOverviewStats`

**Already Built (Database):**
- `calls` table in Supabase (migration 001) - has call_id, caller_number, duration_seconds, transcript, summary, sentiment, recording_url, next_steps (migration 016), etc.
- `active_calls` table (migration 004) - for real-time live call display
- `locations` table has retell_agent_id, retell_llm_id, retell_knowledge_base_id, retell_phone_number_id columns
- **`usage_daily` and `usage_monthly` DROPPED** (Feb 19) — analytics now computed directly from `calls`
- **`config_change_requests`** kept but unused (potential Phase 3 admin panel)

**Airtable Import (Feb 19):**
- 40 real call records imported from Airtable base `app2yRoq0FckkNnwh` ("Pinacle Title Analytics" → "Logs" table)
- Airtable API key: `[REDACTED — stored in n8n credentials]`
- Imported for user `nafiurrahman52` (tenant `1c5c0fd8-e2b4-4329-80be-821152cafd2f`, location `eaab0860-bbbd-4688-8d43-a19b0a55d807`)
- Audio recording URLs are **temporary Airtable CDN links** (expire after hours)
- Total Airtable records: 869 (848 with audio) — only first 40 imported
- Field mapping: Caller Name, Caller Number, Call seconds (actually minutes → converted), Sentiment (lowercased), Transcript Text, Summary (AI), Audio Recording URL, Next Steps/Follow ups, Date → started_at, Call Type → intent

**Analytics Refactor (Feb 19):**
- `useAnalytics.js` completely rewritten — all hooks (`useDailyUsage`, `useUsageStats`, `useOverviewStats`, `usePeakHours`) now query `calls` table directly
- `useLocationsWithStats` in `useLocations.js` also updated to query `calls` instead of `usage_daily`
- `mapDailyUsage` and `mapUsageMonthly` in mappers.js are now unused (kept but orphaned)
- **Single source of truth**: `calls` table for ALL analytics, overview stats, and location stats

**Retell → Supabase Pipeline (BUILT — Feb 19):**
- **WF-016: Retell Call Webhook** (n8n `M54guxZNtsZ5Xbyt`) — ACTIVE, handles `call_started`, `call_ended`, `call_analyzed`
  - Webhook URL: `POST https://n8n.srv1236458.hstgr.cloud/webhook/retell-call-webhook`
  - Handles all schema mismatches: `from_number→caller_number`, `duration_ms÷1000→duration_seconds`, `sentiment.toLowerCase()`
  - Stores `transcript` (text), `transcript_object` (JSONB), `call_analysis` (JSONB), `disconnection_reason`, `in_voicemail`, `metadata`
  - Writes to `calls` (upsert on `call_id`) and `active_calls` (insert/delete)
  - Also handles CRM function calls (Airtable, HubSpot, Salesforce)
- **CallDetailPanel.jsx** handles 3 transcript formats: native JSON array, JSON string, plain text fallback
- **mappers.js:mapCall()** now maps all Retell fields including `transcriptObject`, `callAnalysis`, `disconnectionReason`, `inVoicemail`, `costUsd`, `metadata`

**NOT Built Yet (Remaining Gaps):**
- No backfill script for historical calls from Retell API
- No Convex integration (README mentions it but app uses Supabase Realtime instead)
- No `/dashboard/live` page for live call viewing

**RETELL-INTEGRATION-README.md**: Full spec at project root. Describes webhook handler, Convex schema (not using), backfill script, client onboarding checklist, phone integration paths (forwarding vs SIP).

## n8n Configuration
- **MCP Config**: `/Users/nafiurrahman/.claude/mcp_settings.json`
- **n8n Instance**: `https://n8n.srv1236458.hstgr.cloud`
- **n8n API Key (old)**: `6h2YC87ACzgPIql8LICgJqaXEarXkV2qTJ1nyCG2ifY`
- **n8n API Key (JWT, working)**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1MmI3ZjRkYi02NzRlLTRkY2UtODY0Yy01OWQ0NTNjZGIzZGEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzcwMDU5OTg2fQ.Hy8oQXUOOHa8LH5PfpOt7riFUAtqTSWGvEB-Qfa8-cI`
- **Webhook Base**: `https://n8n.srv1236458.hstgr.cloud/webhook`
- **Welcome Email Webhook**: `/webhook/welcome-email`
- **Existing n8n helpers**: `src/lib/n8n.js` (callWebhook, sendWelcomeEmail, sendOverageWarning, sendHotLeadAlert, provisionRetellAgent, createKnowledgeBase, etc.)

### WF-012: Provision Retell Agent (`P1mYViAdW7LKt3YT`)
- **Webhook**: `/provision-retell-agent`
- **Flow**: Webhook → Get Onboarding → Get Team/FAQs → Build Prompt → Create LLM → Create Agent → Create Phone Number → Get/Create Location → Prepare DB Updates → Update Location → Respond
- **Create Phone Number node**: LIVE — httpRequest `POST https://api.retellai.com/create-phone-number` (restored from mock, confirmed Feb 21 audit). Area code defaults to 216 if not in onboarding data.
- **Fixes applied (Feb 18)**:
  - `knowledge_base_ids` (array) instead of `knowledge_base_id` (string) in Create Retell LLM
  - `Respond to Webhook` uses `={{ JSON.stringify({...}) }}` instead of broken mixed template
  - `Get or Create Location` + `Send Phone Email` use `this.helpers.httpRequest()` not `fetch()`
  - `Prepare DB Updates` references `$('Get or Create Location')` not `$('Get Location ID')`
  - After ANY update: must deactivate/reactivate for webhook re-registration

### WF-013: Create Knowledge Base (`ZK9HIF6SANekz3RJ`)
- **Webhook**: `/create-knowledge-base`
- **Flow**: Webhook → Create KB in Retell (crawls sitemap.xml, passes ALL URLs) → Save KB ID to Onboarding → Respond
- **Fixes applied (Feb 18)**:
  - Crawls `{website}/sitemap.xml` and passes all `<loc>` URLs to Retell (not just root URL)
  - Uses `this.helpers.httpRequest()` not `fetch()`
  - Added `webhookId` UUID for production webhook registration

### WF-020: Pause/Unpause Retell Agent (`5pndxBmRgOudaCBt`) — NEW Feb 23
- **Webhook**: `/pause-retell-agent`
- **Flow**: Webhook → Parse Payload → If Pause? → (pause) PATCH Retell agent with paused prompt → Respond | (unpause) Trigger WF-014 config rebuild → Restore agent name → Respond
- **Called by**: `pause_canceled_agents()` cron (migration 034) and `unpause_reactivated_agents()` RPC
- **Pause action**: Updates Retell agent name to "{Company} (PAUSED)" and general_prompt to service-unavailable message
- **Unpause action**: Triggers WF-014 to rebuild proper prompt from Supabase data, then restores agent name

### WF-001 Fixes (Feb 23)
- Fixed `'cancelled'` → `'canceled'` spelling (single L) to match cron function checks
- Added `trigger_unpause` flag on `customer.subscription.updated` when status = 'active'
- New nodes: `Check Unpause Needed` → `Call Unpause RPC` (`unpause_reactivated_agents`)

### WF-004 Fixes (Feb 23)
- Email heading now uses dynamic `days_left` (was hardcoded "3 days")
- 7 days out: Blue tag "Renewal Notice", calm tone
- 1 day out: Orange tag "Action Needed", urgent tone
- Shows formatted renewal date, plan name, and amount ($15.00 or $35.00)

### WF-021: Password Reset Email (`o20a982adhiAf0on`) — NEW Feb 24
- **Webhook**: `/password-reset-email`
- **Flow**: Webhook → Code (validate email, rate limit check, generate recovery link via Supabase Admin API, build branded HTML, send via Resend) → Respond
- **Called by**: `send-password-reset` Edge Function (thin proxy — validates email, fires to n8n, returns immediately)
- **Rate limiting**: Max 3 resets per email per hour (queries `processed_webhook_events` table)
- **Token generation**: `POST /auth/v1/admin/generate-link` with service_role key
- **Reset link**: `https://www.titlevoice.ai/reset-password?token_hash={hash}&type=recovery`
- **Why n8n**: Edge Function had cold start latency (2-5s). Now Edge Function returns in <500ms, n8n handles heavy lifting.

### WF-019: Activation Email (`3RerhscDeaY39IrW`) — NEW Feb 24
- **Webhook**: `/activation-email`
- **Flow**: Webhook → Build Activation Email (Code) → Send via Resend (httpRequest) → Respond
- **Triggered by**: `generate-activation-key` Edge Function after Stripe checkout
- **Email content**: Green "Account Ready" tag, activation key in blue box, plan/expiry details, CTA to `https://app.titlevoice.ai/activate?token={magic_token}`

### Email Branding & Deliverability Overhaul (Feb 24)
- **ALL 10 email sources** now use unified branded dark template:
  - Dark bg `#0a0a14`, glass card `#111119`, logo image at top, colored tag pill, body text, detail rows table, solid blue `#0080FF` CTA, footer "Title Voice · Built for title companies"
- **Deliverability headers added to ALL emails**: `reply_to: "hello@titlevoice.ai"` + plain-text `text` fallback
- **Complete email inventory**:
  | Email | Source | ID |
  |---|---|---|
  | Welcome Email | n8n WF-006 | `cFeofTLt43RvkLMY` |
  | Team Invite | n8n | `m9S274LMl942baPa` |
  | Password Reset | n8n WF-021 (via Edge Function proxy) | `o20a982adhiAf0on` |
  | Activation Key | n8n WF-019 | `3RerhscDeaY39IrW` (new) |
  | Call Summary | n8n WF-016 | `M54guxZNtsZ5Xbyt` |
  | Provision Agent | n8n WF-012 | `P1mYViAdW7LKt3YT` |
  | Monthly Report | n8n WF-008 | `98KfMIOIVUFxxQa7` |
  | Overage Warning | n8n WF-005 | `Ik9cNeNgl1ns3YPG` |
  | Failed Payment | n8n WF-007 | `WLe8XE3jEf1rpadA` |
  | Renewal Reminder | n8n WF-004 | `k9Qe504Pyz0YYPc9` |
- **Update scripts**: `scripts/update-email-templates.mjs` (7 simple workflows), `scripts/update-complex-emails.mjs` (WF-016 + WF-012)
- **`send-password-reset` Edge Function**: Now a thin proxy — validates email, fires to n8n WF-021, returns immediately (<500ms). All email logic moved to n8n.
- **`app.titlevoice.ai` → `www.titlevoice.ai`**: Fixed in Edge Function + all email template scripts (Feb 24). `app.titlevoice.ai` subdomain does not exist.
- **DNS issues identified** (boss action needed):
  - SPF broken: `include:dc-aa8e722993._spfm.titlevoice.ai` resolves to nothing → needs `include:amazonses.com include:_spf.google.com`
  - DMARC weak: `p=none` → needs `p=quarantine; rua=mailto:hello@titlevoice.ai`
  - DKIM + Resend subdomain records verified and working
  - Guide for boss: `DNS-EMAIL-FIX.md`

### n8n Gotchas
- Code nodes do NOT have `fetch()` — must use `this.helpers.httpRequest()`
- Webhook nodes need `webhookId` UUID for production registration
- After updating workflow via API, must deactivate/reactivate for webhooks to re-register

## Supabase
- **URL**: `https://yepggeqhtspgzlkhqhgo.supabase.co`
- **Project Ref**: `yepggeqhtspgzlkhqhgo`
- **Service Role Key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllcGdnZXFodHNwZ3psa2hxaGdvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MDk4ODAwMCwiZXhwIjoyMDg2NTY0MDAwfQ.3k3FppTBVbu1qzwTxlE975g0GiSZ2AqQLDt3qYVEJWw`
- **CLI Access Token (PAT)**: `sbp_7ca396aa76b5d6349beef69604e0881924106d19`
  - Deploy command: `SUPABASE_ACCESS_TOKEN=sbp_7ca396aa76b5d6349beef69604e0881924106d19 npx supabase functions deploy <fn-name> --project-ref yepggeqhtspgzlkhqhgo`
- **Edge Functions**: `generate-activation-key`, `handle-signup`, `invite-team-member`, `provision-retell-agent`, `send-password-reset`, `accept-invite`, `confirm-activation-user`, `n8n-proxy`, `create-demo-call`, `log-demo-call`
- **Resend API**: `re_g5AKsLxZ_7WMEQ1recoRE7ErdQkUFyYkM`
- **Sender**: `hello@titlevoice.ai`

## Billing / Subscription Lifecycle (Feb 23)
- **30-day billing period** starting from payment date (not calendar month)
- **handle-signup** sets `current_period_start` and `current_period_end` (30 days) on tenant creation when `stripeCustomerId` present
- **Auto-renewal enabled** via Stripe recurring subscriptions
- **Cancellation policy**: 30-day notice required, shown on Billing page with amber info section

### Subscription Lifecycle Cron Jobs (Migration 034)
- `send_renewal_reminders()` — daily 3PM UTC, calls WF-004 via `pg_net` for tenants expiring in 7 or 1 days
- `pause_canceled_agents()` — daily 4AM UTC, calls WF-020 via `pg_net` to pause Retell agents for canceled tenants, sets `retell_agent_status = 'paused'`
- `unpause_reactivated_agents()` — called by `update_subscription_from_stripe()` RPC, calls WF-020 to unpause
- `update_subscription_from_stripe()` — RPC for WF-001 to update billing period + status, triggers unpause if reactivated

### Existing Cron Jobs (Migration 018)
- `check_subscription_expiry()` — daily 2AM UTC, marks expired active subscriptions as `past_due`
- `enforce_grace_period()` — daily 3AM UTC, cancels subscriptions 7 days past due, creates notification
- `monthly_usage_notification()` — 1st of month 8AM UTC, usage summary to active tenants

### Billing Page Updates (Feb 23)
- Shows actual `current_period_end` date (or "Not set")
- "Auto-renewal enabled" indicator when subscription active
- Cancellation Policy section (amber info box): contact hello@titlevoice.ai, 30 days notice required, service active until period end, reminders at 7d + 1d, agent paused if subscription lapses
- **"Manage Subscription" → "Update Payment Method"**: Button renamed, icon changed from ExternalLink to CreditCard, description says "View invoices and update your payment method via Stripe Portal" (no self-service cancellation)
- Users CANNOT cancel subscriptions themselves — must contact team via email

### Migration 033: Drop Dead Columns (Feb 23)
- **Tables dropped**: `config_change_requests`, `onboarding_uploads`, `ai_insights`
- **Columns dropped**: tenants (address, website, business_type, business_phone, employee_count, quick_onboarding_completed, onboarding_step), locations (backup_number), users (avatar_url, invited_by), calls (call_type)

## Onboarding Flow
- 7-step multi-step form at `/onboarding`
- Steps: Company Basics, Business Hours, Team Directory, Call Handling, Compliance, Phone Setup, Optional Details
- Data stored in: `onboarding_submissions`, `onboarding_team_members`, `onboarding_faqs`
- Completion handler at `src/pages/Onboarding.jsx:87-149`:
  1. Marks onboarding complete + updates tenant
  2. Creates location in Supabase from onboarding data (or reuses existing)
  3. Fire-and-forget: calls `provisionRetellAgent()` with onboardingId, tenantId, locationId
  4. WF-013 (KB) is triggered earlier during Company Basics step when website_url is provided
- **Payment gate (Feb 21)**: `/onboarding` requires active subscription (`requireSubscription` prop on ProtectedRoute). Unpaid users redirect to `/dashboard` where `PlanSelectionModal` shows.
- **VerifySuccess** defaults to `/dashboard` (not `/onboarding`). Routes to `/admin` for admin roles, `/onboarding` if `subscription_status === 'active'` AND `onboarding_completed === false`.
- Full spec: `ONBOARDING-QUESTIONNAIRE-SPEC.md`

## Recent UI Changes (Feb 17)
- TeamDirectoryStep.jsx: Added ChevronDown icons to role selects
- CallHandlingStep.jsx: Fixed text visibility, Enter/Shift+Enter on FAQ textareas, transfer dropdown with team members
- Team.jsx: Added active/inactive toggle with is_active column
- mappers.js: Added isActive to mapTeamMember, mapTeamMember now extracts locations from `user_location_access` join

## AI Agent Page Overhaul (Feb 18)
- **Removed approval process** — users directly edit agent config inline (no more ConfigChangeModal/PendingChanges)
- **EditableAgentConfig.jsx** — Replaced read-only OnboardingConfigView with inline CRUD for all sections
  - Each section: read mode (default) → click Edit → form fields → Save/Cancel
  - Team Members: phone validation (`formatPhoneNumber`, `isValidPhone`, `isValidEmail`), `backup_contact` dropdown, escalation priority display
  - FAQs: inline add/edit/delete with Enter/Shift+Enter support
  - Double-delete bug fixed: `deletingId`/`deletingFaqId` state disables delete buttons during async ops
- **Auto-sync to Retell** — Every save fires `useSyncToRetell()` (fire-and-forget via `usePublishConfig.js`) which calls WF-014
  - No more "Publish Changes" button — `PublishBar.jsx` was deleted
  - `useSyncToRetell()` uses `inflightRef` to skip concurrent syncs
- **WF-014: Update Retell Config** (`Py9ydQh66T2iPzMh`) — Webhook `/update-retell-config`, rebuilds prompt from Supabase data → PATCH Retell LLM
- **VoiceSelector** — Uses WF-011 to update voice on Retell agent
- **Deleted files**: `ConfigChangeModal.jsx`, `PendingChanges.jsx`, `OnboardingConfigView.jsx`, `PublishBar.jsx`

## Dashboard Performance Optimizations (Feb 18)
### Round 1 — Core Fixes
- **useOverviewStats** — 4 sequential awaits → 2 parallel `Promise.all` batches
- **useLeadBreakdown** — Full table scan → 3 parallel COUNT queries (`head: true`, zero rows transferred)
- **GlowCard.jsx** — `useState`/`setPosition` per mousemove → `useMotionValue`/`useMotionTemplate` (zero React re-renders)
- **vite.config.js** — Added `@splinetool` to manualChunks exclusion (isolated 2MB physics chunk)
- **AIAgent.jsx** — Fixed broken import `usePublishRetellConfig` → `useSyncToRetell`

### Round 2 — Dashboard Polish
- **Overview.jsx** — Removed unused `useCompanyDocuments` import (1 wasted DB query eliminated)
- **StatCard.jsx** — Wrapped in `React.memo` (prevents 4 Recharts re-renders from 5s interval timers)
- **DashboardLayout.jsx** — Resize listener debounced (150ms) instead of firing on every pixel
- **useRealtimeCalls.js** — Removed `overviewStats` invalidation from INSERT handler (was cascading expensive re-fetches)
- **useActiveCalls.js** — Parallelized profile + active_calls queries; scoped Realtime to INSERT/DELETE only (no more re-fetch on every mid-call UPDATE)

### Known Remaining Issues (not fixed — marketing pages only)
- `awwwards/GlowCard.jsx` `TiltCard` has 3x `setState` per mousemove (180 re-renders/sec) — only on marketing pages
- `@react-three/fiber` + `@react-three/drei` are unused deps (~700KB) — `HomeV2.jsx` + `NeuralNetwork3D.jsx` are dead code (not imported anywhere)

## Dashboard Routes
- `/dashboard` - Overview
- `/dashboard/calls` - Call Log
- `/dashboard/analytics` - Analytics
- `/dashboard/ai-agent` - AI Agent Config
- `/dashboard/integrations` - Integrations
- `/dashboard/team` - Team Management
- `/dashboard/billing` - Billing
- `/admin` - Admin Panel (auto-routed for `super_admin`/`admin` roles on login)

## Test Data
- Test tenant ID: `e3294bf0-9252-4313-bb78-8c25676dde58`
- Active tenant (nafiurrahman52): `1c5c0fd8-e2b4-4329-80be-821152cafd2f` (Rahman Niloy Title)
- Active location: `eaab0860-bbbd-4688-8d43-a19b0a55d807`
- 40 real call records in `calls` table (imported from Airtable, Nov 2025 – Feb 2026)
- Dev server: `http://localhost:3001/`

## DB Table Audit (Feb 19, updated Feb 23)
- **19 tables actively used** in frontend code
- **5 tables dropped**: `usage_daily`, `usage_monthly` (Feb 19), `config_change_requests`, `onboarding_uploads`, `ai_insights` (migration 033, Feb 23)
- **3 tables unused in frontend but needed**: `api_keys`, `webhooks` (future features), `processed_webhook_events`, `reconciliation_log` (server-side Edge Functions)

## Migration 017 — Backend Fixes (EXECUTED Feb 19)
- `users.is_active` BOOLEAN DEFAULT TRUE — soft-delete for team members
- `tenants.account_manager_name` TEXT — Enterprise support page
- `tenants.account_manager_email` TEXT — Enterprise support page
- `calls.transcript_object` JSONB — Retell structured transcripts
- `calls.disconnection_reason` TEXT — call end reason
- `calls.in_voicemail` BOOLEAN DEFAULT FALSE
- `calls.cost_usd` DECIMAL
- `calls.call_analysis` JSONB — full Retell analysis object
- `calls.metadata` JSONB — arbitrary Retell metadata
- Indexes: `idx_calls_tenant_created`, `idx_calls_call_id`, `idx_users_is_active`

## WF-003: Usage Aggregator (Feb 19)
- Replaced mock `Math.random()` with real Supabase REST API queries against `calls` table
- Computes daily stats (answered, missed, voicemail, escalations, avg_duration, hot_leads) per tenant
- Computes monthly rollup (total_minutes, ai_resolution_rate, overage, avg_sentiment_score)
- Runs daily at 1 AM via cron

## Business Hours Classification (Feb 21)
- **Migration 025**: `calls.is_after_hours BOOLEAN DEFAULT FALSE` — classifies every call
- **Existing missed calls** auto-marked `is_after_hours = true` on migration
- **WF-016 updated**: `End Call + Log Missed` → `is_after_hours: true`; `Log Call to Supabase` → `is_after_hours: false`
- **Pinnacle Title business hours**: Mon–Fri 9am–5pm, closed Sat/Sun (inserted into `business_hours` table)
- **mappers.js**: `isAfterHours` field added to `mapCall()`
- **useAnalytics.js**: `fetchCallsInRange` selects `is_after_hours`; `aggregateByDay` tracks `businessHours`/`afterHours` per day
- **Analytics page**: Outcomes chart has 3-way toggle — All | ☀ Business | 🌙 After Hours
- **Calls page**: Time filter (All / Business Hours); after-hours calls show small `AH` purple badge
- **Voicemail removed from dashboard**: No VM bar in Outcomes chart, no VM in status filters, CSV exports Business Hrs + After Hours instead of Voicemail

## Multi-Location Enterprise + Team Invites (Feb 21)
- **Migrations 022–024 executed**:
  - 022: Multi-location Enterprise tables/columns
  - 023: Team seat limits (Professional: 3 seats, $15/seat addon)
  - 024: Dropped `users.id` FK constraint, added `DEFAULT gen_random_uuid()`
- **LocationContext** (`src/context/LocationContext.jsx`) — global location switcher, persists to localStorage
- **LocationSwitcher** (`src/components/dashboard/LocationSwitcher.jsx`) — Enterprise only, >1 location
- **LocationSetupWizard** (`src/components/dashboard/location-setup/`) — BranchDetailsStep, BranchHoursStep, BranchStaffStep
- **AcceptInvite page** (`src/pages/AcceptInvite.jsx`) + `accept-invite` Edge Function — invite token flow
- **Team page** — Enterprise: unlimited seats; Professional: 3 seat limit with addon upsell
- **Sidebar** — Team nav item no longer Enterprise-gated
- **AccountRecovery** in DashboardLayout — auto-provisions users stuck in auth without tenant/profile
- **PGRST116 handling** in `getCurrentUser()` — graceful null profile return

## WF-016 Business Rules (Feb 21)
- Enterprise → always answers (24/7), `is_after_hours` based on actual clock
- Professional → after business hours → call rejected + logged as missed with `is_after_hours: true`
- Email notification sent on failed/no transfer only — skipped if `disconnection_reason === 'call_transfer'`
- `new URL()` bug fixed in Query Airtable node (replaced with plain string URL construction)

## Frontend Bug Audit (Feb 18-19) — ~30 bugs fixed across 8 rounds

### Rounds 1-7 (Feb 18)
- Performance: resize debouncing (DashboardLayout, useDeviceDetection), React.memo (StatCard), useMotionValue (GlowCard)
- Realtime: scoped useActiveCalls to INSERT/DELETE only, removed cascading invalidations from useRealtimeCalls
- Parallelized: useOverviewStats, useLeadBreakdown, useActiveCalls queries
- Auth: Login error clear on forgot-password toggle, Signup password number validation + UI indicator
- AI Agent: EditableAgentConfig FAQ empty-input toast, broken import fix
- Overview: removed unused useCompanyDocuments import

### Round 8 (Feb 19)
- **ProtectedRoute.jsx** — Added `mounted` flag to prevent setState after unmount (async getSession race)
- **mappers.js** — `overageCost`/`aiResolutionRate`/`avgSentimentScore`: `Number(x || 0)` → `Number(x) || 0` (NaN guard); `hasConfig`: added `typeof === 'object'` check; `formatTime24to12`: added string type check + `isNaN` guard
- **useAnalytics.js** — Peak hours: skip rows with null/invalid `started_at` dates (`isNaN(dt.getTime())` guard)
- **PlanSelectionModal.jsx** — Toast errors when Stripe link or tenantId missing (was silent fail); added optional chaining on `stripeLinks`
- **useLocations.js** — `useUpdateBusinessHours`: check + throw delete error (was silently swallowed)
- **VerifySuccess.jsx** — Wrapped `sendWelcomeEmail` in try/catch so email failure doesn't make verification appear failed

### Round 9 (Feb 21)
- **handle-signup 401 fix** — Edge function gateway (`verify_jwt: true`) was rejecting fresh PKCE tokens. Deployed with `verify_jwt = false` via `config.toml` + `--no-verify-jwt`. Function validates JWT internally.
- **Payment gate before onboarding** — `VerifySuccess.jsx` defaults to `/dashboard` (was `/onboarding`). Only routes to `/onboarding` if subscription active + onboarding incomplete. `ProtectedRoute` gained `requireSubscription` prop; `/onboarding` route uses it.
- **PlanSelectionModal card overlap** — Professional card was overlaying Enterprise card. Added `isolate min-w-0` to grid cell wrappers.
- **Settings page** — Removed Delete Account / Danger Zone section entirely (button, confirmation input, handler, `Trash2`/`AlertTriangle` imports).
- **Tenant data leak fixes** — All hooks scoped to `getMyTenantId()` helper in `supabase.js`
- **Pricing modal** — `sessionStorage` → `localStorage` for dismiss key
- **AccountRecovery** — Auto-provisions users stuck in auth without tenant/profile

### Security Plan (DEFERRED — plan saved at `.claude/plans/reflective-stirring-wave.md`)
- `VITE_SUPABASE_SERVICE_ROLE_KEY` exposed in browser bundle (used only in auth.js signUp/activateWithKey)
- `VITE_N8N_API_KEY` exposed in browser bundle (used in n8n.js callWebhook)
- Plan: DB trigger for signup provisioning + n8n proxy Edge Function + remove supabaseAdmin from client
- RLS is properly configured on ALL tables — hooks use anon client correctly

## Analytics PDF Export (Feb 21)
- Fully redesigned with jsPDF — branded dark header, 8 KPI boxes (4 primary + 4 secondary)
- Daily breakdown table: Date, Total, Answered, Missed, Business Hours, After Hours (no Voicemail)
- AI Insights section with type-colored left borders
- Page footer on every page: "Title Voice AI · Confidential" + page X of Y
- Continuation headers on multi-page exports
- Filename: `title-voice-analytics-{company}-{daterange}.pdf`

## Email Campaign UTM Tracking (Feb 21)
- **`src/lib/utm.js`** (NEW): Parses `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `eid` (visitor email) from URL → persists to `sessionStorage` (`tv_utm` key)
- **`src/components/ScrollToTop.jsx`**: Captures UTM on first mount via `useRef` guard, fires `email_campaign_visit` event to GA4+PostHog, cleans URL bar
- **`src/utils/analytics.js`**: `trackEmailVisit(utmData)` fires campaign event; `trackConversion()` auto-enriches with `getCampaignData()` for attribution
- **`src/lib/n8n.js`**: Welcome email payload now includes `dashboard_url` with UTM params (`?utm_source=titlevoice&utm_medium=email&utm_campaign=welcome`)
- **Instantly email links format**: `?utm_source=instantly&utm_medium=email&utm_campaign=NAME&eid={{email}}`
- **Individual tracking**: `eid` param carries recipient email address for per-user attribution in PostHog

## PostHog Analytics (Feb 22)
- **Key**: `phc_uVwG1husK9GcxphUwzbbgskJNaKYpEJ1KKNk224U30S` (in `.env` as `VITE_POSTHOG_KEY`)
- **Host**: `https://us.i.posthog.com` (dev) / `/ingest` (prod, via Vercel reverse proxy)
- **Project ID**: `319705`
- **Init file**: `src/lib/posthog.js` — wrapped in `PostHogProvider` in `src/main.jsx`
- **Tracking layer**: `src/utils/analytics.js` — dual GA4 + PostHog via `trackEvent()`
- **`respect_dnt: false`** — DNT was silently killing all analytics; disabled Feb 22
- **Vercel reverse proxy** — `/ingest/*` rewrites in `vercel.json` proxy to `us.i.posthog.com`, bypassing ad blockers
- **`ui_host: 'https://us.posthog.com'`** — keeps PostHog toolbar/feature flags working through proxy
- **WF-018: PostHog Visitor Tracker** (`cTDySj9kSoyhUX2X`) — webhook receives PostHog events, writes to `website_visitors` table
  - **Bug fixed (Feb 22)**: PostHog sends nested `{ event: { event: "$pageview", ... } }` but Code node expected flat format. Fixed to detect nested/flat/batch/array formats. Returns `[]` on no events to stop flow.
- **Packages**: `posthog-js@^1.352.0`, `@posthog/react@^1.8.0`
- **Vendor chunk**: `posthog-vendor-*.js` (~182KB) isolated in `vite.config.js` manualChunks

## Admin Notifications System (Feb 21 Audit)
- **12 notification types defined** in `src/constants/adminNotificationTypes.js`
- **All 12 wired up**:
  - DB triggers (migration 028): `new_signup`, `subscription_new`, `subscription_canceled`, `plan_change`, `onboarding_complete`, `invite_accepted`, `location_created`
  - Edge function: `team_invite` (invite-team-member)
  - Frontend RPC: `config_changed` (usePublishConfig.js), `document_uploaded` (useCompanyDocuments.js), `crm_setup_requested` (n8n.js)
  - DB trigger (migration 030): `visitor_milestone` — fires at 50, 100, 250, 500, 1K, 2.5K, 5K, 10K, 25K, 50K, 100K unique visitors
- **Migration 030**: `visitor_milestones` table (tracks reached thresholds) + `fn_check_visitor_milestone()` trigger on `website_visitors` INSERT
- **Severity scales**: `info` (<1K), `important` (1K-10K), `critical` (10K+)

## Current DB State (Feb 24)
- **2,012 total calls** in `calls` table (1,024 after-hours / 988 business-hours)
- **Pinnacle Title location** `52c9e982-c955-416f-ae1a-64c0c7c19922` — business hours set Mon-Fri 9-5
- **Active location** (nafiurrahman52): `eaab0860-bbbd-4688-8d43-a19b0a55d807`
- Migrations executed: 001-017, 022-030, 033-035

## Live Demo — Talk to Vera (Feb 21)
- **Vera Agent ID**: `agent_3fc74da12f5375ca9a9f8d1bc8`
- **Vera LLM ID**: `llm_a1620cdfe58fb2de14d90c6164dd`
- **No phone number** — web calls only via Retell Web SDK (WebRTC)
- **Identity**: Vera is Title Voice's product specialist (distinct from Taylor, the client-facing receptionist)
- **DB tables**: `demo_usage` (per-user lifetime balance, 90s default), `demo_calls` (individual call log)
- **Edge Functions**: `create-demo-call` (auth + usage check + Retell web call), `log-demo-call` (record duration)
- **Retell API key**: Set as Supabase secret `RETELL_API_KEY` (server-side only in Edge Functions)
- **Frontend**: `/try-vera` page (lazy-loaded, no Nav/Footer), `retell-client-js-sdk` (~458KB isolated chunk)
- **Home.jsx**: "Talk to Vera — Live" CTA section added before FAQ
- **State machine**: loading → ready → connecting → active → ended → exhausted
- **Hooks**: `useDemoUsage()` (React Query), `useDemoCall()` (Retell SDK wrapper)
- **Components**: `DemoCallInterface`, `DemoTimer` (SVG countdown ring), `AudioVisualizer` (volume bars)
- **handle-signup updated**: Auto-creates `demo_usage` row on new signup
- **Migration 025**: `demo_usage` + `demo_calls` tables with RLS (user reads own, service role full access)
- **Spec**: Full feature spec at `LIVE-DEMO-SPEC.md`

## Security Hardening (Feb 21)

### Migration 029 — Admin RLS Hardening (EXECUTED)
- Dropped overly-permissive SELECT policies on `admin_notifications`, `website_visitors`
- Created admin-only SELECT policies using `get_my_role() IN ('super_admin', 'admin')` for: `admin_notifications`, `admin_notification_reads`, `website_visitors`, `tenants`, `calls`, `users`, `locations`, `active_calls`, `onboarding_submissions`
- Restricted `insert_admin_notification` RPC to admin roles only

### Migration 030 — Critical Security Fix (EXECUTED)
- **Dropped 16 overly-permissive `USING: true` policies** on `users`, `tenants`, `notification_preferences` that bypassed properly scoped RLS
- **VULNERABILITY FIXED**: Any authenticated user could previously read ALL user profiles, update ANY user's role to `super_admin`, read ALL tenants (billing info, Stripe IDs), and update any tenant's plan
- **`fn_protect_user_role` trigger**: Blocks any non-service-role user from changing `users.role` column
- **`fn_protect_tenant_billing` trigger**: Blocks changes to `plan`, `subscription_status`, `subscription_id`, `stripe_customer_id`, `minutes_limit`, `current_period_start`, `current_period_end` unless by service_role
- Replaced `notification_preferences` policies with properly scoped ones (`user_id = auth.uid()`)

### Admin Customer Health Score (Feb 22)
- **CustomerDetail.jsx** — Replaced 3-rule guess with weighted 7-signal score (0–100)
- **Signals**: Usage level (25pts), days since last call (20pts), call volume trend week-over-week (15pts), billing status (15pts), onboarding complete (10pts), agent configured (10pts), team size (5pts)
- **Labels**: Healthy (70–100, green), At Risk (50–69, yellow), Churning (0–49, red)
- **No sentiment** — sentiment data not reliably available; excluded from scoring
- All signals computed from data already fetched by `useAdminCustomerDetail` — no new queries

### Admin Auto-Routing
- **Login.jsx**: After successful login, checks `users.role` — admins (`super_admin`/`admin`) redirect to `/admin`, others to `/dashboard`
- **Login.jsx**: Already-authenticated users also role-checked on page load
- **VerifySuccess.jsx**: After email verification, admins routed to `/admin`
- **AdminRoute.jsx**: Added `onAuthStateChange` listener for real-time auth monitoring (SIGNED_OUT, TOKEN_REFRESHED)

### Defense-in-Depth Tenant Filtering (Feb 21)
- All frontend hooks now explicitly filter by `tenant_id` alongside RLS:
  - `useCalls.js`: `useCalls()`, `useRecentCalls()`, `useMissedCalls()`, `useCallsExport()` — all use `getMyTenantId()` + `.eq('tenant_id', tenantId)`
  - `useLocations.js`: `useLocations()` — uses `getMyTenantId()` + `.eq('tenant_id', tenantId)`
  - `useAnalytics.js`: Already had tenant filtering (no changes needed)
  - `useActiveCalls.js`: Already had tenant filtering (no changes needed)
  - `useRealtimeCalls.js`: Already had tenant filtering (no changes needed)
- **Demo tables verified**: `demo_usage` + `demo_calls` have proper RLS (`auth.uid() = user_id` for SELECT, service_role for ALL)

### Security Layers Summary
1. **RLS policies** — database-level enforcement (primary)
2. **Frontend tenant filtering** — explicit `.eq('tenant_id')` in every data hook (defense-in-depth)
3. **Role escalation trigger** — blocks `users.role` changes by non-service-role
4. **Billing protection trigger** — blocks plan/subscription field changes
5. **Admin route guard** — `AdminRoute.jsx` with role check + auth state listener

### CORS Restriction (Feb 21)
- **`_shared/cors.ts`**: Replaced `Access-Control-Allow-Origin: *` with dynamic origin checking
- Allowed origins: `titlevoice.ai`, `www.titlevoice.ai`, `app.titlevoice.ai`, `localhost:3001`, `localhost:5173`
- `getCorsHeaders(req)` checks request `Origin` header against allowlist; defaults to `titlevoice.ai`
- **All 9 Edge Functions updated and deployed**: handle-signup, create-demo-call, n8n-proxy, accept-invite, invite-team-member, generate-activation-key, confirm-activation-user, send-password-reset, provision-retell-agent

### n8n API Key — RESOLVED
- `VITE_N8N_API_KEY` is **no longer in the browser bundle**. `src/lib/n8n.js` routes all webhook calls through the `n8n-proxy` Edge Function, which holds the key server-side.

### PlanSelectionModal — Dismissible
- Unpaid users CAN browse the dashboard freely. The pricing modal auto-shows but is dismissible (X button, backdrop click).
- The real payment gate is on `/onboarding` via `requireSubscription` on ProtectedRoute — users cannot start onboarding without paying.

## Notification Panel Redesign (Feb 23)
- **DashboardHeader.jsx** notification dropdown fully redesigned
- **Unread notifications**: Glowing blue dot (`bg-[#0080FF]` + `shadow-[0_0_6px_rgba(0,128,255,0.4)]`), white bold text, blue-tinted background (`bg-[#0080FF]/[0.04]`), clickable to mark as read
- **Read notifications**: Dark gray dot (`bg-zinc-800`), zinc-500 dimmed text, non-clickable
- **Sections**: Unread items at top, "Earlier" divider label, then read items (max 5 shown)
- **Header**: "Notifications" title + "X new" blue badge pill + "Mark all read" button
- **Empty state**: Bell icon + "No notifications yet"
- **All caught up**: "You're all caught up" message when 0 unread
- Uses `useNotifications()` hook with Supabase Realtime for instant push updates

## Support Page Redesign (Feb 24)
- **`src/pages/dashboard/Support.jsx`** fully rewritten
- **Removed**: 3 redundant `supportChannels` cards (two opened same mailto), placeholder System Status bar, separate Enterprise Account Manager section
- **New Contact Card** (full-width, prominent):
  - Left: "Get in Touch" heading, `hello@titlevoice.ai` clickable link + copy-to-clipboard button with toast
  - Right: Plan-aware response time badge (Professional: 24h, Enterprise: 4h)
  - Enterprise users see inline Account Manager name/email with purple accent
  - "Send Email" button opens mailto
- **Quick Links Grid** (3 SpotlightCards with stagger animation):
  - Receptionist Setup (blue) → `/dashboard/ai-agent`
  - Billing & Payments (purple) → `/dashboard/billing`
  - Call History (cyan) → `/dashboard/calls`
- **Expanded FAQ** (8 questions in 2 categories, up from 4 generic):
  - Setup & Configuration: greeting, call forwarding, team members, knowledge base
  - Billing & Usage: overage charges, CSV export, renewal cycle, cancellation process
- **SLAStatus** component kept unchanged at bottom
- Uses `scaleIn`, `staggerContainer/staggerItem`, `fadeIn` animations + glass card pattern

## Full Codebase Audit Fix (Feb 24)
- **7-agent audit** identified ~65 findings, **6 parallel agents** fixed ~87 issues across 90+ files
- **Migration 035 EXECUTED**: RLS fixes (admin_notifications INSERT, visitor_milestones), service_role policies on activation_keys/processed_webhook_events/reconciliation_log, CHECK constraint on locations.retell_agent_status, get_my_role() null safety (returns 'viewer'), tenant_id column on website_visitors
- **31 files deleted**: 23 unused components (AnimatedOrb, Badge, CustomCursor, FeaturesSection, FlipWords, FlowPipeline, Hero, InfiniteScroll, IntegrationSection, LogoCloud, MetricsSection, NeuralNetwork, ProgressTracker, ResultsSection, RevealText, SphereMotion, StaggeredGrid, TermsAgreementModal, TestimonialsSection, TextGenerateEffect, TextHoverEffect, TrustSection, ValueGrowth) + entire `awwwards/` directory (8 files)
- **KEPT**: `CostBreakdownSection.jsx` (used by ROICalculator), `TextAnimations.jsx` (exports WordReveal used by 6+ pages)
- **Color standardization**: All `emerald-*` / `#10B981` / `#34D399` replaced with brand blue `#0080FF` in admin + dashboard pages (admin Overview/Customers/CustomerDetail/Revenue, dashboard Overview/Billing/Calls/CallDetailPanel/Team/Locations/Analytics/DashboardHeader/DashboardSettings/Integrations/StatCard/SLAStatus/AgentStatusBanner/ConnectCrmModal)
- **Sentiment label**: `negative` key removed from admin Overview sentimentColors (use `frustrated` only)
- **Copy fixes**: `support@titlevoice.ai` -> `hello@titlevoice.ai` (all src/), "Total Calls" -> "Calls Handled", "Get Started" -> context-specific CTAs, "Stripe Portal" -> "Stripe dashboard", "AI" -> brand terms in customer-facing copy, 38+ em dashes removed
- **Auth hardening**: VerifySuccess didRun guard, ProtectedRoute subscription error fallback, Activate double-submit guard, PaymentSuccess auth check, ResetPassword optional chaining, App.jsx navigate try/catch, Login profile fetch toast + "Create an account"
- **Backend**: n8n.js 30s timeout + listRetellVoices deleted, n8n-proxy /hot-lead-alert removed + URL validation, edge functions use env vars with fallbacks, supabase.js improved error messages
- **CrmConnectionStep.jsx**: UTC timestamps -> EST (`toLocaleString('en-US', { timeZone: 'America/New_York' })`)
- **Build verified**: Zero errors, 3302 modules, 37 routes pre-rendered

## Auth Page Clickable Logo + Vercel Admin Fix (Feb 24)
- **"Title Voice" heading on auth pages** now links to `https://www.titlevoice.ai` (new tab)
- **Spline robot `pointer-events-none`**: Added to robot container div on Login, Signup, Activate, ResetPassword — stops WebGL canvas from eating click events
- **Head tracking still works**: Uses `window.addEventListener('mousemove')`, not canvas pointer events
- **`<a>` tag wraps heading text** inside `motion.h1` — simple pattern matching "Forgot password?" / "Sign in" links
- **Dashboard sidebar**: Logo + text wrapped in `<a>` tag (was already working, no Spline interference)
- **Vercel admin 404 fix**: Added explicit `/admin/:path*` rewrite in `vercel.json` before SPA catch-all + `/admin` route in `prerenderMetaTags()` in `vite.config.js`
- **Files modified**: Login.jsx, Signup.jsx, Activate.jsx (2 instances), ResetPassword.jsx, Sidebar.jsx, vercel.json, vite.config.js

## Auth & UX Fixes (Feb 24 late)
- **accept-invite Vercel 404 fix**: Added explicit `/accept-invite` rewrite in `vercel.json` (line 67-69) before catch-all + `/accept-invite` prerender route in `vite.config.js`. Same pattern as `/admin/:path*` fix.
- **Reset password "Link Expired" race condition**: `ResetPassword.jsx` now trusts URL hash tokens (`type=recovery` + `access_token`) and shows the form immediately. Previously `getSession()` raced with Supabase's token exchange and returned null, falsely showing "Link Expired".
- **Send Invite button feedback**: Added `disabled={inviteTeamMember.isPending}` + spinner "Sending..." text to Team.jsx invite modal. Cancel button also disabled during submission. `toast.success('Invite sent')` was already wired on success.
- **ProtectedRoute stuck loading fix**: Added 8-second timeout fallback. If `onAuthStateChange` hasn't fired (network issue, slow token refresh), falls back to manual `getSession()` check so users don't get stuck on permanent spinner.
- **Login.jsx AbortError fixes**: Profile fetch after sign-in retries once on AbortError (300ms delay). `useEffect` session check catches AbortError gracefully.
- **auth.js last_login_at**: Wrapped in `setTimeout(500ms)` fire-and-forget with catch to handle AbortError during session stabilization.
- **Commit**: `51b757d` — 15 files changed, pushed to main

## Auth Pages Mobile UX Rework (Feb 24 late)
- **All 4 auth pages** (Login, Signup, Activate, ResetPassword) now use unified **2.5s delayed card** pattern on mobile
- **Desktop** (`≥1024px`): Form card shows immediately (`showCard` initializes to `true` via `matchMedia`)
- **Mobile** (`<1024px`): Form card hidden for 2.5s so Spline robot loads first, then fades in via `motion.div`
- **Overlay removed**: `AnimatePresence` mobile loading spinner ("Preparing your experience...") deleted from Activate.jsx and ResetPassword.jsx
- **Cleanup**: `useCallback` and `AnimatePresence` imports removed from Activate/ResetPassword; dead `onSceneReady={handleSceneReady}` prop removed from Signup SplineScene
- **Commits**: `fd6e9ce` (4 auth pages) + `cb787a3` (17 remaining modified files — hooks, edge functions, UI hardening)

## Production Go-Live Checklist
- [x] ~~Restore "Create Phone Number" node in WF-012~~ — Already live (confirmed Feb 21 audit)
- [x] ~~Deactivate/reactivate WF-012 after restoring~~ — Already active
- [x] ~~Fix handle-signup 401~~ — Deployed with `verify_jwt = false` (Feb 21)
- [x] ~~Payment gate before onboarding~~ — VerifySuccess → dashboard; ProtectedRoute `requireSubscription` (Feb 21)
- [x] ~~Standardize all email templates~~ — All 10 emails branded + deliverability headers (Feb 24)
- [x] ~~Full codebase audit fix~~ — 87 findings fixed, migration 035 applied, build verified (Feb 24)
- [ ] **Deploy updated edge functions** — n8n-proxy, generate-activation-key, provision-retell-agent, create-demo-call (audit changes)
- [ ] **DNS: Fix SPF + DMARC records** — Boss needs to update at domain registrar (see `DNS-EMAIL-FIX.md`)
- [ ] Verify KB pages are all indexed in Retell dashboard after onboarding
- [ ] Test end-to-end with a real phone number purchase
- [ ] Move Retell API key to server-side only (Supabase secret or Edge Function)

<!-- MEMORY:END -->

---

## Critical Rules

1. **NEVER touch production resources** (Retell agents, Supabase production configs, n8n production workflows, live phone numbers) without explicit user permission. Always ask before modifying any production system.
2. **Always explain your plan BEFORE making edits.** Do not jump ahead with code changes before confirming the approach, especially for multi-file changes or architectural decisions.
3. **Keep moving.** When the user says "continue" or "are u there?" it means you've stalled. Do not wait for confirmation on intermediate steps during multi-step tasks — keep executing unless you hit a genuine blocker that requires user input.
4. **Read first, then plan.** Always read the relevant code and verify assumptions (test APIs with curl, check function signatures, read docs) BEFORE writing any fix. Never guess at API endpoints, parameter formats, or response shapes.
5. **Don't guess, verify.** When calling external APIs (Supabase, Retell, Resend, n8n), test the exact request with curl first. When modifying a function, read the callers and callees. When unsure, investigate — don't assume.
6. **NEVER commit secrets to git.** API keys, service role keys, JWT tokens, and any credentials must NEVER be committed or pushed. Before staging files, check for hardcoded secrets. Scripts with embedded keys (e.g. n8n deploy scripts) must be `.gitignore`d or have keys replaced with environment variable references before committing.

## Project Overview

- **Tech stack**: Vite + React (JavaScript), Supabase (auth + DB + Edge Functions), n8n (workflows/webhooks), Stripe (payments), Retell AI (voice), Resend (email)
- **Do NOT reference** Convex, Next.js, or other frameworks unless explicitly told otherwise
- **Timezone**: All time-related displays and logic use **EST**. Never convert to browser local time or UTC for user-facing features.

## UI/Design Rules

- When making UI/CSS changes, make them **BOLD and VISIBLY DIFFERENT**. Never make subtle/minimal tweaks when the user asks for improvements.
- If the user says "make it better", that means a **noticeable redesign**, not a 2px padding change.
- When unsure about design direction, ask for a reference component or screenshot rather than guessing.

## n8n Rules

- n8n Code nodes do **NOT** support `fetch()`. Use `this.helpers.httpRequest()` in Code nodes, or use the HTTP Request node.
- n8n handles email sending and Stripe webhooks — do not try to replicate these in Edge Functions.
- After updating any workflow via API, must **deactivate/reactivate** for webhooks to re-register.

---

## 🎨 BRAND TONE GUIDELINES (CRITICAL - ALWAYS FOLLOW)

> Full spec: `BRAND-TONE.md` — read it before writing ANY customer-facing copy. Follow it for **copy and voice only**. Colors and visual design use the palette below (not BRAND-TONE.md).

**Color Palette:**
- Primary Blue: `#0080FF`
- Secondary Purple: `#4F1AD6`
- Accent Cyan: `#00D9FF`
- Background: Black `#000000`
- Text: White with transparency effects
- Borders: `white/10` (subtle)

**Visual Identity:**
- Glass morphism (backdrop-blur, transparent layers)
- Smooth gradients (Blue → Purple)
- Dark theme throughout
- Rounded corners (`rounded-3xl`, `rounded-2xl`, `rounded-full`)
- Smooth framer-motion animations

**Typography:**
- Fonts: Manrope, Inter (sans-serif)
- Style: Bold, professional, modern

### Copy Rules (Non-Negotiable)

1. **NEVER say "AI"** in customer-facing copy. Use: autonomous, intelligent, adaptive, receptionist, system, platform, Taylor.
2. **No em dashes.** Use periods, commas, or restructure. Every time.
3. **No buzzwords or superlatives.** If it sounds like a pitch deck, rewrite it.
4. **Short sentences.** If a sentence needs a second comma, split it into two.
5. **Loss aversion over gain framing.** "Every missed call is a deal that walked" > "Answer more calls."
6. **Grounded confidence.** State facts. Show numbers. No hype.
7. **Discovery-based.** Let the prospect arrive at the conclusion. Don't push.

### Language Substitutions (Always)

| Never Say | Always Say |
|-----------|-----------|
| AI-powered / AI agent / AI assistant | Autonomous / Intelligent receptionist / Taylor |
| price / cost | investment |
| get started / sign up | when we get you set up / lock in your spot |
| missed calls | calls that went somewhere else / calls that never left a trace |
| our product | the support / what we built for you |
| just following up | I had a few ideas I wanted to share |
| Processed / Serviced | Handled / Answered |
| End user | Caller |
| Portal / Interface | Dashboard |

### Dashboard UI Copy

- Empty state: "No calls yet. Once Taylor starts answering, every call will show up here."
- Live call: "1 call happening right now" (not "1 active session")
- Stats: "Calls Handled" not "Total Calls Processed"
- Error: "Something went wrong loading your calls. We're on it."
- Sentiment: Positive / Neutral / Frustrated (not Negative)

**RULE:** Always check existing components for brand consistency before creating new designs.

<!-- MEMORY:START -->
# claude-memory

_Last updated: 2026-02-21 | Business Hours Classification, Analytics Overhaul, Multi-Location, Team Invites_

## Current Phase: PHASE 2 (Product Launch) → Auto-Provisioning LIVE
- **Phase 2** = Launch product WITH auto-provisioning via n8n workflows
- **Phase 3** = Polish, admin panel, advanced features
- Onboarding completion auto-triggers: KB creation (WF-013) → Agent + LLM + Phone provisioning (WF-012)
- Phone number creation currently **MOCKED for testing** (see WF-012 section below)

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
- **Create Phone Number node**: Currently **MOCKED** (Code node returning fake `(000) 000-0000`). For production, restore to httpRequest calling `https://api.retellai.com/create-phone-number`. Reference execution `150825` for original config.
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
- **Edge Functions**: `generate-activation-key`, `handle-signup`, `invite-team-member`, `provision-retell-agent`, `send-password-reset`, `accept-invite`, `confirm-activation-user`
- **Resend API**: `re_g5AKsLxZ_7WMEQ1recoRE7ErdQkUFyYkM`
- **Sender**: `hello@titlevoice.ai`

## Onboarding Flow
- 7-step multi-step form at `/onboarding`
- Steps: Company Basics, Business Hours, Team Directory, Call Handling, Compliance, Phone Setup, Optional Details
- Data stored in: `onboarding_submissions`, `onboarding_team_members`, `onboarding_faqs`
- Completion handler at `src/pages/Onboarding.jsx:87-149`:
  1. Marks onboarding complete + updates tenant
  2. Creates location in Supabase from onboarding data (or reuses existing)
  3. Fire-and-forget: calls `provisionRetellAgent()` with onboardingId, tenantId, locationId
  4. WF-013 (KB) is triggered earlier during Company Basics step when website_url is provided
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

## Test Data
- Test tenant ID: `e3294bf0-9252-4313-bb78-8c25676dde58`
- Active tenant (nafiurrahman52): `1c5c0fd8-e2b4-4329-80be-821152cafd2f` (Rahman Niloy Title)
- Active location: `eaab0860-bbbd-4688-8d43-a19b0a55d807`
- 40 real call records in `calls` table (imported from Airtable, Nov 2025 – Feb 2026)
- Dev server: `http://localhost:3001/`

## DB Table Audit (Feb 19)
- **19 tables actively used** in frontend code
- **3 tables dropped**: `usage_daily`, `usage_monthly` (replaced by live queries from `calls`)
- **1 table dead but kept**: `config_change_requests` (potential Phase 3)
- **5 tables unused in frontend but needed**: `api_keys`, `webhooks`, `ai_insights` (future features), `processed_webhook_events`, `reconciliation_log` (server-side Edge Functions)
- **1 table borderline**: `onboarding_uploads` (table exists, no upload UI built)

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

## Current DB State (Feb 21)
- **2,012 total calls** in `calls` table (1,024 after-hours / 988 business-hours)
- **Pinnacle Title location** `52c9e982-c955-416f-ae1a-64c0c7c19922` — business hours set Mon–Fri 9–5
- **Active location** (nafiurrahman52): `eaab0860-bbbd-4688-8d43-a19b0a55d807`
- Migrations executed: 001–017, 022–025

## Production Go-Live Checklist
- [ ] Restore "Create Phone Number" node in WF-012 from mock Code node back to httpRequest (`POST https://api.retellai.com/create-phone-number`)
- [ ] Deactivate/reactivate WF-012 after restoring
- [ ] Verify KB pages are all indexed in Retell dashboard after onboarding
- [ ] Test end-to-end with a real phone number purchase
- [ ] Move Retell API key to server-side only (Supabase secret or Edge Function)

<!-- MEMORY:END -->

---

## 🎨 BRAND TONE GUIDELINES (CRITICAL - ALWAYS FOLLOW)

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

**Voice:**
- Professional yet approachable
- Title industry-specific
- Clear, direct value propositions
- Focus on efficiency & automation

**RULE:** Always check existing components for brand consistency before creating new designs.

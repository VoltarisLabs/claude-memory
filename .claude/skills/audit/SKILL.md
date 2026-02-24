# Full Project Audit

Run a comprehensive audit of the Title Voice project. Launch 5 parallel sub-agents using the Task tool, then compile results.

## BOUNDARIES (ALL agents must follow)
- DO NOT modify production Supabase admin client or RLS policies
- DO NOT touch n8n production workflows or Retell production agents
- DO NOT modify environment variables or API keys
- **AUDIT ONLY** — produce reports, do NOT make changes unless explicitly told to fix

## Launch these 5 agents simultaneously:

### Agent 1 — Frontend Audit
Scan all React components in `src/pages/` and `src/components/` for:
- Hardcoded/mock data that should come from Supabase
- Broken onClick handlers or dead links
- `console.log` statements left in production code
- Missing error states or loading states
- Incorrect timezone handling (must be EST, not browser-local)

### Agent 2 — Database Audit
Read all Supabase migrations in `supabase/migrations/` and edge functions in `supabase/functions/`. Check for:
- Missing RLS policies
- Unscoped tenant queries (every query MUST filter by tenant_id)
- Unused tables or columns referenced in code but missing from schema
- Schema mismatches between migrations and frontend mappers

### Agent 3 — Auth Flow Audit
Trace the complete flow: signup → verify email → activate → onboarding → dashboard. Identify:
- Points where a user could get stuck or hit a redirect loop
- Missing error handling in auth pages
- Race conditions in protected routes

### Agent 4 — Integration Audit
Check all n8n webhook URLs referenced in `src/lib/n8n.js`, all Stripe price IDs, all Resend email templates. Flag:
- Mismatches between code references and actual configuration
- Hardcoded URLs that should be environment variables
- Dead or unreachable webhook endpoints

### Agent 5 — UI Consistency Audit
Compare all pages against brand guidelines in CLAUDE.md. Flag:
- Non-brand colors or inconsistent card styles
- Mismatched typography (should be Manrope/Inter)
- Missing glass morphism or dark theme violations
- Components that don't match the established design system

## After all agents complete:
1. Compile a single numbered list of all findings grouped by severity: **Critical / High / Medium / Low**
2. Include file paths and line numbers for every finding
3. Present a recommended fix order prioritized by user impact
4. Ask the user which issues to fix before making any changes

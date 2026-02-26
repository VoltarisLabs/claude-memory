# Stripe Renewal Links Setup Guide

## What Was Done (Dev Side)

The renewal payment links have been wired into two places:

1. **Renewal Reminder Emails (WF-004)** - Customers receive emails 7 days and 1 day before their subscription expires. The "Renew Now" button in each email links directly to the correct Stripe payment page based on their plan AND billing cycle (monthly or yearly).

2. **Dashboard Billing Page** - If a customer's subscription lapses (past due or canceled), they see a "Renew Now" banner at the top of their Billing page with a direct link to Stripe. Active customers also see "Renew Now" and "Change Plan" buttons.

3. **Automatic Period Detection** - WF-001 (Stripe Webhook Handler) now detects whether a checkout was monthly or yearly based on the payment amount, and sets the billing period accordingly (30 days for monthly, 365 days for yearly).

---

## What You Need To Do (Stripe Dashboard)

### Step 1: Configure the Monthly Renewal Links (ALREADY PROVIDED)

These two links are already wired in. Verify they are set up as **recurring monthly subscriptions**:

| Plan | Renewal Link | Price |
|------|-------------|-------|
| Professional Monthly | `https://buy.stripe.com/4gMcMY2259LQfARcwg7Vm05` | $1,500/month |
| Enterprise Monthly | `https://buy.stripe.com/00wfZa7mp7DIdsJ3ZK7Vm06` | $3,500/month |

### Step 2: Create Yearly Renewal Links (ACTION NEEDED)

You need to create **2 new payment links** in Stripe for yearly renewals:

| Plan | Price | Billing Period |
|------|-------|---------------|
| Professional Yearly | $14,400/year ($1,200/month equivalent) | Recurring Yearly |
| Enterprise Yearly | $33,600/year ($2,800/month equivalent) | Recurring Yearly |

**How to create each link:**

1. Go to **Payment Links** in the Stripe Dashboard left sidebar
2. Click **+ New** to create a new payment link
3. Configure:
   - **Product**: Create or select the plan (e.g., "Professional Yearly Renewal")
   - **Payment type**: `Recurring` (NOT one-time)
   - **Billing period**: `Yearly`
   - **Amount**: $14,400 for Professional, $33,600 for Enterprise
   - **NO setup fee** (setup fee is only on initial signup)
4. Copy the generated `https://buy.stripe.com/...` URL
5. **Send me the two URLs** and I will wire them into the system

### Step 3: Verify the Initial Signup Links Are One-Time

These are the existing first-time customer links (already in the system). Just confirm they are set to **one-time** with the setup fee included:

| Plan | Initial Signup Link | Price |
|------|-------------------|-------|
| Professional Monthly | `https://buy.stripe.com/14A8wIcGJ7DI74l9k47Vm00` | $1,500 + $5,000 setup |
| Professional Yearly | `https://buy.stripe.com/8x2eV6ayB2jo3S98g07Vm03` | $1,200/mo + $5,000 setup |
| Enterprise Monthly | `https://buy.stripe.com/4gM28kdKN5vA60h53O7Vm01` | $3,500 + $5,000 setup |
| Enterprise Yearly | `https://buy.stripe.com/5kQ14g0Y1e264Wd3ZK7Vm02` | $2,800/mo + $5,000 setup |

### Step 4: Test (Optional but Recommended)

1. Use Stripe **Test Mode** to create a test payment through one of the renewal links
2. Verify it creates a recurring subscription (not a one-time charge)
3. Check that the customer would be auto-charged at the next billing cycle

---

## How The Flow Works

```
First-Time Customer:
  Pricing Page --> Initial Payment Link (one-time, includes $5,000 setup fee)
  --> Stripe creates customer --> handle-signup provisions account
  --> Billing period: 30 days (monthly) or 365 days (yearly)

Returning Customer (Renewal):
  7 days before expiry --> Renewal reminder email with "Renew Now" button
  1 day before expiry --> Urgent reminder email with "Renew Now" button
  Billing page --> "Renew Now" banner (if subscription lapsed)
  --> Renewal Link (recurring, plan-matched, no setup fee)
  --> Monthly: Stripe auto-charges every 30 days
  --> Yearly: Stripe auto-charges every 365 days

If Payment Fails:
  Status --> past_due (3-day grace period)
  After 3 days --> Status --> canceled, agent paused
  Customer renews via link --> agent automatically unpaused
```

---

## All Payment Links Summary

| Type | Plan | Cycle | Link | Amount |
|------|------|-------|------|--------|
| Initial | Professional | Monthly | `buy.stripe.com/...00` | $1,500 + $5,000 setup |
| Initial | Professional | Yearly | `buy.stripe.com/...03` | $14,400 + $5,000 setup |
| Initial | Enterprise | Monthly | `buy.stripe.com/...01` | $3,500 + $5,000 setup |
| Initial | Enterprise | Yearly | `buy.stripe.com/...02` | $33,600 + $5,000 setup |
| Renewal | Professional | Monthly | `buy.stripe.com/...05` | $1,500 recurring |
| Renewal | Enterprise | Monthly | `buy.stripe.com/...06` | $3,500 recurring |
| Renewal | Professional | Yearly | **PENDING** | $14,400 recurring |
| Renewal | Enterprise | Yearly | **PENDING** | $33,600 recurring |

---

## Quick Checklist

- [x] Professional monthly renewal link is set to Recurring Monthly at $1,500
- [x] Enterprise monthly renewal link is set to Recurring Monthly at $3,500
- [ ] **Create Professional yearly renewal link** - Recurring Yearly at $14,400
- [ ] **Create Enterprise yearly renewal link** - Recurring Yearly at $33,600
- [x] Neither monthly renewal link includes the $5,000 setup fee
- [ ] Neither yearly renewal link includes the $5,000 setup fee
- [x] Initial signup links still include the setup fee
- [ ] Send yearly renewal URLs to dev team to wire in
- [ ] Test a renewal link in Stripe Test Mode to confirm it works

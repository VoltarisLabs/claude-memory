# Stripe Renewal Links Setup Guide

## What Was Done (Dev Side)

The renewal payment links have been wired into two places:

1. **Renewal Reminder Emails (WF-004)** - Customers receive emails 7 days and 1 day before their subscription expires. The "Renew Now" button in each email links directly to the correct Stripe payment page based on their plan.

2. **Dashboard Billing Page** - If a customer's subscription lapses (past due or canceled), they see a "Renew Now" banner at the top of their Billing page with a direct link to Stripe.

---

## What You Need To Do (Stripe Dashboard)

### Step 1: Configure the Two Renewal Payment Links

These two links need to be set up as **recurring monthly subscriptions** in Stripe:

| Plan | Renewal Link | Monthly Price |
|------|-------------|---------------|
| Professional | `https://buy.stripe.com/4gMcMY2259LQfARcwg7Vm05` | $1,500/month |
| Enterprise | `https://buy.stripe.com/00wfZa7mp7DIdsJ3ZK7Vm06` | $3,500/month |

**For each link, verify these settings in Stripe Dashboard:**

1. Go to **Payment Links** in the left sidebar
2. Find each link above (or create them if they don't exist yet)
3. Make sure each link is configured as:
   - **Payment type**: `Recurring` (NOT one-time)
   - **Billing period**: `Monthly`
   - **Amount**: $1,500 for Professional, $3,500 for Enterprise
   - **No setup fee** (the $5,000 setup fee is only on the initial signup links)

### Step 2: Verify the Initial Signup Links Are One-Time

These are the existing first-time customer links (already in the system). Just confirm they are set to **one-time** with the setup fee included:

| Plan | Initial Signup Link | Price |
|------|-------------------|-------|
| Professional Monthly | `https://buy.stripe.com/14A8wIcGJ7DI74l9k47Vm00` | $1,500 + $5,000 setup |
| Professional Yearly | `https://buy.stripe.com/8x2eV6ayB2jo3S98g07Vm03` | $1,200/mo + $5,000 setup |
| Enterprise Monthly | `https://buy.stripe.com/4gM28kdKN5vA60h53O7Vm01` | $3,500 + $5,000 setup |
| Enterprise Yearly | `https://buy.stripe.com/5kQ14g0Y1e264Wd3ZK7Vm02` | $2,800/mo + $5,000 setup |

### Step 3: Test (Optional but Recommended)

1. Use Stripe **Test Mode** to create a test payment through one of the renewal links
2. Verify it creates a recurring subscription (not a one-time charge)
3. Check that the customer would be auto-charged next month

---

## How The Flow Works

```
First-Time Customer:
  Pricing Page --> Initial Payment Link (one-time, includes $5,000 setup fee)
  --> Stripe creates customer --> handle-signup provisions account

Returning Customer (Monthly Renewal):
  7 days before expiry --> Renewal reminder email with "Renew Now" button
  1 day before expiry --> Urgent reminder email with "Renew Now" button
  Billing page --> "Renew Now" banner (if subscription lapsed)
  --> Renewal Link (recurring, $1,500 or $3,500 only, no setup fee)
  --> Stripe auto-charges every month going forward
```

---

## Quick Checklist

- [ ] Professional renewal link is set to Recurring Monthly at $1,500
- [ ] Enterprise renewal link is set to Recurring Monthly at $3,500
- [ ] Neither renewal link includes the $5,000 setup fee
- [ ] Initial signup links still include the setup fee
- [ ] Test a renewal link in Stripe Test Mode to confirm it works

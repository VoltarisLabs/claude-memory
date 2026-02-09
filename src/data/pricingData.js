import { Bell, Crown } from 'lucide-react'

export const prices = {
  monthly: { professional: 1500, enterprise: 3500 },
  yearly: { professional: 1200, enterprise: 2800 }
}

export const pricingPlans = [
  {
    name: 'Professional',
    monthlyPrice: prices.monthly.professional,
    period: '/ Month',
    description: 'Ideal for growing title companies.',
    badge: 'Most Popular',
    icon: Bell,
    projects: '2,000 Included Minutes',
    setupFee: 5000,
    contractTerms: {
      pilot: '3-month pilot period',
      standard: '12-month term after pilot',
      cancellation: '30 days written notice required',
      moneyBackGuarantee: '30-day money-back guarantee during pilot'
    },
    fairUsePolicy: true,
    overageRate: 0.27,
    features: [
      'Business Hours AI Title Receptionist',
      'Deal status inquiries',
      'Appointment scheduling',
      'Call routing to escrow officers',
      'Escalation to live agent (optional)',
      'Call logging & compliance transcripts',
      'Call transcripts & summaries',
      'Custom script & workflows',
      'Advanced CRM integrations',
      'Email + phone support'
    ],
    highlight: true
  },
  {
    name: 'Enterprise',
    monthlyPrice: prices.monthly.enterprise,
    period: '/ Month',
    description: 'Advanced solutions for large title companies and enterprises.',
    badge: 'Recommended',
    icon: Crown,
    projects: '3,500 Included Minutes',
    setupFee: 5000,
    contractTerms: {
      pilot: '3-month pilot period',
      standard: '12-month term after pilot',
      cancellation: '30 days written notice required',
      moneyBackGuarantee: '30-day money-back guarantee during pilot'
    },
    fairUsePolicy: true,
    overageRate: 0.21,
    features: [
      'Everything in Professional',
      '24/7 AI Title Receptionist',
      'Dedicated account manager',
      'Custom integrations',
      'Multilingual support (English + Spanish)',
      'Advanced analytics & reporting',
      'Secure storage + redaction',
      'Volume discounts available',
      'Priority 24/7 support'
    ],
    highlight: false
  }
]

export const testimonials = [
  {
    name: 'Operations Director',
    role: 'Regional title agency, Southeast',
    text: 'Title Voice reduced our missed calls significantly and saved us thousands per month in staffing costs. The AI handles complex inquiries with ease.',
    metric: 'Fewer missed calls',
    rating: 5
  },
  {
    name: 'Operations Manager',
    role: 'Title agency, Florida',
    text: 'The scheduling automation alone saved our team hours every week. Clients love the instant responses and 24/7 availability.',
    metric: 'Hours saved weekly',
    rating: 5
  },
  {
    name: 'VP of Operations',
    role: 'Multi-state title company',
    text: 'We saw ROI within the first month. The warm transfer feature ensures complex issues get to the right person with full context.',
    metric: 'ROI in 30 days',
    rating: 5
  },
  {
    name: 'Agency Owner',
    role: 'Independent title company, Texas',
    text: 'As a small shop, Title Voice gave us enterprise-level phone coverage. Our clients can\'t tell the difference from a human receptionist.',
    metric: '4.8/5 client rating',
    rating: 5
  },
  {
    name: 'Director of Operations',
    role: 'Title agency, Northeast',
    text: 'The CRM integration is seamless. Every call is logged, every deal status is updated in real-time. It\'s transformed our operations.',
    metric: '100% call logging',
    rating: 5
  },
  {
    name: 'Managing Partner',
    role: 'Multi-location title group, West Coast',
    text: 'We expanded to new locations without hiring additional reception staff. Title Voice scales effortlessly with our growth.',
    metric: 'Scaled without new hires',
    rating: 5
  }
]

export const faqs = [
  {
    question: 'How does the pricing work?',
    answer: 'Our pricing is based on your plan tier. Professional starts at $1,500/month with 2,000 included minutes. Enterprise starts at $3,500/month with 3,500 included minutes. There is a one-time $5,000 setup fee for onboarding and configuration.',
    link: { text: 'Learn more about onboarding →', href: '/onboarding' }
  },
  {
    question: 'What happens if I exceed my included minutes?',
    answer: 'Overage minutes are billed at $0.27/min for Professional and $0.21/min for Enterprise. We\'ll notify you when you\'re approaching your limit so there are no surprises.'
  },
  {
    question: 'Is there a contract commitment?',
    answer: 'We offer a 3-month pilot period so you can evaluate the service. After the pilot, contracts auto-convert to a 12-month term. We also offer a 30-day money-back guarantee during the pilot.'
  },
  {
    question: 'Do you offer custom pricing?',
    answer: 'Yes, we offer custom pricing for large enterprises with specific requirements. Contact our sales team for a personalized quote.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Either party may cancel with 30 days written notice. During the 3-month pilot, we offer a 30-day money-back guarantee (subscription fees only; setup fee is non-refundable). After converting to a 12-month term, standard cancellation notice applies.'
  },
  {
    question: 'What is your fair use policy?',
    answer: 'Our plans include generous minute allocations for normal title company operations. Fair use ensures quality service for all clients. Accounts with unusual patterns (sustained spam calls, bot traffic, or misuse) may require plan adjustment. Normal business fluctuations are always covered.'
  }
]

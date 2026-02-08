import { Bell, Crown } from 'lucide-react'

export const prices = {
  monthly: { professional: 1500, enterprise: 3500 },
  yearly: { professional: 1200, enterprise: 2800 }
}

// Calculate yearly savings
export const calculateSavings = (monthlyPrice, yearlyPrice) => {
  return (monthlyPrice * 12) - (yearlyPrice * 12)
}

export const pricingPlans = [
  {
    name: 'Professional',
    monthlyPrice: prices.monthly.professional,
    yearlyPrice: prices.yearly.professional,
    period: '/ Month',
    description: 'Ideal for growing title companies with multiple locations.',
    badge: 'Most Popular',
    icon: Bell,
    projects: '1,500 Free Minutes',
    revisions: 'Multi-location',
    features: [
      'Business Hours AI Title Receptionist',
      'Deal status inquiries',
      'Appointment scheduling',
      'Multi-location team management',
      'Escalation to live agent (optional)',
      'Multilingual intake support',
      'Custom script & workflows',
      'Advanced CRM integrations',
      'Priority support (email + phone)',
      'Volume discounts available'
    ],
    highlight: true
  },
  {
    name: 'Enterprise',
    monthlyPrice: prices.monthly.enterprise,
    yearlyPrice: prices.yearly.enterprise,
    period: '/ Month',
    description: 'Advanced solutions for large title companies and enterprises.',
    badge: 'Recommended',
    icon: Crown,
    projects: '3,500 Free Minutes',
    revisions: 'Unlimited Locations',
    features: [
      'Everything in Professional',
      '24/7 AI Title Receptionist',
      'Dedicated account manager',
      'Custom integrations',
      'White-label solution',
      'Advanced analytics & reporting',
      'Secure storage + redaction',
      '24/7 dedicated support'
    ],
    highlight: false
  }
]

export const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, Premier Title Group',
    text: 'Title Voice reduced our missed calls by 95% and saved us over $4,000/month in staffing costs. The AI handles complex inquiries with ease.',
    metric: '95% fewer missed calls',
    rating: 5
  },
  {
    name: 'James Rodriguez',
    role: 'Operations Manager, Apex Title',
    text: 'The scheduling automation alone saved our team 20 hours per week. Clients love the instant responses and 24/7 availability.',
    metric: '20 hrs saved weekly',
    rating: 5
  },
  {
    name: 'Emily Chen',
    role: 'VP Operations, National Title Co',
    text: 'We saw ROI within the first month. The warm transfer feature ensures complex issues get to the right person with full context.',
    metric: 'ROI in 30 days',
    rating: 5
  },
  {
    name: 'Michael Davis',
    role: 'Owner, Davis Title Services',
    text: 'As a small shop, Title Voice gave us enterprise-level phone coverage. Our clients can\'t tell the difference from a human receptionist.',
    metric: '4.9/5 client rating',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    role: 'Director, Summit Title Agency',
    text: 'The CRM integration is seamless. Every call is logged, every deal status is updated in real-time. It\'s transformed our operations.',
    metric: '100% call logging',
    rating: 5
  },
  {
    name: 'Robert Kim',
    role: 'Managing Partner, Pacific Title',
    text: 'We expanded to 3 new locations without hiring additional reception staff. Title Voice scales effortlessly with our growth.',
    metric: '3x growth, 0 new hires',
    rating: 5
  }
]

export const faqs = [
  {
    question: 'How does the pricing work?',
    answer: 'Our pricing is based on the number of voice agents and features you need. You can start with our Professional plan and upgrade as your business grows.'
  },
  {
    question: 'Can I change my plan anytime?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we\'ll prorate any differences.'
  },
  {
    question: 'What happens if I exceed my limits?',
    answer: 'We\'ll notify you when you\'re approaching your limits and help you upgrade to a higher plan. No service interruptions.'
  },
  {
    question: 'Do you offer custom pricing?',
    answer: 'Yes, we offer custom pricing for large enterprises with specific requirements. Contact our sales team for a personalized quote.'
  }
]

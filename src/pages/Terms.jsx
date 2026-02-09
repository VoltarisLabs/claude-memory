import React from 'react'
import { motion } from 'framer-motion'
import SparklesBackground from '../components/Sparkles'
import SEO from '../components/SEO'

const Terms = () => {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing or using Title Voice services, you agree to be bound by these Terms of Service and all applicable laws and regulations.',
        'If you do not agree with any of these terms, you are prohibited from using or accessing our services.',
        'We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the modified terms.',
      ],
    },
    {
      title: '2. Description of Service',
      content: [
        'Title Voice provides AI-powered voice agent services designed specifically for title companies, including automated call handling, scheduling, deal status inquiries, and integration with title production software.',
        'Our services are provided on a subscription basis with various plan tiers as described on our Pricing page.',
        'We guarantee 99% uptime during covered service hours (business hours for Professional plan, 24/7 for Enterprise plan). Scheduled maintenance will be communicated in advance.',
      ],
    },
    {
      title: '3. Account Responsibilities',
      content: [
        'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
        'You must provide accurate, current, and complete information during registration and keep your account information updated.',
        'You must immediately notify Title Voice of any unauthorized use of your account or any other breach of security.',
        'You are responsible for ensuring that your use of the service complies with all applicable laws and industry regulations.',
      ],
    },
    {
      title: '4. Acceptable Use',
      content: [
        'You may not use our services for any unlawful purpose or in violation of any applicable regulations.',
        'You may not attempt to reverse engineer, decompile, or disassemble any part of our AI technology or service infrastructure.',
        'You may not use our service to harass, abuse, or harm others, or to transmit any malicious code or harmful content.',
        'You may not resell, sublicense, or redistribute our services without prior written consent.',
      ],
    },
    {
      title: '5. Intellectual Property',
      content: [
        'All content, features, and functionality of Title Voice services are owned by Title Voice and are protected by copyright, trademark, and other intellectual property laws.',
        'Your data remains your property. We claim no ownership rights over the content you provide or data generated through your use of our services.',
        'You grant Title Voice a limited license to use your data solely for the purpose of providing and improving our services.',
      ],
    },
    {
      title: '6. Payment & Billing',
      content: [
        'Subscription fees are billed in advance on a monthly or annual basis as selected during signup. Payment is due upon receipt via ACH or credit card on file.',
        'All fees are non-refundable except as required by law or as explicitly stated in our refund policy (see Section 8).',
        'Late payments: If payment is 10 days overdue, service will be paused. If payment is 30 days overdue, service will be terminated and the account closed.',
        'Late payment interest: Overdue balances accrue interest at 2% per month (24% APR) until paid in full.',
        'Price increases: After 6 months of service, we reserve the right to increase pricing by a maximum of 10% per 6-month period, with 30 days advance written notice.',
      ],
    },
    {
      title: '7. Limitation of Liability',
      content: [
        'Title Voice shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.',
        'Our total liability shall not exceed the amount paid by you to Title Voice during the twelve (12) months preceding the event giving rise to the claim.',
        'We are not liable for any loss or damage resulting from unauthorized access to your account due to your failure to maintain security.',
      ],
    },
    {
      title: '8. Contract Terms & Termination',
      content: [
        'All subscriptions begin with a 3-month pilot period to evaluate service fit.',
        'After successful pilot completion, contracts automatically convert to a 12-month standard term. Contracts auto-renew for 12-month periods thereafter.',
        'Either party may terminate with 30 days written notice during any contract period. Notice must be in writing and acknowledged by the Provider.',
        'Early termination: If Client terminates before the end of a contract term, Client is responsible for payment of ALL remaining monthly fees for that term.',
        'Service pause: Once service is activated, billing continues regardless of usage. Service pauses or temporary suspensions are not permitted.',
        'A one-time setup fee of $5,000 applies to all new accounts. This fee is non-refundable after setup begins.',
        'We offer a 30-day money-back guarantee during the pilot period. If unsatisfied within the first 30 days, we will refund monthly subscription fees only (setup fee is non-refundable).',
        'Title Voice may suspend or terminate your account immediately for material violation of these terms.',
        'Upon termination, your right to use the service ceases immediately. We retain data for 30 days post-termination, after which all data is permanently deleted.',
        'Data export after termination: Clients may request a data export during the 30-day retention period. After the 30-day period, data export requests incur a $250 fee.',
      ],
    },
    {
      title: '8a. Fair Use Policy',
      content: [
        'Our pricing is designed for normal title company operations. Fair use ensures service quality for all customers.',
        'Accounts with excessive usage may be flagged for review, including: sustained spam calls exceeding 10x average volume, bot or automated traffic unrelated to legitimate business, intentional misuse or system abuse.',
        'If excessive usage is detected, we will notify you to resolve the issue. In cases of continued abuse, we reserve the right to adjust your plan, apply additional fees, or terminate service.',
        'Normal business fluctuations (seasonal peaks, marketing campaigns, office growth) are expected and covered under fair use.',
      ],
    },
    {
      title: '10. Governing Law',
      content: [
        'These Terms shall be governed by and construed in accordance with the laws of the State of Ohio, without regard to its conflict of law provisions.',
        'Any disputes arising under these terms shall be resolved through binding arbitration in Akron, Ohio.',
      ],
    },
    {
      title: '11. Non-Solicitation',
      content: [
        'During the term of this agreement and for a period of twelve (12) months following termination, neither party shall directly or indirectly solicit, recruit, or hire any employee, contractor, or agent of the other party who was involved in the performance of services under this agreement.',
        'This restriction applies to all personnel involved in the delivery, support, or management of Title Voice services.',
      ],
    },
    {
      title: '12. Fulfillment Timeline',
      content: [
        'Upon receipt of payment and completion of onboarding information, Title Voice will have your AI voice agent live within two (2) weeks.',
        'Client is responsible for providing all necessary onboarding information, including call scripts, business hours, escalation contacts, and CRM integration credentials, in a timely manner.',
        'Delays in providing onboarding information may extend the fulfillment timeline accordingly.',
      ],
    },
    {
      title: '13. Intellectual Property & Ownership',
      content: [
        'All AI configurations, prompts, workflows, and system designs developed by Title Voice remain the exclusive intellectual property of Title Voice.',
        'All call data, transcripts, recordings, and client-specific information generated through the use of Title Voice services remain the property of the Client.',
        'Client may not replicate, reverse-engineer, or redistribute any Title Voice AI configurations, prompts, or proprietary workflows without prior written consent.',
      ],
    },
    {
      title: '14. Contact',
      content: [
        'For questions about these Terms of Service, please contact us at:',
        'Email: support@titlevoice.ai',
        'Address: Akron, OH',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SEO
        title="Terms of Service"
        description="Title Voice terms of service - Read our terms and conditions for using our AI voice agent platform."
        canonical="/terms"
      />

      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesBackground particleColor="#38bdf8" particleDensity={30} minSize={1} maxSize={2} speed={0.5} />
      </div>

      {/* Compact Hero */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        {/* Sphere Motion GIF — same as landing page */}
        <div className="absolute inset-0">
          <video src="/spheremotion.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
              Terms of Service
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60"
          >
            Last updated: January 15, 2025
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-24 px-4">
        <div className="container mx-auto max-w-full lg:max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 sm:p-8"
          >
            <p className="text-white/60 mb-8 leading-relaxed">
              Please read these Terms of Service carefully before using the Title Voice platform.
              These terms govern your use of our AI voice agent services for title companies.
            </p>

            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {section.title}
                  </h2>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="text-white/60 leading-relaxed pl-4 border-l-2 border-[#0080FF]/20">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Terms

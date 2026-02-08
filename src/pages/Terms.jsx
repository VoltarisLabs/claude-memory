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
        'We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance.',
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
        'Subscription fees are billed in advance on a monthly or annual basis as selected during signup.',
        'All fees are non-refundable except as required by law or as explicitly stated in our refund policy.',
        'We reserve the right to change pricing with 30 days notice. Existing subscriptions will be honored until the end of the current billing period.',
        'Failure to pay may result in suspension or termination of your account.',
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
      title: '8. Termination',
      content: [
        'Either party may terminate the agreement at any time with 30 days written notice.',
        'Title Voice may suspend or terminate your account immediately for violation of these terms.',
        'Upon termination, your right to use the service ceases immediately. We will retain your data for 90 days to allow for data export.',
      ],
    },
    {
      title: '9. Governing Law',
      content: [
        'These Terms shall be governed by and construed in accordance with the laws of the State of Ohio, without regard to its conflict of law provisions.',
        'Any disputes arising under these terms shall be resolved through binding arbitration in Akron, Ohio.',
      ],
    },
    {
      title: '10. Contact',
      content: [
        'For questions about these Terms of Service, please contact us at:',
        'Email: support@titlevoice.ai',
        'Address: Akron, OH',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
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
          <img src="/spheremotion.gif" alt="Animated sphere motion background" className="w-full h-full object-cover opacity-60 scale-75" />
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
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 sm:p-10 lg:p-12"
          >
            <p className="text-white/60 mb-10 leading-relaxed">
              Please read these Terms of Service carefully before using the Title Voice platform.
              These terms govern your use of our AI voice agent services for title companies.
            </p>

            <div className="space-y-10">
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

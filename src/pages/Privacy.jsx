import React from 'react'
import { motion } from 'framer-motion'
import SparklesBackground from '../components/Sparkles'
import SEO from '../components/SEO'

const Privacy = () => {
  const sections = [
    {
      title: '1. Information We Collect',
      content: [
        'Personal Information: When you create an account, request a demo, or contact us, we may collect your name, email address, phone number, company name, and job title.',
        'Usage Data: We automatically collect information about how you interact with our services, including call logs, usage patterns, feature utilization, and system performance metrics.',
        'Technical Data: We collect device information, IP addresses, browser type, operating system, and other technical details to ensure optimal service delivery.',
        'Integration Data: When you connect Title Voice with third-party systems (Qualia, SoftPro, ResWare, RamQuest), we access and process data as necessary to provide our services.',
      ],
    },
    {
      title: '2. How We Use Your Information',
      content: [
        'To provide, maintain, and improve our AI voice agent services for title companies.',
        'To process and manage your account, including billing and support requests.',
        'To train and improve our AI models while maintaining data privacy and security.',
        'To send you service updates, product announcements, and marketing communications (with your consent).',
        'To comply with legal obligations and protect our rights and the rights of our users.',
      ],
    },
    {
      title: '3. Cookies & Tracking',
      content: [
        'We use essential cookies to maintain your session and preferences.',
        'Analytics cookies help us understand how visitors interact with our website so we can improve the user experience.',
        'You can control cookie preferences through your browser settings. Disabling certain cookies may affect service functionality.',
      ],
    },
    {
      title: '4. Third-Party Services',
      content: [
        'We integrate with title production software providers (Qualia, SoftPro, ResWare, RamQuest) to deliver our core services. Data shared with these platforms is governed by their respective privacy policies.',
        'We use industry-standard cloud infrastructure providers that maintain SOC 2 compliance for data hosting and processing.',
        'We do not sell your personal information to third parties.',
      ],
    },
    {
      title: '5. Data Security',
      content: [
        'We implement industry-standard security measures including encryption in transit (TLS 1.3) and at rest (AES-256).',
        'Access to customer data is restricted to authorized personnel on a need-to-know basis.',
        'We conduct regular security audits and vulnerability assessments.',
        'All voice data is processed securely and can be configured for automatic deletion based on your retention preferences.',
      ],
    },
    {
      title: '6. Your Rights',
      content: [
        'Access: You can request a copy of the personal data we hold about you.',
        'Correction: You can request corrections to inaccurate or incomplete data.',
        'Deletion: You can request deletion of your personal data, subject to legal retention requirements.',
        'Portability: You can request your data in a structured, machine-readable format.',
        'Opt-out: You can opt out of marketing communications at any time.',
      ],
    },
    {
      title: '7. Data Retention',
      content: [
        'We retain your personal data for as long as your account is active or as needed to provide services.',
        'Call recordings and transcripts are retained according to your configured retention policy.',
        'After account termination, we retain data for up to 90 days before secure deletion, unless longer retention is required by law.',
      ],
    },
    {
      title: '8. Contact Us',
      content: [
        'If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us at:',
        'Email: support@titlevoice.ai',
        'Address: Akron, OH',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      <SEO
        title="Privacy Policy"
        description="Title Voice privacy policy - Learn how we collect, use, and protect your data."
        canonical="/privacy"
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
              Privacy Policy
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
              At Title Voice, we are committed to protecting your privacy and ensuring the security of your data.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
              use our AI voice agent services.
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

export default Privacy

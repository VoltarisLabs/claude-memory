import React from 'react'
import { motion } from 'framer-motion'
import { Database, Shield, Zap, Users, CheckCircle, ArrowRight, Calendar } from 'lucide-react'
import Sparkles from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import BorderBeam from '../components/BorderBeam'
import { PrimaryButton, OutlineButton } from '../components/Buttons'
import { WordReveal, FadeUpText } from '../components/TextAnimations'
import SEO from '../components/SEO'

const TitleSoftware = () => {
  const softwareFeatures = [
    {
      icon: Database,
      title: "ResWare Integration",
      description: "Seamless integration with ResWare title production software for real-time data sync and workflow automation.",
      features: ["Real-time data sync", "Customer profile access", "Closing status updates", "Order management"]
    },
    {
      icon: Zap,
      title: "RamQuest Support",
      description: "Full compatibility with RamQuest title software including order processing and document management.",
      features: ["Order processing", "Document handling", "Status tracking", "Workflow automation"]
    },
    {
      icon: Users,
      title: "CRM Integration",
      description: "Connect with any CRM system to maintain customer profiles and interaction history.",
      features: ["Customer profiles", "Interaction history", "Lead management", "Follow-up automation"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Bank-level security with full compliance for title industry regulations and data protection.",
      features: ["Data encryption", "Compliance standards", "Secure APIs", "Audit trails"]
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Eliminate manual data entry with automated workflows that sync across all your title software."
    },
    {
      icon: Database,
      title: "Real-time Updates",
      description: "Keep all systems synchronized with real-time updates across ResWare, RamQuest, and CRM systems."
    },
    {
      icon: CheckCircle,
      title: "Reduced Errors",
      description: "Minimize human error with automated data validation and cross-system verification."
    },
    {
      icon: Shield,
      title: "Cost Savings",
      description: "Reduce operational costs by automating routine tasks and improving efficiency."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SEO
        title="Title Software Integration"
        description="Seamlessly integrate Title Voice with ResWare, RamQuest, and all major title production software."
        canonical="/title-software"
      />

      {/* Background Canvas Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Sparkles particleColor="#38bdf8" particleDensity={50} minSize={1} maxSize={2.5} speed={0.8} />
      </div>
      <VoiceWaves />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 lg:py-16">
        <div className="absolute inset-0">
          <video src="/spheremotion.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-[#0080FF] bg-[#0080FF]/20 border border-[#0080FF]/40 rounded-full backdrop-blur-md shadow-lg shadow-[#0080FF]/20 mb-8 hover:bg-[#0080FF]/25 hover:border-[#0080FF]/50 transition-all duration-300"
            >
              <Database className="w-4 h-4 text-[#0080FF]" />
              Software Integration
            </motion.div>

            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                <WordReveal text="Title Company Software Integration" delay={0.3} />
              </h1>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-medium text-white">
                Seamlessly integrate with ResWare, RamQuest & more.
              </h2>
            </div>

            <motion.p
              className="text-xl text-white/80 mb-12 max-w-full md:max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connect Title Voice with all major title production software for unified workflows and automated processes.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
              <PrimaryButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
                Schedule Integration Demo
                <ArrowRight className="w-5 h-5" />
              </PrimaryButton>
              <OutlineButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
                <Calendar className="w-5 h-5" />
                Request Custom Integration
              </OutlineButton>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Software Features */}
      <section className="py-16 lg:py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-full lg:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-[#0080FF] uppercase tracking-[0.15em] mb-4 bg-gradient-to-r from-[#0080FF]/[0.08] to-[#4F1AD6]/[0.08] border border-[#0080FF]/20 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6]" />
              Integrations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Integrates with All Major Title Software
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-full md:max-w-3xl mx-auto">
              Our AI virtual assistant works seamlessly with your existing title company
              software stack, creating a unified workflow experience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {softwareFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlowCard className="h-full rounded-2xl">
                  <div className="relative p-6 bg-[#080808] rounded-2xl border border-white/10 hover:border-[#0080FF]/20 transition-all duration-300 h-full group overflow-hidden">
                    <BorderBeam size={200} duration={8} delay={index * 2} />
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0080FF]/20 transition-colors duration-300">
                        <feature.icon className="w-6 h-6 text-[#0080FF]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-white/60 mb-4 leading-relaxed">
                          {feature.description}
                        </p>
                        <ul className="space-y-2">
                          {feature.features.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-[#0080FF] flex-shrink-0" />
                              <span className="text-white/80 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Benefits Section */}
      <section className="py-16 lg:py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-full lg:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-[#0080FF] uppercase tracking-[0.15em] mb-4 bg-gradient-to-r from-[#0080FF]/[0.08] to-[#4F1AD6]/[0.08] border border-[#0080FF]/20 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6]" />
              Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Why Title Companies Choose Our Integration
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-full md:max-w-3xl mx-auto">
              Experience the benefits of seamless software integration with
              automated workflows and real-time data synchronization.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#0080FF]/30 transition-all duration-500 group text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0080FF]/20 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 text-[#0080FF]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* CTA Section */}
      <section className="py-16 lg:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[800px] h-[120vw] max-h-[800px] bg-[#0080FF]/10 rounded-full blur-[120px] sm:blur-[200px]"
            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-full md:max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Ready to Integrate Your</span>
              <br />
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Title Software?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-14 max-w-full md:max-w-2xl mx-auto leading-relaxed">
              Get started with Title Voice integration for your title company software.
              Our team will handle the technical setup while you focus on your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PrimaryButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
                Schedule Integration Demo
                <ArrowRight className="w-5 h-5" />
              </PrimaryButton>
              <OutlineButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
                <Calendar className="w-5 h-5" />
                Contact Integration Team
              </OutlineButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default TitleSoftware

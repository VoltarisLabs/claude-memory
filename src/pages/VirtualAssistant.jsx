import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Clock, Users, Zap, Shield, Brain, CheckCircle, ArrowRight, Calendar, Database } from 'lucide-react'
import Sparkles from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import BorderBeam from '../components/BorderBeam'
import { PrimaryButton, OutlineButton } from '../components/Buttons'
import { WordReveal, FadeUpText } from '../components/TextAnimations'
import SEO from '../components/SEO'

const VirtualAssistant = () => {
  const features = [
    {
      icon: Phone,
      title: "24/7 Call Handling",
      description: "Never miss a call again. Our AI virtual assistant answers every call with professional service, even after hours and on weekends."
    },
    {
      icon: Clock,
      title: "Instant Response",
      description: "Immediate answers to customer inquiries about closing status, office hours, and property information."
    },
    {
      icon: Users,
      title: "Customer Profile Management",
      description: "Maintains detailed customer profiles with CRM integration for personalized service and better relationships."
    },
    {
      icon: Zap,
      title: "Smart Call Routing",
      description: "Intelligent routing to the right department with context about customer needs and closing status."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Bank-level security with compliance for title industry regulations and data protection standards."
    },
    {
      icon: Brain,
      title: "AI-Powered Intelligence",
      description: "Advanced natural language processing that understands context and provides accurate, helpful responses."
    }
  ]

  const integrations = [
    {
      title: "ResWare Integration",
      description: "Direct sync with ResWare for real-time closing data and customer information.",
      icon: Database
    },
    {
      title: "RamQuest Support",
      description: "Full compatibility with RamQuest title production software and workflows.",
      icon: Zap
    },
    {
      title: "Custom APIs",
      description: "Flexible API integration for any title company software or CRM system.",
      icon: Shield
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      <SEO
        title="AI Virtual Assistant"
        description="AI Virtual Assistant for title companies — 24/7 call handling, smart routing, and seamless software integration."
        canonical="/virtual-assistant"
      />

      {/* Background Canvas Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Sparkles particleColor="#38bdf8" particleDensity={50} minSize={1} maxSize={2.5} speed={0.8} />
      </div>
      <VoiceWaves />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0">
          <img src="/spheremotion.gif" alt="Animated sphere motion background" className="w-full h-full object-cover opacity-60 scale-75" />
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
              <Brain className="w-4 h-4 text-[#0080FF]" />
              AI Virtual Assistant
            </motion.div>

            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-bold text-white">
                <WordReveal text="AI Virtual Assistant for Title Companies" delay={0.3} />
              </h1>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-medium text-white">
                Never miss a call again with 24/7 AI assistance.
              </h2>
            </div>

            <motion.p
              className="text-xl text-white/80 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our title company virtual assistant handles calls 24/7, schedules closings, and manages customer inquiries with AI-powered intelligence.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <PrimaryButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
              Schedule Demo
              <ArrowRight className="w-5 h-5" />
            </PrimaryButton>
            <OutlineButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
              <Calendar className="w-5 h-5" />
              Learn More
            </OutlineButton>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Features Grid */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-[#0080FF] uppercase tracking-[0.15em] mb-4 bg-gradient-to-r from-[#0080FF]/[0.08] to-[#4F1AD6]/[0.08] border border-[#0080FF]/20 rounded-full backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6]" />
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Why Title Companies Choose Our Virtual Assistant
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our AI virtual assistant is specifically designed for title companies,
              integrating seamlessly with your existing workflow and software.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlowCard className="h-full rounded-2xl">
                  <div className="relative p-8 bg-[#080808] rounded-2xl border border-white/10 hover:border-[#0080FF]/20 transition-all duration-300 h-full group overflow-hidden">
                    <BorderBeam size={200} duration={8} delay={index * 2} />
                    <div className="w-14 h-14 rounded-2xl bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center mb-6 group-hover:bg-[#0080FF]/20 transition-colors duration-300">
                      <feature.icon className="w-7 h-7 text-[#0080FF]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Integration Section */}
      <section className="py-24 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
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
                Seamless Integration with Your Title Software
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our virtual assistant integrates with ResWare, RamQuest, and all major
              title company software for a unified workflow experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {integrations.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#0080FF]/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center mb-5 group-hover:bg-[#0080FF]/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-[#0080FF]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* CTA Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0080FF]/10 rounded-full blur-[200px]"
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
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Ready for Your Own</span>
              <br />
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                AI Virtual Assistant?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-14 max-w-2xl mx-auto leading-relaxed">
              See how Title Voice can handle your calls 24/7, schedule closings, and keep your clients informed — all on autopilot.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PrimaryButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
                Schedule Demo
                <ArrowRight className="w-5 h-5" />
              </PrimaryButton>
              <OutlineButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
                <Calendar className="w-5 h-5" />
                Contact Sales
              </OutlineButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default VirtualAssistant

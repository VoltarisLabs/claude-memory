import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Database,
  Shield,
  Zap,
  Check,
  Building2,
  ClipboardList,
  Mail,
  UserCog,
  Settings,
  Rocket,
  Calendar,
  Play
} from 'lucide-react'
import Sparkles from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import BorderBeam from '../components/BorderBeam'
import { PrimaryButton, OutlineButton } from '../components/Buttons'
import EnhancedCTA from '../components/EnhancedCTA'
import SEO from '../components/SEO'

const WorkflowIntegration = () => {
  const [activeStep, setActiveStep] = useState(0)

  const timelineSteps = [
    {
      day: 'Day 0',
      title: 'Payment & Contract',
      description: 'Sign agreement and process setup fee',
      icon: CheckCircle,
      color: 'emerald'
    },
    {
      day: 'Days 1-3',
      title: 'Information Gathering',
      description: 'Share business details, call scripts, CRM access',
      icon: Users,
      color: 'blue'
    },
    {
      day: 'Days 4-10',
      title: 'Configuration & Testing',
      description: 'We configure your AI and run test calls',
      icon: Settings,
      color: 'purple'
    },
    {
      day: 'Days 11-14',
      title: 'Training & Go Live',
      description: 'Team training and full deployment',
      icon: Rocket,
      color: 'amber'
    }
  ]

  const checklist = [
    'Business name and operating hours',
    'Main phone number (forward or port)',
    'Team directory (names, roles, extensions)',
    'CRM system and API credentials',
    'Common caller questions (top 10)',
    'Call routing rules and escalation contacts',
    'Holiday schedule'
  ]

  const integrations = [
    {
      name: 'ResWare',
      description: 'Full integration with ResWare title production software',
      features: ['Real-time data sync', 'Customer profile access', 'Closing status updates'],
      icon: Building2
    },
    {
      name: 'RamQuest',
      description: 'Seamless RamQuest integration for title workflows',
      features: ['Order management', 'Status tracking', 'Document handling'],
      icon: ClipboardList
    },
    {
      name: 'CRM Systems',
      description: 'Connect with any CRM or customer management system',
      features: ['Customer profiles', 'Interaction history', 'Lead management'],
      icon: UserCog
    },
    {
      name: 'Email Systems',
      description: 'Automated email confirmations and notifications',
      features: ['Closing confirmations', 'Status updates', 'Document delivery'],
      icon: Mail
    }
  ]

  const colorMap = {
    emerald: {
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      text: 'text-emerald-400'
    },
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      text: 'text-blue-400'
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      text: 'text-purple-400'
    },
    amber: {
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      text: 'text-amber-400'
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <SEO
        title="Getting Started & Integration"
        description="Get started with Title Voice AI in 2 weeks. Seamless integration with ResWare, RamQuest, and all major title production software."
        canonical="/workflow-integration"
      />
      {/* Background Canvas Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Sparkles particleColor="#38bdf8" particleDensity={60} speed={0.3} />
      </div>
      <VoiceWaves />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-20">
        {/* Spheremotion Background */}
        <div className="absolute inset-0">
          <video src="/spheremotion.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

        {/* Blurred gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0080FF]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4F1AD6]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Glass pill badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0080FF]/20 border border-[#0080FF]/40 backdrop-blur-md shadow-lg shadow-[#0080FF]/20 mb-8 hover:bg-[#0080FF]/25 hover:border-[#0080FF]/50 transition-all duration-300"
            >
              <Rocket className="w-4 h-4 text-[#0080FF]" />
              <span className="text-sm text-[#0080FF] font-semibold">Getting Started</span>
            </motion.div>

            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Setup & Integration for{' '}
                <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                  Title Companies
                </span>
              </h1>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-medium text-white">
                Live in 2 weeks with seamless software integration.
              </h2>
            </div>

            <motion.p
              className="text-xl text-white/80 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Complete onboarding process and integration with ResWare, RamQuest, and all major title production software.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <PrimaryButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
              Schedule Onboarding
              <ArrowRight className="w-5 h-5" />
            </PrimaryButton>
            <OutlineButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
              <Calendar className="w-5 h-5" />
              Get Custom Quote
            </OutlineButton>
          </motion.div>
        </div>
      </section>

      {/* Onboarding Timeline */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                2-Week Onboarding Timeline
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              From contract signing to going live with your AI receptionist
            </p>
          </motion.div>

          <div className="space-y-6">
            {timelineSteps.map((step, index) => {
              const colors = colorMap[step.color]
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlowCard>
                    <div className="p-6 bg-[#080808] rounded-xl border border-white/10 flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg ${colors.bg} border ${colors.border} flex items-center justify-center flex-shrink-0`}>
                        <step.icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs text-white/60 font-mono">{step.day}</span>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                        </div>
                        <p className="text-white/80">{step.description}</p>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-20 px-4 relative z-10 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                What You'll Need
              </span>
            </h2>
            <p className="text-xl text-white/80">
              Prepare these items for a smooth onboarding process
            </p>
          </motion.div>

          <GlowCard>
            <div className="p-6 bg-[#080808] rounded-xl border border-white/10">
              <div className="space-y-3">
                {checklist.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlowCard>
          <p className="text-center text-white/60 mt-6 text-sm flex items-center justify-center gap-1">
            <Clock className="w-4 h-4" />
            Timeline starts after payment and complete information submission
          </p>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Software Integrations
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Connect Title Voice with your existing title company software for unified workflows
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <GlowCard className="h-full rounded-2xl">
                  <div className="group relative p-6 bg-[#080808] rounded-2xl border border-white/10 hover:border-[#0080FF]/40 hover:shadow-[0_8px_30px_rgba(0,128,255,0.08)] transition-all duration-500 h-full flex flex-col overflow-hidden">
                    <BorderBeam
                      size={150}
                      duration={10}
                      delay={index * 2}
                      colorFrom="#0080FF"
                      colorTo="#4F1AD6"
                    />

                    {/* Shimmer sweep on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl overflow-hidden">
                      <div
                        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                        style={{
                          background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.03) 45%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.03) 55%, transparent 60%)',
                        }}
                      />
                    </div>

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0080FF]/[0.03] to-[#4F1AD6]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                    {/* Glass icon box with enhanced glow */}
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center mb-4 group-hover:bg-[#0080FF]/20 group-hover:border-[#0080FF]/40 transition-all duration-300">
                      {React.createElement(integration.icon, { className: "w-6 h-6 text-[#0080FF]" })}
                      {/* Pulsing glow */}
                      <div className="absolute inset-0 bg-[#0080FF]/20 rounded-xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <h3 className="relative z-10 text-xl font-bold text-white mb-2">{integration.name}</h3>
                    <p className="relative z-10 text-white/60 text-sm mb-4 leading-relaxed">{integration.description}</p>

                    <div className="relative z-10 space-y-2 mt-auto">
                      {integration.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center">
                            <Check className="w-3 h-3 text-[#0080FF]" />
                          </div>
                          <span className="text-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <EnhancedCTA
        title="Ready to Get Started?"
        highlightText="Get Started"
        description="Schedule your onboarding call and go live in 2 weeks with seamless software integration"
      />
    </div>
  )
}

export default WorkflowIntegration

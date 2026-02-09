import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Clock, Users, Settings, Rocket } from 'lucide-react'
import SparklesCanvas from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import EnhancedCTA from '../components/EnhancedCTA'
import SEO from '../components/SEO'

const Onboarding = () => {
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
        title="Onboarding"
        description="Get started with Title Voice AI. Live in 2 weeks with full setup support."
        canonical="/onboarding"
      />

      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesCanvas particleColor="#38bdf8" particleDensity={60} speed={0.3} />
      </div>
      <VoiceWaves />

      {/* Hero */}
      <section className="relative min-h-[60vh] px-4 pt-32 pb-20">
        <div className="absolute inset-0">
          <video src="/spheremotion.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent"
          >
            Get Started with Title Voice
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Your AI receptionist will be live in 2 weeks. Here's what to expect.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 lg:py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Onboarding Timeline</h2>
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
      <section className="py-12 lg:py-16 px-4 relative z-10 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">What You'll Need</h2>
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

      {/* CTA */}
      <EnhancedCTA
        title="Ready to Get Started?"
        highlightText="Get Started"
        description="Schedule your onboarding call and go live in 2 weeks"
      />
    </div>
  )
}

export default Onboarding

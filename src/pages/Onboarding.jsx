import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, Clock, Users, Settings, Rocket } from 'lucide-react'
import SparklesCanvas from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import EnhancedCTA from '../components/EnhancedCTA'
import SEO from '../components/SEO'
import BorderBeam from '../components/BorderBeam'
import GradientText from '../components/GradientText'

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState(null)

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

  const getColorHex = (color) => {
    const hexMap = {
      emerald: '#10b981',
      blue: '#3b82f6',
      purple: '#a855f7',
      amber: '#f59e0b'
    }
    return hexMap[color] || '#3b82f6'
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SEO
        title="Onboarding"
        description="Get started with Title Voice AI. Live the same day with full setup support."
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
            className="text-xl text-white/80 max-w-full md:max-w-3xl mx-auto"
          >
            Your AI receptionist goes live the same day. Here's what to expect.
          </motion.p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 lg:py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-full lg:max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <GradientText animate>2-Week Onboarding Timeline</GradientText>
            </h2>
            <p className="text-white/60 text-xl max-w-full md:max-w-3xl mx-auto">
              From contract signing to going live with your AI receptionist
            </p>
          </div>

          {/* Desktop: Horizontal Stepper */}
          <div className="hidden lg:block relative max-w-full md:max-w-5xl mx-auto">
            {/* Background Sparkles */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <SparklesCanvas particleColor="#38bdf8" particleDensity={40} speed={0.3} />
            </div>

            {/* Progress Line - SVG */}
            <svg className="absolute top-[80px] left-0 right-0 h-2" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="33%" stopColor="#3b82f6" />
                  <stop offset="66%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <motion.line
                x1="10%"
                y1="50%"
                x2="90%"
                y2="50%"
                stroke="url(#timelineGradient)"
                strokeWidth="3"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                initial={{ strokeDashoffset: 1000 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </svg>

            {/* Steps */}
            <div className="relative flex justify-between items-start pt-0" style={{ zIndex: 2 }}>
              {timelineSteps.map((step, index) => {
                const colors = colorMap[step.color]
                const StepIcon = step.icon
                const isActive = activeStep === index
                const isHovered = hoveredStep === index

                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center relative"
                    style={{ flex: '1', maxWidth: '200px' }}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Step Circle */}
                    <motion.div
                      className={`relative w-20 h-20 rounded-full ${colors.bg} border-4 ${colors.border} flex items-center justify-center cursor-pointer backdrop-blur-sm`}
                      whileHover={{ scale: 1.15 }}
                      onClick={() => setActiveStep(index)}
                    >
                      {/* BorderBeam on hover/active */}
                      {(isHovered || isActive) && (
                        <BorderBeam
                          size={80}
                          duration={10}
                          colorFrom={getColorHex(step.color)}
                          colorTo={getColorHex(step.color)}
                        />
                      )}

                      {/* Icon */}
                      <StepIcon className={`w-8 h-8 ${colors.text} relative z-10`} />

                      {/* Breathing orb for active step */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full -z-10"
                          style={{ background: getColorHex(step.color) + '20' }}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                    </motion.div>

                    {/* Day Label */}
                    <motion.div className="mt-6 text-center">
                      <span className={`text-sm font-mono ${colors.text} font-semibold`}>
                        {step.day}
                      </span>
                    </motion.div>

                    {/* Expanded Card (shown when active/hovered) */}
                    <AnimatePresence>
                      {(isActive || isHovered) && (
                        <motion.div
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 20, scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                          className="absolute top-32 left-1/2 -translate-x-1/2 w-64 z-50"
                        >
                          <GlowCard glowColor={getColorHex(step.color)}>
                            <div className="p-6 bg-[#080808] rounded-xl border border-white/10">
                              <h3 className="text-xl font-bold text-white mb-3">
                                {step.title}
                              </h3>
                              <p className="text-white/70 leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </GlowCard>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>

            {/* Add spacing for expanded cards */}
            <div className="h-72" />
          </div>

          {/* Mobile: Vertical Cards */}
          <div className="lg:hidden space-y-8">
            {timelineSteps.map((step, index) => {
              const colors = colorMap[step.color]
              const StepIcon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <GlowCard>
                    <div className="p-8 bg-[#080808] rounded-xl border border-white/10">
                      <div className="flex items-start gap-6">
                        {/* Icon Badge */}
                        <div className={`w-16 h-16 rounded-2xl ${colors.bg} border-2 ${colors.border} flex items-center justify-center flex-shrink-0`}>
                          <StepIcon className={`w-8 h-8 ${colors.text}`} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1">
                          {/* Day Label */}
                          <div className="mb-3">
                            <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}>
                              {step.day}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl font-bold text-white mb-3">
                            {step.title}
                          </h3>

                          {/* Description */}
                          <p className="text-white/70 text-lg leading-relaxed">{step.description}</p>
                        </div>
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
        <div className="container mx-auto max-w-full lg:max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What You'll Need</h2>
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
        description="Start your onboarding and go live the same day"
      />
    </div>
  )
}

export default Onboarding

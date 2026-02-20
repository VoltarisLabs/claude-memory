import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
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
  Play,
  ChevronDown,
  Phone
} from 'lucide-react'
import Sparkles from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import BorderBeam from '../components/BorderBeam'
import { PrimaryButton, OutlineButton } from '../components/Buttons'
import EnhancedCTA from '../components/EnhancedCTA'
import SEO from '../components/SEO'
import GradientText from '../components/GradientText'

const WorkflowIntegration = () => {
  const [expandedCategories, setExpandedCategories] = useState({ 0: true })
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState(null)

  const toggleCategory = (index) => {
    setExpandedCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

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

  const checklistCategories = [
    {
      title: 'Business Information',
      icon: Building2,
      items: [
        { text: 'Business name and operating hours', priority: 'required' },
        { text: 'Common caller questions (top 10)', priority: 'required' },
        { text: 'Holiday schedule', priority: 'recommended' }
      ]
    },
    {
      title: 'Technical Requirements',
      icon: Phone,
      items: [
        { text: 'Main phone number (forward or port)', priority: 'required' },
        { text: 'CRM system and API credentials', priority: 'required' }
      ]
    },
    {
      title: 'Team Setup',
      icon: Users,
      items: [
        { text: 'Team directory (names, roles, extensions)', priority: 'required' },
        { text: 'Call routing rules and escalation contacts', priority: 'recommended' }
      ]
    }
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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SEO
        title="Getting Started & Integration"
        description="Get started with Title Voice AI the same day. Seamless integration with ResWare, RamQuest, and all major title production software."
        canonical="/workflow-integration"
      />
      {/* Background Canvas Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Sparkles particleColor="#38bdf8" particleDensity={60} speed={0.3} />
      </div>
      <VoiceWaves />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 py-12 lg:py-20">
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
            <div className="mb-6 mt-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Setup & Integration for{' '}
                <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                  Title Companies
                </span>
              </h1>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-medium text-white">
                Live the same day with seamless software integration.
              </h2>
            </div>

            <motion.p
              className="text-xl text-white/80 mb-12 max-w-full md:max-w-4xl mx-auto"
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
      <section className="py-12 lg:py-20 px-4 relative z-10">
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
          <div className="hidden lg:block relative max-w-full md:max-w-7xl mx-auto px-8">
            {/* Background Sparkles */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <Sparkles particleColor="#38bdf8" particleDensity={40} speed={0.3} />
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
                x1="12%"
                y1="50%"
                x2="88%"
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
            <div className="relative grid grid-cols-4 gap-8 pt-0" style={{ zIndex: 2 }}>
              {timelineSteps.map((step, index) => {
                const colors = colorMap[step.color]
                const StepIcon = step.icon
                const isActive = activeStep === index
                const isHovered = hoveredStep === index

                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center relative"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5 }}
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
                    <motion.div className="mt-6 mb-12 text-center">
                      <span className={`text-sm font-mono ${colors.text} font-bold tracking-wider uppercase`}>
                        {step.day}
                      </span>
                    </motion.div>

                    {/* Always Visible Card - Improved Design */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.7 }}
                      className="w-full h-full"
                    >
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                        className="h-full"
                      >
                        <GlowCard glowColor={isHovered ? getColorHex(step.color) : undefined}>
                          <div className={`p-8 bg-gradient-to-br from-[#0a0a0a] to-[#080808] rounded-2xl border-2 ${
                            isHovered ? colors.border : 'border-white/5'
                          } transition-all duration-300 h-[200px] flex flex-col`}>
                            {/* Title with gradient underline */}
                            <div className="mb-4">
                              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                                {step.title}
                              </h3>
                              <div className={`h-1 w-12 rounded-full ${colors.bg} ${colors.border} border`} />
                            </div>

                            {/* Description */}
                            <p className="text-white/60 leading-relaxed text-base flex-grow">
                              {step.description}
                            </p>
                          </div>
                        </GlowCard>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>

            {/* Add spacing for visible cards */}
            <div className="h-16" />
          </div>

          {/* Mobile: Step Navigator */}
          <div className="lg:hidden w-full mx-auto">
            {/* Step indicator */}
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-sm text-white/50 font-medium">
                Step {activeStep + 1} of {timelineSteps.length}
              </span>
              <div className="flex items-center gap-2">
                {timelineSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeStep
                        ? 'bg-[#0080FF] scale-125'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Single step card with slide animation */}
            <AnimatePresence mode="wait">
              {(() => {
                const step = timelineSteps[activeStep]
                const colors = colorMap[step.color]
                const StepIcon = step.icon
                return (
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.3 }}
                  >
                    <GlowCard>
                      <div className="p-6 bg-[#080808] rounded-xl border border-white/10">
                        <div className="flex items-start gap-5">
                          {/* Icon Badge */}
                          <div className={`w-14 h-14 rounded-2xl ${colors.bg} border-2 ${colors.border} flex items-center justify-center flex-shrink-0`}>
                            <StepIcon className={`w-7 h-7 ${colors.text}`} />
                          </div>

                          {/* Content */}
                          <div className="flex-1 pt-0.5">
                            {/* Day Label */}
                            <div className="mb-2">
                              <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${colors.bg} ${colors.text} border ${colors.border}`}>
                                {step.day}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-2">
                              {step.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/70 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>
                )
              })()}
            </AnimatePresence>

            {/* Next/Previous buttons */}
            <div className="flex items-center justify-between mt-6 gap-4">
              <button
                onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                disabled={activeStep === 0}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white/70 font-medium text-sm transition-all duration-200 hover:bg-white/[0.08] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/[0.05]"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={() => setActiveStep(prev => Math.min(timelineSteps.length - 1, prev + 1))}
                disabled={activeStep === timelineSteps.length - 1}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white font-medium text-sm transition-all duration-200 hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist Section */}
      <section className="py-12 lg:py-20 px-4 relative z-10 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto max-w-full lg:max-w-3xl">
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

          <div className="space-y-4">
            {checklistCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Category header */}
                <button
                  onClick={() => toggleCategory(index)}
                  className={`w-full p-4 bg-[#080808] border border-white/10 hover:border-white/20 flex items-center justify-between transition-colors ${
                    expandedCategories[index] ? 'rounded-t-xl' : 'rounded-xl'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <category.icon className="w-5 h-5 text-[#0080FF]" />
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                    <span className="text-xs text-white/50 bg-white/5 px-2 py-1 rounded-full">
                      {category.items.length}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${
                    expandedCategories[index] ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Category items */}
                <AnimatePresence>
                  {expandedCategories[index] && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden border-x border-b border-white/10 rounded-b-xl bg-[#080808]/50"
                    >
                      <div className="p-4 space-y-3">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                            <span className="flex-1 text-white/80">{item.text}</span>
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item.priority === 'required'
                                ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                                : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                            }`}>
                              {item.priority === 'required' ? 'Required' : 'Recommended'}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-white/60 mt-6 text-sm flex items-center justify-center gap-1">
            <Clock className="w-4 h-4" />
            Timeline starts after payment and complete information submission
          </p>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-12 lg:py-20 px-4 relative z-10">
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
            <p className="text-xl text-white/80 max-w-full md:max-w-3xl mx-auto">
              Connect Title Voice with your existing title company software for unified workflows
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-full lg:max-w-full md:max-w-6xl mx-auto">
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
        description="Start your onboarding and go live the same day with seamless software integration"
      />
    </div>
  )
}

export default WorkflowIntegration

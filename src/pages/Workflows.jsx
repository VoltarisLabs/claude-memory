import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Phone,
  Calendar,
  MessageSquare,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Check,
  BarChart3,
  Bell,
  Mic,
  Target,
  Volume2,
  Headphones,
  Database,
  Settings,
  Bot,
  Brain,
  Cpu,
  Sparkles as SparklesIcon,
  ArrowDown,
  ArrowUp,
  RotateCcw,
  Send,
  UserCheck
} from 'lucide-react'
import { WordReveal } from '../components/TextAnimations'
import Sparkles from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import BorderBeam from '../components/BorderBeam'
import { PrimaryButton, OutlineButton } from '../components/Buttons'
import EnhancedCTA from '../components/EnhancedCTA'

const Workflows = () => {
  const [activeJourneyStep, setActiveJourneyStep] = useState(0)

  const productWorkflowSteps = [
    {
      number: '01',
      title: 'Call Comes In',
      icon: Phone,
      description: 'A customer calls your title company. Title Voice AI picks up instantly — 24/7, no hold times.',
      details: [
        'Instant answer, zero wait time',
        'Works after hours & weekends',
        'Professional branded greeting',
        'Multi-line capacity'
      ]
    },
    {
      number: '02',
      title: 'AI Answers Instantly',
      icon: Brain,
      description: 'The AI identifies the caller, recognizes intent using advanced NLP, and begins a natural conversation.',
      details: [
        'Caller ID recognition',
        'Natural language processing',
        'Intent classification',
        'Conversational AI response'
      ]
    },
    {
      number: '03',
      title: 'Data Sync',
      icon: Database,
      description: 'Real-time data pulled from ResWare, RamQuest, or your CRM — order status, closing dates, documents.',
      details: [
        'ResWare live integration',
        'RamQuest data sync',
        'CRM profile lookup',
        'Real-time order status'
      ]
    },
    {
      number: '04',
      title: 'Smart Action',
      icon: Zap,
      description: 'Based on caller needs, the AI schedules a closing, updates a status, or routes the call to the right person.',
      details: [
        'Closing scheduling',
        'Status updates',
        'Intelligent call routing',
        'Task automation'
      ]
    },
    {
      number: '05',
      title: 'Confirmation',
      icon: Send,
      description: 'Email and SMS confirmations are sent automatically. All systems are updated in real time.',
      details: [
        'Email confirmation sent',
        'SMS notification delivered',
        'CRM records updated',
        'Audit trail logged'
      ]
    },
    {
      number: '06',
      title: 'Team Handoff',
      icon: UserCheck,
      description: 'Complex cases are seamlessly transferred to your team with full context — no caller ever repeats themselves.',
      details: [
        'Full context transfer',
        'Priority-based routing',
        'Warm handoff to agents',
        'Complete call summary'
      ]
    }
  ]

  const workflowTypes = [
    {
      title: 'Inquiry Handling',
      description: 'Automatically handle common questions about deal status, closing dates, and requirements.',
      icon: MessageSquare,
      features: ['Status inquiries', 'Closing date questions', 'Document requests', 'Process explanations']
    },
    {
      title: 'Appointment Scheduling',
      description: 'Intelligent calendar management that coordinates with all parties and handles conflicts.',
      icon: Calendar,
      features: ['Multi-party coordination', 'Conflict resolution', 'Reminder system', 'Rescheduling automation']
    },
    {
      title: 'Status Updates',
      description: 'Proactive communication to keep clients informed throughout the closing process.',
      icon: Bell,
      features: ['Progress notifications', 'Milestone updates', 'Delay alerts', 'Completion confirmations']
    },
    {
      title: 'Document Management',
      description: 'Streamline document collection and verification with AI-powered assistance.',
      icon: Shield,
      features: ['Document requests', 'Verification assistance', 'Compliance checking', 'Digital signatures']
    }
  ]

  const integrations = [
    {
      title: 'ResWare',
      category: 'Title Production',
      description: 'Deep integration with ResWare for real-time order data and status updates.',
      icon: Database,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'RamQuest',
      category: 'Title Software',
      description: 'Seamless sync with RamQuest for comprehensive title workflow automation.',
      icon: Settings,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Calendar Systems',
      category: 'Scheduling',
      description: 'Connect with Google Calendar, Outlook, and more for smart appointment booking.',
      icon: Calendar,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'CRM Platforms',
      category: 'Customer Management',
      description: 'Integrate with major CRM systems to keep all client data synchronized.',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Communication Tools',
      category: 'Messaging',
      description: 'Send notifications via Email, SMS, and popular messaging platforms.',
      icon: MessageSquare,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Analytics Platforms',
      category: 'Reporting',
      description: 'Export data to analytics tools for deep insights and custom reporting.',
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Canvas Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Sparkles particleColor="#38bdf8" particleDensity={60} speed={0.3} />
      </div>
      <VoiceWaves />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        {/* Spheremotion Background */}
        <div className="absolute inset-0">
          <img
            src="/spheremotion.gif"
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-bold text-white font-['Urbanist']">
                <WordReveal text="Intelligent Workflows for Title Companies" />
              </h1>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-medium text-white font-['Urbanist']">
                Streamline operations with AI-powered automation.
              </h2>
            </div>
            <motion.p
              className="text-xl text-white mb-12 max-w-4xl mx-auto font-['Urbanist']"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              See how Title Voice transforms your title company operations with intelligent workflows that handle every aspect of the closing process.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <PrimaryButton size="lg">
              Try Interactive Demo
              <Play className="w-5 h-5" />
            </PrimaryButton>
            <OutlineButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
              <Calendar className="w-5 h-5" />
              Schedule Demo
            </OutlineButton>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Trust Stats Bar */}
      <section className="py-16 px-4 bg-black relative z-10">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '500+', label: 'Title Companies' },
                { value: '1M+', label: 'Calls Handled' },
                { value: '99.9%', label: 'Uptime' },
                { value: '4.9/5', label: 'Rating' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent font-['Urbanist']">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm mt-1 font-['Urbanist']">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* The Complete Journey — Deep-Dive Style */}
      <section className="py-20 px-4 relative z-10">
        {/* Ambient background orbs */}
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-[#0080FF]/8 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#4F1AD6]/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 mb-6"
            >
              <Zap className="w-4 h-4 text-[#0080FF]" />
              <span className="text-sm text-[#0080FF] font-medium font-['Urbanist']">Step-by-Step</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Urbanist']">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                The Complete Journey
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Urbanist']">
              Follow a call from start to finish — every step handled by Title Voice AI
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto items-center">
            {/* Left Panel — Step List */}
            <div className="lg:col-span-2 space-y-2 relative">
              {/* Connecting Line */}
              <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#0080FF]/30 via-[#4F1AD6]/20 to-[#0080FF]/30 hidden lg:block rounded-full" />
              {/* Animated pulse traveling down the line */}
              <motion.div
                className="absolute left-8 top-6 w-0.5 h-12 bg-gradient-to-b from-transparent via-[#0080FF] to-transparent hidden lg:block rounded-full"
                animate={{ y: [0, 300, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                style={{ filter: 'blur(1px)' }}
              />

              {productWorkflowSteps.map((step, index) => {
                const Icon = step.icon
                const isActive = activeJourneyStep === index
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveJourneyStep(index)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className={`w-full flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-300 text-left font-['Urbanist'] relative overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-[#0080FF]/15 to-[#4F1AD6]/10 border border-[#0080FF]/30 text-white shadow-[0_0_20px_rgba(0,128,255,0.1)]'
                        : 'bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/[0.06] hover:border-white/10'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Active indicator bar */}
                    {isActive && (
                      <motion.div
                        layoutId="journeyIndicator"
                        className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-[#0080FF] to-[#4F1AD6]"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}

                    {/* Step number */}
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#0080FF]/20 border border-[#0080FF]/30 text-[#0080FF]'
                        : 'bg-white/[0.06] border border-white/[0.06] text-white/30'
                    }`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-[#0080FF]/20 border border-[#0080FF]/30'
                        : 'bg-white/[0.06] border border-white/[0.06]'
                    }`}>
                      <Icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-[#0080FF]' : 'text-white/40'}`} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-[15px] block">{step.title}</span>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-xs text-white/40 mt-0.5 line-clamp-1"
                        >
                          {step.description.split('.')[0]}
                        </motion.p>
                      )}
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-1.5 h-1.5 rounded-full bg-[#0080FF] shrink-0"
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>

            {/* Right Panel — Active Step Detail */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeJourneyStep}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <GlowCard className="rounded-2xl">
                    <div className="relative bg-[#080808] rounded-2xl border border-white/10 overflow-hidden">
                      <BorderBeam size={180} duration={10} delay={0} colorFrom="#0080FF" colorTo="#4F1AD6" />

                      {/* Gradient header area */}
                      <div className="relative px-8 pt-8 pb-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0080FF]/[0.06] to-[#4F1AD6]/[0.03]" />
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <div className="relative flex items-center gap-5">
                          {/* Animated pulsing icon */}
                          <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0080FF]/20 to-[#4F1AD6]/10 border border-[#0080FF]/25 flex items-center justify-center backdrop-blur-sm">
                              {React.createElement(productWorkflowSteps[activeJourneyStep].icon, { className: "w-8 h-8 text-[#0080FF]" })}
                            </div>
                            <motion.div
                              className="absolute inset-0 rounded-2xl border border-[#0080FF]/30"
                              animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <motion.div
                              className="absolute inset-0 rounded-2xl border border-[#4F1AD6]/20"
                              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white font-['Urbanist'] mb-1">{productWorkflowSteps[activeJourneyStep].title}</h3>
                            <div className="flex items-center gap-3">
                              {/* Step badge */}
                              <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0080FF] bg-[#0080FF]/10 px-2.5 py-0.5 rounded-full border border-[#0080FF]/20 font-['Urbanist']">
                                Step {productWorkflowSteps[activeJourneyStep].number}
                              </span>
                              {/* Status pill */}
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/15">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#00CC88] animate-pulse" />
                                <span className="text-[11px] text-white/50 font-['Urbanist'] font-medium uppercase tracking-wider">Active</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="px-8 pb-6">
                        <p className="text-white/60 leading-relaxed font-['Urbanist']">{productWorkflowSteps[activeJourneyStep].description}</p>
                      </div>

                      {/* Capabilities grid */}
                      <div className="px-8 pb-8">
                        <div className="grid grid-cols-2 gap-3">
                          {productWorkflowSteps[activeJourneyStep].details.map((detail, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.08 }}
                              className="group/cap relative p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-[#0080FF]/[0.06] hover:border-[#0080FF]/20 transition-all duration-300"
                            >
                              <div className="flex items-center gap-2.5">
                                <div className="w-6 h-6 rounded-md bg-[#0080FF]/15 border border-[#0080FF]/20 flex items-center justify-center shrink-0 group-hover/cap:bg-[#0080FF]/25 group-hover/cap:border-[#0080FF]/35 transition-all duration-300">
                                  <Check className="w-3 h-3 text-[#0080FF]" />
                                </div>
                                <span className="text-white/70 text-sm font-['Urbanist'] group-hover/cap:text-white/90 transition-colors duration-300">{detail}</span>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom bar */}
                      <div className="px-8 pb-6">
                        <div className="flex items-center pt-5 border-t border-white/[0.06]">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-[#0080FF]" />
                              <span className="text-xs text-white/40 font-['Urbanist']">AI-Powered</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-[#4F1AD6]" />
                              <span className="text-xs text-white/40 font-['Urbanist']">Real-time</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-[#00CC88]" />
                              <span className="text-xs text-white/40 font-['Urbanist']">24/7</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Workflow Types */}
      <section className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Urbanist']">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Workflow Types
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto font-['Urbanist']">
              Specialized workflows for every aspect of title operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="p-8 rounded-2xl bg-[#080808] border border-white/10 hover:border-[#0080FF]/50 transition-all duration-300"
                style={{
                  boxSizing: 'border-box',
                  width: '100%',
                  flex: 1,
                  height: 'min-content',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  padding: '20px',
                  backgroundColor: '#080808',
                  overflow: 'hidden',
                  alignContent: 'center',
                  flexWrap: 'nowrap',
                  gap: '0px',
                  position: 'relative',
                  borderRadius: '12px'
                }}
                whileHover={{
                  scale: 1.02,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 128, 255, 0.1)"
                }}
              >
                <div className="w-16 h-16 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-[#0080FF]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 font-['Urbanist']">{type.title}</h3>
                <p className="text-white mb-6 leading-relaxed font-['Urbanist']">{type.description}</p>

                <div className="space-y-3">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#0080FF]" />
                      </div>
                      <span className="text-white text-sm font-['Urbanist']">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Integration Ecosystem Section */}
      <section className="py-20 px-4 bg-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#0080FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#4F1AD6]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 mb-6"
            >
              <Database className="w-4 h-4 text-[#0080FF]" />
              <span className="text-sm text-[#0080FF] font-medium font-['Urbanist']">Seamless Integrations</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-['Urbanist']">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Integration Ecosystem
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-['Urbanist']">
              Title Voice connects seamlessly with your existing tools and platforms
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <GlowCard className="h-full rounded-2xl">
                  <div className="relative p-6 bg-[#080808] rounded-2xl border border-white/10 hover:border-[#0080FF]/30 transition-all duration-300 h-full flex flex-col">
                    {/* Icon with gradient background */}
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-xl bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mb-3 relative group-hover:bg-[#0080FF]/20 transition-all duration-300">
                        <integration.icon className="w-8 h-8 text-[#0080FF]" />
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-[#0080FF]/20 rounded-xl blur-md -z-10 group-hover:bg-[#0080FF]/30 transition-all duration-300" />
                      </div>
                      <span className="inline-block text-xs font-semibold text-[#0080FF] bg-[#0080FF]/10 px-2.5 py-1 rounded-full border border-[#0080FF]/20 font-['Urbanist']">
                        {integration.category}
                      </span>
                    </div>

                    {/* Title and description */}
                    <h3 className="text-xl font-bold text-white mb-3 font-['Urbanist']">
                      {integration.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed font-['Urbanist'] flex-grow">
                      {integration.description}
                    </p>

                    {/* Status indicator */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs text-white/50 font-['Urbanist'] font-medium">Available Now</span>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* CTA Section */}
      <EnhancedCTA
        title="Ready to Transform Your Workflows?"
        highlightText="Transform Your Workflows"
        description="See how Title Voice automates your daily operations and keeps your clients informed 24/7."
        primaryButtonText="Book a Demo"
        secondaryButtonText="Schedule a Call"
      />
    </div>
  )
}

export default Workflows

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import {
  Phone,
  Calendar,
  MessageSquare,
  Clock,
  CheckCircle,
  Star,
  ArrowLeft,
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
  Sparkles as SparklesIcon
} from 'lucide-react'
import Sparkles from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import BorderBeam from '../components/BorderBeam'
import AnimatedCounter from '../components/AnimatedCounter'
import { WordReveal } from '../components/TextAnimations'
import { PrimaryButton, OutlineButton } from '../components/Buttons'
import EnhancedCTA from '../components/EnhancedCTA'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'

const Solutions = () => {
  const [activeDeepDive, setActiveDeepDive] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  const solutions = [
    {
      title: 'AI Voice Receptionist',
      description: 'Never miss a call with our 24/7 AI receptionist that handles inquiries, schedules appointments, and provides real-time updates.',
      icon: Phone,
      features: ['24/7 Availability', 'Natural Conversations', 'Call Routing', 'Appointment Scheduling']
    },
    {
      title: 'Deal Status Automation',
      description: 'Automatically track and update deal statuses, send notifications to clients, and maintain real-time visibility into all transactions.',
      icon: BarChart3,
      features: ['Real-time Updates', 'Client Notifications', 'Status Tracking', 'Progress Monitoring']
    },
    {
      title: 'Smart Scheduling',
      description: 'Intelligent calendar management that coordinates with all parties, sends reminders, and handles rescheduling automatically.',
      icon: Calendar,
      features: ['Auto-scheduling', 'Reminder System', 'Conflict Resolution', 'Multi-party Coordination']
    },
    {
      title: 'Warm Transfer System',
      description: 'Seamlessly transfer complex inquiries to the right team member with full context and conversation history.',
      icon: Users,
      features: ['Context Preservation', 'Smart Routing', 'Team Handoffs', 'Escalation Management']
    },
    {
      title: 'CRM Integration',
      description: 'Connect with all major title production software including ResWare, RamQuest, and custom CRM systems.',
      icon: Database,
      features: ['Multi-platform Support', 'Data Synchronization', 'Custom Workflows', 'API Access']
    },
    {
      title: 'Analytics & Insights',
      description: 'Comprehensive reporting and analytics to optimize your operations and improve client satisfaction.',
      icon: TrendingUp,
      features: ['Performance Metrics', 'Client Insights', 'Operational Reports', 'Trend Analysis']
    }
  ]

  const deepDiveSolutions = [
    { group: 'Core AI', items: [
      { title: 'Voice Receptionist', icon: Phone, description: 'AI-powered 24/7 call handling with natural language understanding, intelligent routing, and seamless CRM integration.', capabilities: ['Natural conversations', 'Intent recognition', 'Call routing', 'CRM lookup'] },
      { title: 'Deal Status Engine', icon: BarChart3, description: 'Real-time deal tracking and automated status updates that keep all parties informed throughout the closing process.', capabilities: ['Live status tracking', 'Auto notifications', 'Progress monitoring', 'Client portal'] },
      { title: 'Smart Scheduler', icon: Calendar, description: 'Intelligent appointment coordination that manages availability, sends reminders, and handles rescheduling automatically.', capabilities: ['Multi-party sync', 'Conflict resolution', 'Auto reminders', 'Calendar integration'] },
    ]},
    { group: 'Platform', items: [
      { title: 'Warm Transfers', icon: Users, description: 'Seamless handoff system that transfers complex inquiries to specialists with full conversation context preserved.', capabilities: ['Context transfer', 'Smart routing', 'Priority escalation', 'Team management'] },
      { title: 'CRM Integration', icon: Database, description: 'Deep integration with ResWare, RamQuest, and custom CRM systems for unified data access and workflow automation.', capabilities: ['Multi-platform sync', 'API access', 'Custom workflows', 'Data migration'] },
      { title: 'Analytics Suite', icon: TrendingUp, description: 'Comprehensive reporting dashboard with performance metrics, client insights, and operational intelligence.', capabilities: ['Performance metrics', 'Client insights', 'Trend analysis', 'Custom reports'] },
    ]},
  ]

  const allDeepDiveItems = deepDiveSolutions.flatMap(g => g.items)
  const currentDeepDive = allDeepDiveItems[activeDeepDive]

  const benefits = [
    { title: 'Reduce Call Handling Time', value: '25', suffix: '%', icon: Clock, description: 'Automate routine inquiries and focus on complex transactions' },
    { title: 'Increase Client Satisfaction', value: '3', suffix: 'x', icon: Star, description: 'Never miss a call and provide instant responses' },
    { title: 'Lower Operational Costs', value: '70', suffix: '%', icon: TrendingUp, description: 'Reduce staffing needs for basic inquiries' },
    { title: 'Improve Efficiency', value: '50', suffix: '%', icon: Zap, description: 'Streamline workflows and eliminate manual processes' }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SEO
        title="Solutions"
        description="AI voice receptionist solutions for title companies. Automate call handling, deal updates, scheduling, and customer support."
        canonical="/solutions"
      />
      {/* Background Canvas Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Sparkles particleColor="#38bdf8" particleDensity={60} speed={0.3} />
      </div>
      <VoiceWaves />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center min-h-screen bg-black overflow-hidden px-4">
        {/* Spheremotion Background */}
        <div className="absolute inset-0">
          <video src="/spheremotion.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />

        {/* Blurred gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0080FF]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#4F1AD6]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* Pill Badge */}
            <div className="mb-6 mt-12">
              <WordReveal
                text="AI Solutions for Title Companies"
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
                trigger="mount"
              />
            </div>
            <div className="mb-8">
              <h1 className="text-2xl md:text-4xl font-medium text-white">
                Transform your title operations with intelligent automation.
              </h1>
            </div>

            <motion.p
              className="text-xl text-white mb-12 max-w-full md:max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Discover how Title Voice can revolutionize your title company with AI-powered solutions designed specifically for the real estate industry.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <PrimaryButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
              Get Started <ArrowRight className="w-5 h-5" />
            </PrimaryButton>
            <OutlineButton size="lg">
              <Play className="w-5 h-5" /> Watch Demo
            </OutlineButton>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Trust Stats Bar */}
      <section className="py-12 lg:py-16 px-4 bg-black relative z-10">
        <div className="container mx-auto max-w-full lg:max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-4 md:p-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              {[
                { value: 100, suffix: '+', label: 'Title Companies', animated: true },
                { value: 500, suffix: 'K+', label: 'Calls Handled', animated: true },
                { value: 99, suffix: '%', label: 'Uptime', animated: true },
                { value: '4.8/5', label: 'Rating', animated: false }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold">
                    {stat.animated ? (
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                        duration={2000}
                        className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent"
                      />
                    ) : (
                      <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    )}
                  </div>
                  <div className="text-white/60 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Solutions Grid */}
      <section className="py-12 lg:py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12 md:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Our Solutions
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-full md:max-w-3xl mx-auto">
              Comprehensive AI solutions designed specifically for title companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {solutions.map((solution, index) => (
              <ScrollReveal
                key={index}
                animation="fadeUp"
                delay={index * 0.15}
                duration={0.6}
              >
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="h-full">
                  <GlowCard className="h-full rounded-2xl">
                  <div className="group relative p-4 sm:p-5 md:p-6 bg-[#080808] rounded-2xl border border-white/10 hover:border-[#0080FF]/30 transition-all duration-500 h-full flex flex-col overflow-hidden"
                    style={{ transition: 'border-color 0.5s, box-shadow 0.5s' }}
                  >
                    <BorderBeam size={150} duration={10} delay={index * 2} colorFrom="#0080FF" colorTo="#4F1AD6" />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0080FF]/[0.03] to-[#4F1AD6]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                    {/* Glass icon box */}
                    <div className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[#0080FF]/20 group-hover:border-[#0080FF]/40 transition-all duration-300 flex-shrink-0">
                      <solution.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#0080FF]" />
                    </div>

                    <h3 className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4">{solution.title}</h3>
                    <p className="relative z-10 text-white/80 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed flex-1">{solution.description}</p>

                    <div className="relative z-10 space-y-1.5 sm:space-y-2 mt-auto">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 sm:gap-3">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#0080FF]" />
                          </div>
                          <span className="text-white/80 text-xs sm:text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Deep Dive Section */}
      <section className="py-8 sm:py-12 lg:py-20 px-4 relative z-10">
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
              <Target className="w-4 h-4 text-[#0080FF]" />
              <span className="text-sm text-[#0080FF] font-medium">Solution Explorer</span>
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Deep Dive
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-full md:max-w-3xl mx-auto">
              Explore each solution in detail
            </p>
          </motion.div>

          <div className="hidden lg:grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-full lg:max-w-7xl mx-auto items-center">
            {/* Left Panel - Solution List (Subtle scroll animation) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="lg:col-span-2 space-y-6"
            >
              {deepDiveSolutions.map((group, gIdx) => (
                <motion.div
                  key={gIdx}
                  initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: shouldReduceMotion ? 0 : gIdx * 0.08,
                    ease: "easeOut"
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0080FF]" />
                    <h4 className="text-xs uppercase tracking-widest text-[#0080FF] font-semibold">{group.group}</h4>
                    <div className="flex-1 h-px bg-gradient-to-r from-[#0080FF]/20 to-transparent" />
                  </div>
                  <div className="space-y-1.5 sm:space-y-2">
                    {group.items.map((item, iIdx) => {
                      const globalIdx = gIdx === 0 ? iIdx : 3 + iIdx
                      const Icon = item.icon
                      const isActive = activeDeepDive === globalIdx
                      return (
                        <motion.button
                          key={iIdx}
                          onClick={() => setActiveDeepDive(globalIdx)}
                          className={`w-full flex items-center gap-2.5 sm:gap-3 lg:gap-3.5 px-4 py-3.5 rounded-xl transition-all duration-300 text-left relative overflow-hidden ${
                            isActive
                              ? 'bg-gradient-to-r from-[#0080FF]/15 to-[#4F1AD6]/10 border border-[#0080FF]/30 text-white shadow-[0_0_20px_rgba(0,128,255,0.1)]'
                              : 'bg-white/[0.03] border border-white/[0.06] text-white/50 hover:text-white hover:bg-white/[0.06] hover:border-white/10'
                          }`}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          {/* Active indicator bar */}
                          {isActive && (
                            <motion.div
                              layoutId="deepDiveIndicator"
                              className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-[#0080FF] to-[#4F1AD6]"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                          <div className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? 'bg-[#0080FF]/20 border border-[#0080FF]/30'
                              : 'bg-white/[0.06] border border-white/[0.06]'
                          }`}>
                            <Icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-[#0080FF]' : 'text-white/50'}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="font-medium text-base line-clamp-2 sm:line-clamp-none block">{item.title}</span>
                            {isActive && (
                              <motion.p
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="text-xs text-white/50 mt-0.5 line-clamp-1"
                              >
                                {item.description.split('.')[0]}
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
                </motion.div>
              ))}
            </motion.div>

            {/* Right Panel - Active Solution Display */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDeepDive}
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <GlowCard className="rounded-2xl">
                    <div className="relative bg-[#080808] rounded-2xl border border-white/10 overflow-hidden">
                      <BorderBeam size={180} duration={10} delay={0} colorFrom="#0080FF" colorTo="#4F1AD6" />

                      {/* Gradient header area */}
                      <div className="relative px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 pb-4 sm:pb-6">
                        {/* Header gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0080FF]/[0.06] to-[#4F1AD6]/[0.03]" />
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                        <div className="relative flex items-center gap-5">
                          {/* Animated pulsing icon */}
                          <div className="relative">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0080FF]/20 to-[#4F1AD6]/10 border border-[#0080FF]/25 flex items-center justify-center backdrop-blur-sm">
                              {React.createElement(currentDeepDive.icon, { className: "w-8 h-8 text-[#0080FF]" })}
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
                            <h3 className="text-2xl font-bold text-white mb-1">{currentDeepDive.title}</h3>
                            {/* Status pill */}
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/15">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00CC88] animate-pulse" />
                              <span className="text-xs text-white/50 font-medium uppercase tracking-wider">Active</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="px-8 pb-6">
                        <p className="text-white/60 leading-relaxed">{currentDeepDive.description}</p>
                      </div>

                      {/* Capabilities grid */}
                      <div className="px-8 pb-8">
                        <div className="grid grid-cols-2 gap-3">
                          {currentDeepDive.capabilities.map((cap, idx) => (
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
                                <span className="text-white/80 text-sm group-hover/cap:text-white/90 transition-colors duration-300">{cap}</span>
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
                              <span className="text-xs text-white/50">AI-Powered</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-[#4F1AD6]" />
                              <span className="text-xs text-white/50">Real-time</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-[#00CC88]" />
                              <span className="text-xs text-white/50">Enterprise Ready</span>
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

          {/* Mobile Step Navigator */}
          <div className="lg:hidden w-full mx-auto">
            {/* Step indicator */}
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-sm text-white/50 font-medium">
                Step {activeDeepDive + 1} of {allDeepDiveItems.length}
              </span>
              <div className="flex items-center gap-2">
                {allDeepDiveItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveDeepDive(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeDeepDive
                        ? 'bg-[#0080FF] scale-125'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to solution ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Single solution card with slide animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDeepDive}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
              >
                <GlowCard className="rounded-2xl">
                  <div className="relative bg-[#080808] rounded-2xl border border-white/10 overflow-hidden">
                    <BorderBeam size={180} duration={10} delay={0} colorFrom="#0080FF" colorTo="#4F1AD6" />

                    {/* Header */}
                    <div className="relative px-6 pt-6 pb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#0080FF]/[0.06] to-[#4F1AD6]/[0.03]" />
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      <div className="relative flex items-center gap-4">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0080FF]/20 to-[#4F1AD6]/10 border border-[#0080FF]/25 flex items-center justify-center">
                            {React.createElement(currentDeepDive.icon, { className: "w-7 h-7 text-[#0080FF]" })}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-1">{currentDeepDive.title}</h3>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-[#0080FF] bg-[#0080FF]/10 px-2.5 py-0.5 rounded-full border border-[#0080FF]/20">
                            Solution {activeDeepDive + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="px-6 pb-4">
                      <p className="text-white/60 leading-relaxed text-sm">{currentDeepDive.description}</p>
                    </div>

                    {/* Capabilities */}
                    <div className="px-6 pb-6">
                      <div className="grid grid-cols-1 gap-2.5">
                        {currentDeepDive.capabilities.map((capability, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.08 }}
                            className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                          >
                            <div className="flex items-center gap-2.5">
                              <div className="w-6 h-6 rounded-md bg-[#0080FF]/15 border border-[#0080FF]/20 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-[#0080FF]" />
                              </div>
                              <span className="text-white/80 text-sm">{capability}</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            </AnimatePresence>

            {/* Next/Previous buttons */}
            <div className="flex items-center justify-between mt-6 gap-4">
              <button
                onClick={() => setActiveDeepDive(prev => Math.max(0, prev - 1))}
                disabled={activeDeepDive === 0}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-white/70 font-medium text-sm transition-all duration-200 hover:bg-white/[0.08] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/[0.05]"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={() => setActiveDeepDive(prev => Math.min(allDeepDiveItems.length - 1, prev + 1))}
                disabled={activeDeepDive === allDeepDiveItems.length - 1}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white font-medium text-sm transition-all duration-200 hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Benefits Section */}
      <section className="py-12 lg:py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Proven Results
              </span>
            </h2>
            <p className="text-xl text-white max-w-full md:max-w-3xl mx-auto">
              See the measurable impact Title Voice has on title company operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
                  className="text-center p-6 rounded-2xl bg-[#080808] border border-white/10 hover:border-[#0080FF]/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px rgba(0, 128, 255, 0.1)" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-6 h-6 text-[#0080FF]" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent mb-3">
                    <AnimatedCounter value={benefit.value} suffix={benefit.suffix} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* CTA Section */}
      <EnhancedCTA
        title="Ready to Transform Your Operations?"
        highlightText="Transform"
        description="Join leading title companies who have already revolutionized their operations with Title Voice."
      />
    </div>
  )
}

export default Solutions

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
  Send,
  MessageSquare,
  Calendar,
  Play
} from 'lucide-react'
import Sparkles from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import BorderBeam from '../components/BorderBeam'
import { PrimaryButton, OutlineButton } from '../components/Buttons'
import SEO from '../components/SEO'

const WorkflowIntegration = () => {
  const [activeStep, setActiveStep] = useState(0)

  const workflowSteps = [
    {
      id: 'call',
      title: 'Incoming Call',
      description: 'Customer calls your title company',
      icon: Users
    },
    {
      id: 'ai',
      title: 'AI Assistant',
      description: 'Title Voice AI answers and identifies needs',
      icon: Zap
    },
    {
      id: 'data',
      title: 'Data Sync',
      description: 'Pulls customer data from your title software',
      icon: Database
    },
    {
      id: 'action',
      title: 'Smart Action',
      description: 'Schedules closing or routes to specialist',
      icon: CheckCircle
    },
    {
      id: 'confirm',
      title: 'Confirmation',
      description: 'Sends confirmation and updates systems',
      icon: Clock
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
    <div className="min-h-screen bg-black text-white relative">
      <SEO
        title="Workflow Integration"
        description="Integrate Title Voice with ResWare, RamQuest, CRM systems, and more. Seamless title production software connections."
        canonical="/workflow-integration"
      />
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
            alt="Animated sphere motion background"
            className="w-full h-full object-cover opacity-60"
          />
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
              <Zap className="w-4 h-4 text-[#0080FF]" />
              <span className="text-sm text-[#0080FF] font-semibold">Seamless Integrations</span>
            </motion.div>

            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
              Workflow Integration for{' '}
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Title Companies
              </span>
            </h1>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-medium text-white">
                Connect with ResWare, RamQuest, and all major platforms.
              </h2>
            </div>

            <motion.p
              className="text-xl text-white/80 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Seamlessly integrate Title Voice with your existing title company software and custom systems.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <PrimaryButton size="lg">
              View Integration Demo
              <Play className="w-5 h-5" />
            </PrimaryButton>
            <OutlineButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
              <Calendar className="w-5 h-5" />
              Get Custom Quote
            </OutlineButton>
          </motion.div>
        </div>
      </section>

      {/* Interactive Workflow */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                How Our Workflow Integration Works
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              See how Title Voice integrates with your title company software
              to create a seamless, automated workflow.
            </p>
          </motion.div>

          {/* Interactive Workflow Steps */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              {/* Steps List */}
              <div className="w-full lg:w-1/3 space-y-4">
                {workflowSteps.map((step, index) => (
                  <motion.button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-[#0080FF]/10 border border-[#0080FF]/30'
                        : 'bg-white/5 border border-white/5 hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                        {React.createElement(step.icon, { className: "w-6 h-6 text-[#0080FF]" })}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{step.title}</h3>
                        <p className="text-sm text-white/60">{step.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Visual Workflow */}
              <div className="w-full lg:w-2/3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-[#080808] rounded-2xl p-8 border border-white/10"
                  >
                    <div className="text-center mb-8">
                      {/* Step icon with pulsing ring */}
                      <div className="relative w-20 h-20 mx-auto mb-4">
                        <div className="absolute inset-0 rounded-2xl bg-[#0080FF]/10 border border-[#0080FF]/20 animate-pulse" />
                        <div className="relative w-20 h-20 rounded-2xl bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                          {React.createElement(workflowSteps[activeStep].icon, { className: "w-10 h-10 text-[#0080FF]" })}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {workflowSteps[activeStep].title}
                      </h3>
                      <p className="text-white/60">
                        {workflowSteps[activeStep].description}
                      </p>
                    </div>

                    {/* Step-specific content */}
                    {activeStep === 0 && (
                      <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                        <h4 className="font-semibold mb-4 text-white">Customer Call Example</h4>
                        <div className="space-y-3">
                          <div className="bg-[#0080FF]/10 p-3 rounded-lg border border-[#0080FF]/20">
                            <p className="text-sm text-white/90">"Hi, I need to check on my closing status for 123 Main Street."</p>
                          </div>
                          <div className="bg-[#4F1AD6]/10 p-3 rounded-lg border border-[#4F1AD6]/20">
                            <p className="text-sm text-white/90">"I can help you with that. Let me look up your information..."</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 1 && (
                      <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                        <h4 className="font-semibold mb-4 text-white">AI Processing</h4>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-[#0080FF] rounded-full animate-pulse"></div>
                            <span className="text-sm text-white/80">Natural language processing</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-[#4F1AD6] rounded-full animate-pulse"></div>
                            <span className="text-sm text-white/80">Intent recognition</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-[#0080FF] rounded-full animate-pulse"></div>
                            <span className="text-sm text-white/80">Context understanding</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 2 && (
                      <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                        <h4 className="font-semibold mb-4 text-white">Data Integration</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center">
                            <div className="w-12 h-12 bg-[#0080FF]/10 border border-[#0080FF]/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <Database className="w-6 h-6 text-[#0080FF]" />
                            </div>
                            <p className="text-xs text-white/70">ResWare</p>
                          </div>
                          <div className="text-center">
                            <div className="w-12 h-12 bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                              <Database className="w-6 h-6 text-[#4F1AD6]" />
                            </div>
                            <p className="text-xs text-white/70">RamQuest</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 3 && (
                      <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                        <h4 className="font-semibold mb-4 text-white">Smart Actions</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center">
                              <Check className="w-3 h-3 text-[#0080FF]" />
                            </div>
                            <span className="text-sm text-white/80">Schedule closing appointment</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center">
                              <Check className="w-3 h-3 text-[#0080FF]" />
                            </div>
                            <span className="text-sm text-white/80">Update closing status</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center">
                              <Check className="w-3 h-3 text-[#0080FF]" />
                            </div>
                            <span className="text-sm text-white/80">Route to specialist</span>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeStep === 4 && (
                      <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                        <h4 className="font-semibold mb-4 text-white">Confirmation & Updates</h4>
                        <div className="space-y-3">
                          <div className="bg-[#0080FF]/10 p-3 rounded-lg border border-[#0080FF]/20 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center">
                              <Mail className="w-4 h-4 text-[#0080FF]" />
                            </div>
                            <p className="text-sm text-white/90">Email confirmation sent</p>
                          </div>
                          <div className="bg-[#4F1AD6]/10 p-3 rounded-lg border border-[#4F1AD6]/20 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#4F1AD6]/15 border border-[#4F1AD6]/25 flex items-center justify-center">
                              <MessageSquare className="w-4 h-4 text-[#4F1AD6]" />
                            </div>
                            <p className="text-sm text-white/90">SMS notification delivered</p>
                          </div>
                          <div className="bg-[#0080FF]/10 p-3 rounded-lg border border-[#0080FF]/20 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center">
                              <Database className="w-4 h-4 text-[#0080FF]" />
                            </div>
                            <p className="text-sm text-white/90">CRM system updated</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Integrates with Your Title Software
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Connect Title Voice with your existing title company software
              for a unified, automated workflow.
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
                  <div className="group relative p-8 bg-[#080808] rounded-2xl border border-white/10 hover:border-[#0080FF]/40 hover:shadow-[0_8px_30px_rgba(0,128,255,0.08)] transition-all duration-500 h-full flex flex-col overflow-hidden">
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
                    <div className="relative z-10 w-16 h-16 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center mb-6 group-hover:bg-[#0080FF]/20 group-hover:border-[#0080FF]/40 transition-all duration-300">
                      {React.createElement(integration.icon, { className: "w-8 h-8 text-[#0080FF]" })}
                      {/* Pulsing glow */}
                      <div className="absolute inset-0 bg-[#0080FF]/20 rounded-lg blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <h3 className="relative z-10 text-xl font-bold text-white mb-2">{integration.name}</h3>
                    <p className="relative z-10 text-white/70 text-sm mb-4 leading-relaxed">{integration.description}</p>

                    <div className="relative z-10 space-y-3 mt-auto">
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

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        {/* Breathing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#0080FF]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Ready to Integrate?
              </span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Connect Title Voice with your existing systems and start automating your workflows today.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <PrimaryButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
                Get Started <ArrowRight className="w-5 h-5" />
              </PrimaryButton>
              <OutlineButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
                <Calendar className="w-5 h-5" /> Schedule Demo
              </OutlineButton>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default WorkflowIntegration

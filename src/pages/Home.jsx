import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import SphereMotion from '../components/SphereMotion'
import Sparkles from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import { WordReveal } from '../components/TextAnimations'
import { PrimaryButton, OutlineButton } from '../components/Buttons'
import { useBooking } from '../context/BookingContext'
import AudioPlayer from '../components/AudioPlayer'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import GradientMesh from '../components/GradientMesh'
import AnimatedCounter from '../components/AnimatedCounter'
import {
  Phone,
  Calendar,
  MessageSquare,
  Clock,
  CheckCircle,
  Star,
  ArrowRight,
  ArrowDown,
  Play,
  Users,
  Shield,
  Zap,
  Check,
  BarChart3,
  Mic,
  Target,
  Volume2,
  Headphones,
  Database,
  Settings,
  TrendingUp,
  Quote
} from 'lucide-react'

const Home = () => {
  const { openModal } = useBooking()
  const [activeTab, setActiveTab] = useState('receptionist')
  const [activeSection, setActiveSection] = useState('receptionist')
  const [activeCategory, setActiveCategory] = useState('ai-answering-service')
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Scroll to receptionist section
  const scrollToReceptionist = () => {
    const section = document.getElementById('receptionist-section')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }



  // Mini navbar sections
  const miniNavSections = [
    { id: 'receptionist', title: 'Receptionist AI', icon: Phone },
    { id: 'deal-status', title: 'Deal Status', icon: BarChart3 },
    { id: 'scheduler', title: 'Scheduler', icon: Calendar },
    { id: 'warm-transfers', title: 'Warm Transfers', icon: Users },
    { id: 'outbound-campaigns', title: 'Outbound Campaigns', icon: Target }
  ]

  // Categories for the systems section
  const categories = [
    {
      id: 'call-handling',
      title: 'CALL HANDLING',
      items: ['24/7 Call Answering', 'Client Inquiry Handling', 'Emergency Response'],
      content: {
        title: 'CALL HANDLING',
        description: 'Professional call management for title companies',
        features: [
          {
            title: 'ANIMATION',
            subtitle: 'Call Processing',
            description: 'Advanced call routing and queue management for seamless client communication.',
            visual: 'bars'
          },
          {
            title: 'IMPLEMENTATION',
            subtitle: 'Call Management System',
            description: 'Implement robust call handling with automated responses and human escalation.',
            code: `const callHandling = new TitleVoiceAI();
callHandling.configure({
  mode: "call_management",
  features: ["queue_management", "call_routing", "escalation"],
  hours: "24/7"
});`
          }
        ],
        integrations: ['Phone Systems', 'CRM Integration', 'Call Recording'],
        capabilities: ['Queue Management', 'Call Routing', 'Escalation Handling']
      }
    },
    {
      id: 'ai-answering-service',
      title: 'AI ANSWERING SERVICE',
      items: ['Smart Call Routing', 'Client Information Access', 'Appointment Scheduling'],
      content: {
        title: 'AI ANSWERING SERVICE',
        description: 'Intelligent AI-powered answering service for title companies',
        features: [
          {
            title: 'ANIMATION',
            subtitle: 'Smart Call Handling',
            description: 'AI answers calls with human-like intelligence, understanding client needs and providing accurate responses.',
            visual: 'bars'
          },
          {
            title: 'IMPLEMENTATION',
            subtitle: 'AI Answering Service',
            description: 'Deploy AI answering service with natural language processing and client database integration.',
            code: `const titleVoice = new TitleVoiceAI();
titleVoice.configure({
  mode: "answering_service",
  integrations: [ClientDatabase, TitleSoftware],
  features: ["call_routing", "appointment_scheduling"]
});`
          }
        ],
        integrations: ['Client Database', 'Title Software', 'Calendar Systems'],
        capabilities: ['24/7 Availability', 'Natural Conversations', 'Instant Responses']
      }
    },
    {
      id: 'title-company-integrations',
      title: 'TITLE COMPANY INTEGRATIONS',
      items: ['Title software integration', 'Client database access', 'Document management'],
      content: {
        title: 'TITLE COMPANY INTEGRATIONS',
        description: 'Seamless integration with title company software and workflows',
        features: [
          {
            title: 'ANIMATION',
            subtitle: 'System Integration',
            description: 'Connect with existing title company software and databases for comprehensive workflow automation.',
            visual: 'bars'
          },
          {
            title: 'IMPLEMENTATION',
            subtitle: 'Integration Setup',
            description: 'Configure integrations with title software, document management, and client databases.',
            code: `const integrations = new TitleVoiceAI();
integrations.configure({
  mode: "system_integration",
  connections: [TitleSoftware, DocumentManagement, ClientDatabase],
  automation: ["workflow_automation", "data_sync"]
});`
          }
        ],
        integrations: ['Title Software', 'Document Management', 'Client Database'],
        capabilities: ['Workflow Automation', 'Data Synchronization', 'API Connectivity']
      }
    }
  ]

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Track active section
      const sections = miniNavSections.map(section => document.getElementById(`${section.id}-section`))
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect()
          return rect.top <= 200 && rect.bottom >= 200
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection.id.replace('-section', ''))
      }
    }

    // Initial check
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // No need for complex script loading - using iframe approach

  // Enhanced smooth scroll function - centers section content in viewport
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(`${sectionId}-section`)
    if (element) {
      // Get viewport and element dimensions
      const viewportHeight = window.innerHeight
      const elementRect = element.getBoundingClientRect()
      const elementHeight = element.offsetHeight
      const currentScrollY = window.pageYOffset

      // Calculate position to center the section in the viewport
      // Formula: element top position - (viewport height / 2) + (element height / 2)
      // This puts the middle of the element in the middle of the viewport
      const elementTop = element.offsetTop
      const targetScrollY = elementTop - (viewportHeight / 2) + (elementHeight / 2)

      // Clamp to valid scroll range
      const maxScroll = document.documentElement.scrollHeight - viewportHeight
      const finalPosition = Math.max(0, Math.min(targetScrollY, maxScroll))

      // Smooth scroll with easing
      const startPosition = currentScrollY
      const distance = finalPosition - startPosition
      const duration = Math.min(Math.abs(distance) / 2, 1000) // Max 1 second
      let startTime = null

      const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / duration, 1)
        const ease = easeInOutCubic(progress)

        window.scrollTo(0, startPosition + distance * ease)

        if (progress < 1) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
    }
  }

  const tabs = [
    {
      id: 'receptionist',
      title: 'Receptionist AI',
      icon: Phone,
      content: {
        title: 'Never Miss a Call',
        description: 'AI handles incoming calls with human-like conversations, understanding context and providing accurate responses.',
        demo: {
          customer: "What's the status of file 25-9783-PET?",
          ai: "Sure — that's the Foreman Avenue deal. It's currently in underwriting. Would you like me to email your processor's contact details?"
        }
      }
    },
    {
      id: 'status',
      title: 'Deal Status',
      icon: BarChart3,
      content: {
        title: 'Real-time Updates',
        description: 'Instantly access deal information, closing dates, and status updates from your CRM.',
        demo: {
          customer: "When is my closing scheduled?",
          ai: "Your closing is scheduled for Friday, March 15th at 2:00 PM at 123 Main Street. I'll send you a reminder 24 hours before."
        }
      }
    },
    {
      id: 'scheduler',
      title: 'Scheduler',
      icon: Calendar,
      content: {
        title: 'Smart Scheduling',
        description: 'Automatically schedule appointments, send reminders, and manage your calendar.',
        demo: {
          customer: "I need to reschedule my closing",
          ai: "I can help you with that. What's your preferred date and time? I'll check availability and update your appointment."
        }
      }
    },
    {
      id: 'transfers',
      title: 'Warm Transfers',
      icon: Users,
      content: {
        title: 'Seamless Handoffs',
        description: 'Transfer complex inquiries to the right team member with full context and notes.',
        demo: {
          customer: "I have a complex title issue",
          ai: "I understand this requires specialized attention. Let me transfer you to our senior title officer, Sarah, who can help with this specific situation."
        }
      }
    },
    {
      id: 'outbound',
      title: 'Outbound Campaigns',
      icon: Target,
      content: {
        title: 'Reach More Clients',
        description: 'Title Voice runs outbound campaigns that keep clients engaged and closings on track.',
        demo: {
          customer: "Hi, this is Title Voice calling about your upcoming closing.",
          ai: "Hello! I'm calling to confirm your closing appointment and ensure all documents are ready. Is this a good time to discuss your closing details?"
        }
      }
    }
  ]

  const workflowSteps = [
    {
      title: 'Integrate',
      description: 'Connect Airtable, Retell, or your CRM',
      icon: Database,
      color: 'from-[#3B82F6] to-[#60A5FA]'
    },
    {
      title: 'Train',
      description: 'Upload title scripts, FAQs, and file schema',
      icon: Settings,
      color: 'from-[#60A5FA] to-[#3B82F6]'
    },
    {
      title: 'Automate',
      description: 'Let AI answer calls, check file details, or transfer warm leads',
      icon: Zap,
      color: 'from-[#3B82F6] to-[#00F6FF]'
    }
  ]



  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <SEO
        canonical="/"
      />
      {/* Background Canvas Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Sparkles particleColor="#38bdf8" particleDensity={60} speed={0.3} />
      </div>
      <VoiceWaves />
      {/* Hero Section - Cinematic Animated Orb */}
      <section id="hero-section" className="relative flex flex-col justify-center items-center text-center min-h-screen bg-black overflow-hidden">
        {/* Animated Gradient Mesh Background */}
        <GradientMesh variant="default" intensity="low" />

        {/* Sphere Motion GIF Animation - Full Cover */}
        <div className="absolute inset-0">
          <video src="/spheremotion.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60" />
        </div>

        {/* Gradient overlay for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />


        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="mb-8"
          >
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                <WordReveal text="Never miss a call again." delay={0.2} />
              </h1>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Human-like Conversations. Real-time Deal Support.
              </h2>
            </div>
            <motion.p
              className="text-xl md:text-2xl text-white mb-12 max-w-full md:max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                type: "spring",
                stiffness: 100
              }}
            >
              Title Voice connects your clients directly to live deal updates — automating call handling and support with voice AI trained for title companies.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* Single prominent "Listen to Live Call" button */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 30px rgba(0, 128, 255, 0.4)',
                  '0 0 50px rgba(0, 128, 255, 0.6)',
                  '0 0 30px rgba(0, 128, 255, 0.4)',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="rounded-full"
            >
              <PrimaryButton
                size="lg"
                onClick={scrollToReceptionist}
                className="text-lg"
              >
                <Play className="w-6 h-6" />
                Listen to Live Call
                <Volume2 className="w-6 h-6" />
              </PrimaryButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Why Title Companies Need An AI Answering Service Section */}
      <section className="py-12 lg:py-16 px-4 bg-black">
        <div className="container mx-auto max-w-full lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Why Title Companies Need An AI Answering Service
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {/* Left Side List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="lg:col-span-1"
            >
              <div className="bg-gray-950 rounded-lg p-4 border border-gray-900">
                <h3 className="text-sm font-semibold text-[#0080FF] mb-4 flex items-center gap-2 uppercase tracking-wide">
                  <div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full"></div>
                  SYSTEMS
                </h3>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Never miss a call with AI-powered answering services.
                  </h4>
                  <p className="text-gray-500 text-xs">
                    Title companies need reliable answering services to handle client calls 24/7.
                  </p>
                </div>

                <div className="space-y-3">
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      className={`cursor-pointer transition-all duration-200 ${activeCategory === category.id
                        ? 'bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-md p-2 border border-transparent'
                        : 'hover:bg-gray-800 rounded-md p-2'
                        }`}
                      onClick={() => setActiveCategory(category.id)}
                    >
                      <h5 className={`text-xs font-semibold mb-1 uppercase tracking-wide flex items-center gap-1 ${activeCategory === category.id ? 'text-white' : 'text-gray-400'
                        }`}>
                        {activeCategory === category.id && (
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        )}
                        {category.title}
                      </h5>
                      <ul className={`text-xs space-y-0.5 ${activeCategory === category.id ? 'text-white' : 'text-gray-500'
                        }`}>
                        {category.items.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Side View */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                type: "spring",
                stiffness: 100
              }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-950 rounded-lg p-4 border border-gray-900">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#0080FF] rounded-full"></div>
                    {categories.find(cat => cat.id === activeCategory)?.content.title || 'AI ANSWERING SERVICE'}
                  </h3>
                </div>

                {/* Dynamic Content Based on Selected Category */}
                {(() => {
                  const currentCategory = categories.find(cat => cat.id === activeCategory);
                  if (!currentCategory) return null;

                  return (
                    <>
                      {/* Animation and Implementation Side by Side */}
                      <div className="grid md:grid-cols-2 gap-3 mb-4">
                        {/* Animation Card */}
                        <div className="bg-gray-950 rounded-md p-3 border border-gray-900">
                          <h4 className="text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">
                            {currentCategory.content.features[0].title}
                          </h4>
                          <div className="flex justify-center mb-2">
                            {activeCategory === 'call-handling' && (
                              <div className="relative w-16 h-16 flex items-center justify-center">
                                {/* Phone icon animation */}
                                <motion.div
                                  className="w-6 h-6 bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-sm"
                                  animate={{
                                    rotate: [0, 5, -5, 0],
                                    scale: [1, 1.1, 1]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                                {/* Call waves */}
                                <motion.div
                                  className="absolute w-8 h-8 border-2 border-[#0080FF] rounded-full"
                                  animate={{
                                    scale: [0.8, 1.5, 0.8],
                                    opacity: [0.8, 0.2, 0.8]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                                <motion.div
                                  className="absolute w-12 h-12 border-2 border-[#0080FF] rounded-full"
                                  animate={{
                                    scale: [0.6, 1.8, 0.6],
                                    opacity: [0.6, 0.1, 0.6]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3
                                  }}
                                />
                              </div>
                            )}

                            {activeCategory === 'ai-answering-service' && (
                              <div className="relative w-16 h-16 flex items-center justify-center">
                                {/* AI brain animation */}
                                <motion.div
                                  className="w-4 h-4 bg-[#0080FF] rounded-full"
                                  animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.8, 1, 0.8]
                                  }}
                                  transition={{
                                    duration: 1.8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                                {/* Neural network connections */}
                                <motion.div
                                  className="absolute w-8 h-8 border-2 border-[#0080FF] rounded-full"
                                  animate={{
                                    scale: [0.5, 1.2, 0.5],
                                    opacity: [0.6, 0.2, 0.6]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.2
                                  }}
                                />
                                <motion.div
                                  className="absolute w-12 h-12 border-2 border-[#0080FF] rounded-full"
                                  animate={{
                                    scale: [0.3, 1.4, 0.3],
                                    opacity: [0.4, 0.1, 0.4]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.4
                                  }}
                                />
                                <motion.div
                                  className="absolute w-16 h-16 border-2 border-[#0080FF] rounded-full"
                                  animate={{
                                    scale: [0.2, 1.6, 0.2],
                                    opacity: [0.3, 0.05, 0.3]
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.6
                                  }}
                                />
                              </div>
                            )}

                            {activeCategory === 'title-company-integrations' && (
                              <div className="relative w-16 h-16 flex items-center justify-center">
                                {/* Database/Integration animation */}
                                <motion.div
                                  className="w-5 h-3 bg-[#0080FF] rounded-sm"
                                  animate={{
                                    y: [0, -2, 0],
                                    scale: [1, 1.05, 1]
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                                {/* Data flow lines */}
                                <motion.div
                                  className="absolute w-2 h-8 bg-[#0080FF] rounded-full"
                                  animate={{
                                    scaleY: [0.5, 1.2, 0.5],
                                    opacity: [0.7, 1, 0.7]
                                  }}
                                  transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                  }}
                                />
                                <motion.div
                                  className="absolute w-2 h-8 bg-[#0080FF] rounded-full"
                                  style={{ left: '8px' }}
                                  animate={{
                                    scaleY: [0.3, 1.4, 0.3],
                                    opacity: [0.5, 0.8, 0.5]
                                  }}
                                  transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.3
                                  }}
                                />
                                <motion.div
                                  className="absolute w-2 h-8 bg-[#0080FF] rounded-full"
                                  style={{ right: '8px' }}
                                  animate={{
                                    scaleY: [0.4, 1.1, 0.4],
                                    opacity: [0.6, 0.9, 0.6]
                                  }}
                                  transition={{
                                    duration: 1.2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.6
                                  }}
                                />
                              </div>
                            )}
                          </div>
                          <div className="text-center">
                            <h5 className="text-[#0080FF] font-medium mb-1 text-xs">
                              {currentCategory.content.features[0].subtitle}
                            </h5>
                            <p className="text-gray-500 text-xs">
                              {currentCategory.content.features[0].description}
                            </p>
                          </div>
                        </div>

                        {/* Implementation Card */}
                        <div className="bg-gray-950 rounded-md p-3 border border-gray-900">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wide">
                              {currentCategory.content.features[1].title}
                            </h4>
                            <motion.button
                              className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white px-2 py-1 rounded text-xs font-medium"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              RUN
                            </motion.button>
                          </div>
                          <div className="bg-black rounded p-2 font-mono text-xs overflow-x-auto">
                            <pre className="text-gray-400 whitespace-pre-wrap break-words">
                              {currentCategory.content.features[1].code}
                            </pre>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })()}

                {/* Dynamic Integrations & Capabilities */}
                {(() => {
                  const currentCategory = categories.find(cat => cat.id === activeCategory);
                  if (!currentCategory) return null;

                  return (
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="bg-gray-950 rounded-md p-3 border border-gray-900">
                        <h4 className="text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">INTEGRATIONS</h4>
                        <ul className="space-y-0.5">
                          {currentCategory.content.integrations.map((item, index) => (
                            <li key={index} className="text-gray-500 text-xs flex items-center gap-1">
                              <div className="w-0.5 h-0.5 bg-[#0080FF] rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-950 rounded-md p-3 border border-gray-900">
                        <h4 className="text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wide">CAPABILITIES</h4>
                        <ul className="space-y-0.5">
                          {currentCategory.content.capabilities.map((item, index) => (
                            <li key={index} className="text-gray-500 text-xs flex items-center gap-1">
                              <div className="w-0.5 h-0.5 bg-[#0080FF] rounded-full"></div>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              type: "spring",
              stiffness: 100
            }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
          >
            <PrimaryButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
              Book A Demo
              <ArrowRight className="w-5 h-5" />
            </PrimaryButton>
          </motion.div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Mini Navigation Tracker - Enhanced Design */}
      <motion.section
        id="mini-nav-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block py-12 px-4 bg-black relative overflow-hidden"
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[600px] h-[120px] sm:h-[200px] rounded-full"
            style={{ background: 'radial-gradient(ellipse, rgba(0, 128, 255, 0.08) 0%, transparent 70%)' }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto max-w-full lg:max-w-7xl">
          <div className="flex items-center justify-center">
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Outer glow container */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0080FF]/20 via-[#4F1AD6]/20 to-[#0080FF]/20 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main navigation container */}
              <div className="relative bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full px-1.5 py-1.5 sm:px-2 sm:py-2 md:px-3 md:py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-x-auto scrollbar-hide max-w-full">
                {/* Inner subtle gradient border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0080FF]/10 via-transparent to-[#4F1AD6]/10 pointer-events-none" />

                <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 relative min-w-min">
                  {miniNavSections.map((section, index) => {
                    const Icon = section.icon
                    const isActive = activeSection === section.id
                    return (
                      <React.Fragment key={section.id}>
                        <motion.button
                          onClick={() => scrollToSection(section.id)}
                          className={`relative flex items-center gap-1.5 sm:gap-2 md:gap-2.5 px-2.5 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 rounded-full transition-all duration-500 overflow-hidden min-h-[40px] sm:min-h-[44px] whitespace-nowrap ${
                            isActive
                              ? 'text-white'
                              : 'text-white/60 hover:text-white/90'
                          }`}
                          whileHover={{ scale: 1.05, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {/* Active background with animated gradient */}
                          {isActive && (
                            <>
                              <motion.div
                                layoutId="miniNavIndicator"
                                className="absolute inset-0 bg-gradient-to-r from-[#0080FF] via-[#0080FF] to-[#4F1AD6] rounded-full"
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                animate={{
                                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                                }}
                                style={{
                                  backgroundSize: '200% 200%'
                                }}
                              />
                              {/* Inner glow */}
                              <motion.div
                                className="absolute inset-0 rounded-full"
                                style={{
                                  boxShadow: '0 0 20px rgba(0, 128, 255, 0.4), inset 0 0 20px rgba(0, 128, 255, 0.1)'
                                }}
                                animate={{
                                  opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                            </>
                          )}

                          {/* Hover background */}
                          {!isActive && (
                            <motion.div
                              className="absolute inset-0 bg-white/5 rounded-full"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />
                          )}

                          {/* Icon with animation */}
                          <motion.div
                            className="relative z-10"
                            animate={isActive ? {
                              rotate: [0, 5, -5, 0],
                              scale: [1, 1.1, 1.1, 1]
                            } : {}}
                            transition={{
                              duration: 0.5,
                              delay: index * 0.1
                            }}
                          >
                            <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all duration-300 ${
                              isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''
                            }`} />
                          </motion.div>

                          {/* Text */}
                          <span className={`text-xs sm:text-sm font-semibold relative z-10 transition-all duration-300 ${
                            isActive ? 'tracking-wide' : 'tracking-normal'
                          }`}>
                            {section.title}
                          </span>

                          {/* Active indicator dot */}
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-white relative z-10"
                              transition={{ type: 'spring', stiffness: 500, damping: 20, delay: 0.1 }}
                            >
                              <motion.div
                                className="absolute inset-0 rounded-full bg-white"
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [1, 0, 1]
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              />
                            </motion.div>
                          )}
                        </motion.button>

                        {/* Separator */}
                        {index < miniNavSections.length - 1 && (
                          <motion.div
                            className="w-px h-6 bg-gradient-to-b from-transparent via-white/20 to-transparent"
                            initial={{ opacity: 0, scaleY: 0 }}
                            animate={{ opacity: 1, scaleY: 1 }}
                            transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                          />
                        )}
                      </React.Fragment>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Sticky navigation removed per user request */}

      {/* Receptionist AI Section */}
      <section id="receptionist-section" className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 bg-black relative overflow-hidden">
        {/* Background gradient orb */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0080FF]/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />

        <div className="container mx-auto max-w-full lg:max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Side - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20"
              >
                <Phone className="w-4 h-4 text-[#0080FF]" />
                <span className="text-sm text-[#0080FF] font-medium">Core Feature</span>
              </motion.div>

              {/* Glass icon + title */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#0080FF]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Receptionist AI</h3>
              </div>

              {/* Gradient headline */}
              <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Never miss a call
              </h4>

              <p className="text-lg text-white/80 leading-relaxed">
                AI handles incoming calls with human-like conversations, understanding context and providing accurate responses.
              </p>

              {/* Glass check bullets */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0080FF]" />
                  </div>
                  <p className="text-white/80">24/7 automated reception with natural language understanding</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0080FF]" />
                  </div>
                  <p className="text-white/80">Intelligent call routing to the right department or agent</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0080FF]" />
                  </div>
                  <p className="text-white/80">Multilingual support for diverse client base</p>
                </div>
              </div>

              {/* Premium play button with pulsing rings */}
              <div className="w-full max-w-md mt-6">
                <AudioPlayer
                  src="/audio/never-miss-a-call_processed.m4a"
                  title="Receptionist AI"
                />
              </div>
            </motion.div>

            {/* Right Side - Call Transcript Animation with GlowCard */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <GlowCard className="rounded-2xl">
                <div className="group bg-[#080808] rounded-2xl p-5 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0080FF]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="space-y-3 relative z-10">
                    {/* Call Header with LIVE indicator */}
                    <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                          <Phone className="w-5 h-5 text-[#0080FF]" />
                        </div>
                        {/* Glow behind icon */}
                        <div className="absolute inset-0 bg-[#0080FF]/20 rounded-full blur-lg -z-10" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Live Call</h4>
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-2 h-2 rounded-full bg-emerald-400"
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <span className="text-emerald-400 text-xs font-medium">LIVE</span>
                        </div>
                      </div>
                    </div>

                    {/* Call Transcript with Seamless Loop Animation */}
                    <div className="space-y-3 max-h-80 overflow-hidden relative">
                      <motion.div
                        className="space-y-3"
                        animate={{ y: [0, -360] }}
                        transition={{
                          duration: 12,
                          ease: "linear",
                          repeat: Infinity,
                          repeatDelay: 0
                        }}
                      >
                        {/* First set of messages */}
                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">Hi, I'm calling about the status of my closing at 123 Main St.</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">Thank you for calling Title Voice. I can help you with that. Can you please provide the property address or file number?</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">The address is 123 Main Street, file number 25-9783-PET</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">Perfect! I can see your Foreman Avenue deal is currently in underwriting. Would you like me to email your processor's contact details?</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">Yes, that would be great. Thank you!</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 3 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">I've sent the details to your email. Is there anything else I can help you with today?</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        {/* Duplicate set of messages for seamless loop */}
                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">Hi, I'm calling about the status of my closing at 123 Main St.</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">Thank you for calling Title Voice. I can help you with that. Can you please provide the property address or file number?</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">The address is 123 Main Street, file number 25-9783-PET</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">Perfect! I can see your Foreman Avenue deal is currently in underwriting. Would you like me to email your processor's contact details?</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">Yes, that would be great. Thank you!</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 3 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">I've sent the details to your email. Is there anything else I can help you with today?</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deal Status Section - ALTERNATING LAYOUT */}
      <section id="deal-status-section" className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 bg-black relative overflow-hidden">
        {/* Background gradient orb - left side for variation */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4F1AD6]/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />

        <div className="container mx-auto max-w-full lg:max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Side - Description (lg:order-2 for alternating) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6 lg:order-2"
            >
              {/* Pill badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20"
              >
                <BarChart3 className="w-4 h-4 text-[#4F1AD6]" />
                <span className="text-sm text-[#4F1AD6] font-medium">Real-time Data</span>
              </motion.div>

              {/* Glass icon + title */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-[#0080FF]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Deal Status</h3>
              </div>

              {/* Gradient headline */}
              <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Real-time updates
              </h4>

              <p className="text-lg text-white/80 leading-relaxed">
                Instantly access deal information, closing dates, and status updates from your CRM.
              </p>

              {/* Glass check bullets */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0080FF]" />
                  </div>
                  <p className="text-white/80">Live deal status tracking and updates</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0080FF]" />
                  </div>
                  <p className="text-white/80">Automated client notifications</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0080FF]" />
                  </div>
                  <p className="text-white/80">Seamless CRM integration</p>
                </div>
              </div>

              {/* Premium play button with pulsing rings */}
              <div className="w-full max-w-md mt-6">
                <AudioPlayer
                  src="/audio/a%20proper%20inquery_processed.wav"
                  title="Deal Status"
                />
              </div>
            </motion.div>

            {/* Right Side - Deal Status Call Transcript with GlowCard (lg:order-1 for alternating) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="lg:order-1"
            >
              <GlowCard className="rounded-2xl">
                <div className="group bg-[#080808] rounded-2xl p-6 border border-white/10 min-h-auto sm:min-h-[300px] md:min-h-[400px] hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4F1AD6]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="space-y-4 relative z-10">
                    {/* Call Header with LIVE indicator */}
                    <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                          <BarChart3 className="w-5 h-5 text-[#0080FF]" />
                        </div>
                        <div className="absolute inset-0 bg-[#0080FF]/20 rounded-full blur-lg -z-10" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Status Update Call</h4>
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-2 h-2 rounded-full bg-emerald-400"
                            animate={{ opacity: [1, 0.4, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                          <span className="text-emerald-400 text-xs font-medium">LIVE</span>
                        </div>
                      </div>
                    </div>

                    {/* Call Transcript with Auto-scroll Animation */}
                    <div className="space-y-3 max-h-80 overflow-hidden relative">
                      <motion.div
                        className="space-y-3"
                        animate={{ y: [0, -360] }}
                        transition={{
                          duration: 12,
                          ease: "linear",
                          repeat: Infinity,
                          repeatDelay: 0
                        }}
                      >
                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">What's the current status of my closing?</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">Your closing is scheduled for Friday, March 15th at 2:00 PM at 123 Main Street. I'll send you a reminder 24 hours before.</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">What documents do I need to bring?</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">You'll need a valid photo ID and proof of funds. I can also send you a detailed checklist via email.</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">Perfect, please send that checklist. Thank you!</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 3 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">Done! I've sent the checklist to your email. You're all set for Friday at 2 PM.</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        {/* Duplicate messages for seamless loop */}
                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">What's the current status of my closing?</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">Your closing is scheduled for Friday, March 15th at 2:00 PM at 123 Main Street. I'll send you a reminder 24 hours before.</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">What documents do I need to bring?</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">You'll need a valid photo ID and proof of funds. I can also send you a detailed checklist via email.</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">Perfect, please send that checklist. Thank you!</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 3 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">Done! I've sent the checklist to your email. You're all set for Friday at 2 PM.</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scheduler Section */}
      <section id="scheduler-section" className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0080FF]/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="container mx-auto max-w-full lg:max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20">
                <Calendar className="w-4 h-4 text-[#0080FF]" />
                <span className="text-sm text-[#0080FF] font-medium">Smart Automation</span>
              </motion.div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-[#0080FF]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Scheduler</h3>
              </div>

              <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Smart scheduling</h4>

              <p className="text-lg text-white/80 leading-relaxed">
                Automatically schedule appointments, send reminders, and manage your calendar.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0"><Check className="w-3 h-3 text-[#0080FF]" /></div>
                  <p className="text-white/80">Automated appointment booking</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0"><Check className="w-3 h-3 text-[#0080FF]" /></div>
                  <p className="text-white/80">Smart reminder notifications</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0"><Check className="w-3 h-3 text-[#0080FF]" /></div>
                  <p className="text-white/80">Calendar integration and management</p>
                </div>
              </div>

              <div className="w-full max-w-md mt-6">
                <AudioPlayer
                  src="/audio/perfect_note_processed.wav"
                  title="Scheduler"
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, amount: 0.3 }}>
              <GlowCard className="rounded-2xl">
                <div className="group bg-[#080808] rounded-2xl p-6 border border-white/10 min-h-auto sm:min-h-[300px] md:min-h-[400px] hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0080FF]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-[#0080FF]" />
                        </div>
                        <div className="absolute inset-0 bg-[#0080FF]/20 rounded-full blur-lg -z-10" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Scheduling Call</h4>
                        <div className="flex items-center gap-2">
                          <motion.div className="w-2 h-2 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                          <span className="text-emerald-400 text-xs font-medium">LIVE</span>
                        </div>
                      </div>
                    </div>

                    {/* Call Transcript with Auto-scroll Animation */}
                    <div className="space-y-3 max-h-80 overflow-hidden relative">
                      <motion.div
                        className="space-y-3"
                        animate={{ y: [0, -360] }}
                        transition={{
                          duration: 12,
                          ease: "linear",
                          repeat: Infinity,
                          repeatDelay: 0
                        }}
                      >
                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">I need to schedule a time to sign my closing documents.</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">I can help you with that. What's your preferred date and time? I'll check availability and update your appointment.</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">How about Tuesday at 10 AM or Wednesday at 2 PM?</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">Perfect! I can see available slots on Tuesday at 10 AM or Wednesday at 2 PM. Which one works best for you?</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">Tuesday at 10 AM works perfect for me.</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 3 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">Excellent! I've scheduled your closing for Tuesday at 10 AM. I'll send you a confirmation email and reminder.</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warm Transfers Section - ALTERNATING LAYOUT */}
      <section id="warm-transfers-section" className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#4F1AD6]/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="container mx-auto max-w-full lg:max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6 lg:order-2"
            >
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20">
                <Users className="w-4 h-4 text-[#4F1AD6]" />
                <span className="text-sm text-[#4F1AD6] font-medium">Human + AI</span>
              </motion.div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[#0080FF]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Warm Transfers</h3>
              </div>

              <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Seamless handoffs</h4>

              <p className="text-lg text-white/80 leading-relaxed">
                Transfer complex inquiries to the right team member with full context and notes.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0"><Check className="w-3 h-3 text-[#0080FF]" /></div>
                  <p className="text-white/80">Intelligent call routing to specialists</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0"><Check className="w-3 h-3 text-[#0080FF]" /></div>
                  <p className="text-white/80">Full context transfer with conversation history</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0"><Check className="w-3 h-3 text-[#0080FF]" /></div>
                  <p className="text-white/80">Seamless handoff experience</p>
                </div>
              </div>

              <div className="w-full max-w-md mt-6">
                <AudioPlayer
                  src="/audio/good%20handover%20can%20be%20used_processed.wav"
                  title="Warm Transfers"
                />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true, amount: 0.3 }} className="lg:order-1">
              <GlowCard className="rounded-2xl">
                <div className="group bg-[#080808] rounded-2xl p-6 border border-white/10 min-h-auto sm:min-h-[300px] md:min-h-[400px] hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4F1AD6]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                          <Users className="w-5 h-5 text-[#0080FF]" />
                        </div>
                        <div className="absolute inset-0 bg-[#0080FF]/20 rounded-full blur-lg -z-10" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Transfer Call</h4>
                        <div className="flex items-center gap-2">
                          <motion.div className="w-2 h-2 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
                          <span className="text-emerald-400 text-xs font-medium">LIVE</span>
                        </div>
                      </div>
                    </div>

                    {/* Call Transcript with Auto-scroll Animation */}
                    <div className="space-y-3 max-h-80 overflow-hidden relative">
                      <motion.div
                        className="space-y-3"
                        animate={{ y: [0, -360] }}
                        transition={{
                          duration: 12,
                          ease: "linear",
                          repeat: Infinity,
                          repeatDelay: 0
                        }}
                      >
                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">I have a complex title issue that needs human attention.</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">I understand this requires specialized attention. Let me transfer you to our senior title officer, Sarah, who can help with this specific situation.</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">That would be great, thank you.</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">Perfect! I'm connecting you now. Sarah has all the context from our conversation and will be able to help you immediately.</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 2.5 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                            <Users className="w-4 h-4 text-[#4F1AD6]" />
                          </div>
                          <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                            <p className="text-white text-sm">Hello Sarah, I was just transferred from the AI assistant about my title issue...</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-3 justify-end"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 3 }}
                        >
                          <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                            <p className="text-gray-800 text-sm">Hi! I'm Sarah, your senior title officer. I can see from the AI's notes that you have a complex title issue. How can I help you today?</p>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                            <Zap className="w-4 h-4 text-[#0080FF]" />
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outbound Campaigns Section */}
      <section id="outbound-campaigns-section" className="py-8 sm:py-12 lg:py-16 xl:py-20 px-4 bg-black relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#0080FF]/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="container mx-auto max-w-full lg:max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6"
            >
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20">
                <Target className="w-4 h-4 text-[#0080FF]" />
                <span className="text-sm text-[#0080FF] font-medium">Outreach Engine</span>
              </motion.div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#0080FF]" />
                </div>
                <h3 className="text-lg font-semibold text-white">Outbound Campaigns</h3>
              </div>

              <h4 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Reach more clients</h4>

              <p className="text-lg text-white/80 leading-relaxed">
                Title Voice runs outbound campaigns that keep clients engaged and closings on track.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0080FF]" />
                  </div>
                  <p className="text-white/80">Automated follow-up and retention campaigns</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0080FF]" />
                  </div>
                  <p className="text-white/80">24/7 proactive client outreach</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#0080FF]/15 border border-[#0080FF]/25 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#0080FF]" />
                  </div>
                  <p className="text-white/80">Targeted marketing and appointment booking</p>
                </div>
              </div>

              {/* Premium play button with pulsing rings */}
              <div className="w-full max-w-md mt-6">
                <AudioPlayer
                  src="/audio/Leave%20a%20message_processed.wav"
                  title="Outbound Service"
                />
              </div>
            </motion.div>

            {/* Right Side - Outbound Campaign Call Transcript */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 min-h-auto sm:min-h-[300px] md:min-h-[400px]"
            >
              <div className="space-y-4">
                {/* Call Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-[#0080FF]" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Outbound Call</h4>
                    <p className="text-white/80 text-sm">In Progress</p>
                  </div>
                </div>

                {/* Call Transcript with Auto-scroll Animation */}
                <div className="space-y-3 max-h-80 overflow-hidden relative">
                  <motion.div
                    className="space-y-3"
                    animate={{ y: [0, -360] }}
                    transition={{
                      duration: 12,
                      ease: "linear",
                      repeat: Infinity,
                      repeatDelay: 0
                    }}
                  >
                    <motion.div
                      className="flex items-start gap-3 justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-gray-800 text-sm">Hello! This is Title Voice calling about your upcoming closing. Is this a good time to discuss your closing details?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-[#0080FF]" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                        <Users className="w-4 h-4 text-[#4F1AD6]" />
                      </div>
                      <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-white text-sm">Yes, I have a few questions about my closing next week.</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3 justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                    >
                      <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-gray-800 text-sm">Perfect! I'm here to help. Your closing is scheduled for Friday at 2 PM. What specific questions do you have?</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-[#0080FF]" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                        <Users className="w-4 h-4 text-[#4F1AD6]" />
                      </div>
                      <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-white text-sm">What documents do I need to bring and is there anything I should prepare?</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3 justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.5 }}
                    >
                      <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-gray-800 text-sm">You'll need a valid photo ID and proof of funds. I can send you a detailed checklist and also set up a reminder call for Thursday.</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-[#0080FF]" />
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 3 }}
                    >
                      <div className="w-8 h-8 rounded-full bg-[#4F1AD6]/10 border border-[#4F1AD6]/20 flex items-center justify-center">
                        <Users className="w-4 h-4 text-[#4F1AD6]" />
                      </div>
                      <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] rounded-2xl rounded-tl-sm p-3 max-w-xs">
                        <p className="text-white text-sm">That would be very helpful, thank you!</p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex items-start gap-3 justify-end"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 3.5 }}
                    >
                      <div className="bg-white rounded-2xl rounded-tr-sm p-3 max-w-xs">
                        <p className="text-gray-800 text-sm">Excellent! I've sent the checklist to your email and scheduled a reminder call for Thursday. You're all set for Friday at 2 PM!</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-[#0080FF]" />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section >


      {/* How It Works Section - Dark Minimalist Grid */}
      <section className="py-12 lg:py-20 px-4 bg-black">
        <div className="container mx-auto max-w-full lg:max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-white max-w-full md:max-w-3xl mx-auto">
              Get started in three simple steps and transform your title company operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
              >
                {/* Main Card */}
                <motion.div
                  className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center relative overflow-hidden h-full flex flex-col"
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(0, 128, 255, 0.3)",
                    boxShadow: "0 20px 40px rgba(0, 128, 255, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glowing Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#0080FF]/5 via-transparent to-[#4F1AD6]/5 rounded-2xl opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    className="w-20 h-20 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/25 flex items-center justify-center mx-auto mb-4 relative z-10"
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      boxShadow: "0 0 30px rgba(0, 128, 255, 0.4)"
                    }}
                    transition={{ duration: 0.6 }}
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(0, 128, 255, 0.2)",
                        "0 0 30px rgba(0, 128, 255, 0.3)",
                        "0 0 20px rgba(0, 128, 255, 0.2)"
                      ]
                    }}
                  >
                    <step.icon className="w-8 h-8 text-[#0080FF]" />
                  </motion.div>

                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4 text-white relative z-10">{step.title}</h3>
                    <p className="text-white/80 leading-relaxed relative z-10">{step.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Gradient Divider */}

      {/* Trust Stats Bar */}
      <section className="py-12 lg:py-16 px-4 bg-black relative z-10">
        <div className="container mx-auto max-w-full lg:max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 text-center">
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

      {/* Testimonials Section */}
      <section className="py-12 lg:py-20 px-4 bg-black relative z-10">
        <div className="container mx-auto max-w-full lg:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
              <span className="text-white font-semibold ml-2">4.8/5</span>
            </div>
            <p className="text-xl text-white/80 max-w-full md:max-w-3xl mx-auto">
              Trusted by title companies across the country
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {[
              {
                name: 'Operations Director',
                role: 'Regional title agency, Southeast',
                text: 'Title Voice reduced our missed calls significantly and saved us thousands per month in staffing costs. The AI handles complex inquiries with ease.',
                metric: 'Fewer missed calls',
                rating: 5
              },
              {
                name: 'Operations Manager',
                role: 'Title agency, Florida',
                text: 'The scheduling automation alone saved our team hours every week. Clients love the instant responses and 24/7 availability.',
                metric: 'Hours saved weekly',
                rating: 5
              },
              {
                name: 'VP of Operations',
                role: 'Multi-state title company',
                text: 'We saw ROI within the first month. The warm transfer feature ensures complex issues get to the right person with full context.',
                metric: 'ROI in 30 days',
                rating: 5
              },
              {
                name: 'Agency Owner',
                role: 'Independent title company, Texas',
                text: "As a small shop, Title Voice gave us enterprise-level phone coverage. Our clients can't tell the difference from a human receptionist.",
                metric: '4.8/5 client rating',
                rating: 5
              },
              {
                name: 'Director of Operations',
                role: 'Title agency, Northeast',
                text: "The CRM integration is seamless. Every call is logged, every deal status is updated in real-time. It's transformed our operations.",
                metric: '100% call logging',
                rating: 5
              },
              {
                name: 'Managing Partner',
                role: 'Multi-location title group, West Coast',
                text: 'We expanded to new locations without hiring additional reception staff. Title Voice scales effortlessly with our growth.',
                metric: 'Scaled without new hires',
                rating: 5
              }
            ].map((testimonial, index) => (
              <ScrollReveal
                key={index}
                animation="fadeUp"
                delay={index * 0.12}
                duration={0.6}
              >
                <GlowCard className="h-full rounded-2xl">
                  <div className="relative p-5 bg-[#080808] rounded-2xl border border-white/10 hover:border-[#0080FF]/20 transition-all duration-300 h-full group">
                    <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-[#0080FF]/0 group-hover:bg-[#0080FF]/50 transition-all duration-300 rounded-full" />
                    <Quote className="w-8 h-8 text-white/10 group-hover:text-white/20 transition-colors mb-3" />
                    <p className="text-white/80 mb-4 leading-relaxed text-sm">{testimonial.text}</p>
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 mb-4"
                      whileHover={{ scale: 1.05 }}
                    >
                      <TrendingUp className="w-3.5 h-3.5 text-[#0080FF]" />
                      <span className="text-xs text-[#0080FF] font-semibold">{testimonial.metric}</span>
                    </motion.div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center text-[#0080FF] font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{testimonial.name}</p>
                        <p className="text-white/50 text-xs">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </GlowCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gradient Divider */}

      {/* Book a Demo Section - Premium Enhanced */}
      <section className="relative py-12 lg:py-20 px-4 bg-black overflow-hidden">
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              opacity: [0.08, 0.12, 0.08],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#0080FF]/15 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              opacity: [0.06, 0.1, 0.06],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4F1AD6]/15 rounded-full blur-[120px]"
          />
        </div>

        <div className="container mx-auto max-w-full lg:max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="px-6 py-2 rounded-full bg-[#0080FF]/5 border border-[#0080FF]/20 backdrop-blur-sm">
                <span className="text-sm font-semibold text-[#0080FF]/70">
                  EXPERIENCE THE DIFFERENCE
                </span>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-white">
                See Title Voice in action
              </span>
            </h2>
            <p className="text-xl text-white/50 mb-4 max-w-full md:max-w-3xl mx-auto">
              Book a personalized demo and see how Title Voice can transform your title company operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-stretch">
            {/* Left Side - Demo Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Connecting Line Between Cards */}
              <div className="absolute left-10 top-20 bottom-20 w-0.5 bg-gradient-to-b from-transparent via-[#0080FF]/20 to-transparent hidden lg:block" />

              <div className="space-y-6 relative">
                {[
                  {
                    number: "01",
                    icon: Play,
                    title: "Live Demo",
                    description: "Watch Title Voice handle real calls and see the AI in action with your specific use cases.",
                    delay: 0.2
                  },
                  {
                    number: "02",
                    icon: Users,
                    title: "Personalized Setup",
                    description: "Get a custom integration plan tailored to your title company's specific needs and workflows.",
                    delay: 0.3
                  },
                  {
                    number: "03",
                    icon: CheckCircle,
                    title: "ROI Analysis",
                    description: "Understand the potential savings and efficiency gains for your specific operation.",
                    delay: 0.4
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay }}
                    className="relative group"
                  >
                    <motion.div
                      className="relative p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm border border-white/10 overflow-hidden"
                      whileHover={{
                        scale: 1.02,
                        y: -4,
                        borderColor: "rgba(0, 128, 255, 0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {/* Animated background glow on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: "radial-gradient(circle at 50% 50%, rgba(0, 128, 255, 0.08), transparent 70%)"
                        }}
                      />

                      {/* Shimmer effect on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0080FF]/10 to-transparent"
                          animate={{
                            x: ['-200%', '200%']
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>

                      <div className="relative z-10 flex items-start gap-5">
                        {/* Number Badge */}
                        <div className="relative flex-shrink-0">
                          <motion.div
                            className="absolute inset-0 bg-[#0080FF]/15 rounded-2xl blur-xl"
                            animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.3
                            }}
                          />
                          <div className="relative w-16 h-16 rounded-2xl bg-[#0080FF]/10 flex items-center justify-center border border-[#0080FF]/20 shadow-lg shadow-[#0080FF]/10">
                            <span className="text-2xl font-bold text-[#0080FF]">{item.number}</span>
                          </div>
                        </div>

                        {/* Icon */}
                        <div className="relative flex-shrink-0">
                          <motion.div
                            className="w-14 h-14 rounded-xl bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center group-hover:bg-[#0080FF]/20 transition-colors"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <item.icon className="w-7 h-7 text-[#0080FF]" />
                          </motion.div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-1">
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-all">
                            {item.title}
                          </h3>
                          <p className="text-white/60 leading-relaxed text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Corner accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0080FF]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Premium CTA Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:sticky lg:top-24 h-fit"
            >
              <div className="relative bg-gradient-to-br from-[#0d1117] to-[#0a0d12] rounded-3xl p-8 border border-[#0080FF]/20 overflow-hidden group backdrop-blur-sm">
                {/* Animated gradient orbs */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.18, 0.1],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-0 right-0 w-64 h-64 bg-[#0080FF]/20 rounded-full blur-[80px]"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.08, 0.15, 0.08],
                    x: [0, -30, 0],
                    y: [0, 50, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute bottom-0 left-0 w-64 h-64 bg-[#4F1AD6]/20 rounded-full blur-[80px]"
                />

                {/* Sparkles effect - subtle */}
                <div className="absolute inset-0 opacity-15">
                  <Sparkles particleColor="#0080FF" particleDensity={30} speed={0.3} />
                </div>

                <div className="relative z-10">
                  {/* Top Badge */}
                  <motion.div
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 backdrop-blur-sm mb-8"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Calendar className="w-5 h-5 text-[#0080FF]" />
                    <span className="text-sm font-bold text-[#0080FF]">
                      Book Your Evaluation
                    </span>
                  </motion.div>

                  {/* Main Title */}
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    Ready to Get{" "}
                    <span className="text-white">
                      Started?
                    </span>
                  </h3>

                  <p className="text-white/60 mb-10 text-lg leading-relaxed">
                    Schedule a personalized demo and see Title Voice in action
                  </p>

                  {/* Benefits checklist */}
                  <div className="space-y-3 mb-10">
                    {[
                      "Live AI demonstration",
                      "Custom integration planning",
                      "ROI calculation for your operation"
                    ].map((benefit, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center flex-shrink-0">
                          <CheckCircle className="w-3 h-3 text-[#0080FF]" />
                        </div>
                        <span className="text-white/80">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Main CTA Button */}
                  <motion.button
                    onClick={openModal}
                    className="relative w-full bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white px-10 py-6 rounded-2xl font-bold text-xl transition-all duration-300 flex items-center gap-3 justify-center mx-auto group/btn overflow-hidden shadow-2xl shadow-[#0080FF]/20"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 20px 60px rgba(0, 128, 255, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-200%', '200%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    <Calendar className="w-6 h-6 group-hover/btn:rotate-12 transition-transform relative z-10" />
                    <span className="relative z-10">Schedule Your Demo</span>
                    <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform relative z-10" />
                  </motion.button>

                  {/* Bottom info */}
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0080FF]/70" />
                      <span className="text-white/50 text-sm">Free consultation</span>
                    </div>
                    <div className="w-1 h-1 bg-white/30 rounded-full" />
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0080FF]/70" />
                      <span className="text-white/50 text-sm">No obligation to sign up</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div >
  )
}

export default Home
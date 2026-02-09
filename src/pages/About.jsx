import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import SparklesBackground from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import { PrimaryButton, OutlineButton } from '../components/Buttons'
import { ArrowRight, Calendar, Phone, PhoneOff, Bot, Plug, Shield, Target, TrendingUp, Headphones, Zap, CheckCircle2, Sparkles as SparklesIcon } from 'lucide-react'
import SEO from '../components/SEO'
import { WordReveal } from '../components/TextAnimations'

// ─── Animated Counter ────────────────────────────────
const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const numericValue = parseFloat(value)

  useEffect(() => {
    if (!isInView) return
    const startTime = performance.now()
    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * numericValue))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, numericValue, duration])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

// ─── Glow Card with Cursor Tracking ─────────────────
const GlowCard = ({ children, className = '', glowColor = 'rgba(0, 128, 255, 0.4)' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <div
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
    >
      {/* Outer glow */}
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
          opacity: opacity * 0.15,
        }}
      />
      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
          opacity: opacity * 0.3,
          maskImage: 'linear-gradient(black, black) content-box, linear-gradient(black, black)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px',
          borderRadius: '1rem',
        }}
      />
      {children}
    </div>
  )
}

// ─── Stagger Container ──────────────────────────────
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 20 }
  }
}

const About = () => {
  const problemStats = [
    { value: '78', prefix: '$', suffix: 'K', label: 'Lost Per Year', sublabel: 'to missed calls' },
    { value: '47', suffix: '+', label: 'Calls to Voicemail', sublabel: 'every single month' },
    { value: '23', suffix: '%', label: 'Calls Unanswered', sublabel: 'during business hours' },
    { value: '5', suffix: 'pm', label: 'Phones Stop', sublabel: 'deals don\'t' },
  ]

  const whatWeDo = [
    {
      icon: Headphones,
      title: '24/7 Call Answering',
      description: 'Every call answered. Holidays, weekends, 2am. Your AI never sleeps, never calls in sick, and never puts a caller on hold.',
    },
    {
      icon: Calendar,
      title: 'Closing Scheduling',
      description: 'The AI checks your calendar in real-time and books closings on the spot. No phone tag. No callbacks.',
    },
    {
      icon: Phone,
      title: 'Status Inquiries',
      description: '"Where\'s my closing?" stops interrupting your team. The AI pulls file status and answers instantly.',
    },
    {
      icon: Plug,
      title: 'Software Integration',
      description: 'Direct integration with Qualia, SoftPro, ResWare, and RamQuest. The AI sees your calendar and files in real-time.',
    },
    {
      icon: Shield,
      title: 'Smart Escalation',
      description: 'When a caller needs a real person, the AI knows. It transfers with full context so your team isn\'t starting from scratch.',
    },
    {
      icon: TrendingUp,
      title: 'Revenue Recovery',
      description: 'Capture the deals that used to walk out the door. One saved closing pays for months of service.',
    },
  ]

  const steps = [
    {
      number: '01',
      title: 'Connect',
      description: 'We connect Title Voice to your existing phone system and title production software. Setup takes 48 hours, not weeks.',
      icon: Plug,
    },
    {
      number: '02',
      title: 'Configure',
      description: 'We customize your AI agent with your company\'s name, processes, and workflows. It sounds like part of your team from day one.',
      icon: Bot,
    },
    {
      number: '03',
      title: 'Capture',
      description: 'Start capturing every call 24/7. After-hours, weekends, holidays. The calls that used to go to voicemail now get handled.',
      icon: Target,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      <SEO
        title="About Us"
        description="Title Voice exists because title companies shouldn't lose deals to voicemail. We built an AI voice agent that answers every call, 24/7."
        canonical="/about"
      />

      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesBackground particleColor="#38bdf8" particleDensity={50} minSize={1} maxSize={2.5} speed={0.8} />
      </div>
      <VoiceWaves />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative min-h-screen px-4 pt-32 pb-20">
        {/* Spheremotion Background */}
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
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0080FF]/20 border border-[#0080FF]/40 backdrop-blur-md shadow-lg shadow-[#0080FF]/20 mb-8 hover:bg-[#0080FF]/25 hover:border-[#0080FF]/50 transition-all duration-300"
            >
              <SparklesIcon className="w-4 h-4 text-[#0080FF]" />
              <span className="text-sm text-[#0080FF] font-semibold">Our Story</span>
            </motion.div>

            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                <WordReveal text="Never Miss Another Call" delay={0.3} />
              </h1>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-4xl font-medium text-white">
                Built for title companies, powered by AI.
              </h2>
            </div>

            <motion.p
              className="text-xl text-white/80 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We built Title Voice because title companies shouldn't lose $78,000 a year to voicemail. When a realtor calls after hours and no one answers, they call your competitor. We fix that.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ THE PROBLEM ═══════════════════ */}
      <section className="py-28 lg:py-36 px-4 relative">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <span className="section-badge mb-6 inline-flex">
              <span className="section-badge-dot" />
              The Problem
            </span>
            <h2 className="text-display-sm font-bold mb-6">
              <span className="text-white">The Calls You </span>
              <span className="gradient-text">Never Knew You Missed</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              When a realtor calls at 6pm and gets voicemail, they don't leave a message.
              They call someone else. You never see the missed call. The deal just disappears.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {problemStats.map((stat, index) => (
              <motion.div key={index} variants={staggerItem}>
                <GlowCard>
                  <div className="text-center p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm">
                    <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2 leading-none">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix || ''} />
                    </div>
                    <p className="text-white/80 text-sm font-semibold mb-1">{stat.label}</p>
                    <p className="text-white/30 text-xs">{stat.sublabel}</p>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ THE STORY ═══════════════════ */}
      <section className="py-28 lg:py-36 px-4 relative overflow-hidden">
        {/* Decorative side gradient */}
        <div className="absolute left-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-[#0080FF]/20 to-transparent" />

        <div className="container mx-auto relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-badge mb-8 inline-flex">
              <span className="section-badge-dot" />
              Why We Built This
            </span>

            <div className="space-y-8 mt-8">
              <motion.p
                className="text-xl sm:text-2xl text-white/60 leading-relaxed"
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.8 }}
              >
                Every title company owner we talked to said the same thing:
                <span className="text-white font-semibold"> "We don't miss that many calls."</span>
              </motion.p>

              <motion.p
                className="text-xl sm:text-2xl text-white/60 leading-relaxed"
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Then they looked at their phone records.
              </motion.p>

              <motion.div
                className="relative pl-6 border-l-2 border-[#0080FF]/30"
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <p className="text-xl sm:text-2xl text-white/60 leading-relaxed">
                  One owner in Florida told us she was "pretty confident" her team caught most calls.
                  We pulled her numbers together. <span className="text-white font-semibold">47 calls went to voicemail last month.</span> She
                  went quiet for about 10 seconds. Then she said:
                </p>
                <p className="text-2xl sm:text-3xl font-semibold text-[#0080FF] mt-4 italic">
                  "I had no idea."
                </p>
              </motion.div>

              <motion.p
                className="text-xl sm:text-2xl text-white/60 leading-relaxed"
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                47 calls. Average deal value $1,250. That's <span className="text-white font-bold">$58,750 in opportunities</span> she
                never even knew existed. Not lost deals. Deals that never had a chance to happen.
              </motion.p>

              <motion.p
                className="text-xl sm:text-2xl text-white/60 leading-relaxed"
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                That's why we built Title Voice. Not to replace your team, but to make sure
                <span className="text-white font-semibold"> no call goes unanswered. Ever.</span> At 5pm, at 9pm, on Christmas morning.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ WHAT WE DO ═══════════════════ */}
      <section className="py-28 lg:py-36 px-4 relative">
        {/* Dot pattern background */}
        <div className="absolute inset-0 bg-dot-pattern bg-dot-lg opacity-30 pointer-events-none" />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <span className="section-badge mb-6 inline-flex">
              <span className="section-badge-dot" />
              What We Do
            </span>
            <h2 className="text-display-sm font-bold mb-6">
              <span className="text-white">Your AI </span>
              <span className="gradient-text">Receptionist</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
              An AI voice agent built specifically for title companies. It sounds human,
              knows your systems, and handles calls your team can't get to.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
          >
            {whatWeDo.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div key={index} variants={staggerItem}>
                  <GlowCard className="h-full">
                    <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] h-full group hover:bg-white/[0.05] transition-all duration-500">
                      <div className="icon-box-lg mb-4 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,128,255,0.15)] transition-all duration-500">
                        <IconComponent className="w-6 h-6 text-[#0080FF]" />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </GlowCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="py-28 lg:py-36 px-4 relative">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <span className="section-badge mb-6 inline-flex">
              <span className="section-badge-dot" />
              How It Works
            </span>
            <h2 className="text-display-sm font-bold mb-6">
              <span className="text-white">Live in </span>
              <span className="gradient-text">48 Hours</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              No months of setup. No complex onboarding. Just results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 z-0">
              <div className="h-full bg-gradient-to-r from-transparent via-[#0080FF]/20 to-transparent" />
            </div>

            {steps.map((step, index) => {
              const StepIcon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 150, damping: 20 }}
                  className="relative z-10"
                >
                  <GlowCard className="h-full">
                    <div className="relative p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] h-full group hover:bg-white/[0.05] transition-all duration-500">
                      {/* Step number watermark */}
                      <div className="absolute top-4 right-6 text-7xl font-bold text-white/[0.03] group-hover:text-[#0080FF]/[0.06] transition-colors duration-700 select-none">
                        {step.number}
                      </div>

                      <div className="icon-box-lg mb-4 group-hover:scale-110 transition-transform duration-500">
                        <StepIcon className="w-6 h-6 text-[#0080FF]" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-white/50 leading-relaxed">{step.description}</p>
                    </div>
                  </GlowCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════ COMPANY A vs B ═══════════════════ */}
      <section className="py-28 lg:py-36 px-4 relative">
        <div className="container mx-auto relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-20"
          >
            <span className="section-badge mb-6 inline-flex">
              <span className="section-badge-dot" />
              The Difference
            </span>
            <h2 className="text-display-sm font-bold mb-6">
              <span className="text-white">Which Company </span>
              <span className="gradient-text">Are You?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Company A */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 100, damping: 20 }}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-red-500/15 hover:border-red-500/25 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <PhoneOff className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-red-400">Company A</h3>
                  <p className="text-white/30 text-xs">Without Title Voice</p>
                </div>
              </div>
              <ul className="space-y-3">
                {[
                  'Voicemail after 5pm',
                  'Realtors wait until morning',
                  'Missed calls = missed revenue',
                  '"We\'ll return your call during business hours"',
                  'Losing relationships one voicemail at a time',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-white/50"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                  >
                    <span className="text-red-400/60 mt-1 text-sm font-mono">✕</span>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company B */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 100, damping: 20 }}
              className="p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-[#0080FF]/20 hover:border-[#0080FF]/35 transition-all duration-500 relative overflow-hidden"
            >
              {/* Subtle gradient glow */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-[#0080FF]/[0.04] rounded-full blur-[80px] pointer-events-none" />

              <div className="flex items-center gap-3 mb-5 relative">
                <div className="icon-box w-12 h-12 rounded-xl">
                  <Phone className="w-5 h-5 text-[#0080FF]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0080FF]">Company B</h3>
                  <p className="text-white/30 text-xs">With Title Voice</p>
                </div>
              </div>
              <ul className="space-y-3 relative">
                {[
                  'Every call answered, 24/7/365',
                  'Closings scheduled at 9pm on a Sunday',
                  'Status inquiries handled automatically',
                  'Realtors get helped, not frustrated',
                  'Building loyalty while the team sleeps',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-white/80"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i, duration: 0.4 }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0080FF] mt-0.5 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-white/30 mt-10 text-sm"
          >
            Company B charges the same rates. The only difference is who picks up the phone.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section className="py-16 lg:py-24 px-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-dot-pattern bg-dot-lg opacity-20 pointer-events-none" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0, 128, 255, 0.12) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(79, 26, 214, 0.08) 0%, transparent 70%)' }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-display-sm sm:text-display font-bold mb-8 leading-tight">
              <span className="text-white">Stop Losing Deals</span>
              <br />
              <span className="gradient-text-hero">To Voicemail</span>
            </h2>
            <p className="text-lg sm:text-xl text-white/50 mb-14 max-w-2xl mx-auto leading-relaxed">
              See what happens when every call gets answered. 15-minute demo.
              No pressure. Just the truth about your missed calls.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <PrimaryButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
                Schedule a Demo
                <ArrowRight className="w-5 h-5" />
              </PrimaryButton>
              <Link to="/contact">
                <OutlineButton size="lg">
                  <Phone className="w-5 h-5" />
                  Contact Us
                </OutlineButton>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

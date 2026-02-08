import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
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
  Crown,
  Award,
  Rocket,
  ChevronDown,
  Quote
} from 'lucide-react'
import SparklesCanvas from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import BorderBeam from '../components/BorderBeam'
import { WordReveal } from '../components/TextAnimations'
import { PrimaryButton, OutlineButton } from '../components/Buttons'
import EnhancedCTA from '../components/EnhancedCTA'
import { prices, pricingPlans as basePricingPlans, testimonials, faqs, calculateSavings } from '../data/pricingData'
import SEO from '../components/SEO'

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly')
  const [openFaq, setOpenFaq] = useState(null)

  // Add dynamic pricing to imported plans
  const pricingPlans = basePricingPlans.map(plan => ({
    ...plan,
    price: prices[billingCycle][plan.name.toLowerCase()]
  }))

  return (
    <div className="min-h-screen bg-black text-white relative">
      <SEO
        title="Pricing"
        description="Transparent pricing for Title Voice AI receptionist. Professional and Enterprise plans with free demo available."
        canonical="/pricing"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />
      {/* Background Canvas Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesCanvas particleColor="#38bdf8" particleDensity={60} speed={0.3} />
      </div>
      <VoiceWaves />

      {/* Hero Section */}
      <section className="relative min-h-screen px-4 pt-32 pb-20">
        {/* Spheremotion Background */}
        <div className="absolute inset-0">
          <img src="/spheremotion.gif" alt="Animated sphere motion background" className="w-full h-full object-cover opacity-60" />
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
              <span className="text-sm text-[#0080FF] font-semibold">Transparent Pricing</span>
            </motion.div>

            <div className="mb-6">
              <WordReveal
                text="Simple, Transparent Pricing"
                className="text-6xl md:text-8xl font-bold text-white"
                trigger="mount"
              />
            </div>
            <div className="mb-8">
              <h1 className="text-2xl md:text-4xl font-medium text-white">
                Choose the perfect plan for your title company.
              </h1>
            </div>

            <motion.p
              className="text-xl text-white/80 mb-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Start with our Professional plan and scale as your business grows. All plans include our core AI features with no hidden fees.
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
            <OutlineButton size="lg" onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}>
              <Calendar className="w-5 h-5" /> Schedule Demo
            </OutlineButton>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-4">
              All plans include our core AI features
            </p>

            {/* Discount Highlight */}
            <motion.p
              className="text-lg text-emerald-400 font-semibold mb-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              💰 Save 20% with yearly subscription!
            </motion.p>

            {/* Monthly/Yearly Toggle */}
            <div className="flex items-center justify-center gap-4">
              <span className={`font-medium transition-colors ${billingCycle === 'monthly' ? 'text-white' : 'text-white/50'}`}>Monthly</span>
              <motion.button
                className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 p-1"
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-6 h-6 rounded-full bg-[#0080FF]"
                  animate={{ x: billingCycle === 'yearly' ? 32 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  style={{ boxShadow: '0 0 12px rgba(0, 128, 255, 0.6)' }}
                />
              </motion.button>
              <span className={`font-medium transition-colors ${billingCycle === 'yearly' ? 'text-white' : 'text-white/50'}`}>
                Yearly
                {billingCycle === 'yearly' && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="ml-2 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full"
                  >
                    Save 20%
                  </motion.span>
                )}
              </span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="h-full"
              >
                <GlowCard className="h-full rounded-2xl">
                  <div className="relative p-8 bg-[#080808] rounded-2xl border border-white/10 transition-all duration-500 hover:border-[#0080FF]/30 hover:shadow-[0_0_30px_rgba(0,128,255,0.3)] h-full flex flex-col overflow-hidden">
                    <BorderBeam size={320} duration={8} delay={index * 4} colorFrom="#0080FF" colorTo="#4F1AD6" borderWidth={2.5} />

                    {/* Badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                        <plan.icon className="w-6 h-6 text-[#0080FF]" />
                      </div>
                      <div className="bg-[#0080FF]/10 border border-[#0080FF]/20 px-3 py-1 rounded-full">
                        <span className="text-[#0080FF] text-sm font-medium">{plan.badge}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>

                    <div className="mb-4">
                      <motion.span
                        key={plan.price}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold text-white"
                      >
                        ${plan.price}
                      </motion.span>
                      <span className="text-white/60 ml-2">{plan.period}</span>

                      {/* Savings Message */}
                      <AnimatePresence>
                        {billingCycle === 'yearly' && (
                          <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2"
                          >
                            <span className="inline-block text-sm font-semibold text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
                              Save ${calculateSavings(plan.monthlyPrice, plan.yearlyPrice).toLocaleString()} per year!
                            </span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <p className="text-white/60 mb-6 text-sm leading-relaxed">{plan.description}</p>

                    <div className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                            <Check className="w-3 h-3 text-emerald-400" />
                          </div>
                          <span className="text-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <PrimaryButton
                      size="card"
                      onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}
                    >
                      Book an Appointment
                    </PrimaryButton>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-black relative z-10">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
              <span className="text-white font-semibold ml-2">4.9/5</span>
            </div>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Trusted by title companies across the country
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlowCard className="h-full rounded-2xl">
                  <div className="relative p-6 bg-[#080808] rounded-2xl border border-white/10 hover:border-[#0080FF]/20 transition-all duration-300 h-full group">
                    <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-[#0080FF]/0 group-hover:bg-[#0080FF]/50 transition-all duration-300 rounded-full" />
                    <Quote className="w-8 h-8 text-white/10 group-hover:text-white/20 transition-colors mb-4" />
                    <p className="text-white/70 mb-6 leading-relaxed text-sm">{testimonial.text}</p>
                    <motion.div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 mb-6"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 relative z-10">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Everything you need to know about our pricing and plans
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-2xl bg-[#080808] border border-white/10 overflow-hidden"
              >
                <motion.button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  aria-label={`Toggle ${faq.question}`}
                >
                  <h3 className="text-xl font-bold text-white pr-4">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-white/60 flex-shrink-0" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-6 pb-6 text-white/70">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <EnhancedCTA
        title="Ready to Get Started?"
        highlightText="Get Started"
        description="Join thousands of title companies who have transformed their operations with Title Voice."
      />
    </div>
  )
}

export default Pricing

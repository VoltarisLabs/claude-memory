import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Star,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  FileText,
  Check,
  Sparkles as SparklesIcon,
  Crown,
  ChevronDown,
  Quote,
  Zap,
  Shield
} from 'lucide-react'
import SparklesCanvas from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import BorderBeam from '../components/BorderBeam'
import { WordReveal } from '../components/TextAnimations'
import { PrimaryButton, OutlineButton } from '../components/Buttons'
import EnhancedCTA from '../components/EnhancedCTA'
import { prices, pricingPlans as basePricingPlans, testimonials, faqs } from '../data/pricingData'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ScrollReveal from '../components/ScrollReveal'
import GradientMesh from '../components/GradientMesh'

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState(null)
  const [isYearly, setIsYearly] = useState(false)

  // Add dynamic pricing based on toggle
  const pricingPlans = basePricingPlans.map(plan => ({
    ...plan,
    price: isYearly
      ? prices.yearly[plan.name.toLowerCase()]
      : prices.monthly[plan.name.toLowerCase()],
    originalPrice: isYearly
      ? prices.monthly[plan.name.toLowerCase()]
      : null
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
        {/* Animated Gradient Mesh Background */}
        <GradientMesh variant="purple" intensity="low" />

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
              <span className="text-sm text-[#0080FF] font-semibold">Transparent Pricing</span>
            </motion.div>

            <div className="mb-6">
              <WordReveal
                text="Simple, Transparent Pricing"
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4"
            >
              <Link to="/roi-calculator" className="text-[#0080FF] hover:text-[#0080FF]/80 transition-colors text-sm font-medium">
                Calculate your potential savings →
              </Link>
            </motion.div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Choose Your Plan
              </span>
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              All plans include our core AI features
            </p>

            {/* Monthly / Yearly Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <button
                onClick={() => setIsYearly(false)}
                className={`relative px-7 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  !isYearly ? 'text-white' : 'text-white/35 hover:text-white/55'
                }`}
              >
                {!isYearly && (
                  <motion.div
                    layoutId="billingToggle"
                    className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(0,128,255,0.4),0_0_60px_rgba(0,128,255,0.15)]"
                    style={{ background: 'linear-gradient(135deg, #0080FF, #4F1AD6)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Monthly</span>
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`relative px-7 py-2.5 rounded-full text-sm font-semibold transition-colors duration-300 flex items-center gap-2 ${
                  isYearly ? 'text-white' : 'text-white/35 hover:text-white/55'
                }`}
              >
                {isYearly && (
                  <motion.div
                    layoutId="billingToggle"
                    className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(0,128,255,0.4),0_0_60px_rgba(0,128,255,0.15)]"
                    style={{ background: 'linear-gradient(135deg, #0080FF, #4F1AD6)' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Yearly</span>
                <span className="relative z-10 text-[10px] font-bold bg-emerald-400/90 text-black px-2 py-0.5 rounded-full leading-none tracking-wide">
                  -20%
                </span>
              </button>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
            {pricingPlans.map((plan, index) => (
              <ScrollReveal
                key={plan.name}
                animation="fadeUp"
                delay={index * 0.2}
                duration={0.6}
                className="h-full"
              >
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="h-full">
                  <GlowCard className="h-full rounded-2xl">
                  <div className="relative p-6 bg-[#080808] rounded-2xl border border-white/10 transition-all duration-500 hover:border-[#0080FF]/30 h-full flex flex-col overflow-hidden">
                    <BorderBeam size={320} duration={8} delay={index * 4} colorFrom="#0080FF" colorTo="#4F1AD6" borderWidth={2} />

                    {/* Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                          <plan.icon className="w-5 h-5 text-[#0080FF]" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                      </div>
                      <div className="bg-[#0080FF]/10 border border-[#0080FF]/20 px-3 py-1 rounded-full">
                        <span className="text-[#0080FF] text-xs font-medium">{plan.badge}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <div className="flex items-baseline gap-1">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={plan.price}
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 15 }}
                            transition={{ duration: 0.25 }}
                            className="text-3xl font-bold tracking-tight text-white"
                          >
                            ${plan.price.toLocaleString()}
                          </motion.span>
                        </AnimatePresence>
                        <span className="text-white/40 text-sm">/ month</span>
                      </div>
                      {isYearly && plan.originalPrice && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="flex items-center gap-2 mt-1.5"
                        >
                          <span className="text-white/30 line-through text-sm">${plan.originalPrice.toLocaleString()}/mo</span>
                          <span className="text-emerald-400 text-xs font-semibold">
                            Save ${((plan.originalPrice - plan.price) * 12).toLocaleString()}/yr
                          </span>
                        </motion.div>
                      )}
                      {isYearly && (
                        <p className="text-white/25 text-xs mt-0.5">Billed at ${(plan.price * 12).toLocaleString()}/yr</p>
                      )}
                    </div>

                    <p className="text-white/50 text-sm mb-4">{plan.description}</p>

                    {/* Included minutes */}
                    <div className="mb-4 py-2.5 px-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                      <span className="text-sm font-semibold text-white/80">{plan.projects}</span>
                      <span className="text-white/40 text-xs ml-2">
                        (${plan.overageRate}/min overage)
                      </span>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 mb-4 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span className="text-white/80 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <PrimaryButton
                      size="card"
                      onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}
                    >
                      Get Started <ArrowRight className="w-5 h-5" />
                    </PrimaryButton>
                  </div>
                </GlowCard>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Shared Contract Terms - below cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto mt-10"
          >
            <div className="rounded-xl bg-white/[0.02] border border-white/[0.06] px-6 py-5">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-white/50">
                <div className="flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span><span className="text-white/80 font-medium">One-time setup:</span> $5,000</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#0080FF]/60" />
                  <span>3-month pilot → 12-month term</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-white/30" />
                  <span>30 days written notice to cancel</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-400/60" />
                  <span>30-day money-back guarantee</span>
                </div>
              </div>
            </div>
          </motion.div>
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
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Trusted by title companies across the country
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal
                key={index}
                animation="fadeUp"
                delay={index * 0.12}
                duration={0.6}
              >
                <GlowCard className="h-full rounded-2xl">
                  <div className="relative p-6 bg-[#080808] rounded-2xl border border-white/10 hover:border-[#0080FF]/20 transition-all duration-300 h-full group">
                    <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-[#0080FF]/0 group-hover:bg-[#0080FF]/50 transition-all duration-300 rounded-full" />
                    <Quote className="w-8 h-8 text-white/10 group-hover:text-white/20 transition-colors mb-4" />
                    <p className="text-white/80 mb-6 leading-relaxed text-sm">{testimonial.text}</p>
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
              </ScrollReveal>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
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
                      <div className="px-6 pb-6">
                        <p className="text-white/80">{faq.answer}</p>
                        {faq.link && (
                          <Link to={faq.link.href} className="text-[#0080FF] hover:text-[#0080FF]/80 transition-colors text-sm font-medium mt-2 inline-block">
                            {faq.link.text}
                          </Link>
                        )}
                      </div>
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
        description="See how title companies are transforming their operations with Title Voice."
      />
    </div>
  )
}

export default Pricing

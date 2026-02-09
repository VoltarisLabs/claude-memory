import React from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, Clock, Headphones, BarChart3, Sparkles } from 'lucide-react'
import SparklesCanvas from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import BorderBeam from '../components/BorderBeam'
import ROICalculatorComponent from '../components/ROICalculator'
import EnhancedCTA from '../components/EnhancedCTA'
import SEO from '../components/SEO'

const ROICalculator = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduce Staffing Costs',
      description: 'Replace or augment expensive reception staff with 24/7 AI coverage'
    },
    {
      icon: Clock,
      title: 'Never Miss a Call',
      description: 'Capture every opportunity with instant AI answering, day or night'
    },
    {
      icon: Headphones,
      title: 'Better Client Experience',
      description: 'Instant responses, no hold times, consistent professionalism'
    },
    {
      icon: BarChart3,
      title: 'Full Visibility',
      description: 'Every call logged, transcribed, and tracked in your CRM'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SEO
        title="ROI Calculator"
        description="Calculate your potential savings with Title Voice AI receptionist. See how much you can save on staffing and missed calls."
        canonical="/roi-calculator"
      />

      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesCanvas particleColor="#38bdf8" particleDensity={60} speed={0.3} />
      </div>
      <VoiceWaves />

      {/* Hero */}
      <section className="relative min-h-[40vh] sm:min-h-[45vh] px-4 pt-24 sm:pt-32 pb-12 sm:pb-16">
        <div className="absolute inset-0">
          <video src="/spheremotion.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-48 sm:h-64 bg-gradient-to-t from-black via-black/80 to-transparent" />

        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent"
          >
            Calculate Your ROI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-full md:max-w-3xl mx-auto"
          >
            See how much your title company can save with AI-powered call handling.
          </motion.p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-6 sm:py-8 lg:py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-full lg:max-w-5xl">
          <ROICalculatorComponent />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-20 px-4 relative z-10 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto max-w-full lg:max-w-6xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0080FF]/10 to-[#4F1AD6]/10 border border-[#0080FF]/20 mb-6">
              <Sparkles className="w-4 h-4 text-[#0080FF]" />
              <span className="text-sm text-white/80 font-medium">Additional Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                Beyond the Numbers
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-full md:max-w-2xl mx-auto">
              Title Voice delivers value beyond cost savings
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5, type: 'spring' }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="h-full"
              >
                <GlowCard glowColor="#0080FF">
                  <div className="relative p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#0a0a0a] to-[#050505] rounded-2xl border-2 border-white/10 hover:border-[#0080FF]/30 transition-all duration-500 h-auto sm:h-[140px] md:h-[160px] flex flex-col sm:flex-row items-start gap-3 sm:gap-4 md:gap-6 overflow-hidden group">
                    {/* BorderBeam effect */}
                    <BorderBeam
                      size={200}
                      duration={15}
                      delay={index * 2}
                      colorFrom="#0080FF"
                      colorTo="#4F1AD6"
                    />

                    {/* Background gradient orb */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0080FF]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Icon */}
                    <div className="relative">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0080FF]/20 to-[#4F1AD6]/10 border-2 border-[#0080FF]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#0080FF]/50 transition-all duration-500"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <benefit.icon className="w-7 h-7 text-[#0080FF]" />
                        {/* Icon glow */}
                        <div className="absolute inset-0 bg-[#0080FF]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 relative z-10">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#0080FF] transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Hover shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                      <div
                        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(0,128,255,0.03) 45%, rgba(0,128,255,0.06) 50%, rgba(0,128,255,0.03) 55%, transparent 100%)',
                        }}
                      />
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
        title="See These Savings in Action"
        highlightText="in Action"
        description="Schedule a personalized demo and see how Title Voice transforms your operations"
      />
    </div>
  )
}

export default ROICalculator

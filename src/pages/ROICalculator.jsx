import React from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, Clock, Headphones, BarChart3 } from 'lucide-react'
import SparklesCanvas from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
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
    <div className="min-h-screen bg-black text-white relative">
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
            Calculate Your ROI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            See how much your title company can save with AI-powered call handling.
          </motion.p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-12 lg:py-16 px-4 relative z-10">
        <div className="container mx-auto max-w-5xl">
          <ROICalculatorComponent />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 lg:py-16 px-4 relative z-10 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Beyond the Numbers
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <GlowCard>
                  <div className="p-6 bg-[#080808] rounded-xl border border-white/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-[#0080FF]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
                      <p className="text-white/60 text-sm">{benefit.description}</p>
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

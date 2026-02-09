import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'
import Sparkles from './Sparkles'
import { PrimaryButton, OutlineButton } from './Buttons'

/**
 * EnhancedCTA — Premium Call-to-Action section
 * Features: Sparkles background, breathing orb, dot grid, gradient text, animated buttons
 * Used across: Solutions, Workflows, Pricing, Home pages
 */
const EnhancedCTA = ({
  title = 'Ready to Get Started?',
  highlightText = 'Get Started',
  description = 'See how title companies are transforming their operations with Title Voice.',
  primaryButtonText = 'Get Started',
  primaryButtonIcon = <ArrowRight className="w-5 h-5" />,
  secondaryButtonText = 'Schedule Demo',
  secondaryButtonIcon = <Calendar className="w-5 h-5" />,
  primaryButtonAction = () => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank'),
  secondaryButtonAction = () => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank'),
  className = '',
  showSecondaryButton = true,
}) => {
  return (
    <section className={`py-20 px-4 relative z-10 ${className}`}>
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative"
        >
          {/* Sparkles Background */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
            <Sparkles
              particleColor="#38bdf8"
              particleDensity={80}
              speed={0.5}
              minSize={1}
              maxSize={3}
            />
          </div>

          {/* Breathing orb */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0080FF]/10 rounded-full blur-[100px] pointer-events-none"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Secondary purple orb */}
          <motion.div
            className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#4F1AD6]/10 rounded-full blur-[100px] pointer-events-none"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          {/* Dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-white">{title.split(highlightText)[0]}</span>
              <motion.span
                className="bg-gradient-to-r from-[#0080FF] via-[#38bdf8] to-[#4F1AD6] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundSize: '200% 200%'
                }}
              >
                {highlightText}
              </motion.span>
              <span className="text-white">{title.split(highlightText)[1] || '?'}</span>
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {description}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Primary Button with extra pulse effect */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 128, 255, 0.3)',
                    '0 0 40px rgba(0, 128, 255, 0.5)',
                    '0 0 20px rgba(0, 128, 255, 0.3)',
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
                  onClick={primaryButtonAction}
                >
                  {primaryButtonText} {primaryButtonIcon}
                </PrimaryButton>
              </motion.div>

              {/* Secondary Button */}
              {showSecondaryButton && (
                <OutlineButton
                  size="lg"
                  onClick={secondaryButtonAction}
                >
                  {secondaryButtonIcon} {secondaryButtonText}
                </OutlineButton>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EnhancedCTA

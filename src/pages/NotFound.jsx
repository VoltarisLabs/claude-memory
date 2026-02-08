import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SparklesBackground from '../components/Sparkles'
import { PrimaryButton } from '../components/Buttons'
import { ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white relative flex items-center justify-center px-4 overflow-hidden">
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." />

      {/* Sphere Motion GIF — same as landing page */}
      <div className="absolute inset-0">
        <img src="/spheremotion.gif" alt="Animated sphere motion background" className="w-full h-full object-cover opacity-60 scale-75" />
      </div>

      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesBackground particleColor="#38bdf8" particleDensity={40} minSize={1} maxSize={2.5} speed={0.8} />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-[8rem] sm:text-[12rem] font-bold leading-none bg-gradient-to-r from-[#0080FF] via-[#4F1AD6] to-[#00F6FF] bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl text-white/60 mb-4"
        >
          Page Not Found
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-white/50 mb-10"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link to="/">
            <PrimaryButton size="md">
              Back to Home
              <ArrowRight className="w-5 h-5" />
            </PrimaryButton>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound

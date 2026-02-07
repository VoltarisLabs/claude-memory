import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import SparklesBackground from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import { AnimatedInput, AnimatedTextarea, AnimatedSelect } from '../components/AnimatedInput'
import { PrimaryButton } from '../components/Buttons'
import { Mail, MapPin, Phone, Calendar, Send, Loader2, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    const subject = encodeURIComponent(`New inquiry from ${formData.name}${formData.company ? ` at ${formData.company}` : ''}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      (formData.phone ? `Phone: ${formData.phone}\n` : '') +
      (formData.company ? `Company: ${formData.company}\n` : '') +
      (formData.employees ? `Company Size: ${formData.employees}\n` : '') +
      `\nMessage:\n${formData.message}`
    )

    window.location.href = `mailto:support@titlevoice.ai?subject=${subject}&body=${body}`

    await new Promise(resolve => setTimeout(resolve, 500))

    toast.success('Opening your email client. You can also email us directly at support@titlevoice.ai')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', company: '', employees: '', message: '' })
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'support@titlevoice.ai', href: 'mailto:support@titlevoice.ai' },
    { icon: MapPin, label: 'Location', value: 'Akron, OH' },
    { icon: Calendar, label: 'Book a Demo', value: 'Schedule a 15-min call', href: 'https://cal.com/title-voice-ai-tsigyx/30min' },
  ]

  const employeeOptions = [
    { value: '1-10', label: '1-10 employees' },
    { value: '11-50', label: '11-50 employees' },
    { value: '51-200', label: '51-200 employees' },
    { value: '200+', label: '200+ employees' },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative">
      <SEO
        title="Contact Us"
        description="Get in touch with Title Voice. Schedule a demo, ask questions, or learn how AI can transform your title company operations."
        canonical="/contact"
      />

      {/* Background effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <SparklesBackground particleColor="#38bdf8" particleDensity={40} minSize={1} maxSize={2.5} speed={0.8} />
      </div>
      <VoiceWaves />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative pt-36 pb-20 px-4 overflow-hidden">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 right-1/4 w-[400px] h-[400px] rounded-full blur-[150px] pointer-events-none"
          style={{ background: 'rgba(0, 128, 255, 0.06)' }}
          animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span
              className="section-badge mb-8 inline-flex"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
            >
              <span className="section-badge-dot" />
              Get in Touch
            </motion.span>

            <h1 className="text-display-sm sm:text-display font-bold mb-6">
              <motion.span
                className="gradient-text-hero"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                Let's Talk
              </motion.span>
            </h1>

            <motion.p
              className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Ready to stop losing deals to voicemail? Reach out and we'll show you exactly
              how many calls you're missing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ TWO-COLUMN LAYOUT ═══════════════════ */}
      <section className="relative pb-32 px-4">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left Column — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100, damping: 20 }}
            >
              <h2 className="text-heading-2 font-bold text-white mb-10">Contact Information</h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    >
                      <div className="icon-box-md flex-shrink-0 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,128,255,0.15)] transition-all duration-300">
                        <IconComponent className="w-5 h-5 text-[#0080FF]" />
                      </div>
                      <div>
                        <p className="text-white/30 text-sm mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-white hover:text-[#0080FF] transition-colors duration-300 font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-white font-medium">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* Schedule Demo Card */}
              <motion.div
                className="card-glow p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#0080FF]/[0.04] rounded-full blur-[60px] pointer-events-none" />

                <h3 className="text-xl font-bold text-white mb-3 relative">Schedule a Demo</h3>
                <p className="text-white/40 mb-6 leading-relaxed relative">
                  See Title Voice in action. 15-minute demo, no pressure. We'll show you
                  what happens when every call gets answered.
                </p>
                <PrimaryButton
                  size="md"
                  onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}
                >
                  Book a Call
                  <ArrowRight className="w-4 h-4" />
                </PrimaryButton>
              </motion.div>

              <motion.div
                className="mt-8 p-6 rounded-2xl bg-[#0080FF]/[0.03] border border-[#0080FF]/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <p className="text-white/40 text-sm leading-relaxed">
                  Most people ask about their specific situation — which title software they use,
                  how many employees they have, whether it works in their market. We're happy to answer.
                  Just tell us about your setup and we'll give you a straight answer.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 100, damping: 20 }}
            >
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 sm:p-8 lg:p-10 backdrop-blur-sm relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#4F1AD6]/[0.04] rounded-full blur-[80px] pointer-events-none" />

                <h2 className="text-heading-2 font-bold text-white mb-2 relative">Send a Message</h2>
                <p className="text-white/30 mb-10 relative">Fill out the form and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <AnimatedInput
                      label="Full Name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <AnimatedInput
                      label="Email Address"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <AnimatedInput
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <AnimatedInput
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                  <AnimatedSelect
                    label="Company Size"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    options={employeeOptions}
                  />

                  <AnimatedTextarea
                    label="How can we help?"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                  />

                  <PrimaryButton size="md" className="w-full sm:w-auto">
                    {isSubmitting ? (
                      <>
                        Sending...
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </PrimaryButton>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

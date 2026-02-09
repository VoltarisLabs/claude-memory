import { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import SparklesBackground from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import { AnimatedInput, AnimatedTextarea, AnimatedSelect } from '../components/AnimatedInput'
import { PrimaryButton } from '../components/Buttons'
import { Mail, MapPin, Phone, Calendar, Send, Loader2, ArrowRight } from 'lucide-react'
import SEO from '../components/SEO'
import { WordReveal } from '../components/TextAnimations'
import GradientMesh from '../components/GradientMesh'
import SpaceLines from '../components/SpaceLines'
import { validators, formatPhoneNumber, isFormValid } from '../utils/formValidation'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    message: '',
  })
  const [errors, setErrors] = useState({
    name: null,
    email: null,
    phone: null,
    company: null,
    employees: null,
    message: null,
  })
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
    company: false,
    employees: false,
    message: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    // Format phone number as user types
    const formattedValue = name === 'phone' ? formatPhoneNumber(value) : value

    setFormData((prev) => ({ ...prev, [name]: formattedValue }))

    // Real-time validation (only if field was already touched)
    if (touched[name]) {
      const error = validators[name](formattedValue)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target

    // Mark field as touched
    setTouched((prev) => ({ ...prev, [name]: true }))

    // Validate field
    const error = validators[name](value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true
      return acc
    }, {})
    setTouched(allTouched)

    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      newErrors[key] = validators[key](formData[key])
    })
    setErrors(newErrors)

    // Check if form is valid
    const requiredFields = ['name', 'email', 'message']
    const formIsValid = isFormValid(newErrors, formData, requiredFields)

    if (!formIsValid) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)

    try {
      // Send email via Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${formData.name}${formData.company ? ` at ${formData.company}` : ''}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          company_size: formData.employees || 'Not provided',
          message: formData.message
        })
      })

      const result = await response.json()

      if (result.success) {
        toast.success('Message sent successfully! We\'ll get back to you soon.')
        // Reset form
        setFormData({ name: '', email: '', phone: '', company: '', employees: '', message: '' })
        setErrors({ name: null, email: null, phone: null, company: null, employees: null, message: null })
        setTouched({ name: false, email: false, phone: false, company: false, employees: false, message: false })
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      toast.error('Failed to send message. Please try emailing us directly at support@titlevoice.ai')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Check if form is valid for submit button
  const requiredFields = ['name', 'email', 'message']
  const formIsValid = isFormValid(errors, formData, requiredFields)

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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
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
      <section className="relative flex flex-col justify-center items-center text-center min-h-screen overflow-hidden px-4">
        {/* Animated Gradient Mesh Background */}
        <GradientMesh variant="minimal" intensity="low" />

        {/* SpaceLines for futuristic depth */}
        <SpaceLines />

        {/* Blurred gradient orbs */}
        <div className="absolute top-1/4 left-1/5 w-[26rem] h-[26rem] bg-[#0080FF]/20 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#4F1AD6]/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Gradient bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="mb-8"
          >
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <WordReveal text="Let's" delay={0.2} />{' '}
                <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                  <WordReveal text="Talk" delay={0.35} />
                </span>
              </h1>
            </div>
            <div className="mb-8">
              <motion.h2
                className="text-2xl md:text-4xl font-medium text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
              >
                We're here to help you get started with AI voice automation.
              </motion.h2>
            </div>

            <motion.p
              className="text-xl text-white/80 mb-12 max-w-full md:max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, type: "spring", stiffness: 100 }}
            >
              Ready to stop losing deals to voicemail? Reach out and we'll show you exactly how many calls you're missing.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════ TWO-COLUMN LAYOUT ═══════════════════ */}
      <section className="relative pb-32 px-4">
        <div className="container mx-auto max-w-full lg:max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">

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
                className="card-glow p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {/* Subtle corner glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#0080FF]/[0.04] rounded-full blur-[60px] pointer-events-none" />

                <h3 className="text-xl font-bold text-white mb-3 relative">Schedule a Demo</h3>
                <p className="text-white/50 mb-4 leading-relaxed relative">
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
                <p className="text-white/50 text-sm leading-relaxed">
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
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#4F1AD6]/[0.04] rounded-full blur-[80px] pointer-events-none" />

                <h2 className="text-heading-2 font-bold text-white mb-2 relative">Send a Message</h2>
                <p className="text-white/30 mb-8 relative">Fill out the form and we'll get back to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <AnimatedInput
                      label="Full Name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.name}
                      isValid={!errors.name && formData.name.length >= 2}
                      touched={touched.name}
                    />
                    <AnimatedInput
                      label="Email Address"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.email}
                      isValid={!errors.email && formData.email.includes('@')}
                      touched={touched.email}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <AnimatedInput
                      label="Phone Number"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.phone}
                      isValid={!errors.phone && formData.phone.length > 0}
                      touched={touched.phone}
                    />
                    <AnimatedInput
                      label="Company Name"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.company}
                      isValid={!errors.company && formData.company.length >= 2}
                      touched={touched.company}
                    />
                  </div>

                  <AnimatedSelect
                    label="Company Size"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.employees}
                    touched={touched.employees}
                    options={employeeOptions}
                  />

                  <AnimatedTextarea
                    label="How can we help?"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.message}
                    isValid={!errors.message && formData.message.length >= 10}
                    touched={touched.message}
                    maxLength={500}
                    showCharCount={true}
                    rows={3}
                  />

                  <PrimaryButton
                    size="md"
                    className="w-full sm:w-auto"
                    disabled={!formIsValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        Sending...
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : !formIsValid ? (
                      <>
                        Complete Required Fields
                        <Send className="w-4 h-4 opacity-50" />
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

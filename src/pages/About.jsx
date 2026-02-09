import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Target,
  Users,
  Zap,
  Shield,
  TrendingUp,
  CheckCircle,
  Sparkles as SparklesIcon,
  Phone,
  Clock,
  Heart,
  AlertTriangle,
  XCircle,
  DollarSign,
  Calendar as CalendarIcon,
  Quote,
  Search,
  Settings,
  Rocket
} from 'lucide-react'
import Sparkles from '../components/Sparkles'
import VoiceWaves from '../components/VoiceWaves'
import GlowCard from '../components/GlowCard'
import BorderBeam from '../components/BorderBeam'
import { PrimaryButton, OutlineButton } from '../components/Buttons'
import SEO from '../components/SEO'
import { useBooking } from '../context/BookingContext'
import GradientMesh from '../components/GradientMesh'
import SpaceLines from '../components/SpaceLines'
import { WordReveal } from '../components/TextAnimations'
import AnimatedCounter from '../components/AnimatedCounter'

const About = () => {
  const { openModal } = useBooking()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const values = [
    {
      icon: Target,
      title: 'Customer First',
      description: 'Every decision we make starts with your success. We build solutions that solve real problems for title companies.'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data security is paramount. We maintain the highest standards of compliance and data protection.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We continuously evolve our AI technology to stay ahead of industry needs and deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work alongside you as a true partner, invested in your growth and long-term success.'
    },
    {
      icon: TrendingUp,
      title: 'Results Driven',
      description: 'We measure our success by the tangible results we deliver - more calls answered, more deals closed.'
    },
    {
      icon: Heart,
      title: 'Excellence',
      description: 'We hold ourselves to the highest standards in everything we do, from AI accuracy to customer support.'
    }
  ]

  const whatWeDo = [
    {
      icon: Phone,
      title: '24/7 AI Receptionist',
      description: 'Never miss a call with our intelligent AI that handles inquiries, schedules appointments, and provides real-time updates.'
    },
    {
      icon: Clock,
      title: 'Smart Scheduling',
      description: 'Automated closing scheduling that integrates seamlessly with your title software and calendar systems.'
    },
    {
      icon: CheckCircle,
      title: 'Workflow Automation',
      description: 'Streamline repetitive tasks and focus your team on high-value activities that grow your business.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless handoffs between AI and human team members ensure every customer gets personalized attention.'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Detailed reporting and analytics help you optimize operations and make data-driven decisions.'
    },
    {
      icon: Shield,
      title: 'Compliance & Security',
      description: 'Built with title industry compliance in mind, ensuring your operations meet all regulatory requirements.'
    }
  ]

  const stats = [
    { value: 100, suffix: '+', label: 'Title Companies', animated: true },
    { value: 500, suffix: 'K+', label: 'Calls Handled', animated: true },
    { value: 99.9, suffix: '%', label: 'Uptime', animated: true },
    { value: '4.8/5', label: 'Customer Rating', animated: false }
  ]

  const steps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'We learn about your unique challenges and requirements'
    },
    {
      icon: Settings,
      title: 'Design',
      description: 'Custom AI solution tailored to your specific workflow'
    },
    {
      icon: Rocket,
      title: 'Deploy',
      description: 'Seamless integration with your existing systems'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <SEO
        title="About Us"
        description="Learn about Title Voice - the AI-powered solution revolutionizing title company operations with 24/7 virtual assistants and intelligent automation."
      />

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Sparkles particleColor="#38bdf8" particleDensity={60} speed={0.3} />
      </div>
      <VoiceWaves />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-center text-center min-h-screen overflow-hidden px-4">
        {/* Animated Gradient Mesh Background */}
        <GradientMesh variant="default" intensity="low" />

        {/* SpaceLines for futuristic depth */}
        <SpaceLines />

        {/* Blurred gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-[#0080FF]/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#4F1AD6]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                  <WordReveal text="Pioneering Title Operations" delay={0.2} />
                </span>
                <br />
                <span className="text-white">
                  <WordReveal text="with AI-Powered Solutions" delay={0.6} />
                </span>
              </h1>
            </div>

            <motion.p
              className="text-xl text-white/80 mb-12 max-w-full md:max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, type: "spring", stiffness: 100 }}
            >
              We're on a mission to help title companies operate more efficiently, serve customers better, and grow faster with intelligent AI automation.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, type: "spring", stiffness: 100 }}
            >
              <PrimaryButton size="lg" onClick={openModal}>
                Get Started
              </PrimaryButton>
              <OutlineButton size="lg" onClick={() => window.location.href = '/contact'}>
                Contact Us
              </OutlineButton>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 lg:py-20 px-4 relative z-10">
        <div className="container mx-auto relative z-10 max-w-full lg:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Our Mission
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-full md:max-w-2xl mx-auto leading-relaxed">
              To empower title companies with AI technology that transforms operations, enhances customer experiences, and drives sustainable growth in an evolving real estate landscape.
            </p>
          </motion.div>

          <GlowCard>
            <div className="p-6 md:p-8 bg-white/[0.03] border border-white/[0.06] rounded-2xl relative overflow-hidden">
              <BorderBeam size={250} duration={12} delay={0} />

              <div className="relative z-10">
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  Founded by industry veterans who witnessed firsthand the challenges title companies face - from missed calls and scheduling chaos to staffing constraints and operational inefficiencies - we set out to create a better solution.
                </p>
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  Title Voice was born from the belief that artificial intelligence could be a force multiplier for title operations, handling routine tasks with precision while freeing teams to focus on relationships and complex work that requires human expertise.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  Today, we partner with title companies nationwide to transform customer interactions, accelerate business growth, and preserve the personal relationships that set them apart.
                </p>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-12 lg:py-20 px-4 relative z-10">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                What We Do
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-full md:max-w-2xl mx-auto leading-relaxed">
              Comprehensive AI-powered solutions designed specifically for the title industry
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 max-w-full lg:max-w-6xl mx-auto"
          >
            {whatWeDo.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div key={index} variants={staggerItem}>
                  <GlowCard className="h-full">
                    <div className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] h-full group hover:bg-white/[0.05] transition-all duration-500">
                      <div className="w-12 h-12 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center mb-4 group-hover:bg-[#0080FF]/20 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-[#0080FF]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-white/60 leading-relaxed">{item.description}</p>
                    </div>
                  </GlowCard>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-12 lg:py-20 px-4 relative z-10">
        <div className="container mx-auto relative z-10 max-w-full lg:max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Real Results
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-full md:max-w-2xl mx-auto leading-relaxed">
              How we helped a title company discover $30,550 in monthly missed opportunities
            </p>
          </motion.div>

          <GlowCard>
            <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a]/80 border border-white/[0.08]">
              <BorderBeam size={300} duration={15} delay={0} />

              {/* Quote Header */}
              <div className="p-6 md:p-8 border-b border-white/[0.08] relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-[#0080FF]" />
                  </div>
                  <div>
                    <p className="text-lg md:text-xl text-white/90 italic leading-relaxed">
                      "I was pretty confident our team caught most calls. We pulled the numbers together. 47 calls went to voicemail last month. I went quiet for about 10 seconds. Then I said: <span className="text-[#0080FF] font-semibold">I had no idea.</span>"
                    </p>
                    <p className="text-white/50 mt-4">
                      — Title Company Owner, Orlando, FL
                    </p>
                  </div>
                </div>
              </div>

              {/* Problem | Solution Split */}
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/[0.08] relative z-10">
                {/* The Problem */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 flex flex-col relative z-10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">The Problem</h3>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 font-semibold">Invisible Revenue Leak</p>
                        <p className="text-white/60 text-sm">47 calls/month going to voicemail</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 font-semibold">Lost Opportunities</p>
                        <p className="text-white/60 text-sm">Realtors calling competitors instead</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 font-semibold">Unknown Impact</p>
                        <p className="text-white/60 text-sm">No visibility into missed calls</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign className="w-5 h-5 text-red-400" />
                      <p className="text-white/80 font-semibold">Monthly Revenue Loss</p>
                    </div>
                    <p className="text-3xl font-bold text-red-400">$58,750</p>
                    <p className="text-white/50 text-sm mt-1">
                      47 calls × $1,250 avg deal value
                    </p>
                    <p className="text-white/60 text-sm mt-2 pt-2 border-t border-red-500/10">
                      Annual impact: <span className="text-red-400 font-semibold">$705,000</span>
                    </p>
                  </div>
                </motion.div>

                {/* Our Solution */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 md:p-8 flex flex-col relative z-10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
                      <SparklesIcon className="w-5 h-5 text-[#0080FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Our Solution</h3>
                  </div>

                  <div className="space-y-4 flex-grow">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0080FF] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 font-semibold">24/7 AI Call Answering</p>
                        <p className="text-white/60 text-sm">Never miss another opportunity</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0080FF] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 font-semibold">Instant Scheduling</p>
                        <p className="text-white/60 text-sm">Real-time calendar integration</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0080FF] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 font-semibold">Status Inquiries Handled</p>
                        <p className="text-white/60 text-sm">Frees team for high-value work</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#0080FF] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-white/80 font-semibold">Software Integration</p>
                        <p className="text-white/60 text-sm">Works with Qualia, SoftPro, ResWare</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-[#0080FF]/5 border border-[#0080FF]/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-5 h-5 text-[#0080FF]" />
                      <p className="text-white/80 font-semibold">Calls Handled Monthly</p>
                    </div>
                    <p className="text-3xl font-bold text-[#0080FF]">34-50</p>
                    <p className="text-white/50 text-sm mt-1">
                      Average after-hours calls captured
                    </p>
                    <p className="text-white/60 text-sm mt-2 pt-2 border-t border-[#0080FF]/10">
                      <span className="text-[#0080FF] font-semibold">100%</span> of calls answered, 24/7
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Results Summary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="p-6 md:p-8 border-t border-white/[0.08] relative z-10"
              >
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#0080FF]" />
                  The Impact
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                      $705K+
                    </p>
                    <p className="text-white/60 text-sm mt-1">Annual Revenue Saved</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                      47 → 0
                    </p>
                    <p className="text-white/60 text-sm mt-1">Missed Calls Eliminated</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/[0.08]">
                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                      2 weeks
                    </p>
                    <p className="text-white/60 text-sm mt-1">Setup Time</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-12 lg:py-20 px-4 relative z-10">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                How We Work
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-full md:max-w-xl mx-auto">
              A simple, proven process to get you up and running
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-full lg:max-w-5xl mx-auto relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 z-0">
              <div className="h-full bg-gradient-to-r from-transparent via-[#0080FF]/20 to-transparent" />
            </div>

            {steps.map((step, index) => {
              const StepIcon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <GlowCard className="h-full">
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center h-full flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full bg-[#0080FF]/10 backdrop-blur-md flex items-center justify-center mb-4 relative border border-[#0080FF]/30">
                        <StepIcon className="w-8 h-8 text-[#0080FF]" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0080FF] backdrop-blur-sm flex items-center justify-center text-sm font-bold text-white border border-[#0080FF]/50">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-white/60 leading-relaxed">{step.description}</p>
                    </div>
                  </GlowCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 lg:py-20 px-4 relative z-10">
        <div className="container mx-auto relative z-10 max-w-full lg:max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-lg text-white/50 max-w-full md:max-w-2xl mx-auto leading-relaxed">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const ValueIcon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <GlowCard className="h-full">
                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] h-full group hover:bg-white/[0.05] transition-all duration-300">
                      <div className="w-12 h-12 rounded-lg bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <ValueIcon className="w-6 h-6 text-[#0080FF]" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-white/60 leading-relaxed">{value.description}</p>
                    </div>
                  </GlowCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 px-4 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-full md:max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
              <span className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] bg-clip-text text-transparent">
                Our Impact
              </span>
            </h2>

            <p className="text-lg sm:text-xl text-white/50 mb-14 max-w-full md:max-w-2xl mx-auto leading-relaxed">
              Trusted by title companies nationwide to deliver exceptional results
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">
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
                  <div className="text-white/60 text-sm md:text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-full lg:max-w-4xl">
          <GlowCard>
            <div className="relative p-8 md:p-12 bg-gradient-to-br from-[#0080FF]/10 to-[#4F1AD6]/10 border border-white/10 rounded-2xl text-center overflow-hidden">
              <BorderBeam size={300} duration={15} delay={0} />

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Transform Your Title Operations?
                </h2>
                <p className="text-lg text-white/70 mb-8 max-w-full md:max-w-2xl mx-auto">
                  Join hundreds of title companies using Title Voice to streamline operations, improve customer service, and grow their business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <PrimaryButton size="lg" onClick={openModal}>
                    Schedule a Demo
                  </PrimaryButton>
                  <OutlineButton size="lg" onClick={() => window.location.href = '/contact'}>
                    Contact Sales
                  </OutlineButton>
                </div>
              </motion.div>
            </div>
          </GlowCard>
        </div>
      </section>
    </div>
  )
}

export default About

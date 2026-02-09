import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Linkedin, Twitter, ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  const navigate = useNavigate()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const handleFaqClick = () => {
    navigate('/pricing')
    setTimeout(() => {
      const faqEl = document.getElementById('faq')
      if (faqEl) faqEl.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  const footerLinks = {
    product: [
      { name: 'Solutions', href: '/solutions' },
      { name: 'Workflows', href: '/workflows' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'FAQ', href: '#', onClick: handleFaqClick },
      { name: 'Book a Demo', href: 'https://cal.com/title-voice-ai-tsigyx/30min' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact', href: '/contact' }
    ],
    resources: [
      { name: 'Getting Started', href: '/workflow-integration' },
      { name: 'ROI Calculator', href: '/roi-calculator' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  }

  const socialLinks = [
    { icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/company/title-voice/?viewAsMember=true', label: 'LinkedIn' },
    { icon: <Twitter className="w-4 h-4" />, href: 'https://twitter.com/titlevoiceai', label: 'Twitter' },
    { icon: <Mail className="w-4 h-4" />, href: 'mailto:support@titlevoice.ai', label: 'Email' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  }

  return (
    <footer ref={ref} className="relative bg-black text-white">
      {/* Top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="container mx-auto px-6 py-16 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >
          {/* Column 1: Company Info */}
          <motion.div variants={itemVariants}>
            <div className="mb-6">
              <Logo showText={true} size="default" />
            </div>
            <p className="text-white/50 mb-6 leading-relaxed text-sm">
              AI for the Title Industry — Never miss a call again.
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5 mb-6">
              <a href="mailto:support@titlevoice.ai" className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors duration-300 group">
                <Mail className="w-4 h-4 group-hover:text-[#0080FF] transition-colors" />
                <span className="text-sm">support@titlevoice.ai</span>
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Akron, OH</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 bg-white/[0.04] hover:bg-[#0080FF]/20 border border-white/[0.06] hover:border-[#0080FF]/30 rounded-lg flex items-center justify-center transition-all duration-300 text-white/50 hover:text-[#0080FF]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Product */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith('http') ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/35 hover:text-white/80 transition-colors duration-300 text-sm block"
                    >
                      {link.name}
                    </a>
                  ) : link.onClick ? (
                    <button
                      onClick={link.onClick}
                      className="text-white/35 hover:text-white/80 transition-colors duration-300 text-sm text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link to={link.href} className="text-white/35 hover:text-white/80 transition-colors duration-300 text-sm block">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Company + Resources */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5 mb-8">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-white/35 hover:text-white/80 transition-colors duration-300 text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-white/35 hover:text-white/80 transition-colors duration-300 text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Legal */}
          <motion.div variants={itemVariants}>
            <h3 className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-white/35 hover:text-white/80 transition-colors duration-300 text-sm block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="border-t border-white/[0.06] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/25 text-sm">
            &copy; {new Date().getFullYear()} Title Voice. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            {footerLinks.legal.map((link, index) => (
              <Link key={index} to={link.href} className="text-white/25 hover:text-white/50 transition-colors duration-300">
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

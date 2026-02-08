import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Phone, RotateCcw } from 'lucide-react'

const transcript = [
  { role: 'ai', text: 'Thank you for calling Keystone Title. How can I help you today?', delay: 0 },
  { role: 'caller', text: 'Hi, I\'m checking on the status of my closing. My file number is TC-2024-0847.', delay: 2000 },
  { role: 'ai', text: 'Let me look that up for you. I found file TC-2024-0847 — the property at 1245 Oak Street. Your closing is currently in the clear-to-close stage.', delay: 4500 },
  { role: 'caller', text: 'Great! When is it scheduled?', delay: 7500 },
  { role: 'ai', text: 'Your closing is scheduled for February 14th at 2:00 PM at our downtown office. Would you like me to send a confirmation email with the details?', delay: 9000 },
  { role: 'caller', text: 'Yes please! Can you also reschedule to 3:00 PM instead?', delay: 12000 },
  { role: 'ai', text: 'Done! I\'ve moved your closing to 3:00 PM on February 14th. A confirmation has been sent to your email. Is there anything else I can help with?', delay: 14000 },
  { role: 'caller', text: 'No, that\'s perfect. Thanks!', delay: 17000 },
  { role: 'ai', text: 'You\'re welcome! Have a great day. Goodbye!', delay: 18500 },
]

const InteractiveDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [visibleMessages, setVisibleMessages] = useState([])
  const [currentTyping, setCurrentTyping] = useState(null)
  const timerRefs = useRef([])
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [visibleMessages, currentTyping])

  const startDemo = () => {
    reset()
    setIsPlaying(true)

    transcript.forEach((msg, index) => {
      // Show typing indicator first
      const typingTimer = setTimeout(() => {
        setCurrentTyping(msg.role)
      }, msg.delay)

      // Then show the message
      const msgTimer = setTimeout(() => {
        setCurrentTyping(null)
        setVisibleMessages((prev) => [...prev, msg])
        if (index === transcript.length - 1) {
          setIsPlaying(false)
        }
      }, msg.delay + 1000)

      timerRefs.current.push(typingTimer, msgTimer)
    })
  }

  const reset = () => {
    timerRefs.current.forEach(clearTimeout)
    timerRefs.current = []
    setVisibleMessages([])
    setCurrentTyping(null)
    setIsPlaying(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto"
    >
      {/* Phone mockup */}
      <div className="rounded-3xl bg-white/[0.04] border border-white/10 overflow-hidden shadow-2xl">
        {/* Phone header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#0080FF]/10 border border-[#0080FF]/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-[#0080FF]" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Title Voice AI</p>
              <p className="text-white/50 text-xs">Live Demo</p>
            </div>
          </div>
          <div className="flex gap-2">
            {!isPlaying && visibleMessages.length === 0 && (
              <button
                onClick={startDemo}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0080FF] text-white text-sm font-semibold hover:bg-[#0080FF]/80 transition-colors"
              >
                <Play className="w-4 h-4" />
                Play Demo
              </button>
            )}
            {visibleMessages.length > 0 && (
              <button
                onClick={reset}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.04] text-white/60 text-sm hover:bg-white/[0.04] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            )}
          </div>
        </div>

        {/* Chat area */}
        <div className="p-6 min-h-[350px] max-h-[450px] overflow-y-auto space-y-4">
          {visibleMessages.length === 0 && !isPlaying && (
            <div className="flex items-center justify-center h-[300px]">
              <p className="text-white/20 text-sm">Press Play to start the demo call</p>
            </div>
          )}

          <AnimatePresence>
            {visibleMessages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${msg.role === 'caller' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'caller'
                      ? 'bg-[#0080FF] text-white rounded-br-md'
                      : 'bg-white/[0.04] text-white/60 border border-white/10 rounded-bl-md'
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {currentTyping && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${currentTyping === 'caller' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`px-4 py-3 rounded-2xl ${
                currentTyping === 'caller'
                  ? 'bg-[#0080FF]/30'
                  : 'bg-white/[0.04] border border-white/10'
              }`}>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>
    </motion.div>
  )
}

export default InteractiveDemo

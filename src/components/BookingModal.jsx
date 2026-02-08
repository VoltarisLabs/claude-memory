import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useBooking } from '../context/BookingContext'

const BookingModal = () => {
  const { isModalOpen, closeModal } = useBooking()

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal()
    }
    if (isModalOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isModalOpen, closeModal])

  return (
    <AnimatePresence>
      {isModalOpen && (
        <>
          {/* Backdrop with glassmorphism */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-md"
            onClick={closeModal}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, type: 'spring', damping: 25 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white border border-gray-200 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Header */}
              <div className="bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] px-8 py-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Schedule Your Demo
                </h2>
                <p className="text-white/90 mt-2">
                  Choose a time that works for you
                </p>
              </div>

              {/* Cal.com Embed - Scrollable */}
              <div className="overflow-y-auto max-h-[calc(90vh-140px)] bg-white">
                <div className="p-4">
                  <iframe
                    src="https://cal.com/title-voice-ai-tsigyx/30min?embed=true&embedType=inline"
                    style={{
                      width: '100%',
                      height: '650px',
                      border: 'none',
                      borderRadius: '8px'
                    }}
                    title="Cal.com Booking Widget"
                    loading="lazy"
                  />
                </div>

                {/* Fallback Button */}
                <div className="p-6 text-center border-t border-gray-100 bg-gray-50">
                  <p className="text-sm text-gray-600 mb-3">
                    Having trouble with the calendar?
                  </p>
                  <motion.button
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#0080FF] to-[#4F1AD6] text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('https://cal.com/title-voice-ai-tsigyx/30min', '_blank')}
                  >
                    Open in New Tab
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BookingModal

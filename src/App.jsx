import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

// Context
import { BookingProvider } from './context/BookingContext'
import { PreloaderProvider } from './components/Preloader'

// Components
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import ScrollToTop from './components/ScrollToTop'
import FloatingCTA from './components/FloatingCTA'

// Pages
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Workflows from './pages/Workflows'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import TitleSoftware from './pages/TitleSoftware'
import VirtualAssistant from './pages/VirtualAssistant'
import WorkflowIntegration from './pages/WorkflowIntegration'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Onboarding from './pages/Onboarding'
import ROICalculator from './pages/ROICalculator'
import NotFound from './pages/NotFound'

// Animation variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98
  }
}

const pageTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
  duration: 0.4
}

// Page wrapper component for animations
const PageWrapper = ({ children }) => {
  const location = useLocation()

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/solutions" element={<PageWrapper><Solutions /></PageWrapper>} />
        <Route path="/workflows" element={<PageWrapper><Workflows /></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/title-software" element={<PageWrapper><TitleSoftware /></PageWrapper>} />
        <Route path="/virtual-assistant" element={<PageWrapper><VirtualAssistant /></PageWrapper>} />
        <Route path="/workflow-integration" element={<PageWrapper><WorkflowIntegration /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
        <Route path="/onboarding" element={<PageWrapper><Onboarding /></PageWrapper>} />
        <Route path="/roi-calculator" element={<PageWrapper><ROICalculator /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

function App() {
  return (
    <PreloaderProvider minDuration={2000}>
      <BookingProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen bg-black">
            <Navigation />

            <main>
              <AnimatedRoutes />
            </main>

          <Footer />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1e3a8a',
                color: '#fff',
              },
            }}
          />

          {/* Global Booking Modal */}
          <BookingModal />
        </div>

        {/* Floating CTA button - positioned at bottom right */}
        <FloatingCTA />
      </Router>
    </BookingProvider>
    </PreloaderProvider>
  )
}

export default App


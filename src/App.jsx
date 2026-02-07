import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

// Context
import { BookingProvider } from './context/BookingContext'

// Components
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import ScrollToTop from './components/ScrollToTop'

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
import NotFound from './pages/NotFound'

// Animation variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
}

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
}

function App() {
  return (
    <BookingProvider>
      <Router>
        <ScrollToTop />
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen bg-black"
        >
          <Navigation />

          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/workflows" element={<Workflows />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/title-software" element={<TitleSoftware />} />
              <Route path="/virtual-assistant" element={<VirtualAssistant />} />
              <Route path="/workflow-integration" element={<WorkflowIntegration />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>

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
        </motion.div>
      </Router>
    </BookingProvider>
  )
}

export default App


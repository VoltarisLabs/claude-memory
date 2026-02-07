import { motion } from 'framer-motion'
import InfiniteScroll from './InfiniteScroll'

const logos = [
  { name: 'Qualia', text: 'Qualia' },
  { name: 'SoftPro', text: 'SoftPro' },
  { name: 'ResWare', text: 'ResWare' },
  { name: 'RamQuest', text: 'RamQuest' },
  { name: 'Qualia', text: 'Qualia' },
  { name: 'SoftPro', text: 'SoftPro' },
  { name: 'ResWare', text: 'ResWare' },
  { name: 'RamQuest', text: 'RamQuest' },
]

const LogoCloud = ({ heading = 'Trusted by leading title companies' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12"
    >
      {heading && (
        <p className="text-center text-white/30 text-sm uppercase tracking-[0.2em] mb-8 font-['Urbanist']">
          {heading}
        </p>
      )}
      <InfiniteScroll speed="slow" pauseOnHover>
        {logos.map((logo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center px-8 py-4 mx-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-[#0080FF]/20 transition-colors duration-300 flex-shrink-0"
          >
            <span className="text-white/30 hover:text-white/60 transition-colors duration-300 font-bold text-lg font-['Urbanist'] whitespace-nowrap">
              {logo.text}
            </span>
          </div>
        ))}
      </InfiniteScroll>
    </motion.div>
  )
}

export default LogoCloud

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

export const AnimatedInput = ({
  label,
  type = 'text',
  className = '',
  name,
  required = false,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const inputRef = useRef(null)
  const mutedColor = 'rgba(255,255,255,0.4)'

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0)
    if (onChange) onChange(e)
  }

  return (
    <div className={`relative pt-5 ${className}`}>
      <input
        ref={inputRef}
        type={type}
        name={name}
        required={required}
        value={value}
        className="peer w-full bg-transparent border-b-2 border-white/20 py-2 text-white outline-none focus:border-[#0080FF] transition-colors font-['Urbanist']"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
      />
      <motion.label
        className="absolute left-0 text-white/40 pointer-events-none font-['Urbanist']"
        animate={{
          y: isFocused || hasValue ? -20 : 8,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? '#0080FF' : mutedColor,
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-[#0080FF]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </div>
  )
}

export const AnimatedTextarea = ({
  label,
  className = '',
  name,
  required = false,
  value,
  onChange,
  rows = 4,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const mutedColor = 'rgba(255,255,255,0.4)'

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0)
    if (onChange) onChange(e)
  }

  return (
    <div className={`relative pt-5 ${className}`}>
      <textarea
        name={name}
        required={required}
        value={value}
        rows={rows}
        className="peer w-full bg-transparent border-b-2 border-white/20 py-2 text-white outline-none focus:border-[#0080FF] transition-colors resize-none font-['Urbanist']"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
      />
      <motion.label
        className="absolute left-0 text-white/40 pointer-events-none font-['Urbanist']"
        animate={{
          y: isFocused || hasValue ? -20 : 8,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? '#0080FF' : mutedColor,
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-[#0080FF]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isFocused ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ originX: 0 }}
      />
    </div>
  )
}

export const AnimatedSelect = ({
  label,
  className = '',
  name,
  required = false,
  value,
  onChange,
  options = [],
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value && value.length > 0
  const mutedColor = 'rgba(255,255,255,0.4)'

  return (
    <div className={`relative pt-5 ${className}`}>
      <select
        name={name}
        required={required}
        value={value}
        className={`peer w-full bg-transparent border-b-2 border-white/20 py-2 outline-none focus:border-[#0080FF] transition-colors font-['Urbanist'] appearance-none cursor-pointer ${hasValue ? 'text-white' : 'text-transparent'}`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
      >
        <option value="" disabled className="bg-black text-white/40">
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} className="bg-black text-white">
            {opt.label}
          </option>
        ))}
      </select>
      <motion.label
        className="absolute left-0 text-white/40 pointer-events-none font-['Urbanist']"
        animate={{
          y: isFocused || hasValue ? -20 : 8,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? '#0080FF' : mutedColor,
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
      {/* Dropdown arrow */}
      <div className="absolute right-0 top-1/2 translate-y-1 pointer-events-none text-white/30">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  )
}

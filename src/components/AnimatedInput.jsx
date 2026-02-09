import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X } from 'lucide-react'

export const AnimatedInput = ({
  label,
  type = 'text',
  className = '',
  name,
  required = false,
  value,
  onChange,
  onBlur,
  error = null,
  isValid = false,
  touched = false,
  helperText = '',
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const inputRef = useRef(null)
  const mutedColor = 'rgba(255,255,255,0.4)'

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0)
    if (onChange) onChange(e)
  }

  const handleBlur = (e) => {
    setIsFocused(false)
    if (onBlur) onBlur(e)
  }

  // Determine border color based on state
  const getBorderColor = () => {
    if (error && touched) return 'border-red-500'
    if (isValid && touched && hasValue) return 'border-green-500'
    if (isFocused) return 'border-[#0080FF]'
    return 'border-white/20'
  }

  // Determine label color
  const getLabelColor = () => {
    if (error && touched) return '#ef4444' // red-500
    if (isValid && touched && hasValue) return '#22c55e' // green-500
    if (isFocused) return '#0080FF'
    return mutedColor
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative pt-6">
        <motion.label
          className="absolute left-0 top-0 pointer-events-none origin-left"
          animate={{
            y: isFocused || hasValue ? 0 : 24,
            scale: isFocused || hasValue ? 0.85 : 1,
            color: getLabelColor(),
          }}
          transition={{ duration: 0.2 }}
        >
          {label} {required && <span className="text-red-400">*</span>}
        </motion.label>

        <input
          ref={inputRef}
          type={type}
          name={name}
          required={required}
          value={value}
          className={`peer w-full bg-transparent border-b-2 ${getBorderColor()} pt-3 pb-3 pr-10 text-base text-white outline-none transition-colors`}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          onChange={handleChange}
        />

        {/* Success/Error Icons */}
        <AnimatePresence>
          {touched && value && value.trim().length > 0 && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 bottom-3 pointer-events-none"
            >
              {error ? (
                <X className="w-4 h-4 text-red-500" />
              ) : isValid ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Helper Text or Error Message */}
      <AnimatePresence>
        {((helperText && isFocused && !error) || (error && touched)) && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className={`mt-1 text-xs ${error && touched ? 'text-red-400' : 'text-white/50'}`}
          >
            {error && touched ? error : helperText}
          </motion.div>
        )}
      </AnimatePresence>
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
  onBlur,
  rows = 4,
  error = null,
  isValid = false,
  touched = false,
  maxLength = 500,
  showCharCount = true,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [hasValue, setHasValue] = useState(false)
  const mutedColor = 'rgba(255,255,255,0.4)'

  const handleChange = (e) => {
    setHasValue(e.target.value.length > 0)
    if (onChange) onChange(e)
  }

  const handleBlur = (e) => {
    setIsFocused(false)
    if (onBlur) onBlur(e)
  }

  const charCount = value ? value.length : 0
  const percentage = (charCount / maxLength) * 100
  const isNearLimit = percentage > 80

  // Determine border color based on state
  const getBorderColor = () => {
    if (error && touched) return 'border-red-500'
    if (isValid && touched && hasValue) return 'border-green-500'
    if (isFocused) return 'border-[#0080FF]'
    return 'border-white/20'
  }

  // Determine label color
  const getLabelColor = () => {
    if (error && touched) return '#ef4444' // red-500
    if (isValid && touched && hasValue) return '#22c55e' // green-500
    if (isFocused) return '#0080FF'
    return mutedColor
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative pt-6">
        <motion.label
          className="absolute left-0 top-0 pointer-events-none origin-left"
          animate={{
            y: isFocused || hasValue ? 0 : 45,
            scale: isFocused || hasValue ? 0.85 : 1,
            color: getLabelColor(),
          }}
          transition={{ duration: 0.2 }}
        >
          {label} {required && <span className="text-red-400">*</span>}
        </motion.label>

        <textarea
          name={name}
          required={required}
          value={value}
          rows={rows}
          maxLength={maxLength}
          className={`peer w-full bg-transparent border-b-2 ${getBorderColor()} pt-3 pb-3 text-base text-white outline-none transition-colors resize-none`}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </div>

      {/* Character Counter and Error Message */}
      <div className="flex items-center justify-between mt-1">
        <AnimatePresence>
          {error && touched && (
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              transition={{ duration: 0.2 }}
              className="text-xs text-red-400"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        {showCharCount && (
          <motion.div
            className={`text-xs ml-auto ${
              isNearLimit ? 'text-yellow-400' : 'text-white/50'
            }`}
            animate={{
              scale: isNearLimit ? [1, 1.05, 1] : 1,
            }}
            transition={{
              duration: 0.5,
              repeat: isNearLimit ? Infinity : 0,
            }}
          >
            {charCount}/{maxLength}
          </motion.div>
        )}
      </div>
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
  onBlur,
  options = [],
  error = null,
  touched = false,
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const hasValue = value && value.length > 0
  const mutedColor = 'rgba(255,255,255,0.4)'

  const handleBlur = (e) => {
    setIsFocused(false)
    if (onBlur) onBlur(e)
  }

  // Determine border color based on state
  const getBorderColor = () => {
    if (error && touched) return 'border-red-500'
    if (isFocused) return 'border-[#0080FF]'
    return 'border-white/20'
  }

  // Determine label color
  const getLabelColor = () => {
    if (error && touched) return '#ef4444' // red-500
    if (isFocused) return '#0080FF'
    return mutedColor
  }

  return (
    <div className={`relative ${className}`}>
      <div className="relative pt-6">
        <motion.label
          className="absolute left-0 top-0 pointer-events-none origin-left"
          animate={{
            y: isFocused || hasValue ? 0 : 24,
            scale: isFocused || hasValue ? 0.85 : 1,
            color: getLabelColor(),
          }}
          transition={{ duration: 0.2 }}
        >
          {label} {required && <span className="text-red-400">*</span>}
        </motion.label>

        <select
          name={name}
          required={required}
          value={value}
          className={`peer w-full bg-transparent border-b-2 ${getBorderColor()} pt-3 pb-3 pr-10 text-base outline-none transition-colors appearance-none cursor-pointer ${hasValue ? 'text-white' : 'text-transparent'}`}
          onFocus={() => setIsFocused(true)}
          onBlur={handleBlur}
          onChange={onChange}
        >
          <option value="" disabled className="bg-black text-white/50">
          </option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value} className="bg-black text-white">
              {opt.label}
            </option>
          ))}
        </select>

        {/* Dropdown arrow */}
        <div className="absolute right-0 bottom-3 pointer-events-none text-white/30">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Error Message */}
      <AnimatePresence>
        {error && touched && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="mt-1 text-xs text-red-400"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Form validation utilities with helpful error messages

export const validators = {
  // Name validation
  name: (value) => {
    if (!value || !value.trim()) {
      return 'Name is required'
    }
    if (value.trim().length < 2) {
      return 'Name must be at least 2 characters'
    }
    if (/\d/.test(value)) {
      return 'Name cannot contain numbers'
    }
    return null // Valid
  },

  // Email validation
  email: (value) => {
    if (!value || !value.trim()) {
      return 'Email is required'
    }
    if (value.includes(' ')) {
      return 'Email cannot contain spaces'
    }
    if (!value.includes('@')) {
      return 'Email must include @'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(value)) {
      return 'Please enter a valid email address'
    }
    return null // Valid
  },

  // Phone validation (optional field)
  phone: (value) => {
    if (!value || !value.trim()) {
      return null // Valid (optional field)
    }

    // Remove all non-digit characters for validation
    const digitsOnly = value.replace(/\D/g, '')

    if (digitsOnly.length !== 10) {
      return 'Phone must be exactly 10 digits'
    }
    return null // Valid
  },

  // Company validation (optional field)
  company: (value) => {
    if (!value || !value.trim()) {
      return null // Valid (optional field)
    }
    if (value.trim().length < 2) {
      return 'Company name must be at least 2 characters'
    }
    return null // Valid
  },

  // Message validation
  message: (value) => {
    if (!value || !value.trim()) {
      return 'Message is required'
    }
    if (value.trim().length < 10) {
      return 'Message must be at least 10 characters'
    }
    if (value.length > 500) {
      return 'Message cannot exceed 500 characters'
    }
    return null // Valid
  },

  // Employees validation (optional)
  employees: (value) => {
    return null // Always valid (optional select field)
  }
}

// Format phone number as user types
export const formatPhoneNumber = (value) => {
  if (!value) return value

  // Remove all non-digit characters
  const phoneNumber = value.replace(/\D/g, '')

  // Format based on length
  if (phoneNumber.length < 4) {
    return phoneNumber
  }
  if (phoneNumber.length < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
}

// Check if entire form is valid
export const isFormValid = (errors, values, requiredFields) => {
  // Check if any field has errors
  const hasErrors = Object.values(errors).some(error => error !== null)
  if (hasErrors) return false

  // Check if all required fields are filled
  const allRequiredFilled = requiredFields.every(field => {
    const value = values[field]
    return value && value.trim().length > 0
  })

  return allRequiredFilled
}

// Get character count info
export const getCharacterCount = (value, max) => {
  const count = value ? value.length : 0
  const remaining = max - count
  const percentage = (count / max) * 100

  return {
    count,
    max,
    remaining,
    percentage,
    isNearLimit: percentage > 80,
    isOverLimit: count > max
  }
}

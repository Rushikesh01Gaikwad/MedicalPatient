const ACRONYMS = {
  icu: 'ICU',
  bp: 'BP',
  spo2: 'SpO2',
  fio2: 'FiO2',
  uhid: 'UHID',
  id: 'ID',
}

// Converts a camelCase / snake_case / kebab-case key into a readable label.
// e.g. "fallRisk" -> "Fall Risk", "medicoLegalCase" -> "Medico Legal Case"
export function camelToTitle(key) {
  if (!key) return ''
  const spaced = String(key)
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
    .replace(/[_-]+/g, ' ')
    .trim()

  return spaced
    .split(/\s+/)
    .map((word) => {
      const lower = word.toLowerCase()
      if (ACRONYMS[lower]) return ACRONYMS[lower]
      return word.charAt(0).toUpperCase() + word.slice(1)
    })
    .join(' ')
}

export function initialsFromName(name) {
  if (!name) return '?'
  const parts = name.trim().split(/\s+/).filter(Boolean)
  const letters = parts.slice(0, 2).map((p) => p.replace(/[^a-zA-Z]/g, '').charAt(0))
  const joined = letters.join('').toUpperCase()
  return joined || name.charAt(0).toUpperCase()
}

export function isEmptyValue(value) {
  return value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0)
}

export function isComplexValue(value) {
  if (value === null || typeof value !== 'object') return false
  if (Array.isArray(value)) return value.some((item) => item !== null && typeof item === 'object')
  return true
}

// Renders a primitive (string/number/boolean/array-of-primitives) into display text,
// falling back to a contextual "empty" message when there's nothing to show.
export function formatPrimitive(value, fallback = 'None') {
  if (isEmptyValue(value)) return fallback
  if (typeof value === 'boolean') return value ? 'Yes' : 'No'
  if (Array.isArray(value)) return value.map((v) => formatPrimitive(v, fallback)).join(', ')
  return String(value)
}

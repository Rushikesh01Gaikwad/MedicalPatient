import DynamicField from './DynamicField'
import { camelToTitle, formatPrimitive, isComplexValue } from '../utils/format'

const COLOR_MAP = {
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', title: 'text-orange-700' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', title: 'text-purple-700' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', title: 'text-blue-700' },
  red: { bg: 'bg-red-50', border: 'border-red-200', title: 'text-red-700' },
  gray: { bg: 'bg-slate-50', border: 'border-slate-200', title: 'text-slate-700' },
}

// Every section is data-driven: the JSON supplies the title, the color theme,
// and an arbitrary `fields` object — new keys just show up automatically.
export default function TriageSection({ title, color, fields, fallbacks = {} }) {
  const style = COLOR_MAP[color] || COLOR_MAP.gray
  const entries = Object.entries(fields || {})
  const simpleEntries = entries.filter(([, value]) => !isComplexValue(value))
  const complexEntries = entries.filter(([, value]) => isComplexValue(value))

  return (
    <div className={`rounded-lg border ${style.border} ${style.bg} p-4`}>
      <h3 className={`mb-2 text-xs font-bold uppercase tracking-wide ${style.title}`}>{title}</h3>

      {simpleEntries.length > 0 && (
        <p className="text-sm leading-relaxed text-slate-700">
          {simpleEntries.map(([key, value], idx) => (
            <span key={key}>
              <span className="font-medium text-slate-800">{camelToTitle(key)}:</span>{' '}
              {formatPrimitive(value, fallbacks[key] || 'None')}
              {idx < simpleEntries.length - 1 && <span className="mx-1.5 text-slate-400">•</span>}
            </span>
          ))}
        </p>
      )}

      {complexEntries.length > 0 && (
        <div className="mt-2 space-y-2">
          {complexEntries.map(([key, value]) => (
            <DynamicField key={key} fieldKey={key} value={value} fallback={fallbacks[key] || 'None'} />
          ))}
        </div>
      )}

      {simpleEntries.length === 0 && complexEntries.length === 0 && (
        <p className="text-sm text-slate-400">None</p>
      )}
    </div>
  )
}

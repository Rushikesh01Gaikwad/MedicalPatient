import { camelToTitle, isComplexValue, formatPrimitive } from '../utils/format'

// Recursively renders any JSON value (string/number/boolean/array/nested object)
// under a readable label, without ever needing per-field JSX.
export default function DynamicField({ fieldKey, value, fallback = 'None' }) {
  const label = camelToTitle(fieldKey)

  if (!isComplexValue(value)) {
    return (
      <div className="text-sm text-slate-700">
        <span className="font-medium text-slate-800">{label}:</span> {formatPrimitive(value, fallback)}
      </div>
    )
  }

  if (Array.isArray(value)) {
    return (
      <div className="text-sm text-slate-700">
        <span className="font-medium text-slate-800">{label}:</span>
        <ul className="mt-1 ml-4 list-disc space-y-1">
          {value.map((item, idx) => (
            <li key={idx}>
              {item !== null && typeof item === 'object' ? (
                <div className="space-y-0.5">
                  {Object.entries(item).map(([k, v]) => (
                    <DynamicField key={k} fieldKey={k} value={v} fallback={fallback} />
                  ))}
                </div>
              ) : (
                formatPrimitive(item, fallback)
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return (
    <div className="text-sm text-slate-700">
      <span className="font-medium text-slate-800">{label}:</span>
      <div className="mt-1 ml-4 space-y-0.5">
        {Object.entries(value).map(([k, v]) => (
          <DynamicField key={k} fieldKey={k} value={v} fallback={fallback} />
        ))}
      </div>
    </div>
  )
}

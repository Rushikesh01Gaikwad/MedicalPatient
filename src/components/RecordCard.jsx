import { IconFileText } from './icons'

const SEVERITY_STYLES = {
  Critical: { card: 'border-red-200 bg-red-50', badge: 'bg-red-100 text-red-700' },
  Moderate: { card: 'border-amber-200 bg-amber-50', badge: 'bg-amber-100 text-amber-700' },
  Mild: { card: 'border-green-200 bg-green-50', badge: 'bg-green-100 text-green-700' },
}

const DEFAULT_STYLE = { card: 'border-slate-200 bg-slate-50', badge: 'bg-slate-100 text-slate-700' }

export default function RecordCard({ record, onView }) {
  const style = SEVERITY_STYLES[record.severity] || DEFAULT_STYLE
  const pageLabel = record.pages && record.pages.includes('-') ? `Pages ${record.pages}` : `Page ${record.pages}`

  return (
    <div className={`flex gap-3 rounded-lg border p-3 ${style.card}`}>
      <span className="shrink-0 rounded-md bg-white px-2 py-1 text-[11px] font-semibold text-slate-600 shadow-sm">
        {record.date}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${style.badge}`}>{record.severity}</span>
          <span className="text-xs text-slate-600">
            {record.doctor} • {record.department}
          </span>
        </div>
        <p className="mt-1 text-xs leading-relaxed text-slate-700">{record.summary}</p>
        <button
          type="button"
          onClick={() => onView(record)}
          className="mt-1.5 flex items-center gap-1 text-xs font-medium text-blue-600 hover:underline"
        >
          <IconFileText className="h-3.5 w-3.5" />
          View Document ({pageLabel})
        </button>
      </div>
    </div>
  )
}

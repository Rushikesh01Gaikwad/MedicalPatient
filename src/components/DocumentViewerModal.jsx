import { IconFileText, IconX } from './icons'

export default function DocumentViewerModal({ record, onClose }) {
  if (!record) return null
  const pageLabel = record.pages && record.pages.includes('-') ? `Pages ${record.pages}` : `Page ${record.pages}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-xl bg-white p-5 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <IconFileText className="h-5 w-5 text-blue-600" />
            <h3 className="text-sm font-semibold text-slate-800">Document Viewer</h3>
          </div>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <IconX className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-4 space-y-1 text-sm text-slate-600">
          <p>
            <span className="font-medium text-slate-800">{record.department}</span> — {record.doctor}
          </p>
          <p>Document date: {record.date}</p>
          <p>Opening at {pageLabel}</p>
        </div>
        <div className="mt-4 flex h-40 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-400">
          PDF preview placeholder — would render the source document here.
        </div>
      </div>
    </div>
  )
}

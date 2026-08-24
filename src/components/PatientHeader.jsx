import { Link } from 'react-router-dom'
import { initialsFromName } from '../utils/format'
import { IconArrowLeft, IconSparkles } from './icons'

export default function PatientHeader({ patient }) {
  const initials = initialsFromName(patient.name)

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        <Link to="/" className="flex items-center gap-1 hover:text-slate-700">
          <IconArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <span className="flex h-5 w-5 items-center justify-center rounded bg-blue-600 text-[10px] font-semibold text-white">
          {initials}
        </span>
        <span className="text-slate-700">{patient.name} — Profile</span>
      </div>

      <div className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-semibold text-blue-700">
            {initials}
          </span>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-base font-semibold text-slate-900">{patient.name}</h1>
              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600">
                UHID-{patient.uhid}
              </span>
            </div>
            <p className="mt-0.5 text-xs text-slate-500">
              AGE / GENDER / LOCATION: {patient.age} yrs • {patient.gender} • {patient.location}
            </p>
            <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
              <span>
                <span className="font-medium text-slate-700">Visits:</span> {patient.visitCount} recorded visits • Spanning: {patient.visitSpan}
              </span>
              <span>
                <span className="font-medium text-slate-700">Critical Records:</span> {patient.criticalRecords}
              </span>
            </p>
          </div>
        </div>

        <button
          type="button"
          className="flex shrink-0 items-center gap-1.5 self-start rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 transition hover:bg-blue-100 sm:self-center"
        >
          <IconSparkles className="h-3.5 w-3.5" />
          AI Analyse ({patient.name.replace(/^(Mr|Mrs|Ms|Dr)\.?\s*/i, '')})
        </button>
      </div>
    </div>
  )
}

import { IconAlertTriangle } from '../components/icons'
import TriageSection from '../components/TriageSection'
import { triage, TRIAGE_FALLBACKS } from '../data/patientData'

export default function Triage() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <IconAlertTriangle className="h-4 w-4 text-amber-500" />
        <h2 className="text-sm font-semibold text-slate-800">Triage Summary</h2>
      </div>

      <div className="mb-4 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3">
        <p className="text-sm font-semibold text-slate-800">{triage.chiefComplaint || 'No chief complaint recorded'}</p>
        <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700">
          {triage.activeFlags ?? 0} Active Flags
        </span>
      </div>

      <div className="space-y-3">
        {triage.sections.map((section) => (
          <TriageSection
            key={section.id}
            title={section.title}
            color={section.color}
            fields={section.fields}
            fallbacks={TRIAGE_FALLBACKS}
          />
        ))}
      </div>
    </div>
  )
}

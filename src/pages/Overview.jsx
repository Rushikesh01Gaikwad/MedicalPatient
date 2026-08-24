import { IconLayout } from '../components/icons'
import { patient } from '../data/patientData'

const ROWS = [
  ['Name', (p) => p.name],
  ['UHID', (p) => p.uhid],
  ['Aadhaar Number', (p) => p.aadhaar],
  ['Mobile Number', (p) => p.mobile],
  ['Age', (p) => `${p.age} Years`],
  ['Gender', (p) => p.gender],
  ['Location', (p) => p.location],
  ['Visit Summary', (p) => p.visitSummary],
  ['Length of Stay in Hospital', (p) => p.lengthOfStay],
  ['Critical Records', (p) => p.criticalRecords],
]

export default function Overview() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-3">
        <IconLayout className="h-4 w-4 text-slate-500" />
        <h2 className="text-sm font-semibold text-slate-800">Demographics</h2>
      </div>
      <dl>
        {ROWS.map(([label, getValue], idx) => (
          <div
            key={label}
            className={`flex items-center justify-between px-4 py-2.5 text-sm ${
              idx !== ROWS.length - 1 ? 'border-b border-slate-100' : ''
            }`}
          >
            <dt className="text-slate-500">{label}</dt>
            <dd className="font-medium capitalize text-slate-800">{getValue(patient)}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

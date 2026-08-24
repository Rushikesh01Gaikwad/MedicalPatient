import { useMemo, useState } from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { IconHeart } from '../components/icons'
import { vitals } from '../data/patientData'

const RANGES = [
  { key: 'day', label: 'Day', ms: 24 * 60 * 60 * 1000 },
  { key: 'week', label: 'Week', ms: 7 * 24 * 60 * 60 * 1000 },
  { key: 'month', label: 'Month', ms: 30 * 24 * 60 * 60 * 1000 },
  { key: 'all', label: 'All', ms: Infinity },
]

const VITAL_OPTIONS = [
  { key: 'all', label: 'All' },
  { key: 'spo2', label: 'SpO2 only' },
  { key: 'pulse', label: 'Pulse only' },
  { key: 'bp', label: 'Blood Pressure only' },
]

function TrendCard({ title, color, children }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <h3 className="mb-2 text-sm font-semibold" style={{ color }}>
        {title}
      </h3>
      <div className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default function Vitals() {
  const [range, setRange] = useState('all')
  const [vitalFilter, setVitalFilter] = useState('all')

  const filteredReadings = useMemo(() => {
    const rangeDef = RANGES.find((r) => r.key === range)
    if (!rangeDef || rangeDef.ms === Infinity) return vitals.readings
    const latest = new Date(vitals.readings[vitals.readings.length - 1].timestamp).getTime()
    return vitals.readings.filter((r) => latest - new Date(r.timestamp).getTime() <= rangeDef.ms)
  }, [range])

  const showSpo2 = vitalFilter === 'all' || vitalFilter === 'spo2'
  const showPulse = vitalFilter === 'all' || vitalFilter === 'pulse'
  const showBp = vitalFilter === 'all' || vitalFilter === 'bp'

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <IconHeart className="h-4 w-4 text-rose-500" />
            <h2 className="text-sm font-semibold text-slate-800">Vitals Trend</h2>
          </div>
          <select
            value={vitalFilter}
            onChange={(e) => setVitalFilter(e.target.value)}
            className="rounded-md border border-slate-200 px-2 py-1 text-xs text-slate-600"
          >
            {VITAL_OPTIONS.map((opt) => (
              <option key={opt.key} value={opt.key}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
          <span>
            <span className="font-medium text-slate-800">SpO2:</span> {vitals.latest.spo2}
          </span>
          <span>
            <span className="font-medium text-slate-800">Pulse:</span> {vitals.latest.pulse}
          </span>
          <span>
            <span className="font-medium text-slate-800">BP:</span> {vitals.latest.bp}
          </span>
          <span>
            <span className="font-medium text-slate-800">Latest Recorded:</span> {vitals.latest.recordedAt}
          </span>
        </p>

        <div className="mt-3 flex gap-1.5">
          {RANGES.map((r) => (
            <button
              key={r.key}
              type="button"
              onClick={() => setRange(r.key)}
              className={`rounded-md px-3 py-1 text-xs font-medium transition ${
                range === r.key ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {showSpo2 && (
        <TrendCard title="SpO2 Trend" color="#2563eb">
          <LineChart data={filteredReadings}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="label" tick={{ fontSize: 10 }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
            <Tooltip />
            <Line type="monotone" dataKey="spo2" stroke="#2563eb" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </TrendCard>
      )}

      {showPulse && (
        <TrendCard title="Pulse Trend" color="#dc2626">
          <LineChart data={filteredReadings}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="label" tick={{ fontSize: 10 }} />
            <YAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
            <Tooltip />
            <Line type="monotone" dataKey="pulse" stroke="#dc2626" strokeWidth={2} dot={{ r: 3 }} />
          </LineChart>
        </TrendCard>
      )}

      {showBp && (
        <TrendCard title="Blood Pressure Trend" color="#16a34a">
          <LineChart data={filteredReadings}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="label" tick={{ fontSize: 10 }} />
            <YAxis domain={[0, 140]} tick={{ fontSize: 10 }} />
            <Tooltip />
            <Line type="monotone" dataKey="systolic" name="Systolic" stroke="#16a34a" strokeWidth={2} dot={{ r: 3 }} connectNulls />
            <Line type="monotone" dataKey="diastolic" name="Diastolic" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} connectNulls />
          </LineChart>
        </TrendCard>
      )}
    </div>
  )
}

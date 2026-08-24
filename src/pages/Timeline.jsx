import { useMemo, useState } from 'react'
import { IconClock, IconDownload } from '../components/icons'
import Collapsible from '../components/Collapsible'
import RecordCard from '../components/RecordCard'
import DocumentViewerModal from '../components/DocumentViewerModal'
import { timeline } from '../data/patientData'
import { countRecords, downloadCSV, filterYears, recordsToCSV } from '../utils/timelineHelpers'

const FILTERS = [
  { key: 'all', label: 'All Events' },
  { key: 'critical', label: 'Critical' },
]

export default function Timeline() {
  const [filter, setFilter] = useState('all')
  const [viewingRecord, setViewingRecord] = useState(null)

  const totalCount = useMemo(() => countRecords(timeline.years), [])
  const filteredYears = useMemo(() => filterYears(timeline.years, filter), [filter])
  const filteredCount = useMemo(() => countRecords(filteredYears), [filteredYears])

  const handleExport = () => {
    downloadCSV('medical-timeline.csv', recordsToCSV(filteredYears))
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
        <div className="flex items-center gap-2">
          <IconClock className="h-4 w-4 text-slate-500" />
          <h2 className="text-sm font-semibold text-slate-800">Medical Timeline</h2>
          <span className="text-xs text-slate-400">
            {filteredCount} of {totalCount}
          </span>
        </div>
        <button
          type="button"
          onClick={handleExport}
          className="flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:underline"
        >
          <IconDownload className="h-3.5 w-3.5" />
          Export CSV
        </button>
      </div>

      <div className="flex gap-1.5 border-b border-slate-100 px-4 py-3">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={`rounded-md px-3 py-1 text-xs font-medium transition ${
              filter === f.key ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="space-y-4 p-4">
        {totalCount === 0 && <p className="py-8 text-center text-sm text-slate-500">No timeline data found.</p>}

        {totalCount > 0 && filteredYears.length === 0 && (
          <p className="py-8 text-center text-sm text-slate-500">No critical timeline records found.</p>
        )}

        {filteredYears.map((year) => (
          <div key={year.year} className="rounded-lg border border-slate-100">
            <div className="border-b border-slate-100 bg-slate-50 px-3 py-2">
              <p className="text-sm font-semibold text-slate-800">{year.year}</p>
            </div>
            <div className="p-2">
              <Collapsible defaultOpen title={`Admission: ${year.admission} — Discharge: ${year.discharge}`}>
                {year.categories.map((category) => (
                  <Collapsible key={category.name} defaultOpen nested title={category.name}>
                    {category.subcategories.map((sub) => (
                      <Collapsible
                        key={sub.name}
                        nested
                        defaultOpen={sub.records.length > 0}
                        title={sub.name}
                        badge={
                          sub.records.length > 0 ? (
                            <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-[10px] text-slate-500">
                              {sub.records.length}
                            </span>
                          ) : null
                        }
                      >
                        {sub.records.length === 0 ? (
                          <p className="text-xs text-slate-400">No records</p>
                        ) : (
                          sub.records.map((record) => (
                            <RecordCard key={record.id} record={record} onView={setViewingRecord} />
                          ))
                        )}
                      </Collapsible>
                    ))}
                  </Collapsible>
                ))}
              </Collapsible>
            </div>
          </div>
        ))}
      </div>

      <DocumentViewerModal record={viewingRecord} onClose={() => setViewingRecord(null)} />
    </div>
  )
}

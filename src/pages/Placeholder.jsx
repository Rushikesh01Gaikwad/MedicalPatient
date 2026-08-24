export default function Placeholder({ title }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-10 text-center shadow-sm">
      <h2 className="text-sm font-semibold text-slate-700">{title}</h2>
      <p className="mt-1 text-xs text-slate-500">This section is coming soon.</p>
    </div>
  )
}

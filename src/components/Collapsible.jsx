import { useState } from 'react'
import { IconChevronDown, IconChevronRight } from './icons'

export default function Collapsible({ title, defaultOpen = false, badge, nested = false, children }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className={nested ? 'ml-3 border-l border-slate-100 pl-3' : ''}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-xs font-medium text-slate-700 hover:bg-slate-50"
      >
        <span className="flex items-center gap-1.5">
          {open ? <IconChevronDown className="h-3.5 w-3.5 text-slate-400" /> : <IconChevronRight className="h-3.5 w-3.5 text-slate-400" />}
          {title}
        </span>
        {badge}
      </button>
      {open && <div className="space-y-1 pb-1 pl-5">{children}</div>}
    </div>
  )
}

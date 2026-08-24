import { NavLink } from 'react-router-dom'
import {
  IconLayout,
  IconCalendar,
  IconClipboard,
  IconHeart,
  IconAlertTriangle,
  IconClock,
  IconFlask,
  IconScissors,
  IconShield,
} from './icons'

const TABS = [
  { to: 'overview', label: 'Overview', icon: IconLayout },
  { to: 'visits', label: 'Visits', icon: IconCalendar },
  { to: 'clinical-summary', label: 'Clinical Summary', icon: IconClipboard },
  { to: 'vitals', label: 'Vitals', icon: IconHeart },
  { to: 'triage', label: 'Triage', icon: IconAlertTriangle },
  { to: 'timeline', label: 'Timeline', icon: IconClock },
  { to: 'labs-imaging', label: 'Labs & Imaging', icon: IconFlask },
  { to: 'procedures', label: 'Procedures', icon: IconScissors },
  { to: 'insurance', label: 'Insurance', icon: IconShield },
]

export default function NavTabs() {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-sm">
      <div className="flex min-w-max gap-1">
        {TABS.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                isActive ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
              }`
            }
          >
            <Icon className="h-3.5 w-3.5" />
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

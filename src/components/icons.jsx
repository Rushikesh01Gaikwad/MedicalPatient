// Minimal inline stroke-icon set (no external icon library needed).
const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconLayout = (p) => (
  <svg {...base} {...p}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>
)
export const IconCalendar = (p) => (
  <svg {...base} {...p}><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
)
export const IconClipboard = (p) => (
  <svg {...base} {...p}><rect x="6" y="4" width="12" height="17" rx="2" /><path d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1M9 11h6M9 15h6" /></svg>
)
export const IconHeart = (p) => (
  <svg {...base} {...p}><path d="M12 21s-7-4.35-9.5-8.5C.8 9 2 5.5 5.5 4.7 7.8 4.2 10 5.3 12 7.5 14 5.3 16.2 4.2 18.5 4.7 22 5.5 23.2 9 21.5 12.5 19 16.65 12 21 12 21z" /></svg>
)
export const IconAlertTriangle = (p) => (
  <svg {...base} {...p}><path d="M10.3 3.9 1.8 18a1.5 1.5 0 001.3 2.3h17.8a1.5 1.5 0 001.3-2.3L13.7 3.9a1.5 1.5 0 00-2.6 0z" /><path d="M12 9v4M12 17h.01" /></svg>
)
export const IconClock = (p) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
)
export const IconFlask = (p) => (
  <svg {...base} {...p}><path d="M9 2h6M10 2v6.2a2 2 0 01-.4 1.2L5 17a2 2 0 001.6 3.2h10.8A2 2 0 0019 17l-4.6-7.6a2 2 0 01-.4-1.2V2" /></svg>
)
export const IconScissors = (p) => (
  <svg {...base} {...p}><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><path d="M8.5 8.5 20 20M20 4 8.5 15.5" /></svg>
)
export const IconShield = (p) => (
  <svg {...base} {...p}><path d="M12 2 4 5v6c0 5 3.5 8.5 8 11 4.5-2.5 8-6 8-11V5z" /></svg>
)
export const IconArrowLeft = (p) => (
  <svg {...base} {...p}><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
)
export const IconSparkles = (p) => (
  <svg {...base} {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M18 6l-2 2M8 16l-2 2" /></svg>
)
export const IconDownload = (p) => (
  <svg {...base} {...p}><path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" /></svg>
)
export const IconChevronDown = (p) => (
  <svg {...base} {...p}><path d="M6 9l6 6 6-6" /></svg>
)
export const IconChevronRight = (p) => (
  <svg {...base} {...p}><path d="M9 6l6 6-6 6" /></svg>
)
export const IconFileText = (p) => (
  <svg {...base} {...p}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6M9 13h6M9 17h6" /></svg>
)
export const IconX = (p) => (
  <svg {...base} {...p}><path d="M18 6 6 18M6 6l12 12" /></svg>
)

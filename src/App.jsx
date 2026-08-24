import { Navigate, Route, Routes } from 'react-router-dom'
import PatientLayout from './layouts/PatientLayout'
import Overview from './pages/Overview'
import Vitals from './pages/Vitals'
import Timeline from './pages/Timeline'
import Triage from './pages/Triage'
import Placeholder from './pages/Placeholder'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/patient/overview" replace />} />
      <Route path="/patient" element={<PatientLayout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path="overview" element={<Overview />} />
        <Route path="visits" element={<Placeholder title="Visits" />} />
        <Route path="clinical-summary" element={<Placeholder title="Clinical Summary" />} />
        <Route path="vitals" element={<Vitals />} />
        <Route path="triage" element={<Triage />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="labs-imaging" element={<Placeholder title="Labs & Imaging" />} />
        <Route path="procedures" element={<Placeholder title="Procedures" />} />
        <Route path="insurance" element={<Placeholder title="Insurance" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

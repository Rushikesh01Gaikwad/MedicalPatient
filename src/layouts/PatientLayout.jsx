import { Outlet } from 'react-router-dom'
import PatientHeader from '../components/PatientHeader'
import NavTabs from '../components/NavTabs'
import { patient } from '../data/patientData'

export default function PatientLayout() {
  return (
    <div className="mx-auto max-w-6xl space-y-4 px-4 py-6">
      <PatientHeader patient={patient} />
      <NavTabs />
      <Outlet />
    </div>
  )
}

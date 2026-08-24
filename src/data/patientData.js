export const patient = {
  uhid: '96939',
  name: 'Mr. Atmanand',
  age: 40,
  gender: 'male',
  location: 'Hubli 580030',
  aadhaar: '266006651013',
  mobile: '9886665218',
  visitCount: 2,
  visitSpan: '2025-2026',
  criticalRecords: 0,
  visitSummary: '2 recorded visits • Spanning: 2025-2026',
  lengthOfStay: '19 days',
}

export const vitals = {
  latest: {
    spo2: 96,
    pulse: 80,
    bp: 'N/A',
    recordedAt: 'Jan 14, 2026, 05:30 AM',
  },
  readings: [
    { timestamp: '2026-01-01T14:10:00', label: 'Jan 1, 02:10 PM', spo2: 99, pulse: 96, systolic: null, diastolic: null },
    { timestamp: '2026-01-11T18:00:00', label: 'Jan 11, 06:00 PM', spo2: 98, pulse: 84, systolic: 128, diastolic: 78 },
    { timestamp: '2026-01-12T13:55:00', label: 'Jan 12, 01:55 PM', spo2: 99, pulse: 82, systolic: 132, diastolic: 88 },
    { timestamp: '2026-01-13T21:00:00', label: 'Jan 13, 09:00 PM', spo2: 98, pulse: 81, systolic: 126, diastolic: 72 },
    { timestamp: '2026-01-14T05:30:00', label: 'Jan 14, 05:30 AM', spo2: 96, pulse: 80, systolic: null, diastolic: null },
  ],
}

export const timeline = {
  years: [
    {
      year: 2026,
      admission: 'Jan 11, 2026',
      discharge: 'Jan 30, 2026',
      categories: [
        {
          name: 'Financial & Administrative Records',
          subcategories: [
            { name: 'Billing & Payments', records: [] },
            { name: 'Consent', records: [] },
            { name: 'Admission/Registration', records: [] },
          ],
        },
        {
          name: 'Medical Records',
          subcategories: [
            {
              name: 'Discharge',
              records: [
                {
                  id: 't1',
                  date: 'Jan 11',
                  severity: 'Moderate',
                  doctor: 'Dr. Shambhu R',
                  department: 'UROLOGY',
                  summary:
                    'This document is a discharge summary for Mr. Atmanand. He was diagnosed with left renal calculus and underwent multiple procedures including left RIRS and DJ stenting.',
                  pages: '87-89',
                },
              ],
            },
            { name: 'Diagnostic Reports', records: [] },
            { name: 'Clinical Notes', records: [] },
            { name: 'Operative', records: [] },
          ],
        },
        { name: 'Other / Miscellaneous', subcategories: [] },
      ],
    },
    {
      year: 2025,
      admission: 'Dec 17, 2025',
      discharge: 'Dec 20, 2025',
      categories: [
        { name: 'Financial & Administrative Records', subcategories: [] },
        {
          name: 'Medical Records',
          subcategories: [
            {
              name: 'Diagnostic Reports',
              records: [
                {
                  id: 't2',
                  date: 'Dec 18',
                  severity: 'Critical',
                  doctor: 'Dr. Ravi Kumar',
                  department: 'CARDIOLOGY',
                  summary:
                    'ECG showed ST-elevation suggestive of acute MI; patient was escalated to the cath lab immediately.',
                  pages: '12',
                },
              ],
            },
          ],
        },
        { name: 'Other / Miscellaneous', subcategories: [] },
      ],
    },
  ],
}

// Triage data is intentionally generic: the UI walks `sections[].fields`
// and renders whatever keys exist, so new fields/sections need no JSX changes.
export const triage = {
  chiefComplaint: 'Intermittent left flank pain',
  activeFlags: 1,
  sections: [
    {
      id: 'clinicalAlerts',
      title: 'Clinical Alerts',
      color: 'orange',
      fields: {
        allergies: 'Drug, Others',
        highRiskMedications: 'Fentanyl',
        drugInteractions: null,
        medicationChanges: null,
      },
    },
    {
      id: 'riskFlags',
      title: 'Risk Flags',
      color: 'purple',
      fields: {
        reAdmission: false,
        medicoLegalCase: true,
        sepsisMarkers: null,
      },
    },
    {
      id: 'icuVentilatorStatus',
      title: 'ICU / Ventilator Status',
      color: 'blue',
      fields: {
        icuStatus: 'Not in ICU',
        icuDetails: null,
        ventilatorStatus: 'Inactive',
        ventilatorMode: null,
        fio2: null,
      },
    },
  ],
}

// Contextual fallback text shown when a field's value is missing/empty.
export const TRIAGE_FALLBACKS = {
  allergies: 'None',
  highRiskMedications: 'None',
  drugInteractions: 'No interactions',
  medicationChanges: 'None',
  reAdmission: 'No',
  medicoLegalCase: 'No',
  sepsisMarkers: 'None',
  icuStatus: 'Not in ICU',
  icuDetails: 'None',
  ventilatorStatus: 'Inactive',
  ventilatorMode: 'None',
  fio2: 'None',
}

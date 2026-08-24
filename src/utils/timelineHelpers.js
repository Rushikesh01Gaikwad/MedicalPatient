export function filterYears(years, filter) {
  if (filter !== 'critical') return years
  return years
    .map((year) => {
      const categories = year.categories
        .map((category) => {
          const subcategories = category.subcategories
            .map((sub) => ({ ...sub, records: sub.records.filter((r) => r.severity === 'Critical') }))
            .filter((sub) => sub.records.length > 0)
          return { ...category, subcategories }
        })
        .filter((category) => category.subcategories.length > 0)
      return { ...year, categories }
    })
    .filter((year) => year.categories.length > 0)
}

export function countRecords(years) {
  let count = 0
  years.forEach((y) => y.categories.forEach((c) => c.subcategories.forEach((s) => { count += s.records.length })))
  return count
}

function csvEscape(value) {
  const str = String(value ?? '')
  if (/[",\n]/.test(str)) return `"${str.replace(/"/g, '""')}"`
  return str
}

export function recordsToCSV(years) {
  const header = ['Year', 'Admission', 'Discharge', 'Category', 'Sub-Category', 'Date', 'Severity', 'Doctor', 'Department', 'Summary', 'Pages']
  const rows = [header]

  years.forEach((year) => {
    year.categories.forEach((category) => {
      category.subcategories.forEach((sub) => {
        sub.records.forEach((record) => {
          rows.push([
            year.year,
            year.admission,
            year.discharge,
            category.name,
            sub.name,
            record.date,
            record.severity,
            record.doctor,
            record.department,
            record.summary,
            record.pages,
          ])
        })
      })
    })
  })

  return rows.map((row) => row.map(csvEscape).join(',')).join('\n')
}

export function downloadCSV(filename, csvContent) {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

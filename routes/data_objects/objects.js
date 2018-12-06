const position = obj => ({
  id: obj.id,
  title: obj.title
})
const department = obj => ({
  id: obj.id,
  name: obj.name
})
const manager = obj => ({
  ...employee(obj),
  direct_reports: obj.direct_reports
})
const applicant = obj => ({
  id: obj.id,
  Name: obj.f_name + ' ' + obj.l_name,
  email: obj.email,
  phone: obj.phone,
  applications: obj.applications
})
const application = obj => ({
  id: obj.id,
  position: obj.position,
  status: obj.status,
  enabled: obj.enabled
})

const employee = obj => ({
  full_name: obj.f_name + ' ' + obj.l_name,
  first_name: obj.f_name,
  last_name: obj.l_name,
  phone: obj.phone,
  email: obj.email,
  manager: obj.manager
})

const job = obj => ({
  id: obj.id,
  title: obj.title,
  closing_date: obj.close_date.toLocaleDateString('en-us'),
  opening_date: obj.open_date.toLocaleDateString('en-us'),
  priority: obj.priority,
  assigned_to: obj.assigned_to
})

const question = obj => ({
  id: obj.id,
  question: obj.question + '?',
  weight: obj.weight,
  enabled: obj.enabled,
  step: obj.step
})

const step = obj => ({
  id: obj.id,
  name: obj.name,
  level: obj.level,
  required: obj.required,
  weight: obj.weight,
  enabled: obj.enabled
})
const section_evaluation = obj => ({
  skipped: obj.skipped,
  totalGrade: obj.totalGrade,
  status: obj.status,
  step: obj.step,
  application: obj.application
})
const single_evalution = obj => ({})

module.exports = {
  job,
  question,
  step,
  section_evaluation,
  applicant,
  application,
  single_evalution,
  manager,
  department,
  position
}

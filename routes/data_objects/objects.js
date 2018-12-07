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
  phone: obj.phone
})
const application = obj => ({
  id: obj.id,
  job: obj.job,
  grade: obj.total_grade,
  applicant: obj.applicant,
  status: obj.status,
  date_submitted: obj.created_at.toLocaleString('en-us')
})

const employee = obj => ({
  full_name: obj.f_name + ' ' + obj.l_name,
  first_name: obj.f_name,
  last_name: obj.l_name,
  phone: obj.phone,
  email: obj.email,
  manager: obj.manager,
  department: obj.department
})

const job = obj => ({
  id: obj.id,
  position: obj.position,
  close_date: obj.close_date.toLocaleDateString('en-us'),
  open_date: obj.open_date.toLocaleDateString('en-us'),
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
  description: obj.description,
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
  application: obj.application,
  updated_at: obj.updated_at.toLocaleString('en-us'),
  updated_by: obj.updated_by
})
const single_evalution = obj => ({
  points_provided: obj.points_provided,
  notes: obj.notes,
  application: obj.application,
  question: obj.question,
  updated_at: obj.updated_at.toLocaleString('en-us'),
  updated_by: obj.updated_by
})

const account_level = obj => ({
  id: obj.id,
  description: obj.description,
  level: obj.level
})
const account = obj => ({
  id: obj.id,
  username: obj.username,
  enabled: obj.enabled,
  locked: obj.locked,
  login_attempts: obj.login_attempts,
  access_level: obj.access_level
})

module.exports = {
  account_level,
  account,
  job,
  question,
  step,
  section_evaluation,
  applicant,
  application,
  single_evalution,
  manager,
  department,
  position,
  employee
}

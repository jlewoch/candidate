const position = obj => ({
  _: obj.id,
  title: obj.title
})
const department = obj => ({
  _: obj.id,
  name: obj.name
})
const manager = obj => ({
  ...employee(obj),
  direct_reports: obj.direct_reports
})
const applicant = obj => ({
  _: obj.id,
  Name: obj.f_name + ' ' + obj.l_name,
  email: obj.email,
  phone: obj.phone
})
const application = obj => ({
  _: obj.id,
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
  _: obj.id,
  position: obj.position,
  close_date: obj.close_date.toLocaleDateString('en-us'),
  open_date: obj.open_date.toLocaleDateString('en-us'),
  priority: obj.priority,
  assigned_to: obj.assigned_to
})

const question = obj => ({
  _: obj.id,
  question: obj.question + '?',
  weight: obj.weight,
  enabled: obj.enabled,
  step: obj.step
})

const step = obj => ({
  _: obj.id,
  name: obj.name,
  enabledLabel: obj.enabled ? 'Enabled' : 'Disabled',
  level: obj.level,
  required: obj.required,
  requiredLabel: obj.required && 'Required',
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
  provided_points: obj.provided_points,
  notes: obj.notes,
  application: obj.application,
  question: obj.question,
  updated_at: obj.updated_at.toLocaleString('en-us'),
  updated_by: obj.updated_by
})

const account_level = obj => ({
  _: obj.id,
  name: obj.name,
  level: obj.level
})
const account = obj => ({
  _: obj.id,
  username: obj.username,
  enabled: obj.enabled,
  locked: obj.locked,
  login_attempts: obj.login_attempts,
  access_level: obj.access_level
})

const fullName = (fname, lname) => {
  return fname + ' ' + lname
}

module.exports = {
  fullName,
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

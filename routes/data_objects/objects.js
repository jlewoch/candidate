const {
  fullName,
  formatPhoneNumber,
  formatToDate
} = require('./objectServices')
// incoming
const inEmployee = obj => ({
  enabled: obj.enabled,
  f_name: obj.firstName,
  l_name: obj.lastName,
  email: obj.email,
  phone: obj.phone
    .split('')
    .filter(i => Number(i))
    .join(''),
  address: obj.address,
  department: obj.department._,
  manager: obj.manager._,
  position: obj.position
})
const inStep = obj => ({
  name: obj.name,
  level: obj.level,
  points: obj.points,
  enabled: obj.enabled
})

const inQuestion = obj => ({
  question: obj.question,
  points: obj.points,
  enabled: obj.enabled,
  step: obj.step
})
const inPosition = obj => ({
  title: obj.title
})
const inDepartment = obj => ({
  name: obj.name
})
const inJob = obj => ({
  position: obj.position,
  close_date: obj.close_date,
  open_date: obj.open_date,
  priority: obj.priority,
  assigned_to: obj.assigned_to
})

const inAccountLevel = obj => ({
  name: obj.name,
  level: obj.level
})
const inAccount = obj => ({
  username: obj.username,
  enabled: obj.enabled,
  locked: obj.locked,
  login_attempts: obj.login_attempts,
  access_level: obj.access_level
})
// outgoing
const outEmployee = obj => ({
  _: obj.id,
  _a: obj.account,
  deptName: obj.dept,
  activeEmployee: obj.enabled,
  accountStatus: obj.accountStatus,
  full_name: fullName(obj.f_name, obj.l_name),
  first_name: obj.f_name,
  last_name: obj.l_name,
  phone: obj.phone,
  email: obj.email,
  manfull_name: fullName(obj.managerFirst, obj.managerLast),
  manager: obj.manager,
  department: obj.department,
  level: obj.level,
  level_name: obj.name
})
const outStep = obj => ({
  _: obj.id,
  name: obj.name,
  level: obj.level,
  points: obj.points,
  enabled: obj.enabled
})
const manager = obj => ({
  _: obj.id,
  fullName: fullName(obj.f_name, obj.l_name)
})
const outPosition = obj => ({
  _: obj.id,
  title: obj.title
})
const outDepartment = obj => ({
  _: obj.id,
  name: obj.name
})
const outJob = obj => ({
  _: obj.id,
  title: obj.title,
  closing_date: formatToDate(obj.closing_date),
  open_date: formatToDate(obj.open_date),
  priority: obj.priority,
  assigned_to: obj.assigned_to,
  updated_at: obj.updated_at
})
const outQuestion = obj => ({
  _: obj.id,
  question: obj.question,
  weight: obj.weight,
  enabled: obj.enabled,
  step: obj.step
})

const outAccountLevel = obj => ({
  _: obj.id,
  name: obj.name,
  level: obj.level
})
const outAccount = obj => ({
  _: obj.id,
  username: obj.username,
  enabled: obj.enabled,
  locked: obj.locked,
  login_attempts: obj.login_attempts,
  access_level: obj.access_level
})
// need to sort

const applicant = obj => ({
  _: obj.id,
  name: fullName(obj.f_name, obj.l_name),
  email: obj.email,
  phone: formatPhoneNumber(obj.phone),
  applications: obj.applications
})
const application = obj => ({
  _: obj.id,
  job_posting: obj.job_posting,
  grade: obj.total_grade,
  applicant: obj.applicant,
  status: obj.status,
  updated_at: obj.updated_at,
  updated_by: obj.updated_by,
  statusTitle: obj.statusTitle,
  title: obj.title,
  date_submitted: formatToDate(obj.created_at)
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

module.exports = {
  manager,
  outAccountLevel,
  inAccountLevel,
  outAccount,
  inAccount,
  outJob,
  inJob,
  outQuestion,
  inQuestion,
  outDepartment,
  inDepartment,
  outPosition,
  inPosition,
  outEmployee,
  inEmployee,
  outStep,
  inStep,

  section_evaluation,
  applicant,
  application,
  single_evalution
}

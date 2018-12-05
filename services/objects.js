const bcrypt = require('bcrypt')
const department = () => ({})
const manager = () => {}
const applicant = obj => ({
  Name: obj.f_Name + ' ' + obj.l_Name,
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
  first_name: obj.f_name,
  last_name: obj.l_name,
  phone: obj.phone,
  email: obj.email,
  manager: obj.manager
})

const positions = obj => ({
  id: obj.guid,
  title: obj.title,
  closing_date: obj.close_date.toLocaleDateString('en-us'),
  opening_date: obj.open_date.toLocaleDateString('en-us'),
  priority: obj.priority,
  assigned_to: obj.assigned_to
})

const questions = obj => ({
  id: obj.guid,
  question: obj.question,
  weight: obj.weight,
  enabled: obj.enabled,
  step: obj.step
})

const step = obj => ({
  name: obj.name,
  level: obj.level,
  required: obj.required,
  weight: obj.weight,
  enabled: obj.enabled
})
const evaluation = obj => ({
  skipped: skipped || false,
  points_provided: 0,
  totalGrade: 0,
  status: 'Not Started',
  skipped: 0,
  application: obj.application
})

module.exports = {
  step,
  questions,
  account,
  applicant,
  application,
  positions,
  employee
}

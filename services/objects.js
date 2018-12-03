const bcrypt = require('bcrypt')
function account (obj, creator) {
  return {
    username: obj.username,
    employee_id: obj.employeeId,
    created_by: creator,
    updated_by: creator,
    access_level: obj.accessLevel
  }
}

function applicant (obj) {
  return {
    Name: obj.f_Name + ' ' + obj.l_Name,
    email: obj.email,
    phone: obj.phone,
    applications: obj.applications
  }
}
function application (obj) {
  return {
    id: obj.id,
    position: obj.position,
    status: obj.status,
    enabled: obj.enabled
  }
}

function employee (obj, creator) {
  return {
    first_name: obj.f_name,
    last_name: obj.l_name,
    phone: obj.phone,
    email: obj.email,
    manager: obj.manager
  }
}

function positions (obj) {
  console.log(obj)

  return {
    id: obj.guid,
    title: obj.title,
    closing_date: obj.close_date.toLocaleDateString('en-us'),
    opening_date: obj.open_date.toLocaleDateString('en-us'),
    priority: obj.priority,
    assigned_to: obj.assigned_to
  }
}

function questions (obj) {
  return {
    id: obj.guid,
    question: obj.question,
    weight: obj.weight,
    enabled: obj.enabled,
    step: obj.step
  }
}

function step (obj, creator) {
  return {
    name: obj.name,
    level: obj.level,
    required: obj.required,
    weight: obj.weight,
    enabled: obj.enabled
  }
}
function evaluation (obj) {
  return {
    skipped: skipped || false,
    points_provided: 0,
    totalGrade: 0,
    status: 'Not Started',
    skipped: 0,
    application: obj.application
  }
}

module.exports = {
  step,
  questions,
  account,
  applicant,
  application,
  positions,
  employee
}

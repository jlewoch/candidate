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
    fName: obj.fName,
    lName: obj.lName,
    email: obj.email
  }
}
function application (obj) {
  return {
    totalAvailablePoints: obj.total,
    posting_id: obj.positionId,
    applicantId: obj.applicantId,
  }
}

function document (obj) {
  return {
    name: obj.name,
    type: obj.type
  }
}
function employee (obj, creator) {
  return {
    fName: obj.fName,
    lName: obj.lName,
    phone: obj.phone,
    email: obj.email,
    manager: obj.manager,
    createdBy: creator,
    modifiedBy: creator
  }
}

function position (obj, creator) {
  return {
    title: obj.title,
    closingDate: obj.closingDate,
    openingDate: obj.openingDate,
    priority: obj.priority,
    createdBy: creator,
    modifiedBy: creator
  }
}

function question (obj, creator) {
  return {
    question: obj.question,
    weight: obj.weight,
    enabled: obj.enabled,
    stepProgressionLevel: obj.stepProgressionLevel,
    createdBy: creator,
    modifiedBy: creator
  }
}
function questionEvaluation (obj, creator) {
  return {
    notes: obj.notes ? obj.notes : '',
    providedGrade: obj.providedGrade,
    questionId: obj.questionId,
    applicationId: obj.applicationId,
    createdBy: creator,
    modifiedBy: creator
  }
}
function step (obj, creator) {
  return {
    name: obj.name,
    progressionLevel: obj.progressionLevel,
    required: obj.required,
    weight: obj.weight,
    type: obj.type,
    enabled: obj.enabled,
    createdBy: creator,
    modifiedBy: creator
  }
}
function stepEvaluation (applicationId, creator, stepId, skipped) {
  return {
    skipped: skipped || false,
    totalAvailablePoints: 0,
    totalGrade: 0,
    status: 'Not Started',
    skipped: 0,
    stepId: stepId,
    applicationId: applicationId,
    modifiedBy: creator
  }
}
function updateObject (updateFields) {
  let obj = {}
  for (let i = 0; i < updateFields.length; i++) {
    return { ...obj, [updateFields[i]]: updateFields[hello[i]] }
  }
  return obj
}
module.exports = {
  updateObject,
  step,
  stepEvaluation,
  question,
  questionEvaluation,
  account,
  applicant,
  application,
  document,
  position,
  employee
}

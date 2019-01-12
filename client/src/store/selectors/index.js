import { createSelector } from 'reselect'

// Postings
const getAllPostings = ({ job_postings }) => job_postings.postings
const getSelectedPosting = ({ job_postings }) => job_postings.selected
export const selectPostings = createSelector(
  getAllPostings,
  postings => Object.values(postings)
)
export const selectPosting = createSelector(
  getAllPostings,
  getSelectedPosting,
  (postings, selected) => postings[selected]
)
export const selectAssigned = state => {}

// Employees
const getAllEmployees = ({ employees }) => employees.employees
const getSelectedEmployee = ({ employees }) => employees.selected

export const selectManagers = createSelector(
  getAllEmployees,
  employees => [
    ...new Set(Object.values(employees).map(i => employees[i.manager]))
  ]
)
export const selectEmployees = createSelector(
  getAllEmployees,
  employees => Object.values(employees)
)

// Applications
const getAllApplications = ({ applications }) => applications.apps
const getSelectedApplication = ({ applications }) => applications.selected
export const getFilterValues = ({ applications }) => applications.filterValues
export const selectApplications = createSelector(
  getAllApplications,
  applications => Object.values(applications)
)

const postingsFilter = createSelector(
  selectApplications,
  getSelectedPosting,
  (applications, selectedPosting) =>
    applications.filter(app => app.job_posting === selectedPosting)
)

export const selectApplication = createSelector(
  getAllApplications,
  getSelectedApplication,
  (applications, selected) => applications[selected]
)
export const selectFilteredApps = createSelector(
  postingsFilter,
  getFilterValues,
  (applications, filterValues) =>
    objLengthCheck(filterValues)
      ? applications.filter(app =>
        filterValues.find(val => val.level === app.status)
      )
      : applications
)

// Applicants

const getAllApplicants = ({ applicants }) => applicants.applicants
const getSelectedApplicant = ({ applicants }) => applicants.selected
export const selectApplicant = createSelector(
  getAllApplicants,
  getSelectedApplicant,
  (applicants, selected) => applicants[selected]
)

// Steps
const getAllSteps = ({ steps }) => steps.steps
const getSelectedStep = ({ steps }) => steps.selected
export const selectSteps = createSelector(
  getAllSteps,
  steps => Object.values(steps)
)
export const selectStep = createSelector(
  getAllSteps,
  getSelectedStep,
  (steps, selected) => steps[selected]
)
// Departments
const getAllDepartments = ({ departments }) => departments
export const selectDepartments = createSelector(
  getAllDepartments,
  departments => Object.values(departments)
)
// Documents
// Account_Levels
const getAllAccountLevels = ({ account_levels }) => account_levels
export const selectAccountLevels = createSelector(
  getAllAccountLevels,
  accountLevels => Object.values(accountLevels)
)
// Questions
const getAllQuestions = ({ questions }) => questions.questions
const getSelectedQuestion = ({ questions }) => questions.selected
export const selectQuestions = createSelector(
  getAllQuestions,
  questions => Object.values(questions)
)
export const selectQuestion = createSelector(
  getAllQuestions,
  getSelectedQuestion,
  (questions, selected) => questions[selected]
)
// resume evaluations
// first interview evaluations
// second interview evaluations
// phone evaluations

// Misc
const objLengthCheck = obj => {
  return obj && (Object.keys(obj).length > 0 || obj.length > 0)
}

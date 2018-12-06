const steps = [
  'description',
  'required',
  'level',
  'weight',
  'created_by',
  'updated_by'
]

const applicants = [
  'f_name',
  'l_name',
  'email',
  'phone',
  'created_by',
  'updated_by'
]
const applications = ['applicant', 'job_posting', 'created_by', 'updated_by']
const departments = ['name', 'created_by', 'updated_by']
const employees = [
  'f_name',
  'l_name',
  'email',
  'manager',
  'department',
  'phone',
  'created_by',
  'updated_by'
]
const single_evaluations = [
  'question',
  'application',
  'created_by',
  'updated_by'
]
const section_evaluations = ['step', 'application', 'created_by', 'updated_by']
const accounts = ['username', 'password', 'created_by', 'updated_by']
const account_levels = ['description', 'level', 'created_by', 'updated_by']
const positions = ['title', 'created_by', 'updated_by']
const questions = ['question', 'step', 'weight', 'created_by', 'updated_by']
const job_postings = ['position', 'close_date', 'created_by', 'updated_by']
module.exports = {
  steps,
  questions,
  accounts,
  account_levels,
  job_postings,
  single_evaluations,
  section_evaluations,
  positions,
  departments,
  applicants,
  applications,
  employees
}

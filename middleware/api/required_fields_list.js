const steps = {
  description: { type: 'string' },
  required: { type: 'string' },
  level: { type: 'string' },
  weight: { type: 'string' },
  created_by: { type: 'string' },
  updated_by: { type: 'string' },
  enabled: { type: 'boolean' }
}

const applicants = {
  f_name: { type: 'string' },
  l_name: { type: 'string' },
  email: { type: 'string' },
  phone: { type: 'string' },
  created_by: { type: 'string' },
  updated_by: { type: 'string' }
}
const applications = {
  applicant: { type: 'string' },
  job_posting: { type: 'string' },
  created_by: { type: 'string' },
  updated_by: { type: 'string' },
  status: { type: 'string' },
  total_grade: { type: 'string' }
}
const departments = {
  name: { type: 'string' },
  created_by: { type: 'string' },
  updated_by: { type: 'string' }
}
const employees = {
  f_name: { type: 'string' },
  l_name: { type: 'string' },
  email: { type: 'string' },
  manager: { type: 'string' },
  department: { type: 'string' },
  phone: { type: 'string' },
  created_by: { type: 'string' },
  updated_by: { type: 'string' },
  enabled: { type: 'string' },
  account: { type: 'string' }
}
const single_evaluations = {
  question: { type: 'string' },
  application: { type: 'string' },
  created_by: { type: 'string' },
  updated_by: { type: 'string' }
}
const section_evaluations = {
  step: { type: 'string' },
  application: { type: 'string' },
  created_by: { type: 'string' },
  updated_by: { type: 'string' }
}
const accounts = {
  username: { type: 'string' },
  password: { type: 'string' },
  created_by: { type: 'string' },
  updated_by: { type: 'string' }
}
const account_levels = {
  description: { type: 'string' },
  level: { type: 'string' },
  created_by: { type: 'string' },
  updated_by: { type: 'string' }
}
const positions = {
  title: { type: 'string' },
  created_by: { type: 'string' },
  updated_by: { type: 'string' }
}
const questions = {
  question: { type: 'string' },
  step: { type: 'string' },
  weight: { type: 'string' },
  created_by: { type: 'string' },
  updated_by: { type: 'string' }
}
const job_postings = {
  position: { type: 'string' },
  close_date: { type: 'string' },
  created_by: { type: 'string' },
  updated_by: { type: 'string' }
}

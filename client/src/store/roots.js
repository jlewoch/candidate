// sagas
import { combineReducers } from 'redux'
import { stepSagas } from './steps/sagas'
import { employeeSagas } from './employees/sagas'
import { accountSagas } from './accounts/sagas'
import { accountLevelSagas } from './account_levels/sagas'
import { departmentSagas } from './departments/sagas'
import { questionSagas } from './questions/sagas'
import { positionSagas } from './positions/sagas'
import { jobPostingSagas } from './job_postings/sagas'
import { applicantSagas } from './applicants/sagas'
import { applicationSagas } from './applications/sagas'
import { firstInterviewEvaluationSagas } from './first_interview_evaluations/sagas'
import { secondInterviewEvaluationSagas } from './second_interview_evaluations/sagas'
import { phoneEvaluationSagas } from './phone_evaluations/sagas'
import { resumeEvaluationSagas } from './resume_evaluations/sagas'
// reducers
import steps from './steps/reducer'
import positions from './positions/reducer'
import questions from './questions/reducer'
import authentication from './authentication/reducer'
import applicants from './applicants/reducer'
import applications from './applications/reducer'
import employees from './employees/reducer'
import account_levels from './account_levels/reducer'
import accounts from './accounts/reducer'
import departments from './departments/reducer'
import job_postings from './job_postings/reducer'
import api from './api/processing/reducer'
import first_interview_evaluations from './first_interview_evaluations/reducer'
import second_interview_evaluations from './second_interview_evaluations/reducer'
import phone_evaluations from './phone_evaluations/reducer'
import resume_evaluations from './resume_evaluations/reducer'
export const rootReducer = combineReducers({
  resume_evaluations,
  phone_evaluations,
  first_interview_evaluations,
  second_interview_evaluations,
  steps,
  api,
  positions,
  authentication,
  questions,
  applicants,
  applications,
  employees,
  account_levels,
  accounts,
  departments,
  job_postings
})

export function rootSaga (saga) {
  saga.run(employeeSagas)
  saga.run(jobPostingSagas)
  saga.run(accountSagas)
  saga.run(departmentSagas)
  saga.run(accountLevelSagas)
  saga.run(stepSagas)
  saga.run(questionSagas)
  saga.run(positionSagas)
  saga.run(applicantSagas)
  saga.run(applicationSagas)
  saga.run(firstInterviewEvaluationSagas)
  saga.run(secondInterviewEvaluationSagas)
  saga.run(phoneEvaluationSagas)
  saga.run(resumeEvaluationSagas)
}

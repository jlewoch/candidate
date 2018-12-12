import { combineReducers } from 'redux'
import { fork, all } from 'redux-saga/effects'
import { stepSagas } from './steps/sagas'
import { employeeSagas } from './employees/sagas'
import { accountSagas } from './accounts/sagas'
import { accountLevelSagas } from './account_levels/sagas'
import { departmentSagas } from './departments/sagas'
import { questionSagas } from './questions/sagas'
import { positionSagas } from './positions/sagas'
import { jobPostingSagas } from './job_postings/sagas'

import steps from './steps/reducer'
import users from './users/reducer'
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

export const rootReducer = combineReducers({
  steps,
  users,
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
}

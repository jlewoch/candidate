import { combineReducers } from 'redux'
import { fork, all } from 'redux-saga/effects'
import * as stepSagas from './steps/sagas'
import steps from './steps/reducer'
import users from './users/reducer'
import positions from './positions/reducer'
import questions from './questions/reducer'
import grading from './grading/reducer'
import authentication from './authentication/reducer'
import applicants from './applicants/reducer'
import applications from './applications/reducer'
import employees from './employees/reducer'
import account_levels from './account_levels/reducer'
import accounts from './accounts/reducer'
export const rootReducer = combineReducers({
  steps,
  users,
  positions,
  authentication,
  questions,
  grading,
  applicants,
  applications,
  employees,
  account_levels,
  accounts
})

export function * rootSaga () {
  yield all([...Object.values(stepSagas)].map(fork))
}

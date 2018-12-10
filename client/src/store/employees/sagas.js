import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestGetEmployees (payload) {
  setProcessing(types.GET_EMPLOYEES, true)
  try {
    const employees = yield call(get, `employees`)
    yield put(actions.getEmployeesSuccess(employees.data))
  } catch (error) {
    setError(types.GET_EMPLOYEES, error)
  }
  setProcessing(types.GET_EMPLOYEES, false)
}

function * callRequestDeleteEmployees (payload) {
  setProcessing(types.DELETE_EMPLOYEES, true)

  try {
    const employees = yield call(destroy, `employees/${payload.id}`)
    yield put(actions.deleteEmployeesSuccess(employees))
  } catch (error) {
    setError(types.DELETE_EMPLOYEES, error)
  }
  setProcessing(types.DELETE_EMPLOYEES, false)
}
function * callRequestAddEmployees (payload) {
  setProcessing(types.ADD_EMPLOYEES, true)

  try {
    const employees = yield call(create, `employees`)
    yield put(actions.addEmployeesSuccess(employees.data))
  } catch (error) {
    setError(types.ADD_EMPLOYEES, error)
  }
  setProcessing(types.ADD_EMPLOYEES, false)
}
function * callRequestUpdateEmployees (payload) {
  setProcessing(types.UPDATE_EMPLOYEES, true)

  try {
    const employees = yield call(update, `employees/${payload.id}`)
    yield put(actions.updateEmployeesSuccess(employees))
  } catch (error) {
    setError(types.UPDATE_EMPLOYEES, error)
  }
  setProcessing(types.UPDATE_EMPLOYEES, false)
}
export const employeeSagas = function * () {
  yield takeEvery(types.GET_EMPLOYEES, () => callRequestGetEmployees())
  yield takeEvery(types.DELETE_EMPLOYEES, () => callRequestDeleteEmployees())
  yield takeEvery(types.ADD_EMPLOYEES, () => callRequestAddEmployees())
  yield takeEvery(types.UPDATE_EMPLOYEES, () => callRequestUpdateEmployees())
}

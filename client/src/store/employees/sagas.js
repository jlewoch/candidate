import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, push, remove } from '../../api/mySql/mySql'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestGetEmployees () {
  yield put(actions.getEmployeesRequest())
  try {
    const employees = yield call(get, 'employees')
    yield put(actions.getEmployeesSuccess(employees))
  } catch (error) {
    yield put(actions.getEmployeesFailed(error))
  }
  yield put(actions.getEmployeesComplete)
}

function * callRequestDeleteEmployee () {
  yield put(actions.deleteEmployeeRequest())
  try {
    const employees = yield call(remove, 'employees')
    yield put(actions.deleteEmployeeSuccess(employees))
  } catch (error) {
    yield put(actions.deleteEmployeeFailed(error))
  }
  yield put(actions.deleteEmployeeComplete)
}
function * callRequestAddEmployee () {
  yield put(actions.addEmployeeRequest())
  try {
    const employees = yield call(push, 'employees')
    yield put(actions.addEmployeeSuccess(employees))
  } catch (error) {
    yield put(actions.addEmployeeFailed(error))
  }
  yield put(actions.addEmployeeComplete)
}
function * callRequestUpdateEmployee () {
  yield put(actions.updateEmployeeRequest())
  try {
    const employees = yield call(update, 'employees')
    yield put(actions.updateEmployeeSuccess(employees))
  } catch (error) {
    yield put(actions.updateEmployeeFailed(error))
  }
  yield put(actions.updateEmployeeComplete)
}
export const requestEmployeesSaga = function * () {
  yield takeEvery(types.GET_EMPLOYEES_REQUEST, () => callRequestGetEmployees())
  yield takeEvery(types.DELETE_EMPLOYEE_REQUEST, () =>
    callRequestDeleteEmployee()
  )
  yield takeEvery(types.ADD_EMPLOYEE_REQUEST, () => callRequestAddEmployee())
  yield takeEvery(types.UPDATE_EMPLOYEE_REQUEST, () =>
    callRequestUpdateEmployee()
  )
}

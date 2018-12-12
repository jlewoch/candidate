import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * GetDepartments () {
  setProcessing(types.GET_DEPARTMENTS, true)
  try {
    const departments = yield call(get, `departments`)
    yield put(actions.getDepartmentsSuccess(departments.data))
  } catch (error) {
    setError(types.GET_DEPARTMENTS, error)
  }
  setProcessing(types.GET_DEPARTMENTS, false)
}

function * DeleteDepartments (payload) {
  setProcessing(types.DELETE_DEPARTMENTS, true)

  try {
    const departments = yield call(destroy, `departments/${payload.id}`)
    yield put(actions.deleteDepartmentsSuccess(departments))
  } catch (error) {
    setError(types.DELETE_DEPARTMENTS, error)
  }
  setProcessing(types.DELETE_DEPARTMENTS, false)
}
function * AddDepartments (payload) {
  setProcessing(types.ADD_DEPARTMENTS, true)

  try {
    const departments = yield call(create, `departments`)
    yield put(actions.addDepartmentsSuccess(departments))
  } catch (error) {
    setError(types.ADD_DEPARTMENTS, error)
  }
  setProcessing(types.ADD_DEPARTMENTS, false)
}
function * UpdateDepartments (payload) {
  setProcessing(types.UPDATE_DEPARTMENTS, true)

  try {
    const departments = yield call(update, `departments/${payload.id}`)
    yield put(actions.updateDepartmentsSuccess(departments))
  } catch (error) {
    setError(types.UPDATE_DEPARTMENTS, error)
  }
  setProcessing(types.UPDATE_DEPARTMENTS, false)
}
export const departmentSagas = function * () {
  yield takeEvery(types.GET_DEPARTMENTS, () => GetDepartments())
  yield takeEvery(types.DELETE_DEPARTMENTS, e => DeleteDepartments(e.payload))
  yield takeEvery(types.ADD_DEPARTMENTS, e => AddDepartments(e.payload))
  yield takeEvery(types.UPDATE_DEPARTMENTS, e => UpdateDepartments(e.payload))
}

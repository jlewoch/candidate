import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * getApplication (payload) {
  yield put(setProcessing(types.GET_APPLICATIONS, true))
  try {
    const applications = yield call(get, `applications`)
    yield put(actions.getApplicationsSuccess(applications.data))
  } catch (error) {
    setError(types.GET_APPLICATIONS, error)
  }
  yield put(setProcessing(types.GET_APPLICATIONS, false))
}

function * deleteApplication (payload) {
  yield put(setProcessing(types.DELETE_APPLICATIONS, true))

  try {
    const applications = yield call(destroy, `applications/${payload._}`)
    yield put(actions.deleteApplicationsSuccess(applications))
  } catch (error) {
    setError(types.DELETE_APPLICATIONS, error)
  }
  yield put(setProcessing(types.DELETE_APPLICATIONS, false))
}
function * addApplication (payload) {
  yield put(setProcessing(types.ADD_APPLICATIONS, true))

  try {
    const applications = yield call(create, `applications`, payload)
    yield put(actions.addApplicationsSuccess(applications.data))
  } catch (error) {
    setError(types.ADD_APPLICATIONS, error)
  }
  yield put(setProcessing(types.ADD_APPLICATIONS, false))
}
function * updateApplication (payload) {
  yield put(setProcessing(types.UPDATE_APPLICATIONS, true))

  try {
    const applications = yield call(
      update,
      `applications/${payload._}`,
      payload.update
    )
    yield put(actions.updateApplicationsSuccess(applications.data))
  } catch (error) {
    setError(types.UPDATE_APPLICATIONS, error)
  }
  yield put(setProcessing(types.UPDATE_APPLICATIONS, false))
}
export const applicationSagas = function * () {
  yield takeEvery(types.GET_APPLICATIONS, () => getApplication())
  yield takeEvery(types.DELETE_APPLICATIONS, e => deleteApplication(e.payload))
  yield takeEvery(types.ADD_APPLICATIONS, e => addApplication(e.payload))
  yield takeEvery(types.UPDATE_APPLICATIONS, e => updateApplication(e.payload))
}

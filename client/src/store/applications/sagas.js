import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestGetApplications () {
  yield put(actions.getApplicationsRequest())
  try {
    const applications = yield call(get, 'applications')
    yield put(actions.getApplicationsSuccess(applications))
  } catch (error) {
    yield put(actions.getApplicationsFailed(error))
  }
  yield put(actions.getApplicationsComplete)
}

function * callRequestDeleteApplication () {
  yield put(actions.deleteApplicationRequest())
  try {
    const applications = yield call(destroy, 'applications')
    yield put(actions.deleteApplicationSuccess(applications))
  } catch (error) {
    yield put(actions.deleteApplicationFailed(error))
  }
  yield put(actions.deleteApplicationComplete)
}
function * callRequestAddApplication () {
  yield put(actions.addApplicationRequest())
  try {
    const applications = yield call(create, 'applications')
    yield put(actions.addApplicationSuccess(applications))
  } catch (error) {
    yield put(actions.addApplicationFailed(error))
  }
  yield put(actions.addApplicationComplete)
}
function * callRequestUpdateApplication () {
  yield put(actions.updateApplicationRequest())
  try {
    const applications = yield call(update, 'applications')
    yield put(actions.updateApplicationSuccess(applications))
  } catch (error) {
    yield put(actions.updateApplicationFailed(error))
  }
  yield put(actions.updateApplicationComplete)
}
export const requestApplicationsSaga = function * () {
  yield takeEvery(types.GET_APPLICATIONS_REQUEST, () => callRequestGetApplications())
  yield takeEvery(types.DELETE_APPLICATION_REQUEST, () =>
    callRequestDeleteApplication()
  )
  yield takeEvery(types.ADD_APPLICATION_REQUEST, () => callRequestAddApplication())
  yield takeEvery(types.UPDATE_APPLICATION_REQUEST, () =>
    callRequestUpdateApplication()
  )
}

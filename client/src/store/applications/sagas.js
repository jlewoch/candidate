import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import * as actions from './actions'
import * as types from './actionTypes'

function * GetApplications () {
  yield put(actions.getApplicationsRequest())
  try {
    const applications = yield call(get, 'applications')
    yield put(actions.getApplicationsSuccess(applications))
  } catch (error) {
    yield put(actions.getApplicationsFailed(error))
  }
  yield put(actions.getApplicationsComplete)
}

function * DeleteApplication () {
  yield put(actions.deleteApplicationRequest())
  try {
    const applications = yield call(destroy, 'applications')
    yield put(actions.deleteApplicationSuccess(applications))
  } catch (error) {
    yield put(actions.deleteApplicationFailed(error))
  }
  yield put(actions.deleteApplicationComplete)
}
function * AddApplication () {
  yield put(actions.addApplicationRequest())
  try {
    const applications = yield call(create, 'applications')
    yield put(actions.addApplicationSuccess(applications))
  } catch (error) {
    yield put(actions.addApplicationFailed(error))
  }
  yield put(actions.addApplicationComplete)
}
function * UpdateApplication () {
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
  yield takeEvery(types.GET_APPLICATIONS, () => GetApplications(e.payload))
  yield takeEvery(types.DELETE_APPLICATION, e => DeleteApplication())
  yield takeEvery(types.ADD_APPLICATION, e => AddApplication(e.payload))
  yield takeEvery(types.UPDATE_APPLICATION, e => UpdateApplication(e.payload))
}

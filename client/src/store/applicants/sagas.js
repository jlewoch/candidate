import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import * as actions from './actions'
import * as types from './actionTypes'

function * GetApplicants () {
  yield put(actions.getApplicantsRequest())
  try {
    const applicants = yield call(get, 'applicants')
    yield put(actions.getApplicantsSuccess(applicants))
  } catch (error) {
    yield put(actions.getApplicantsFailed(error))
  }
  yield put(actions.getApplicantsComplete)
}

function * DeleteApplicant () {
  yield put(actions.deleteApplicantRequest())
  try {
    const applicants = yield call(destroy, 'applicants')
    yield put(actions.deleteApplicantSuccess(applicants))
  } catch (error) {
    yield put(actions.deleteApplicantFailed(error))
  }
  yield put(actions.deleteApplicantComplete)
}
function * AddApplicant () {
  yield put(actions.addApplicantRequest())
  try {
    const applicants = yield call(create, 'applicants')
    yield put(actions.addApplicantSuccess(applicants))
  } catch (error) {
    yield put(actions.addApplicantFailed(error))
  }
  yield put(actions.addApplicantComplete)
}
function * UpdateApplicant () {
  yield put(actions.updateApplicantRequest())
  try {
    const applicants = yield call(update, 'applicants')
    yield put(actions.updateApplicantSuccess(applicants))
  } catch (error) {
    yield put(actions.updateApplicantFailed(error))
  }
  yield put(actions.updateApplicantComplete)
}
export const requestApplicantsSaga = function * () {
  yield takeEvery(types.GET_APPLICANTS, () => GetApplicants())
  yield takeEvery(types.DELETE_APPLICANT, e => DeleteApplicant(e.payload))
  yield takeEvery(types.ADD_APPLICANT, e => AddApplicant(e.payload))
  yield takeEvery(types.UPDATE_APPLICANT, e => UpdateApplicant(e.payload))
}

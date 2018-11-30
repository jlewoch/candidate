import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, push, remove } from '../../api/mySql/mySql'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestGetApplicants () {
  yield put(actions.getApplicantsRequest())
  try {
    const applicants = yield call(get, 'applicants')
    yield put(actions.getApplicantsSuccess(applicants))
  } catch (error) {
    yield put(actions.getApplicantsFailed(error))
  }
  yield put(actions.getApplicantsComplete)
}

function * callRequestDeleteApplicant () {
  yield put(actions.deleteApplicantRequest())
  try {
    const applicants = yield call(remove, 'applicants')
    yield put(actions.deleteApplicantSuccess(applicants))
  } catch (error) {
    yield put(actions.deleteApplicantFailed(error))
  }
  yield put(actions.deleteApplicantComplete)
}
function * callRequestAddApplicant () {
  yield put(actions.addApplicantRequest())
  try {
    const applicants = yield call(push, 'applicants')
    yield put(actions.addApplicantSuccess(applicants))
  } catch (error) {
    yield put(actions.addApplicantFailed(error))
  }
  yield put(actions.addApplicantComplete)
}
function * callRequestUpdateApplicant () {
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
  yield takeEvery(types.GET_APPLICANTS_REQUEST, () => callRequestGetApplicants())
  yield takeEvery(types.DELETE_APPLICANT_REQUEST, () =>
    callRequestDeleteApplicant()
  )
  yield takeEvery(types.ADD_APPLICANT_REQUEST, () => callRequestAddApplicant())
  yield takeEvery(types.UPDATE_APPLICANT_REQUEST, () =>
    callRequestUpdateApplicant()
  )
}

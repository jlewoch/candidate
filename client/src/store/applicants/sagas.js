import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * getApplicants () {
  setProcessing(types.GET_APPLICANTS, true)
  try {
    const applicants = yield call(get, `applicants`)
    yield put(actions.getApplicantsSuccess(applicants.data))
  } catch (error) {
    setError(types.GET_APPLICANTS, error)
  }
  setProcessing(types.GET_APPLICANTS, false)
}

function * deleteApplicants (payload) {
  setProcessing(types.DELETE_APPLICANTS, true)

  try {
    const applicants = yield call(destroy, `applicants/${payload._}`)
    yield put(actions.deleteApplicantsSuccess(applicants))
  } catch (error) {
    setError(types.DELETE_APPLICANTS, error)
  }
  setProcessing(types.DELETE_APPLICANTS, false)
}
function * addApplicants (payload) {
  setProcessing(types.ADD_APPLICANTS, true)

  try {
    const applicants = yield call(create, `applicants`, payload)
    yield put(actions.addApplicantsSuccess(applicants.data))
  } catch (error) {
    setError(types.ADD_APPLICANTS, error)
  }
  setProcessing(types.ADD_APPLICANTS, false)
}
function * updateApplicants (payload) {
  setProcessing(types.UPDATE_APPLICANTS, true)

  try {
    const applicants = yield call(
      update,
      `applicants/${payload._}`,
      payload.update
    )
    yield put(actions.updateApplicantsSuccess(applicants.data[payload._]))
  } catch (error) {
    setError(types.UPDATE_APPLICANTS, error)
  }
  setProcessing(types.UPDATE_APPLICANTS, false)
}
export const applicantSagas = function * () {
  yield takeEvery(types.GET_APPLICANTS, () => getApplicants())
  yield takeEvery(types.DELETE_APPLICANTS, e => deleteApplicants(e.payload))
  yield takeEvery(types.ADD_APPLICANTS, e => addApplicants(e.payload))
  yield takeEvery(types.UPDATE_APPLICANTS, e => updateApplicants(e.payload))
}

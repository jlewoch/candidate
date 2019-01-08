import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'
import { log } from 'util'

function * getJobPostings () {
  yield put(setProcessing(types.GET_JOB_POSTINGS, true))
  try {
    const job_postings = yield call(get, `job_postings`)

    yield put(actions.getJobPostingsSuccess(job_postings.data))
  } catch (error) {
    setError(types.GET_JOB_POSTINGS, error)
  }
  yield put(setProcessing(types.GET_JOB_POSTINGS, false))
}

function * deleteJobPostings (payload) {
  yield put(setProcessing(types.DELETE_JOB_POSTINGS, true))

  try {
    const job_postings = yield call(destroy, `job_postings/${payload.id}`)
    yield put(actions.deleteJobPostingsSuccess(job_postings))
  } catch (error) {
    setError(types.DELETE_JOB_POSTINGS, error)
  }
  yield put(setProcessing(types.DELETE_JOB_POSTINGS, false))
}
function * addJobPostings (payload) {
  yield put(setProcessing(types.ADD_JOB_POSTINGS, true))

  try {
    const job_postings = yield call(create, `job_postings`)
    yield put(actions.addJobPostingsSuccess(job_postings.data))
  } catch (error) {
    setError(types.ADD_JOB_POSTINGS, error)
  }
  yield put(setProcessing(types.ADD_JOB_POSTINGS, false))
}
function * updateJobPostings (payload) {
  yield put(setProcessing(types.UPDATE_JOB_POSTINGS, true))

  try {
    const job_postings = yield call(update, `job_postings/${payload.id}`)
    yield put(actions.updateJobPostingsSuccess(job_postings))
  } catch (error) {
    setError(types.UPDATE_JOB_POSTINGS, error)
  }
  yield put(setProcessing(types.UPDATE_JOB_POSTINGS, false))
}
export const jobPostingSagas = function * () {
  yield takeEvery(types.GET_JOB_POSTINGS, () => getJobPostings())
  yield takeEvery(types.DELETE_JOB_POSTINGS, e => deleteJobPostings(e.payload))
  yield takeEvery(types.ADD_JOB_POSTINGS, e => addJobPostings(e.payload))
  yield takeEvery(types.UPDATE_JOB_POSTINGS, e => updateJobPostings(e.payload))
}

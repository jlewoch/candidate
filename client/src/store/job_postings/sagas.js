import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * GetJobPostings (payload) {
  setProcessing(types.GET_JOB_POSTINGS, true)
  try {
    const job_postings = yield call(get, `job_postings`)
    yield put(actions.getJobPostingsSuccess(job_postings.data))
  } catch (error) {
    setError(types.GET_JOB_POSTINGS, error)
  }
  setProcessing(types.GET_JOB_POSTINGS, false)
}

function * DeleteJobPostings (payload) {
  setProcessing(types.DELETE_JOB_POSTINGS, true)

  try {
    const job_postings = yield call(destroy, `job_postings/${payload.id}`)
    yield put(actions.deleteJobPostingsSuccess(job_postings))
  } catch (error) {
    setError(types.DELETE_JOB_POSTINGS, error)
  }
  setProcessing(types.DELETE_JOB_POSTINGS, false)
}
function * AddJobPostings (payload) {
  setProcessing(types.ADD_JOB_POSTINGS, true)

  try {
    const job_postings = yield call(create, `job_postings`)
    yield put(actions.addJobPostingsSuccess(job_postings.data))
  } catch (error) {
    setError(types.ADD_JOB_POSTINGS, error)
  }
  setProcessing(types.ADD_JOB_POSTINGS, false)
}
function * UpdateJobPostings (payload) {
  setProcessing(types.UPDATE_JOB_POSTINGS, true)

  try {
    const job_postings = yield call(update, `job_postings/${payload.id}`)
    yield put(actions.updateJobPostingsSuccess(job_postings))
  } catch (error) {
    setError(types.UPDATE_JOB_POSTINGS, error)
  }
  setProcessing(types.UPDATE_JOB_POSTINGS, false)
}
export const jobPostingSagas = function * () {
  yield takeEvery(types.GET_JOB_POSTINGS, () => GetJobPostings())
  yield takeEvery(types.DELETE_JOB_POSTINGS, e => DeleteJobPostings(e.payload))
  yield takeEvery(types.ADD_JOB_POSTINGS, e => AddJobPostings(e.payload))
  yield takeEvery(types.UPDATE_JOB_POSTINGS, e => UpdateJobPostings(e.payload))
}

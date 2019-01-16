import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * getResumeEvaluations () {
  setProcessing(types.GET_RESUME_EVALUATIONS, true)
  try {
    const resume_evaluations = yield call(get, `resume_evaluations`)
    yield put(actions.getResumeEvaluationsSuccess(resume_evaluations.data))
  } catch (error) {
    setError(types.GET_RESUME_EVALUATIONS, error)
  }
  setProcessing(types.GET_RESUME_EVALUATIONS, false)
}

function * deleteResumeEvaluations (payload) {
  setProcessing(types.DELETE_RESUME_EVALUATIONS, true)

  try {
    const resume_evaluations = yield call(
      destroy,
      `resume_evaluations/${payload._}`
    )
    yield put(actions.deleteResumeEvaluationsSuccess(resume_evaluations))
  } catch (error) {
    setError(types.DELETE_RESUME_EVALUATIONS, error)
  }
  setProcessing(types.DELETE_RESUME_EVALUATIONS, false)
}
function * addResumeEvaluations (payload) {
  setProcessing(types.ADD_RESUME_EVALUATIONS, true)

  try {
    const resume_evaluations = yield call(create, `resume_evaluations`, payload)
    yield put(actions.addResumeEvaluationsSuccess(resume_evaluations.data))
  } catch (error) {
    setError(types.ADD_RESUME_EVALUATIONS, error)
  }
  setProcessing(types.ADD_RESUME_EVALUATIONS, false)
}
function * updateResumeEvaluations (payload) {
  setProcessing(types.UPDATE_RESUME_EVALUATIONS, true)

  try {
    const resume_evaluations = yield call(
      update,
      `resume_evaluations/${payload._}`,
      payload.update
    )
    yield put(
      actions.updateResumeEvaluationsSuccess(resume_evaluations.data[payload._])
    )
  } catch (error) {
    setError(types.UPDATE_RESUME_EVALUATIONS, error)
  }
  setProcessing(types.UPDATE_RESUME_EVALUATIONS, false)
}
export const resumeEvaluationSagas = function * () {
  yield takeEvery(types.GET_RESUME_EVALUATIONS, () => getResumeEvaluations())
  yield takeEvery(types.DELETE_RESUME_EVALUATIONS, e =>
    deleteResumeEvaluations(e.payload)
  )
  yield takeEvery(types.ADD_RESUME_EVALUATIONS, e =>
    addResumeEvaluations(e.payload)
  )
  yield takeEvery(types.UPDATE_RESUME_EVALUATIONS, e =>
    updateResumeEvaluations(e.payload)
  )
}

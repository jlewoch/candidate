import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * getFirstInterviewEvaluations () {
  setProcessing(types.GET_FIRST_INTERVIEW_EVALUATIONS, true)
  try {
    const first_interview_evaluations = yield call(
      get,
      `first_interview_evaluations`
    )
    yield put(
      actions.getFirstInterviewEvaluationsSuccess(
        first_interview_evaluations.data
      )
    )
  } catch (error) {
    setError(types.GET_FIRST_INTERVIEW_EVALUATIONS, error)
  }
  setProcessing(types.GET_FIRST_INTERVIEW_EVALUATIONS, false)
}

function * deleteFirstInterviewEvaluations (payload) {
  setProcessing(types.DELETE_FIRST_INTERVIEW_EVALUATIONS, true)

  try {
    const first_interview_evaluations = yield call(
      destroy,
      `first_interview_evaluations/${payload._}`
    )
    yield put(
      actions.deleteFirstInterviewEvaluationsSuccess(
        first_interview_evaluations
      )
    )
  } catch (error) {
    setError(types.DELETE_FIRST_INTERVIEW_EVALUATIONS, error)
  }
  setProcessing(types.DELETE_FIRST_INTERVIEW_EVALUATIONS, false)
}
function * addFirstInterviewEvaluations (payload) {
  setProcessing(types.ADD_FIRST_INTERVIEW_EVALUATIONS, true)

  try {
    const first_interview_evaluations = yield call(
      create,
      `first_interview_evaluations`,
      payload
    )
    yield put(
      actions.addFirstInterviewEvaluationsSuccess(
        first_interview_evaluations.data
      )
    )
  } catch (error) {
    setError(types.ADD_FIRST_INTERVIEW_EVALUATIONS, error)
  }
  setProcessing(types.ADD_FIRST_INTERVIEW_EVALUATIONS, false)
}
function * updateFirstInterviewEvaluations (payload) {
  setProcessing(types.UPDATE_FIRST_INTERVIEW_EVALUATIONS, true)

  try {
    const first_interview_evaluations = yield call(
      update,
      `first_interview_evaluations/${payload._}`,
      payload.update
    )
    yield put(
      actions.updateFirstInterviewEvaluationsSuccess(
        first_interview_evaluations.data[payload._]
      )
    )
  } catch (error) {
    setError(types.UPDATE_FIRST_INTERVIEW_EVALUATIONS, error)
  }
  setProcessing(types.UPDATE_FIRST_INTERVIEW_EVALUATIONS, false)
}
export const firstInterviewEvaluationSagas = function * () {
  yield takeEvery(types.GET_FIRST_INTERVIEW_EVALUATIONS, () =>
    getFirstInterviewEvaluations()
  )
  yield takeEvery(types.DELETE_FIRST_INTERVIEW_EVALUATIONS, e =>
    deleteFirstInterviewEvaluations(e.payload)
  )
  yield takeEvery(types.ADD_FIRST_INTERVIEW_EVALUATIONS, e =>
    addFirstInterviewEvaluations(e.payload)
  )
  yield takeEvery(types.UPDATE_FIRST_INTERVIEW_EVALUATIONS, e =>
    updateFirstInterviewEvaluations(e.payload)
  )
}

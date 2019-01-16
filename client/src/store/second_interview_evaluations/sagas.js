import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * getSecondInterviewEvaluations () {
  setProcessing(types.GET_SECOND_INTERVIEW_EVALUATIONS, true)
  try {
    const second_interview_evaluations = yield call(
      get,
      `second_interview_evaluations`
    )
    yield put(
      actions.getSecondInterviewEvaluationsSuccess(
        second_interview_evaluations.data
      )
    )
  } catch (error) {
    setError(types.GET_SECOND_INTERVIEW_EVALUATIONS, error)
  }
  setProcessing(types.GET_SECOND_INTERVIEW_EVALUATIONS, false)
}

function * deleteSecondInterviewEvaluations (payload) {
  setProcessing(types.DELETE_SECOND_INTERVIEW_EVALUATIONS, true)

  try {
    const second_interview_evaluations = yield call(
      destroy,
      `second_interview_evaluations/${payload._}`
    )
    yield put(
      actions.deleteSecondInterviewEvaluationsSuccess(
        second_interview_evaluations
      )
    )
  } catch (error) {
    setError(types.DELETE_SECOND_INTERVIEW_EVALUATIONS, error)
  }
  setProcessing(types.DELETE_SECOND_INTERVIEW_EVALUATIONS, false)
}
function * addSecondInterviewEvaluations (payload) {
  setProcessing(types.ADD_SECOND_INTERVIEW_EVALUATIONS, true)

  try {
    const second_interview_evaluations = yield call(
      create,
      `second_interview_evaluations`,
      payload
    )
    yield put(
      actions.addSecondInterviewEvaluationsSuccess(
        second_interview_evaluations.data
      )
    )
  } catch (error) {
    setError(types.ADD_SECOND_INTERVIEW_EVALUATIONS, error)
  }
  setProcessing(types.ADD_SECOND_INTERVIEW_EVALUATIONS, false)
}
function * updateSecondInterviewEvaluations (payload) {
  setProcessing(types.UPDATE_SECOND_INTERVIEW_EVALUATIONS, true)

  try {
    const second_interview_evaluations = yield call(
      update,
      `second_interview_evaluations/${payload._}`,
      payload.update
    )
    yield put(
      actions.updateSecondInterviewEvaluationsSuccess(
        second_interview_evaluations.data[payload._]
      )
    )
  } catch (error) {
    setError(types.UPDATE_SECOND_INTERVIEW_EVALUATIONS, error)
  }
  setProcessing(types.UPDATE_SECOND_INTERVIEW_EVALUATIONS, false)
}
export const secondInterviewEvaluationSagas = function * () {
  yield takeEvery(types.GET_SECOND_INTERVIEW_EVALUATIONS, () =>
    getSecondInterviewEvaluations()
  )
  yield takeEvery(types.DELETE_SECOND_INTERVIEW_EVALUATIONS, e =>
    deleteSecondInterviewEvaluations(e.payload)
  )
  yield takeEvery(types.ADD_SECOND_INTERVIEW_EVALUATIONS, e =>
    addSecondInterviewEvaluations(e.payload)
  )
  yield takeEvery(types.UPDATE_SECOND_INTERVIEW_EVALUATIONS, e =>
    updateSecondInterviewEvaluations(e.payload)
  )
}

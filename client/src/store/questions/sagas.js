import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * getQuestions () {
  setProcessing(types.GET_QUESTIONS, true)
  try {
    const questions = yield call(get, `questions`)
    yield put(actions.getQuestionsSuccess(questions.data))
  } catch (error) {
    setError(types.GET_QUESTIONS, error)
  }
  setProcessing(types.GET_QUESTIONS, false)
}

function * deleteQuestions (payload) {
  setProcessing(types.DELETE_QUESTIONS, true)

  try {
    const questions = yield call(destroy, `questions/${payload._}`)
    yield put(actions.deleteQuestionsSuccess(questions))
  } catch (error) {
    setError(types.DELETE_QUESTIONS, error)
  }
  setProcessing(types.DELETE_QUESTIONS, false)
}
function * addQuestions (payload) {
  setProcessing(types.ADD_QUESTIONS, true)

  try {
    const questions = yield call(create, `questions`, payload)
    yield put(actions.addQuestionsSuccess(questions.data))
  } catch (error) {
    setError(types.ADD_QUESTIONS, error)
  }
  setProcessing(types.ADD_QUESTIONS, false)
}
function * updateQuestions (payload) {
  setProcessing(types.UPDATE_QUESTIONS, true)

  try {
    const questions = yield call(
      update,
      `questions/${payload._}`,
      payload.update
    )
    yield put(actions.updateQuestionsSuccess(questions.data[payload._]))
  } catch (error) {
    setError(types.UPDATE_QUESTIONS, error)
  }
  setProcessing(types.UPDATE_QUESTIONS, false)
}
export const questionSagas = function * () {
  yield takeEvery(types.GET_QUESTIONS, () => getQuestions())
  yield takeEvery(types.DELETE_QUESTIONS, e => deleteQuestions(e.payload))
  yield takeEvery(types.ADD_QUESTIONS, e => addQuestions(e.payload))
  yield takeEvery(types.UPDATE_QUESTIONS, e => updateQuestions(e.payload))
}

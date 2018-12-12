import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import * as actions from './actions'
import * as types from './actionTypes'

function * GetQuestions () {
  yield put(actions.getQuestionsRequest())
  try {
    const questions = yield call(get, 'questions')
    yield put(actions.getQuestionsSuccess(questions))
  } catch (error) {
    yield put(actions.getQuestionsFailed(error))
  }
  yield put(actions.getQuestionsComplete)
}

function * DeleteQuestion () {
  yield put(actions.deleteQuestionRequest())
  try {
    const questions = yield call(destroy, 'questions')
    yield put(actions.deleteQuestionSuccess(questions))
  } catch (error) {
    yield put(actions.deleteQuestionFailed(error))
  }
  yield put(actions.deleteQuestionComplete)
}
function * AddQuestion () {
  yield put(actions.addQuestionRequest())
  try {
    const questions = yield call(create, 'questions')
    yield put(actions.addQuestionSuccess(questions))
  } catch (error) {
    yield put(actions.addQuestionFailed(error))
  }
  yield put(actions.addQuestionComplete)
}
function * UpdateQuestion () {
  yield put(actions.updateQuestionRequest())
  try {
    const questions = yield call(update, 'questions')
    yield put(actions.updateQuestionSuccess(questions))
  } catch (error) {
    yield put(actions.updateQuestionFailed(error))
  }
  yield put(actions.updateQuestionComplete)
}
export const questionSagas = function * () {
  yield takeEvery(types.GET_QUESTIONS, () => GetQuestions())
  yield takeEvery(types.DELETE_QUESTION, e => DeleteQuestion(e.payload))
  yield takeEvery(types.ADD_QUESTION, e => AddQuestion(e.payload))
  yield takeEvery(types.UPDATE_QUESTION, e => UpdateQuestion(e.payload))
}

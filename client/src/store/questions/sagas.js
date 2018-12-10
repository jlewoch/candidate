import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestGetQuestions () {
  yield put(actions.getQuestionsRequest())
  try {
    const questions = yield call(get, 'questions')
    yield put(actions.getQuestionsSuccess(questions))
  } catch (error) {
    yield put(actions.getQuestionsFailed(error))
  }
  yield put(actions.getQuestionsComplete)
}

function * callRequestDeleteQuestion () {
  yield put(actions.deleteQuestionRequest())
  try {
    const questions = yield call(destroy, 'questions')
    yield put(actions.deleteQuestionSuccess(questions))
  } catch (error) {
    yield put(actions.deleteQuestionFailed(error))
  }
  yield put(actions.deleteQuestionComplete)
}
function * callRequestAddQuestion () {
  yield put(actions.addQuestionRequest())
  try {
    const questions = yield call(create, 'questions')
    yield put(actions.addQuestionSuccess(questions))
  } catch (error) {
    yield put(actions.addQuestionFailed(error))
  }
  yield put(actions.addQuestionComplete)
}
function * callRequestUpdateQuestion () {
  yield put(actions.updateQuestionRequest())
  try {
    const questions = yield call(update, 'questions')
    yield put(actions.updateQuestionSuccess(questions))
  } catch (error) {
    yield put(actions.updateQuestionFailed(error))
  }
  yield put(actions.updateQuestionComplete)
}
export const requestQuestionsSaga = function * () {
  yield takeEvery(types.GET_QUESTIONS_REQUEST, () => callRequestGetQuestions())
  yield takeEvery(types.DELETE_QUESTION_REQUEST, () =>
    callRequestDeleteQuestion()
  )
  yield takeEvery(types.ADD_QUESTION_REQUEST, () => callRequestAddQuestion())
  yield takeEvery(types.UPDATE_QUESTION_REQUEST, () =>
    callRequestUpdateQuestion()
  )
}

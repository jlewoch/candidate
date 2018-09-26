import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, push, remove } from '../../api/mySql/mySql'
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

function * callRequestDeleteQuestions () {
  yield put(actions.deleteQuestionsRequest())
  try {
    const questions = yield call(remove, 'questions')
    yield put(actions.deleteQuestionsSuccess(questions))
  } catch (error) {
    yield put(actions.deleteQuestionsFailed(error))
  }
  yield put(actions.deleteQuestionsComplete)
}
function * callRequestAddQuestions () {
  yield put(actions.addQuestionsRequest())
  try {
    const questions = yield call(push, 'questions')
    yield put(actions.addQuestionsSuccess(questions))
  } catch (error) {
    yield put(actions.addQuestionsFailed(error))
  }
  yield put(actions.addQuestionsComplete)
}
function * callRequestUpdateQuestions () {
  yield put(actions.updateQuestionsRequest())
  try {
    const questions = yield call(update, 'questions')
    yield put(actions.updateQuestionsSuccess(questions))
  } catch (error) {
    yield put(actions.updateQuestionsFailed(error))
  }
  yield put(actions.updateQuestionsComplete)
}
export const requestQuestionsSaga = function * () {
  yield takeEvery(types.GET_QUESTIONS_REQUEST, () => callRequestGetQuestions())
  yield takeEvery(types.DELETE_QUESTION_REQUEST, () =>
    callRequestDeleteQuestions()
  )
  yield takeEvery(types.ADD_QUESTION_REQUEST, () => callRequestAddQuestions())
  yield takeEvery(types.UPDATE_QUESTION_REQUEST, () =>
    callRequestUpdateQuestions()
  )
}

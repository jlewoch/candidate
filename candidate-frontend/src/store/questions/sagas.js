import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, push, remove} from '../../api/mySql/mySql'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestQuestions () {
  const questions = yield call(get, 'questions')
  yield put(actions.recieveGetSteps(questions))
}

export const requestQuestionsSaga = function * () {
  yield takeEvery(types.GET_QUESTIONS, () => callRequestQuestions())
}

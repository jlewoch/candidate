import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, push, remove} from '../../api/mySql/mySql'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestSteps () {
  const steps = yield call(get, 'steps')
  yield put(actions.recieveGetSteps(steps))
}

export const requestStepsSaga = function * () {
  yield takeEvery(types.GET_STEPS, () => callRequestSteps())
}

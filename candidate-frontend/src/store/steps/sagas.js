import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, push, remove } from '../../api/mySql/mySql'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestGetSteps () {
  yield put(actions.getStepsRequest())
  try {
    const steps = yield call(get, 'steps')
    yield put(actions.getStepsSuccess(steps))
  } catch (error) {
    yield put(actions.getStepsFailed(error))
  }
  yield put(actions.getStepsComplete)
}

function * callRequestDeleteSteps () {
  yield put(actions.deleteStepsRequest())
  try {
    const steps = yield call(remove, 'steps')
    yield put(actions.deleteStepsSuccess(steps))
  } catch (error) {
    yield put(actions.deleteStepsFailed(error))
  }
  yield put(actions.deleteStepsComplete)
}
function * callRequestAddSteps () {
  yield put(actions.addStepsRequest())
  try {
    const steps = yield call(push, 'steps')
    yield put(actions.addStepsSuccess(steps))
  } catch (error) {
    yield put(actions.addStepsFailed(error))
  }
  yield put(actions.addStepsComplete)
}
function * callRequestUpdateSteps () {
  yield put(actions.updateStepsRequest())
  try {
    const steps = yield call(update, 'steps')
    yield put(actions.updateStepsSuccess(steps))
  } catch (error) {
    yield put(actions.updateStepsFailed(error))
  }
  yield put(actions.updateStepsComplete)
}
export const requestStepsSaga = function * () {
  yield takeEvery(types.GET_STEPS_REQUEST, () => callRequestGetSteps())
  yield takeEvery(types.DELETE_STEP_REQUEST, () =>
    callRequestDeleteSteps()
  )
  yield takeEvery(types.ADD_STEP_REQUEST, () => callRequestAddSteps())
  yield takeEvery(types.UPDATE_STEP_REQUEST, () =>
    callRequestUpdateSteps()
  )
}

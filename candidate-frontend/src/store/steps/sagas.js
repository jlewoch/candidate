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

function * callRequestDeleteStep () {
  yield put(actions.deleteStepRequest())
  try {
    const steps = yield call(remove, 'steps')
    yield put(actions.deleteStepSuccess(steps))
  } catch (error) {
    yield put(actions.deleteStepFailed(error))
  }
  yield put(actions.deleteStepComplete)
}
function * callRequestAddStep () {
  yield put(actions.addStepRequest())
  try {
    const steps = yield call(push, 'steps')
    yield put(actions.addStepSuccess(steps))
  } catch (error) {
    yield put(actions.addStepFailed(error))
  }
  yield put(actions.addStepComplete)
}
function * callRequestUpdateStep () {
  yield put(actions.updateStepRequest())
  try {
    const steps = yield call(update, 'steps')
    yield put(actions.updateStepSuccess(steps))
  } catch (error) {
    yield put(actions.updateStepFailed(error))
  }
  yield put(actions.updateStepComplete)
}
export const requestStepsSaga = function * () {
  yield takeEvery(types.GET_STEPS_REQUEST, () => callRequestGetSteps())
  yield takeEvery(types.DELETE_STEP_REQUEST, () =>
    callRequestDeleteStep()
  )
  yield takeEvery(types.ADD_STEP_REQUEST, () => callRequestAddStep())
  yield takeEvery(types.UPDATE_STEP_REQUEST, () =>
    callRequestUpdateStep()
  )
}

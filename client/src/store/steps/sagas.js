import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import * as actions from './actions'
import * as types from './actionTypes'

function * GetSteps () {
  yield put(actions.getStepsRequest())
  try {
    const steps = yield call(get, 'steps')
    yield put(actions.getStepsSuccess(steps))
  } catch (error) {
    yield put(actions.getStepsFailed(error))
  }
  yield put(actions.getStepsComplete)
}

function * DeleteStep () {
  yield put(actions.deleteStepRequest())
  try {
    const steps = yield call(destroy, 'steps')
    yield put(actions.deleteStepSuccess(steps))
  } catch (error) {
    yield put(actions.deleteStepFailed(error))
  }
  yield put(actions.deleteStepComplete)
}
function * AddStep () {
  yield put(actions.addStepRequest())
  try {
    const steps = yield call(create, 'steps')
    yield put(actions.addStepSuccess(steps))
  } catch (error) {
    yield put(actions.addStepFailed(error))
  }
  yield put(actions.addStepComplete)
}
function * UpdateStep () {
  yield put(actions.updateStepRequest())
  try {
    const steps = yield call(update, 'steps')
    yield put(actions.updateStepSuccess(steps))
  } catch (error) {
    yield put(actions.updateStepFailed(error))
  }
  yield put(actions.updateStepComplete)
}
export const stepSagas = function * () {
  yield takeEvery(types.GET_STEPS, () => GetSteps())
  yield takeEvery(types.DELETE_STEP, e => DeleteStep(e.payload))
  yield takeEvery(types.ADD_STEP, e => AddStep(e.payload))
  yield takeEvery(types.UPDATE_STEP, e => UpdateStep(e.payload))
}

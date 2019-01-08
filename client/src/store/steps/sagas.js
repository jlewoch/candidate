import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * getSteps () {
  yield put(setProcessing(types.GET_STEPS, true))
  try {
    const steps = yield call(get, `steps`)
    yield put(actions.getStepsSuccess(steps.data))
  } catch (error) {
    setError(types.GET_STEPS, error)
  }
  yield put(setProcessing(types.GET_STEPS, false))
}

function * deleteSteps (payload) {
  yield put(setProcessing(types.DELETE_STEPS, true))

  try {
    const steps = yield call(destroy, `steps/${payload._}`)
    yield put(actions.deleteStepsSuccess(steps.data))
  } catch (error) {
    setError(types.DELETE_STEPS, error)
  }
  yield put(setProcessing(types.DELETE_STEPS, false))
}
function * addSteps (payload) {
  yield put(setProcessing(types.ADD_STEPS, true))

  try {
    const steps = yield call(create, `steps`, payload)
    yield put(actions.addStepsSuccess(steps.data))
  } catch (error) {
    setError(types.ADD_STEPS, error)
  }
  yield put(setProcessing(types.ADD_STEPS, false))
}
function * updateSteps (payload) {
  yield put(setProcessing(types.UPDATE_STEPS, true))

  try {
    const steps = yield call(update, `steps/${payload._}`, payload.update)
    yield put(actions.updateStepsSuccess(steps.data[payload._]))
  } catch (error) {
    setError(types.UPDATE_STEPS, error)
  }
  yield put(setProcessing(types.UPDATE_STEPS, false))
}
export const stepSagas = function * () {
  yield takeEvery(types.GET_STEPS, () => getSteps())
  yield takeEvery(types.DELETE_STEPS, e => deleteSteps(e.payload))
  yield takeEvery(types.ADD_STEPS, e => addSteps(e.payload))
  yield takeEvery(types.UPDATE_STEPS, e => updateSteps(e.payload))
}

import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * getPositions (payload) {
  yield put(setProcessing(types.GET_POSITIONS, true))
  try {
    const positions = yield call(get, `positions`)
    yield put(actions.getPositionsSuccess(positions.data))
  } catch (error) {
    setError(types.GET_POSITIONS, error)
  }
  yield put(setProcessing(types.GET_POSITIONS, false))
}

function * deletePositions (payload) {
  yield put(setProcessing(types.DELETE_POSITIONS, true))

  try {
    const positions = yield call(destroy, `positions/${payload._}`)
    yield put(actions.deletePositionsSuccess(positions))
  } catch (error) {
    setError(types.DELETE_POSITIONS, error)
  }
  yield put(setProcessing(types.DELETE_POSITIONS, false))
}
function * addPositions (payload) {
  yield put(setProcessing(types.ADD_POSITIONS, true))

  try {
    const positions = yield call(create, `positions`, payload)
    yield put(actions.addPositionsSuccess(positions.data))
  } catch (error) {
    setError(types.ADD_POSITIONS, error)
  }
  yield put(setProcessing(types.ADD_POSITIONS, false))
}
function * updatePositions (payload) {
  yield put(setProcessing(types.UPDATE_POSITIONS, true))

  try {
    const positions = yield call(
      update,
      `positions/${payload._}`,
      payload.update
    )
    yield put(actions.updatePositionsSuccess(positions.data))
  } catch (error) {
    setError(types.UPDATE_POSITIONS, error)
  }
  yield put(setProcessing(types.UPDATE_POSITIONS, false))
}
export const positionSagas = function * () {
  yield takeEvery(types.GET_POSITIONS, () => getPositions())
  yield takeEvery(types.DELETE_POSITIONS, e => deletePositions(e.payload))
  yield takeEvery(types.ADD_POSITIONS, e => addPositions(e.payload))
  yield takeEvery(types.UPDATE_POSITIONS, e => updatePositions(e.payload))
}

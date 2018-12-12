import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import * as actions from './actions'
import * as types from './actionTypes'

function * GetPositions () {
  yield put(actions.getPositionsRequest())
  try {
    const positions = yield call(get, 'positions')
    yield put(actions.getPositionsSuccess(positions))
  } catch (error) {
    yield put(actions.getPositionsFailed(error))
  }
  yield put(actions.getPositionsComplete)
}

function * DeletePosition () {
  yield put(actions.deletePositionRequest())
  try {
    const positions = yield call(destroy, 'positions')
    yield put(actions.deletePositionSuccess(positions))
  } catch (error) {
    yield put(actions.deletePositionFailed(error))
  }
  yield put(actions.deletePositionComplete)
}
function * AddPosition () {
  yield put(actions.addPositionRequest())
  try {
    const positions = yield call(create, 'positions')
    yield put(actions.addPositionSuccess(positions))
  } catch (error) {
    yield put(actions.addPositionFailed(error))
  }
  yield put(actions.addPositionComplete)
}
function * UpdatePosition () {
  yield put(actions.updatePositionRequest())
  try {
    const positions = yield call(update, 'positions')
    yield put(actions.updatePositionSuccess(positions))
  } catch (error) {
    yield put(actions.updatePositionFailed(error))
  }
  yield put(actions.updatePositionComplete)
}
export const positionSagas = function * () {
  yield takeEvery(types.GET_POSITIONS, () => GetPositions())
  yield takeEvery(types.DELETE_POSITION, e => DeletePosition(e.payload))
  yield takeEvery(types.ADD_POSITION, e => AddPosition(e.payload))
  yield takeEvery(types.UPDATE_POSITION, e => UpdatePosition(e.payload))
}

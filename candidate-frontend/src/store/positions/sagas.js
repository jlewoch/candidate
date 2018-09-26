import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, push, remove } from '../../api/mySql/mySql'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestGetPositions () {
  yield put(actions.getPositionsRequest())
  try {
    const positions = yield call(get, 'positions')
    yield put(actions.getPositionsSuccess(positions))
  } catch (error) {
    yield put(actions.getPositionsFailed(error))
  }
  yield put(actions.getPositionsComplete)
}

function * callRequestDeletePositions () {
  yield put(actions.deletePositionsRequest())
  try {
    const positions = yield call(remove, 'positions')
    yield put(actions.deletePositionsSuccess(positions))
  } catch (error) {
    yield put(actions.deletePositionsFailed(error))
  }
  yield put(actions.deletePositionsComplete)
}
function * callRequestAddPositions () {
  yield put(actions.addPositionsRequest())
  try {
    const positions = yield call(push, 'positions')
    yield put(actions.addPositionsSuccess(positions))
  } catch (error) {
    yield put(actions.addPositionsFailed(error))
  }
  yield put(actions.addPositionsComplete)
}
function * callRequestUpdatePositions () {
  yield put(actions.updatePositionsRequest())
  try {
    const positions = yield call(update, 'positions')
    yield put(actions.updatePositionsSuccess(positions))
  } catch (error) {
    yield put(actions.updatePositionsFailed(error))
  }
  yield put(actions.updatePositionsComplete)
}
export const requestPositionsSaga = function * () {
  yield takeEvery(types.GET_POSITIONS_REQUEST, () => callRequestGetPositions())
  yield takeEvery(types.DELETE_POSITION_REQUEST, () =>
    callRequestDeletePositions()
  )
  yield takeEvery(types.ADD_POSITION_REQUEST, () => callRequestAddPositions())
  yield takeEvery(types.UPDATE_POSITION_REQUEST, () =>
    callRequestUpdatePositions()
  )
}

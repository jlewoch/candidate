import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, push, remove } from '../../api/mySql/mySql'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestGetUsers () {
  yield put(actions.getUsersRequest())
  try {
    const steps = yield call(get, 'steps')
    yield put(actions.getUsersSuccess(steps))
  } catch (error) {
    yield put(actions.getUsersFailed(error))
  }
  yield put(actions.getUsersComplete)
}

function * callRequestDeleteUser () {
  yield put(actions.deleteUserRequest())
  try {
    const steps = yield call(remove, 'steps')
    yield put(actions.deleteUserSuccess(steps))
  } catch (error) {
    yield put(actions.deleteUserFailed(error))
  }
  yield put(actions.deleteUserComplete)
}
function * callRequestAddUser () {
  yield put(actions.addUserRequest())
  try {
    const steps = yield call(push, 'steps')
    yield put(actions.addUserSuccess(steps))
  } catch (error) {
    yield put(actions.addUserFailed(error))
  }
  yield put(actions.addUserComplete)
}
function * callRequestUpdateUser () {
  yield put(actions.updateUserRequest())
  try {
    const steps = yield call(update, 'steps')
    yield put(actions.updateUserSuccess(steps))
  } catch (error) {
    yield put(actions.updateUserFailed(error))
  }
  yield put(actions.updateUserComplete)
}
export const requestUsersSaga = function * () {
  yield takeEvery(types.GET_USERS_REQUEST, () => callRequestGetUsers())
  yield takeEvery(types.DELETE_USER_REQUEST, () =>
    callRequestDeleteUser()
  )
  yield takeEvery(types.ADD_USER_REQUEST, () => callRequestAddUser())
  yield takeEvery(types.UPDATE_USER_REQUEST, () =>
    callRequestUpdateUser()
  )
}

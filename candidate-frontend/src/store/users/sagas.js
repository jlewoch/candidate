import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, push, remove } from '../../api/mySql/mySql'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestGetUsers () {
  yield put(actions.getUsersRequest())
  try {
    const users = yield call(get, 'users')
    yield put(actions.getUsersSuccess(users))
  } catch (error) {
    yield put(actions.getUsersFailed(error))
  }
  yield put(actions.getUsersComplete)
}

function * callRequestDeleteUsers () {
  yield put(actions.deleteUsersRequest())
  try {
    const users = yield call(remove, 'users')
    yield put(actions.deleteUsersSuccess(users))
  } catch (error) {
    yield put(actions.deleteUsersFailed(error))
  }
  yield put(actions.deleteUsersComplete)
}
function * callRequestAddUsers () {
  yield put(actions.addUsersRequest())
  try {
    const users = yield call(push, 'users')
    yield put(actions.addUsersSuccess(users))
  } catch (error) {
    yield put(actions.addUsersFailed(error))
  }
  yield put(actions.addUsersComplete)
}
function * callRequestUpdateUsers () {
  yield put(actions.updateUsersRequest())
  try {
    const users = yield call(update, 'users')
    yield put(actions.updateUsersSuccess(users))
  } catch (error) {
    yield put(actions.updateUsersFailed(error))
  }
  yield put(actions.updateUsersComplete)
}
export const requestUsersSaga = function * () {
  yield takeEvery(types.GET_USERS_REQUEST, () => callRequestGetUsers())
  yield takeEvery(types.DELETE_USER_REQUEST, () =>
    callRequestDeleteUsers()
  )
  yield takeEvery(types.ADD_USER_REQUEST, () => callRequestAddUsers())
  yield takeEvery(types.UPDATE_USER_REQUEST, () =>
    callRequestUpdateUsers()
  )
}

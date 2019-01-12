import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * getAccountLevels () {
  setProcessing(types.GET_ACCOUNT_LEVELS, true)
  try {
    const account_levels = yield call(get, `account_levels`)
    yield put(actions.getAccountLevelsSuccess(account_levels.data))
  } catch (error) {
    setError(types.GET_ACCOUNT_LEVELS, error)
  }
  setProcessing(types.GET_ACCOUNT_LEVELS, false)
}

function * deleteAccountLevels (payload) {
  setProcessing(types.DELETE_ACCOUNT_LEVELS, true)

  try {
    const account_levels = yield call(destroy, `account_levels/${payload._}`)
    yield put(actions.deleteAccountLevelsSuccess(account_levels))
  } catch (error) {
    setError(types.DELETE_ACCOUNT_LEVELS, error)
  }
  setProcessing(types.DELETE_ACCOUNT_LEVELS, false)
}
function * addAccountLevels (payload) {
  setProcessing(types.ADD_ACCOUNT_LEVELS, true)

  try {
    const account_levels = yield call(create, `account_levels`, payload)
    yield put(actions.addAccountLevelsSuccess(account_levels))
  } catch (error) {
    setError(types.ADD_ACCOUNT_LEVELS, error)
  }
  setProcessing(types.ADD_ACCOUNT_LEVELS, false)
}
function * updateAccountLevels (payload) {
  setProcessing(types.UPDATE_ACCOUNT_LEVELS, true)

  try {
    const account_levels = yield call(
      update,
      `account_levels/${payload._}`,
      payload
    )
    yield put(actions.updateAccountLevelsSuccess(account_levels))
  } catch (error) {
    setError(types.UPDATE_ACCOUNT_LEVELS, error)
  }
  setProcessing(types.UPDATE_ACCOUNT_LEVELS, false)
}
export const accountLevelSagas = function * () {
  yield takeEvery(types.GET_ACCOUNT_LEVELS, () => getAccountLevels())
  yield takeEvery(types.DELETE_ACCOUNT_LEVELS, e =>
    deleteAccountLevels(e.payload)
  )
  yield takeEvery(types.ADD_ACCOUNT_LEVELS, e => addAccountLevels(e.payload))
  yield takeEvery(types.UPDATE_ACCOUNT_LEVELS, e =>
    updateAccountLevels(e.payload)
  )
}

import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestGetAccountLevels () {
  setProcessing(types.GET_ACCOUNT_LEVELS, true)
  try {
    const account_levels = yield call(get, `account_levels`)
    yield put(actions.getAccountLevelsSuccess(account_levels.data))
  } catch (error) {
    setError(types.GET_ACCOUNT_LEVELS, error)
  }
  setProcessing(types.GET_ACCOUNT_LEVELS, false)
}

function * callRequestDeleteAccountLevels (payload) {
  setProcessing(types.DELETE_ACCOUNT_LEVELS, true)

  try {
    const account_levels = yield call(destroy, `account_levels/${payload.id}`)
    yield put(actions.deleteAccountLevelsSuccess(account_levels))
  } catch (error) {
    setError(types.DELETE_ACCOUNT_LEVELS, error)
  }
  setProcessing(types.DELETE_ACCOUNT_LEVELS, false)
}
function * callRequestAddAccountLevels (payload) {
  setProcessing(types.ADD_ACCOUNT_LEVELS, true)

  try {
    const account_levels = yield call(create, `account_levels`)
    yield put(actions.addAccountLevelsSuccess(account_levels))
  } catch (error) {
    setError(types.ADD_ACCOUNT_LEVELS, error)
  }
  setProcessing(types.ADD_ACCOUNT_LEVELS, false)
}
function * callRequestUpdateAccountLevels (payload) {
  setProcessing(types.UPDATE_ACCOUNT_LEVELS, true)

  try {
    const account_levels = yield call(update, `account_levels/${payload.id}`)
    yield put(actions.updateAccountLevelsSuccess(account_levels))
  } catch (error) {
    setError(types.UPDATE_ACCOUNT_LEVELS, error)
  }
  setProcessing(types.UPDATE_ACCOUNT_LEVELS, false)
}
export const accountLevelSagas = function * () {
  yield takeEvery(types.GET_ACCOUNT_LEVELS, () => callRequestGetAccountLevels())
  yield takeEvery(types.DELETE_ACCOUNT_LEVELS, () =>
    callRequestDeleteAccountLevels()
  )
  yield takeEvery(types.ADD_ACCOUNT_LEVELS, () => callRequestAddAccountLevels())
  yield takeEvery(types.UPDATE_ACCOUNT_LEVELS, () =>
    callRequestUpdateAccountLevels()
  )
}

import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * callRequestGetAccounts () {
  setProcessing(types.GET_ACCOUNTS, true)
  try {
    const accounts = yield call(get, `accounts`)
    yield put(actions.getAccountsSuccess(accounts.data))
  } catch (error) {
    setError(types.GET_ACCOUNTS, error)
  }
  setProcessing(types.GET_ACCOUNTS, false)
}

function * callRequestDeleteAccounts (payload) {
  setProcessing(types.DELETE_ACCOUNTS, true)

  try {
    const accounts = yield call(destroy, `accounts/${payload.id}`)
    yield put(actions.deleteAccountsSuccess(accounts))
  } catch (error) {
    setError(types.DELETE_ACCOUNTS, error)
  }
  setProcessing(types.DELETE_ACCOUNTS, false)
}
function * callRequestAddAccounts (payload) {
  setProcessing(types.ADD_ACCOUNTS, true)

  try {
    const accounts = yield call(create, `accounts`)
    yield put(actions.addAccountsSuccess(accounts))
  } catch (error) {
    setError(types.ADD_ACCOUNTS, error)
  }
  setProcessing(types.ADD_ACCOUNTS, false)
}
function * callRequestUpdateAccounts (payload) {
  setProcessing(types.UPDATE_ACCOUNTS, true)

  try {
    const accounts = yield call(update, `accounts/${payload.id}`)
    yield put(actions.updateAccountsSuccess(accounts))
  } catch (error) {
    setError(types.UPDATE_ACCOUNTS, error)
  }
  setProcessing(types.UPDATE_ACCOUNTS, false)
}
export const accountSagas = function * () {
  yield takeEvery(types.GET_ACCOUNTS, () => callRequestGetAccounts())
  yield takeEvery(types.DELETE_ACCOUNTS, () => callRequestDeleteAccounts())
  yield takeEvery(types.ADD_ACCOUNTS, () => callRequestAddAccounts())
  yield takeEvery(types.UPDATE_ACCOUNTS, () => callRequestUpdateAccounts())
}

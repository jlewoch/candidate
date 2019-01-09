import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import { updateEmployeesSuccess } from '../employees/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * GetAccounts () {
  setProcessing(types.GET_ACCOUNTS, true)
  try {
    const accounts = yield call(get, `accounts`)
    yield put(actions.getAccountsSuccess(accounts.data))
  } catch (error) {
    setError(types.GET_ACCOUNTS, error)
  }
  setProcessing(types.GET_ACCOUNTS, false)
}

function * DeleteAccounts (payload) {
  setProcessing(types.DELETE_ACCOUNTS, true)

  try {
    const accounts = yield call(destroy, `accounts/${payload.id}`)
    yield put(actions.deleteAccountsSuccess(accounts))
  } catch (error) {
    setError(types.DELETE_ACCOUNTS, error)
  }
  setProcessing(types.DELETE_ACCOUNTS, false)
}
function * AddAccounts (payload) {
  setProcessing(types.ADD_ACCOUNTS, true)

  try {
    const accounts = yield call(create, `accounts`)
    yield put(actions.addAccountsSuccess(accounts.data))
  } catch (error) {
    setError(types.ADD_ACCOUNTS, error)
  }
  setProcessing(types.ADD_ACCOUNTS, false)
}
function * UpdateAccounts (payload) {
  setProcessing(types.UPDATE_ACCOUNTS, true)

  try {
    const accounts = yield call(
      update,
      `accounts/${payload._a}`,
      payload.update
    )
    yield put(
      actions.updateAccountsSuccess({
        _: payload._a,
        update: { ...accounts.data }
      })
    )
    if (payload._) {
      yield put(
        updateEmployeesSuccess({ _: payload._, update: payload.update })
      )
    }
  } catch (error) {
    setError(types.UPDATE_ACCOUNTS, error)
  }
  setProcessing(types.UPDATE_ACCOUNTS, false)
}
export const accountSagas = function * () {
  yield takeEvery(types.GET_ACCOUNTS, () => GetAccounts())
  yield takeEvery(types.DELETE_ACCOUNTS, e => DeleteAccounts(e.payload))
  yield takeEvery(types.ADD_ACCOUNTS, e => AddAccounts(e.payload))
  yield takeEvery(types.UPDATE_ACCOUNTS, e => UpdateAccounts(e.payload))
}

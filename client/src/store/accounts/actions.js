import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getAccounts = createAction(types.GET_ACCOUNTS)
export const getAccountsSuccess = createAction(types.GET_ACCOUNTS_SUCCESS)

export const addAccounts = createAction(types.ADD_ACCOUNTS)
export const addAccountsSuccess = createAction(types.ADD_ACCOUNTS_SUCCESS)

export const deleteAccounts = createAction(types.DELETE_ACCOUNTS)
export const deleteAccountsSuccess = createAction(types.DELETE_ACCOUNTS_SUCCESS)

export const updateAccounts = createAction(types.UPDATE_ACCOUNTS)
export const updateAccountsSuccess = createAction(types.UPDATE_ACCOUNTS_SUCCESS)

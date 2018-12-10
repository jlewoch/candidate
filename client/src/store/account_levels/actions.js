import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getAccountLevels = createAction(types.GET_ACCOUNT_LEVELS)
export const getAccountLevelsSuccess = createAction(types.GET_ACCOUNT_LEVELS_SUCCESS)

export const addAccountLevels = createAction(types.ADD_ACCOUNT_LEVELS)
export const addAccountLevelsSuccess = createAction(types.ADD_ACCOUNT_LEVELS_SUCCESS)

export const deleteAccountLevels = createAction(types.DELETE_ACCOUNT_LEVELS)
export const deleteAccountLevelsSuccess = createAction(
  types.DELETE_ACCOUNT_LEVELS_SUCCESS
)

export const updateAccountLevels = createAction(types.UPDATE_ACCOUNT_LEVELS)
export const updateAccountLevelsSuccess = createAction(
  types.UPDATE_ACCOUNT_LEVELS_SUCCESS
)

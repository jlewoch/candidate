import * as types from './actionTypes';
import {createAction} from 'redux-act';

export const getUsersRequest = createAction(types.GET_USERS_REQUEST)
export const getUsersSuccess = createAction(types.GET_USERS_SUCCESS)
export const getUsersFailed = createAction(types.GET_USERS_FAILED)
export const getUsersComplete = createAction(types.GET_USERS_COMPLETE)

export const addUserRequest = createAction(types.ADD_USER_REQUEST)
export const addUserSuccess = createAction(types.ADD_USER_SUCCESS)
export const addUserFailed = createAction(types.ADD_USER_FAILED)
export const addUserComplete = createAction(types.ADD_USER_COMPLETE)

export const deleteUserRequest = createAction(types.DELETE_USER_REQUEST)
export const deleteUserSuccess = createAction(types.DELETE_USER_SUCCESS)
export const deleteUserFailed = createAction(types.DELETE_USER_FAILED)
export const deleteUserComplete = createAction(types.DELETE_USER_COMPLETE)

export const updateUserRequest = createAction(types.UPDATE_USER_REQUEST)
export const updateUserSuccess = createAction(types.UPDATE_USER_SUCCESS)
export const updateUserFailed = createAction(types.UPDATE_USER_FAILED)
export const updateUserComplete = createAction(types.UPDATE_USER_COMPLETE)

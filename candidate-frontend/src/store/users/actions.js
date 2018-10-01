import * as types from './actionTypes';
import {createAction} from 'redux-act';

export const addUser = createAction(types.ADD_USER)
export const getUsers = createAction(types.GET_USERS)
export const deleteUser = createAction(types.DELETE_USER)
export const enableUser = createAction(types.ENABLE_USER)
export const disableUser = createAction(types.DISABLE_USER)
export const updateUser = createAction(types.UPDATE_USER)
export const showEnabledFilter = createAction(types.SHOW_ENABLED_FILTER)
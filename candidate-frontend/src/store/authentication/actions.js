import * as types from './actionTypes';
import { createAction } from 'redux-act';

export const login = createAction(types.LOGIN)
export const logout = createAction(types.LOG_OUT)
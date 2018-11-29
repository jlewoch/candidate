import * as types from './actionTypes';
import {createAction} from 'redux-act';

export const getApplicationsRequest = createAction(types.GET_APPLICATIONS_REQUEST)
export const getApplicationsSuccess = createAction(types.GET_APPLICATIONS_SUCCESS)
export const getApplicationsFailed = createAction(types.GET_APPLICATIONS_FAILED)
export const getApplicationsComplete = createAction(types.GET_APPLICATIONS_COMPLETE)

export const addApplicationRequest = createAction(types.ADD_APPLICATION_REQUEST)
export const addApplicationSuccess = createAction(types.ADD_APPLICATION_SUCCESS)
export const addApplicationFailed = createAction(types.ADD_APPLICATION_FAILED)
export const addApplicationComplete = createAction(types.ADD_APPLICATION_COMPLETE)

export const deleteApplicationRequest = createAction(types.DELETE_APPLICATION_REQUEST)
export const deleteApplicationSuccess = createAction(types.DELETE_APPLICATION_SUCCESS)
export const deleteApplicationFailed = createAction(types.DELETE_APPLICATION_FAILED)
export const deleteApplicationComplete = createAction(types.DELETE_APPLICATION_COMPLETE)

export const updateApplicationRequest = createAction(types.UPDATE_APPLICATION_REQUEST)
export const updateApplicationSuccess = createAction(types.UPDATE_APPLICATION_SUCCESS)
export const updateApplicationFailed = createAction(types.UPDATE_APPLICATION_FAILED)
export const updateApplicationComplete = createAction(types.UPDATE_APPLICATION_COMPLETE)

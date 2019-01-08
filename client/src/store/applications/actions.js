import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getApplications = createAction(types.GET_APPLICATIONS)
export const getApplicationsSuccess = createAction(
  types.GET_APPLICATIONS_SUCCESS
)

export const addApplications = createAction(types.ADD_APPLICATIONS)
export const addApplicationsSuccess = createAction(
  types.ADD_APPLICATIONS_SUCCESS
)

export const deleteApplications = createAction(types.DELETE_APPLICATIONS)
export const deleteApplicationsSuccess = createAction(
  types.DELETE_APPLICATIONS_SUCCESS
)

export const updateApplications = createAction(types.UPDATE_APPLICATIONS)
export const updateApplicationsSuccess = createAction(
  types.UPDATE_APPLICATIONS_SUCCESS
)

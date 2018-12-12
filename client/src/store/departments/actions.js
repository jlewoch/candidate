import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getDepartments = createAction(types.GET_DEPARTMENTS)
export const getDepartmentsSuccess = createAction(types.GET_DEPARTMENTS_SUCCESS)

export const addDepartments = createAction(types.ADD_DEPARTMENTS)
export const addDepartmentsSuccess = createAction(types.ADD_DEPARTMENTS_SUCCESS)

export const deleteDepartments = createAction(types.DELETE_DEPARTMENTS)
export const deleteDepartmentsSuccess = createAction(
  types.DELETE_DEPARTMENTS_SUCCESS
)

export const updateDepartments = createAction(types.UPDATE_DEPARTMENTS)
export const updateDepartmentsSuccess = createAction(
  types.UPDATE_DEPARTMENTS_SUCCESS
)

import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getEmployees = createAction(types.GET_EMPLOYEES)
export const getEmployeesSuccess = createAction(types.GET_EMPLOYEES_SUCCESS)

export const addEmployees = createAction(types.ADD_EMPLOYEES)
export const addEmployeesSuccess = createAction(types.ADD_EMPLOYEES_SUCCESS)

export const deleteEmployees = createAction(types.DELETE_EMPLOYEES)
export const deleteEmployeesSuccess = createAction(
  types.DELETE_EMPLOYEES_SUCCESS
)

export const updateEmployees = createAction(types.UPDATE_EMPLOYEES)
export const updateEmployeesSuccess = createAction(
  types.UPDATE_EMPLOYEES_SUCCESS
)
export const changeSelectedEmployee = createAction(
  types.CHANGE_SELECTED_EMPLOYEE
)

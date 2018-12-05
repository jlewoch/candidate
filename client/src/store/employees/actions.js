import * as types from './actionTypes';
import {createAction} from 'redux-act';

export const getEmployeesRequest = createAction(types.GET_EMPLOYEES_REQUEST)
export const getEmployeesSuccess = createAction(types.GET_EMPLOYEES_SUCCESS)
export const getEmployeesFailed = createAction(types.GET_EMPLOYEES_FAILED)
export const getEmployeesComplete = createAction(types.GET_EMPLOYEES_COMPLETE)

export const addEmployeeRequest = createAction(types.ADD_EMPLOYEE_REQUEST)
export const addEmployeeSuccess = createAction(types.ADD_EMPLOYEE_SUCCESS)
export const addEmployeeFailed = createAction(types.ADD_EMPLOYEE_FAILED)
export const addEmployeeComplete = createAction(types.ADD_EMPLOYEE_COMPLETE)

export const deleteEmployeeRequest = createAction(types.DELETE_EMPLOYEE_REQUEST)
export const deleteEmployeeSuccess = createAction(types.DELETE_EMPLOYEE_SUCCESS)
export const deleteEmployeeFailed = createAction(types.DELETE_EMPLOYEE_FAILED)
export const deleteEmployeeComplete = createAction(types.DELETE_EMPLOYEE_COMPLETE)

export const updateEmployeeRequest = createAction(types.UPDATE_EMPLOYEE_REQUEST)
export const updateEmployeeSuccess = createAction(types.UPDATE_EMPLOYEE_SUCCESS)
export const updateEmployeeFailed = createAction(types.UPDATE_EMPLOYEE_FAILED)
export const updateEmployeeComplete = createAction(types.UPDATE_EMPLOYEE_COMPLETE)

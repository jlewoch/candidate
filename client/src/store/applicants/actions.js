import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getApplicants = createAction(types.GET_APPLICANTS)
export const getApplicantsSuccess = createAction(types.GET_APPLICANTS_SUCCESS)

export const addApplicants = createAction(types.ADD_APPLICANTS)
export const addApplicantsSuccess = createAction(types.ADD_APPLICANTS_SUCCESS)

export const deleteApplicants = createAction(types.DELETE_APPLICANTS)
export const deleteApplicantsSuccess = createAction(
  types.DELETE_APPLICANTS_SUCCESS
)

export const updateApplicants = createAction(types.UPDATE_APPLICANTS)
export const updateApplicantsSuccess = createAction(
  types.UPDATE_APPLICANTS_SUCCESS
)

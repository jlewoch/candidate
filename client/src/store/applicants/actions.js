import * as types from './actionTypes';
import {createAction} from 'redux-act';

export const getApplicantsRequest = createAction(types.GET_APPLICANTS_REQUEST)
export const getApplicantsSuccess = createAction(types.GET_APPLICANTS_SUCCESS)
export const getApplicantsFailed = createAction(types.GET_APPLICANTS_FAILED)
export const getApplicantsComplete = createAction(types.GET_APPLICANTS_COMPLETE)

export const addApplicantRequest = createAction(types.ADD_APPLICANT_REQUEST)
export const addApplicantSuccess = createAction(types.ADD_APPLICANT_SUCCESS)
export const addApplicantFailed = createAction(types.ADD_APPLICANT_FAILED)
export const addApplicantComplete = createAction(types.ADD_APPLICANT_COMPLETE)

export const deleteApplicantRequest = createAction(types.DELETE_APPLICANT_REQUEST)
export const deleteApplicantSuccess = createAction(types.DELETE_APPLICANT_SUCCESS)
export const deleteApplicantFailed = createAction(types.DELETE_APPLICANT_FAILED)
export const deleteApplicantComplete = createAction(types.DELETE_APPLICANT_COMPLETE)

export const updateApplicantRequest = createAction(types.UPDATE_APPLICANT_REQUEST)
export const updateApplicantSuccess = createAction(types.UPDATE_APPLICANT_SUCCESS)
export const updateApplicantFailed = createAction(types.UPDATE_APPLICANT_FAILED)
export const updateApplicantComplete = createAction(types.UPDATE_APPLICANT_COMPLETE)

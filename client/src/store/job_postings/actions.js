import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getJobPostings = createAction(types.GET_JOB_POSTINGS)
export const getJobPostingsSuccess = createAction(
  types.GET_JOB_POSTINGS_SUCCESS
)

export const addJobPostings = createAction(types.ADD_JOB_POSTINGS)
export const addJobPostingsSuccess = createAction(
  types.ADD_JOB_POSTINGS_SUCCESS
)

export const deleteJobPostings = createAction(types.DELETE_JOB_POSTINGS)
export const deleteJobPostingsSuccess = createAction(
  types.DELETE_JOB_POSTINGS_SUCCESS
)

export const updateJobPostings = createAction(types.UPDATE_JOB_POSTINGS)
export const updateJobPostingsSuccess = createAction(
  types.UPDATE_JOB_POSTINGS_SUCCESS
)

export const changeSelectedJob = createAction(types.CHANGE_SELECTED_POSTING)

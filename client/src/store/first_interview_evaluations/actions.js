import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getFirstInterviewEvaluations = createAction(
  types.GET_FIRST_INTERVIEW_EVALUATIONS
)
export const getFirstInterviewEvaluationsSuccess = createAction(
  types.GET_FIRST_INTERVIEW_EVALUATIONS_SUCCESS
)

export const addFirstInterviewEvaluations = createAction(
  types.ADD_FIRST_INTERVIEW_EVALUATIONS
)
export const addFirstInterviewEvaluationsSuccess = createAction(
  types.ADD_FIRST_INTERVIEW_EVALUATIONS_SUCCESS
)

export const deleteFirstInterviewEvaluations = createAction(
  types.DELETE_FIRST_INTERVIEW_EVALUATIONS
)
export const deleteFirstInterviewEvaluationsSuccess = createAction(
  types.DELETE_FIRST_INTERVIEW_EVALUATIONS_SUCCESS
)

export const updateFirstInterviewEvaluations = createAction(
  types.UPDATE_FIRST_INTERVIEW_EVALUATIONS
)
export const updateFirstInterviewEvaluationsSuccess = createAction(
  types.UPDATE_FIRST_INTERVIEW_EVALUATIONS_SUCCESS
)

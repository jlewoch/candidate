import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getSecondInterviewEvaluations = createAction(
  types.GET_SECOND_INTERVIEW_EVALUATIONS
)
export const getSecondInterviewEvaluationsSuccess = createAction(
  types.GET_SECOND_INTERVIEW_EVALUATIONS_SUCCESS
)

export const addSecondInterviewEvaluations = createAction(
  types.ADD_SECOND_INTERVIEW_EVALUATIONS
)
export const addSecondInterviewEvaluationsSuccess = createAction(
  types.ADD_SECOND_INTERVIEW_EVALUATIONS_SUCCESS
)

export const deleteSecondInterviewEvaluations = createAction(
  types.DELETE_SECOND_INTERVIEW_EVALUATIONS
)
export const deleteSecondInterviewEvaluationsSuccess = createAction(
  types.DELETE_SECOND_INTERVIEW_EVALUATIONS_SUCCESS
)

export const updateSecondInterviewEvaluations = createAction(
  types.UPDATE_SECOND_INTERVIEW_EVALUATIONS
)
export const updateSecondInterviewEvaluationsSuccess = createAction(
  types.UPDATE_SECOND_INTERVIEW_EVALUATIONS_SUCCESS
)

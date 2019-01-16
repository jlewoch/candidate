import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getResumeEvaluations = createAction(types.GET_RESUME_EVALUATIONS)
export const getResumeEvaluationsSuccess = createAction(
  types.GET_RESUME_EVALUATIONS_SUCCESS
)

export const addResumeEvaluations = createAction(types.ADD_RESUME_EVALUATIONS)
export const addResumeEvaluationsSuccess = createAction(
  types.ADD_RESUME_EVALUATIONS_SUCCESS
)

export const deleteResumeEvaluations = createAction(
  types.DELETE_RESUME_EVALUATIONS
)
export const deleteResumeEvaluationsSuccess = createAction(
  types.DELETE_RESUME_EVALUATIONS_SUCCESS
)

export const updateResumeEvaluations = createAction(
  types.UPDATE_RESUME_EVALUATIONS
)
export const updateResumeEvaluationsSuccess = createAction(
  types.UPDATE_RESUME_EVALUATIONS_SUCCESS
)

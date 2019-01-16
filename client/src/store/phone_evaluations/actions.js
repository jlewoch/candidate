import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getPhoneEvaluations = createAction(types.GET_PHONE_EVALUATIONS)
export const getPhoneEvaluationsSuccess = createAction(
  types.GET_PHONE_EVALUATIONS_SUCCESS
)

export const addPhoneEvaluations = createAction(types.ADD_PHONE_EVALUATIONS)
export const addPhoneEvaluationsSuccess = createAction(
  types.ADD_PHONE_EVALUATIONS_SUCCESS
)

export const deletePhoneEvaluations = createAction(
  types.DELETE_PHONE_EVALUATIONS
)
export const deletePhoneEvaluationsSuccess = createAction(
  types.DELETE_PHONE_EVALUATIONS_SUCCESS
)

export const updatePhoneEvaluations = createAction(
  types.UPDATE_PHONE_EVALUATIONS
)
export const updatePhoneEvaluationsSuccess = createAction(
  types.UPDATE_PHONE_EVALUATIONS_SUCCESS
)

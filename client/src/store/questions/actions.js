import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getQuestions = createAction(types.GET_QUESTIONS)
export const getQuestionsSuccess = createAction(types.GET_QUESTIONS_SUCCESS)

export const addQuestions = createAction(types.ADD_QUESTIONS)
export const addQuestionsSuccess = createAction(types.ADD_QUESTIONS_SUCCESS)

export const deleteQuestions = createAction(types.DELETE_QUESTIONS)
export const deleteQuestionsSuccess = createAction(
  types.DELETE_QUESTIONS_SUCCESS
)

export const updateQuestions = createAction(types.UPDATE_QUESTIONS)
export const updateQuestionsSuccess = createAction(
  types.UPDATE_QUESTIONS_SUCCESS
)

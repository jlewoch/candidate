import * as types from './actionTypes';
import {createAction} from 'redux-act';

export const getQuestionsRequest = createAction(types.GET_QUESTIONS_REQUEST)
export const getQuestionsSuccess = createAction(types.GET_QUESTIONS_SUCCESS)
export const getQuestionsFailed = createAction(types.GET_QUESTIONS_FAILED)
export const getQuestionsComplete = createAction(types.GET_QUESTIONS_COMPLETE)

export const addQuestionRequest = createAction(types.ADD_QUESTION_REQUEST)
export const addQuestionSuccess = createAction(types.ADD_QUESTION_SUCCESS)
export const addQuestionFailed = createAction(types.ADD_QUESTION_FAILED)
export const addQuestionComplete = createAction(types.ADD_QUESTION_COMPLETE)

export const deleteQuestionRequest = createAction(types.DELETE_QUESTION_REQUEST)
export const deleteQuestionSuccess = createAction(types.DELETE_QUESTION_SUCCESS)
export const deleteQuestionFailed = createAction(types.DELETE_QUESTION_FAILED)
export const deleteQuestionComplete = createAction(types.DELETE_QUESTION_COMPLETE)

export const updateQuestionRequest = createAction(types.UPDATE_QUESTION_REQUEST)
export const updateQuestionSuccess = createAction(types.UPDATE_QUESTION_SUCCESS)
export const updateQuestionFailed = createAction(types.UPDATE_QUESTION_FAILED)
export const updateQuestionComplete = createAction(types.UPDATE_QUESTION_COMPLETE)

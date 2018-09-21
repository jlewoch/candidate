import * as types from './actionTypes';
import {createAction} from 'redux-act';

export const addQuestion = createAction(types.ADD_QUESTION)
export const getQuestions = createAction(types.GET_QUESTIONS)
export const deleteQuestion = createAction(types.DELETE_QUESTION)
export const enableQuestion = createAction(types.ENABLE_QUESTION)
export const disableQuestion = createAction(types.DISABLE_QUESTION)
export const updateQuestion = createAction(types.UPDATE_QUESTION)
export const showEnabledFilter = createAction(types.SHOW_ENABLED_FILTER)
export const questionStepFilter = createAction(types.QUESTION_STEP_FILTER)
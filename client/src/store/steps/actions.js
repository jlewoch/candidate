import * as types from './actionTypes';
import {createAction} from 'redux-act';

export const getStepsRequest = createAction(types.GET_STEPS)
export const getStepsSuccess = createAction(types.GET_STEPS_SUCCESS)
export const getStepsFailed = createAction(types.GET_STEPS_FAILED)
export const getStepsComplete = createAction(types.GET_STEPS_COMPLETE)

export const addStepRequest = createAction(types.ADD_STEP)
export const addStepSuccess = createAction(types.ADD_STEP_SUCCESS)
export const addStepFailed = createAction(types.ADD_STEP_FAILED)
export const addStepComplete = createAction(types.ADD_STEP_COMPLETE)

export const deleteStepRequest = createAction(types.DELETE_STEP)
export const deleteStepSuccess = createAction(types.DELETE_STEP_SUCCESS)
export const deleteStepFailed = createAction(types.DELETE_STEP_FAILED)
export const deleteStepComplete = createAction(types.DELETE_STEP_COMPLETE)

export const updateStepRequest = createAction(types.UPDATE_STEP)
export const updateStepSuccess = createAction(types.UPDATE_STEP_SUCCESS)
export const updateStepFailed = createAction(types.UPDATE_STEP_FAILED)
export const updateStepComplete = createAction(types.UPDATE_STEP_COMPLETE)

export const skipStep = createAction(types.SKIP_STEP)
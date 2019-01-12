import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getSteps = createAction(types.GET_STEPS)
export const getStepsSuccess = createAction(types.GET_STEPS_SUCCESS)

export const addSteps = createAction(types.ADD_STEPS)
export const addStepsSuccess = createAction(types.ADD_STEPS_SUCCESS)

export const deleteSteps = createAction(types.DELETE_STEPS)
export const deleteStepsSuccess = createAction(types.DELETE_STEPS_SUCCESS)

export const updateSteps = createAction(types.UPDATE_STEPS)
export const updateStepsSuccess = createAction(types.UPDATE_STEPS_SUCCESS)
export const chnageSelectedStep = createAction(types.CHANGE_SELECTED_STEP)

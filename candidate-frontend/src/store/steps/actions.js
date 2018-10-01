import * as types from './actionTypes';
import {createAction,} from 'redux-act';

export const recieveGetSteps = createAction(types.RECIEVE_GET_STEPS)
export const addStep = createAction(types.ADD_STEP)
export const getSteps = createAction(types.GET_STEPS)
export const deleteStep = createAction(types.DELETE_STEP)
export const enableStep = createAction(types.ENABLE_STEP)
export const disableStep = createAction(types.DISABLE_STEP)
export const updateStep = createAction(types.UPDATE_STEP)
export const skipStep = createAction(types.SKIP_STEP)
export const showEnabledFilter = createAction(types.SHOW_ENABLED_FILTER)
export const ProgressionLevelFilter = createAction(types.PROGRESSION_LEVEL_FILTER)
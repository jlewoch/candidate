import * as types from './actionTypes';
import {createAction} from 'redux-act';

export const getPositionsRequest = createAction(types.GET_POSITIONS)
export const getPositionsSuccess = createAction(types.GET_POSITIONS_SUCCESS)
export const getPositionsFailed = createAction(types.GET_POSITIONS_FAILED)
export const getPositionsComplete = createAction(types.GET_POSITIONS_COMPLETE)

export const addPositionRequest = createAction(types.ADD_POSITION)
export const addPositionSuccess = createAction(types.ADD_POSITION_SUCCESS)
export const addPositionFailed = createAction(types.ADD_POSITION_FAILED)
export const addPositionComplete = createAction(types.ADD_POSITION_COMPLETE)

export const deletePositionRequest = createAction(types.DELETE_POSITION)
export const deletePositionSuccess = createAction(types.DELETE_POSITION_SUCCESS)
export const deletePositionFailed = createAction(types.DELETE_POSITION_FAILED)
export const deletePositionComplete = createAction(types.DELETE_POSITION_COMPLETE)

export const updatePositionRequest = createAction(types.UPDATE_POSITION)
export const updatePositionSuccess = createAction(types.UPDATE_POSITION_SUCCESS)
export const updatePositionFailed = createAction(types.UPDATE_POSITION_FAILED)
export const updatePositionComplete = createAction(types.UPDATE_POSITION_COMPLETE)

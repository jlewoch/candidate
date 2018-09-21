import * as types from './actionTypes';
import {createAction} from 'redux-act';

export const addPosition = createAction(types.ADD_POSITION)
export const getPositions = createAction(types.GET_POSITIONS)
export const deletePosition = createAction(types.DELETE_POSITION)
export const enablePosition = createAction(types.ENABLE_POSITION)
export const disablePosition = createAction(types.DISABLE_POSITION)
export const updatePosition = createAction(types.UPDATE_POSITION)
export const showOpenFilter = createAction(types.SHOW_OPEN_FILTER)
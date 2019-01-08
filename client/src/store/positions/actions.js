import * as types from './actionTypes'
import { createAction } from 'redux-act'

export const getPositions = createAction(types.GET_POSITIONS)
export const getPositionsSuccess = createAction(types.GET_POSITIONS_SUCCESS)

export const addPositions = createAction(types.ADD_POSITIONS)
export const addPositionsSuccess = createAction(types.ADD_POSITIONS_SUCCESS)

export const deletePositions = createAction(types.DELETE_POSITIONS)
export const deletePositionsSuccess = createAction(
  types.DELETE_POSITIONS_SUCCESS
)

export const updatePositions = createAction(types.UPDATE_POSITIONS)
export const updatePositionsSuccess = createAction(
  types.UPDATE_POSITIONS_SUCCESS
)

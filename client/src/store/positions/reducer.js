import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  positions: [],
  requesting: false,
  error: false,
  errorMessage: ''
}

const positions = createReducer(
  {
    [types.ADD_POSITION_REQUEST]: state => ({ ...state, requesting: true }),
    [types.ADD_POSITION_SUCCESS]: (state, payload) => ({
      ...state,
      positions: [...state.positions, payload]
    }),
    [types.ADD_POSITION_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.ADD_POSITION_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.GET_POSITIONS_REQUEST]: state => ({ ...state, requesting: true }),
    [types.GET_POSITIONS_SUCCESS]: (state, payload) => ({
      ...state,
      positions: payload
    }),
    [types.GET_POSITIONS_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.GET_POSITIONS_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.DELETE_POSITION_REQUEST]: state => ({...state, requesting: true }),
    [types.DELETE_POSITION_SUCCESS]: (state, payload) => ({
      ...state,
      positions: [...state.positions.slice(0, state.positions.indexOf(payload)), ...state.positions.slice(state.positions.indexOf(payload) + 1)]
    }),
    [types.DELETE_POSITION_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.DELETE_POSITION_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.UPDATE_POSITION_REQUEST]: state => ({ ...state, requesting: true }),
    
    [types.UPDATE_POSITION_SUCCESS]: (state, payload) => ({
      ...state,
      positions: [...state.positions.slice(0, state.positions.indexOf(state.positions.find(item=> item.id = payload.id))), payload,...state.positions.slice(state.positions.indexOf(state.positions.find(item=> item.id = payload.id)) + 1)]
    }),
    [types.UPDATE_POSITION_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.UPDATE_POSITION_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

  },
  initialState
)

export default positions

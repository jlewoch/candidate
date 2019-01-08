import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const positions = createReducer(
  {
    [types.ADD_POSITIONS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_POSITIONS_SUCCESS]: (state, payload) => ({
      ...state,
      ...payload
    }),

    [types.DELETE_POSITIONS_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_POSITIONS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state[payload._], ...payload }
    })
  },
  initialState
)

export default positions

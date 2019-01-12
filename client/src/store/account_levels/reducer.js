import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const account_levels = createReducer(
  {
    [types.ADD_ACCOUNT_LEVELS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_ACCOUNT_LEVELS_SUCCESS]: (state, payload) => ({
      ...state,
      ...payload
    }),

    [types.DELETE_ACCOUNT_LEVELS_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_ACCOUNT_LEVELS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state[payload._], ...payload }
    })
  },
  initialState
)

export default account_levels

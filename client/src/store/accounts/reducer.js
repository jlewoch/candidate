import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const accounts = createReducer(
  {
    [types.ADD_ACCOUNTS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_ACCOUNTS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.DELETE_ACCOUNTS_SUCCESS]: (state, payload) => {
      let tem = state
      delete tem[payload._a]
      return tem
    },

    [types.UPDATE_ACCOUNTS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._a]: { ...state[payload._a], ...payload.update }
    })
  },
  initialState
)

export default accounts

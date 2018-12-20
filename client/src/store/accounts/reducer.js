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
      ...payload
    }),

    [types.DELETE_ACCOUNTS_SUCCESS]: (state, payload) => {
      let tem = state
      delete tem[payload._]
      return tem
    },

    [types.UPDATE_ACCOUNTS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state[payload._], ...payload.update }
    })
  },
  initialState
)

export default accounts

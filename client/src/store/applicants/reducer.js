import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const applicants = createReducer(
  {
    [types.ADD_APPLICANTS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_APPLICANTS_SUCCESS]: (state, payload) => ({
      ...state,
      ...payload
    }),

    [types.DELETE_APPLICANTS_SUCCESS]: (state, payload) => {
      let tem = state
      delete tem[payload._a]
      return tem
    },

    [types.UPDATE_APPLICANTS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._a]: { ...state[payload._a], ...payload.update }
    })
  },
  initialState
)

export default applicants

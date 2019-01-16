import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const phone_evaluations = createReducer(
  {
    [types.ADD_PHONE_EVALUATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_PHONE_EVALUATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.DELETE_PHONE_EVALUATIONS_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_PHONE_EVALUATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state.evaluations[payload._], ...payload }
    })
  },
  initialState
)

export default phone_evaluations

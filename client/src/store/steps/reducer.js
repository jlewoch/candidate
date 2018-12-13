import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const steps = createReducer(
  {
    [types.ADD_STEPS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_STEPS_SUCCESS]: (state, payload) => ({
      ...state,
      ...payload
    }),

    [types.DELETE_STEPS_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_STEPS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state[payload._], ...payload.update }
    })
  },
  initialState
)

export default steps

import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const resume_evaluations = createReducer(
  {
    [types.ADD_RESUME_EVALUATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_RESUME_EVALUATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.DELETE_RESUME_EVALUATIONS_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_RESUME_EVALUATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state.evaluations[payload._], ...payload }
    })
  },
  initialState
)

export default resume_evaluations

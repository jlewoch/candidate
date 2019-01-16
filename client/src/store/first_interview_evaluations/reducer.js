import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const first_interview_evaluations = createReducer(
  {
    [types.ADD_FIRST_INTERVIEW_EVALUATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_FIRST_INTERVIEW_EVALUATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.DELETE_FIRST_INTERVIEW_EVALUATIONS_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_FIRST_INTERVIEW_EVALUATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state.evaluations[payload._], ...payload }
    })
  },
  initialState
)

export default first_interview_evaluations

import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const second_interview_evaluations = createReducer(
  {
    [types.ADD_SECOND_INTERVIEW_EVALUATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_SECOND_INTERVIEW_EVALUATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.DELETE_SECOND_INTERVIEW_EVALUATIONS_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_SECOND_INTERVIEW_EVALUATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state.evaluations[payload._], ...payload }
    })
  },
  initialState
)

export default second_interview_evaluations

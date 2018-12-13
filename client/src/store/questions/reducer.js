import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const questions = createReducer(
  {
    [types.ADD_QUESTIONS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_QUESTIONS_SUCCESS]: (state, payload) => ({
      ...state,
      ...payload
    }),

    [types.DELETE_QUESTIONS_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_QUESTIONS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state[payload._], ...payload.update }
    })
  },
  initialState
)

export default questions

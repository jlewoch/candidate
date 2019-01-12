import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  questions: {},
  selected: null
}

const questions = createReducer(
  {
    [types.ADD_QUESTIONS_SUCCESS]: (state, payload) => ({
      ...state,
      questions: { ...state.questions, payload }
    }),

    [types.GET_QUESTIONS_SUCCESS]: (state, payload) => ({
      ...state,
      questions: payload
    }),

    [types.DELETE_QUESTIONS_SUCCESS]: (state, payload) => {
      let temp = state.questions
      delete temp[payload._]
      return { ...state, questions: temp }
    },

    [types.UPDATE_QUESTIONS_SUCCESS]: (state, payload) => ({
      ...state,
      questions: {
        ...state.questions,
        [payload._]: { ...state.questions[payload._], ...payload }
      }
    }),
    [types.CHANGE_SELECTED_QUESTION]: (state, payload) => ({
      ...state,
      selected: payload
    })
  },
  initialState
)

export default questions

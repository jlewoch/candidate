import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  questions: [],
  requesting: false,
  error: false,
  errorMessage: ''
}

const questions = createReducer(
  {
    [types.ADD_QUESTION_REQUEST]: state => ({ ...state, requesting: true }),
    [types.ADD_QUESTION_SUCCESS]: (state, payload) => ({
      ...state,
      questions: [...state.questions, payload]
    }),
    [types.ADD_QUESTION_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.ADD_QUESTION_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.GET_QUESTIONS_REQUEST]: state => ({ ...state, requesting: true }),
    [types.GET_QUESTIONS_SUCCESS]: (state, payload) => ({
      ...state,
      questions: payload
    }),
    [types.GET_QUESTIONS_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.GET_QUESTIONS_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.DELETE_QUESTION_REQUEST]: state => ({...state, requesting: true }),
    [types.DELETE_QUESTION_SUCCESS]: (state, payload) => ({
      ...state,
      questions: [...state.questions.slice(0, state.questions.indexOf(payload)), ...state.questions.slice(state.questions.indexOf(payload) + 1)]
    }),
    [types.DELETE_QUESTION_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.DELETE_QUESTION_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.UPDATE_QUESTION_REQUEST]: state => ({ ...state, requesting: true }),
    
    [types.UPDATE_QUESTION_SUCCESS]: (state, payload) => ({
      ...state,
      questions: [...state.questions.slice(0, state.questions.indexOf(state.questions.find(item=> item.id = payload.id))), payload,...state.questions.slice(state.questions.indexOf(state.questions.find(item=> item.id = payload.id)) + 1)]
    }),
    [types.UPDATE_QUESTION_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.UPDATE_QUESTION_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),
  },
  initialState
)

export default questions

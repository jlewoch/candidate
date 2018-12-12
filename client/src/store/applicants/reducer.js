import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  applicants: [],
  requesting: false,
  error: false,
  errorMessage: ''
}

const applicants = createReducer(
  {
    [types.ADD_APPLICANT]: state => ({ ...state, requesting: true }),
    [types.ADD_APPLICANT_SUCCESS]: (state, payload) => ({
      ...state,
      applicants: [...state.applicants, payload]
    }),
    [types.ADD_APPLICANT_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.ADD_APPLICANT_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.GET_APPLICANTS]: state => ({ ...state, requesting: true }),
    [types.GET_APPLICANTS_SUCCESS]: (state, payload) => ({
      ...state,
      applicants: payload
    }),
    [types.GET_APPLICANTS_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.GET_APPLICANTS_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.DELETE_APPLICANT]: state => ({ ...state, requesting: true }),
    [types.DELETE_APPLICANT_SUCCESS]: (state, payload) => ({
      ...state,
      applicants: [
        ...state.applicants.slice(0, state.applicants.indexOf(payload)),
        ...state.applicants.slice(state.applicants.indexOf(payload) + 1)
      ]
    }),
    [types.DELETE_APPLICANT_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.DELETE_APPLICANT_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.UPDATE_APPLICANT]: state => ({ ...state, requesting: true }),

    [types.UPDATE_APPLICANT_SUCCESS]: (state, payload) => ({
      ...state,
      applicants: [
        ...state.applicants.slice(
          0,
          state.applicants.indexOf(
            state.applicants.find(item => (item.id = payload.id))
          )
        ),
        payload,
        ...state.applicants.slice(
          state.applicants.indexOf(
            state.applicants.find(item => (item.id = payload.id))
          ) + 1
        )
      ]
    }),
    [types.UPDATE_APPLICANT_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.UPDATE_APPLICANT_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    })
  },
  initialState
)

export default applicants

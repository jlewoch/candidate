import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  steps:[],
  error: false,
  requesting: false,
  errorMessage: ''
}

const steps = createReducer(
  {
    [types.ADD_STEP_REQUEST]: state => ({ ...state, requesting: true }),
    [types.ADD_STEP_SUCCESS]: (state, payload) => ({
      ...state,
      steps: [...state.steps, payload]
    }),
    [types.ADD_STEP_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.ADD_STEP_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.GET_STEPS_REQUEST]: state => ({ ...state, requesting: true }),
    [types.GET_STEPS_SUCCESS]: (state, payload) => ({
      ...state,
      steps: payload
    }),
    [types.GET_STEPS_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.GET_STEPS_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.DELETE_STEP_REQUEST]: state => ({ ...state, requesting: true }),
    [types.DELETE_STEP_SUCCESS]: (state, payload) => ({
      ...state,
      steps: [
        ...state.steps.slice(0, state.steps.indexOf(payload)),
        ...state.steps.slice(state.steps.indexOf(payload) + 1)
      ]
    }),
    [types.DELETE_STEP_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.DELETE_STEP_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.UPDATE_STEP_REQUEST]: state => ({ ...state, requesting: true }),

    [types.UPDATE_STEP_SUCCESS]: (state, payload) => ({
      ...state,
      steps: [
        ...state.steps.slice(
          0,
          state.steps.indexOf(state.steps.find(item => (item.progressionLevel = payload.progressionLevel)))
        ),
        payload,
        ...state.steps.slice(
          state.steps.indexOf(
            state.steps.find(item => (item.progressionLevel = payload.progressionLevel))
          ) + 1
        )
      ]
    }),
    [types.UPDATE_STEP_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.UPDATE_STEP_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    })
  },
 initialState
)
export default steps

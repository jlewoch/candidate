import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  steps: {},
  selected: null
}

const steps = createReducer(
  {
    [types.ADD_STEPS_SUCCESS]: (state, payload) => ({
      ...state,
      steps: { ...state.steps, payload }
    }),

    [types.GET_STEPS_SUCCESS]: (state, payload) => ({
      ...state,
      steps: payload
    }),

    [types.DELETE_STEPS_SUCCESS]: (state, payload) => {
      let temp = state.steps
      delete temp[payload._]
      return { ...state, steps: temp }
    },

    [types.UPDATE_STEPS_SUCCESS]: (state, payload) => ({
      ...state,
      steps: {
        ...state.steps,
        [payload._]: { ...state[payload._], ...payload }
      }
    }),
    [types.CHANGE_SELECTED_STEP]: (state, payload) => ({
      ...state,
      selected: payload
    })
  },
  initialState
)

export default steps

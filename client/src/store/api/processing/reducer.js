import { createReducer } from 'redux-act'
import * as types from './actionTypes'
const initialState = {
  GET_STEPS: false,
  GET_APPLICANTS: false,
  GET_APPLICATIONS: false,
  GET_JOB_POSTINGS: false,
  GET_POSTIONS: false
}

const api = createReducer(
  {
    [types.SET_PROCESSING]: (state, payload) => ({
      ...state,
      [payload.stateKey]: payload.isLoading
    })
  },
  initialState
)

export default api

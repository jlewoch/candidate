import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const job_postings = createReducer(
  {
    [types.ADD_JOB_POSTINGS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_JOB_POSTINGS_SUCCESS]: (state, payload) => ({
      ...payload
    }),

    [types.DELETE_JOB_POSTINGS_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_JOB_POSTINGS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state[payload._], ...payload }
    })
  },
  initialState
)

export default job_postings

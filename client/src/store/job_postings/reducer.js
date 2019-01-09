import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  postings: {},
  selected: null
}

const job_postings = createReducer(
  {
    [types.ADD_JOB_POSTINGS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_JOB_POSTINGS_SUCCESS]: (state, payload) => ({
      ...state,
      postings: { ...state.postings, ...payload },
      selected:
        !state.selected && Object.keys(payload).length > 0
          ? Object.keys(payload)[0]
          : state.selected
    }),

    [types.DELETE_JOB_POSTINGS_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_JOB_POSTINGS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state[payload._], ...payload }
    }),
    [types.CHANGE_SELECTED_POSTING]: (state, payload) => ({
      ...state,
      selected: payload
    })
  },
  initialState
)

export default job_postings

import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  job_postings: []
}

const job_postings = createReducer(
  {
    [types.ADD_JOB_POSTINGS_SUCCESS]: (state, payload) => ({
      ...state,
      job_postings: [...state.job_postings, payload]
    }),

    [types.GET_JOB_POSTINGS_SUCCESS]: (state, payload) => ({
      ...state,
      job_postings: payload.job_postings,
      managers: payload.managers
    }),

    [types.DELETE_JOB_POSTINGS_SUCCESS]: (state, payload) => ({
      ...state,
      job_postings: [
        ...state.job_postings.slice(0, state.job_postings.indexOf(payload)),
        ...state.job_postings.slice(state.job_postings.indexOf(payload) + 1)
      ]
    }),

    [types.UPDATE_JOB_POSTINGS_SUCCESS]: (state, payload) => ({
      ...state,
      job_postings: [
        ...state.job_postings.slice(
          0,
          state.job_postings.indexOf(
            state.job_postings.find(item => (item.id = payload.id))
          )
        ),
        payload,
        ...state.job_postings.slice(
          state.job_postings.indexOf(
            state.job_postings.find(item => (item.id = payload.id))
          ) + 1
        )
      ]
    })
  },
  initialState
)

export default job_postings

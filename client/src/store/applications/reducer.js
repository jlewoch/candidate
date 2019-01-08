import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const applications = createReducer(
  {
    [types.ADD_APPLICATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_APPLICATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      ...payload
    }),

    [types.DELETE_APPLICATIONS_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_APPLICATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state[payload._], ...payload }
    })
  },
  initialState
)

export default applications

import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {}

const departments = createReducer(
  {
    [types.ADD_DEPARTMENTS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_DEPARTMENTS_SUCCESS]: (state, payload) => ({
      ...state,
      ...payload
    }),

    [types.DELETE_DEPARTMENTS_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_DEPARTMENTS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._]: { ...state[payload._], ...payload.update }
    })
  },
  initialState
)

export default departments

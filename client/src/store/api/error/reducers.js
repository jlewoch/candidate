import { createReducer } from 'redux-act'
import * as types from './actionTypes'
const initialState = {}

const tasks = createReducer(
  {
    [types.SET_ERROR]: (state, payload) => ({
      ...state,
      [payload.stateKey]: payload.error
    })
  },
  initialState
)

export default tasks

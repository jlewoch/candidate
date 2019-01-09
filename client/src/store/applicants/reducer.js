import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  applicants: {},
  selected: null
}

const applicants = createReducer(
  {
    [types.ADD_APPLICANTS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_APPLICANTS_SUCCESS]: (state, payload) => ({
      ...state,
      applicants: { ...state.applicants, ...payload },
      selected:
        !state.selected && Object.keys(payload).length > 0
          ? Object.keys(payload)[0]
          : state.selected
    }),

    [types.DELETE_APPLICANTS_SUCCESS]: (state, payload) => {
      let tem = state
      delete tem[payload._a]
      return tem
    },

    [types.UPDATE_APPLICANTS_SUCCESS]: (state, payload) => ({
      ...state,
      [payload._a]: { ...state[payload._a], ...payload.update }
    }),
    [types.CHANGE_SELECTED_APPLICANT]: (state, payload) => ({
      ...state,
      selected: payload
    })
  },
  initialState
)

export default applicants

import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  apps: {},
  filterValues: [],
  selected: null
}

const applications = createReducer(
  {
    [types.ADD_APPLICATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      payload
    }),

    [types.GET_APPLICATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      apps: { ...state.apps, ...payload },
      selected:
        !state.selected && Object.keys(payload).length > 0
          ? Object.keys(payload)[0]
          : state.selected,
      filterValues: []
    }),

    [types.DELETE_APPLICATIONS_SUCCESS]: (state, payload) => {
      let temp = state.apps
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_APPLICATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      apps: {
        ...state.apps,
        [payload._]: { ...state.apps[payload._], ...payload }
      }
    }),
    [types.CHANGE_SELECTED_APPLICATION]: (state, payload) => ({
      ...state,
      selected: payload
    }),
    [types.CHANGE_FILTER_VALUES]: (state, payload) => ({
      ...state,
      filterValues: payload
    })
  },
  initialState
)

export default applications

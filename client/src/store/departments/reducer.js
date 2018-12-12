import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  departments: []
}

const departments = createReducer(
  {
    [types.ADD_DEPARTMENTS_SUCCESS]: (state, payload) => ({
      ...state,
      departments: [...state.departments, payload]
    }),

    [types.GET_DEPARTMENTS_SUCCESS]: (state, payload) => ({
      ...state,
      departments: payload
    }),

    [types.DELETE_DEPARTMENTS_SUCCESS]: (state, payload) => ({
      ...state,
      departments: [
        ...state.departments.slice(0, state.departments.indexOf(payload)),
        ...state.departments.slice(state.departments.indexOf(payload) + 1)
      ]
    }),

    [types.UPDATE_DEPARTMENTS_SUCCESS]: (state, payload) => ({
      ...state,
      departments: [
        ...state.departments.slice(
          0,
          state.departments.indexOf(
            state.departments.find(item => (item.id = payload.id))
          )
        ),
        payload,
        ...state.departments.slice(
          state.departments.indexOf(
            state.departments.find(item => (item.id = payload.id))
          ) + 1
        )
      ]
    })
  },
  initialState
)

export default departments

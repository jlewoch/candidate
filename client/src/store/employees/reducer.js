import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  employees: [],
  managers:[]
}

const employees = createReducer(
  {
    [types.ADD_EMPLOYEES_SUCCESS]: (state, payload) => ({
      ...state,
      employees: [...state.employees, payload]
    }),

    [types.GET_EMPLOYEES_SUCCESS]: (state, payload) => ({
      ...state,
      employees: payload.employees,
      managers: payload.managers
    }),

    [types.DELETE_EMPLOYEES_SUCCESS]: (state, payload) => ({
      ...state,
      employees: [
        ...state.employees.slice(0, state.employees.indexOf(payload)),
        ...state.employees.slice(state.employees.indexOf(payload) + 1)
      ]
    }),

    [types.UPDATE_EMPLOYEES_SUCCESS]: (state, payload) => ({
      ...state,
      employees: [
        ...state.employees.slice(
          0,
          state.employees.indexOf(
            state.employees.find(item => (item.id = payload.id))
          )
        ),
        payload,
        ...state.employees.slice(
          state.employees.indexOf(
            state.employees.find(item => (item.id = payload.id))
          ) + 1
        )
      ]
    })
  },
  initialState
)

export default employees

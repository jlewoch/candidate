import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  employees: {},
  managers: []
}

const employees = createReducer(
  {
    [types.ADD_EMPLOYEES_SUCCESS]: (state, payload) => ({
      ...state,
      employees: [...state.employees, payload]
    }),

    [types.GET_EMPLOYEES_SUCCESS]: (state, payload) => ({
      ...state,
      employees: { ...payload.employees },
      managers: payload.managers
    }),

    [types.DELETE_EMPLOYEES_SUCCESS]: (state, payload) => {
      let temp = state
      delete temp[payload._]
      return temp
    },

    [types.UPDATE_EMPLOYEES_SUCCESS]: (state, payload) => {
      return {
        ...state,
        employees: {
          ...state.employees,
          [payload._]: { ...state.employees[payload._], ...payload.update }
        }
      }
    }
  },
  initialState
)

export default employees

import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  employees: {},
  selected: null
}

const employees = createReducer(
  {
    [types.ADD_EMPLOYEES_SUCCESS]: (state, payload) => ({
      ...state,
      employees: [...state.employees, payload]
    }),

    [types.GET_EMPLOYEES_SUCCESS]: (state, payload) => ({
      ...state,
      employees: { ...payload }
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
    },
    [types.CHANGE_SELECTED_EMPLOYEE]: (state, payload) => ({
      ...state,
      selected: payload
    })
  },
  initialState
)

export default employees

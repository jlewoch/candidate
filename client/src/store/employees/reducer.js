import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  employees: [],
  managers: [],
  requesting: false,
  error: false,
  errorMessage: ''
}

const employees = createReducer(
  {
    [types.ADD_EMPLOYEE_REQUEST]: state => ({ ...state, requesting: true }),
    [types.ADD_EMPLOYEE_SUCCESS]: (state, payload) => ({
      ...state,
      employees: [...state.employees, payload]
    }),
    [types.ADD_EMPLOYEE_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.ADD_EMPLOYEE_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.GET_EMPLOYEES_REQUEST]: state => ({ ...state, requesting: true }),
    [types.GET_EMPLOYEES_SUCCESS]: (state, payload) => ({
      ...state,
      employees: payload,
      managers: payload.filter(employee => employee.manager)
    }),
    [types.GET_EMPLOYEES_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.GET_EMPLOYEES_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.DELETE_EMPLOYEE_REQUEST]: state => ({ ...state, requesting: true }),
    [types.DELETE_EMPLOYEE_SUCCESS]: (state, payload) => ({
      ...state,
      employees: [
        ...state.employees.slice(0, state.employees.indexOf(payload)),
        ...state.employees.slice(state.employees.indexOf(payload) + 1)
      ]
    }),
    [types.DELETE_EMPLOYEE_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.DELETE_EMPLOYEE_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.UPDATE_EMPLOYEE_REQUEST]: state => ({ ...state, requesting: true }),

    [types.UPDATE_EMPLOYEE_SUCCESS]: (state, payload) => ({
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
    }),
    [types.UPDATE_EMPLOYEE_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.UPDATE_EMPLOYEE_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    })
  },
  initialState
)

export default employees

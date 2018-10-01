import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  applications: [],
  requesting: false,
  error: false,
  errorMessage: ''
}

const applications = createReducer(
  {
    [types.ADD_APPLICATION_REQUEST]: state => ({ ...state, requesting: true }),
    [types.ADD_APPLICATION_SUCCESS]: (state, payload) => ({
      ...state,
      applications: [...state.applications, payload]
    }),
    [types.ADD_APPLICATION_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.ADD_APPLICATION_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.GET_APPLICATIONS_REQUEST]: state => ({ ...state, requesting: true }),
    [types.GET_APPLICATIONS_SUCCESS]: (state, payload) => ({
      ...state,
      applications: payload
    }),
    [types.GET_APPLICATIONS_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.GET_APPLICATIONS_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.DELETE_APPLICATION_REQUEST]: state => ({...state, requesting: true }),
    [types.DELETE_APPLICATION_SUCCESS]: (state, payload) => ({
      ...state,
      applications: [...state.applications.slice(0, state.applications.indexOf(payload)), ...state.applications.slice(state.applications.indexOf(payload) + 1)]
    }),
    [types.DELETE_APPLICATION_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.DELETE_APPLICATION_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.UPDATE_APPLICATION_REQUEST]: state => ({ ...state, requesting: true }),
    
    [types.UPDATE_APPLICATION_SUCCESS]: (state, payload) => ({
      ...state,
      applications: [...state.applications.slice(0, state.applications.indexOf(state.applications.find(item=> item.id = payload.id))), payload,...state.applications.slice(state.applications.indexOf(state.applications.find(item=> item.id = payload.id)) + 1)]
    }),
    [types.UPDATE_APPLICATION_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.UPDATE_APPLICATION_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),
  },
  initialState
)

export default applications

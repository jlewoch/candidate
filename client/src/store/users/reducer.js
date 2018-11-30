import * as types from './actionTypes';
import { createReducer } from 'redux-act';

const initialState = {
    users:[],
    error: false,
    requesting: false,
    errorMessage: ''
}

const users = createReducer({
    [types.ADD_USER_REQUEST]: state => ({ ...state, requesting: true }),
    [types.ADD_USER_SUCCESS]: (state, payload) => ({
      ...state,
      users: [...state.users, payload]
    }),
    [types.ADD_USER_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.ADD_USER_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.GET_USERS_REQUEST]: state => ({ ...state, requesting: true }),
    [types.GET_USERS_SUCCESS]: (state, payload) => ({
      ...state,
      users: payload
    }),
    [types.GET_USERS_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.GET_USERS_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.DELETE_USER_REQUEST]: state => ({...state, requesting: true }),
    [types.DELETE_USER_SUCCESS]: (state, payload) => ({
      ...state,
      users: [...state.users.slice(0, state.users.indexOf(payload)), ...state.users.slice(state.users.indexOf(payload) + 1)]
    }),
    [types.DELETE_USER_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.DELETE_USER_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),

    [types.UPDATE_USER_REQUEST]: state => ({ ...state, requesting: true }),
    
    [types.UPDATE_USER_SUCCESS]: (state, payload) => ({
      ...state,
      users: [...state.users.slice(0, state.users.indexOf(state.users.find(item=> item.id = payload.id))), payload,...state.users.slice(state.users.indexOf(state.users.find(item=> item.id = payload.id)) + 1)]
    }),
    [types.UPDATE_USER_FAILED]: (state, payload) => ({
      ...state,
      error: true,
      errorMessage: payload
    }),
    [types.UPDATE_USER_COMPLETE]: state => ({
      ...state,
      error: false,
      requesting: false,
      errorMessage: ''
    }),
},initialState)

export default users
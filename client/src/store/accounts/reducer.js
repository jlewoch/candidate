import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  accounts: []
}

const accounts = createReducer(
  {
    [types.ADD_ACCOUNTS_SUCCESS]: (state, payload) => ({
      ...state,
      accounts: [...state.accounts, payload]
    }),

    [types.GET_ACCOUNTS_SUCCESS]: (state, payload) => ({
      ...state,
      accounts: payload
    }),

    [types.DELETE_ACCOUNTS_SUCCESS]: (state, payload) => ({
      ...state,
      accounts: [
        ...state.accounts.slice(0, state.accounts.indexOf(payload)),
        ...state.accounts.slice(state.accounts.indexOf(payload) + 1)
      ]
    }),

    [types.UPDATE_ACCOUNTS_SUCCESS]: (state, payload) => ({
      ...state,
      accounts: [
        ...state.accounts.slice(
          0,
          state.accounts.indexOf(
            state.accounts.find(item => (item.id = payload.id))
          )
        ),
        payload,
        ...state.accounts.slice(
          state.accounts.indexOf(
            state.accounts.find(item => (item.id = payload.id))
          ) + 1
        )
      ]
    })
  },
  initialState
)

export default accounts

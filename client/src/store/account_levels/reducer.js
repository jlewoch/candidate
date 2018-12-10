import * as types from './actionTypes'
import { createReducer } from 'redux-act'

const initialState = {
  account_levels: []
}

const account_levels = createReducer(
  {
    [types.ADD_ACCOUNT_LEVELS_SUCCESS]: (state, payload) => ({
      ...state,
      account_levels: [...state.account_levels, payload]
    }),

    [types.GET_ACCOUNT_LEVELS_SUCCESS]: (state, payload) => ({
      ...state,
      account_levels: payload
    }),

    [types.DELETE_ACCOUNT_LEVELS_SUCCESS]: (state, payload) => ({
      ...state,
      account_levels: [
        ...state.account_levels.slice(0, state.account_levels.indexOf(payload)),
        ...state.account_levels.slice(
          state.account_levels.indexOf(payload) + 1
        )
      ]
    }),

    [types.UPDATE_ACCOUNT_LEVELS_SUCCESS]: (state, payload) => ({
      ...state,
      account_levels: [
        ...state.account_levels.slice(
          0,
          state.account_levels.indexOf(
            state.account_levels.find(item => (item.id = payload.id))
          )
        ),
        payload,
        ...state.account_levels.slice(
          state.account_levels.indexOf(
            state.account_levels.find(item => (item.id = payload.id))
          ) + 1
        )
      ]
    })
  },
  initialState
)

export default account_levels

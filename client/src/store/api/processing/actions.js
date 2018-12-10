import { createAction } from 'redux-act'

import * as types from './actionTypes'

export const setProcessing = createAction(
  types.SET_PROCESSING,
  (stateKey, isLoading) => ({
    isLoading,
    stateKey
  })
)

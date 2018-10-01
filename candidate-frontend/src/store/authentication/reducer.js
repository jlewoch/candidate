import * as types from './actionTypes';
import { createReducer } from 'redux-act';

const authentication = createReducer({
    [types.LOGIN]: (state, payload)=> ({...state, error:true}),
    [types.LOG_OUT]: (state, payload)=>state
},{
    authenticating: true,
    error: false
})

export default authentication
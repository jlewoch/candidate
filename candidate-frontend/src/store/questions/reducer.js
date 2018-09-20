import * as types from './actionTypes';
import { createReducer } from 'redux-act';

const questions = createReducer({
    [types.ADD_QUESTION]: (state, payload)=>  ({...state, ...payload}),
    
    [types.GET_QUESTIONS]: (state, payload)=>  ({...state,...payload.map(questionState=> ({...questionState, visible: true}))}),
    
    [types.DELETE_QUESTION]: (state, payload)=>  ({...state, ...objects.keys(state)}),
    
    [types.UPDATE_QUESTION]: (state, payload)=>  ({...state,...payload}),
    
    [types.SKIP_QUESTION]: (state, payload)=>  ('skipped'),
    
    [types.SHOW_ENABLED_FILTER]: (state, payload)=>  ({...state,filtered:Object.keys(...state).map(questionState=> questionState.enabled === true ? questionState : {...questionState, visible: !questionState.visible})}),
    
    
    [types.QUESTION_question_FILTER]: (state, payload)=>  ({...state,filtered:Object.keys(...state).map(questionState=> questionState.progressionLevel === payload ? questionState : {...questionState, visible: !questionState.visible})})

},{})

export default questions
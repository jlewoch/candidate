import * as types from './actionTypes';
import { createReducer } from 'redux-act';

const steps = createReducer({
    [types.ADD_STEP]: (state, payload)=>  ('added step'),
    
    [types.GET_STEPS]: (state, payload)=>  ({...state,...payload.map(stepState=> ({...stepState, visible: true}))}),
    
    [types.DELETE_STEP]: (state, payload)=>  ({...state, ...objects.keys(state)}),
    
    [types.UPDATE_STEP]: (state, payload)=>  ({...state,...payload}),
    
    [types.SKIP_STEP]: (state, payload)=>  ('skipped'),
    
    [types.SHOW_ENABLED_FILTER]: (state, payload)=>  ({...state,filtered:Object.keys(...state).map(stepState=> stepState.enabled === true ? stepState : {...stepState, visible: !stepState.visible})}),
    
    
    [types.PROGRESSION_STEP_FILTER]: (state, payload)=>  ({...state,filtered:Object.keys(...state).map(stepState=> stepState.progressionLevel === payload ? stepState : {...stepState, visible: !stepState.visible})})
},{})
export default steps
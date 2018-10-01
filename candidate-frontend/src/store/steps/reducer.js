import * as types from './actionTypes';
import { createReducer } from 'redux-act';

const steps = createReducer({



    // [types.ADD_STEP]: (state, payload)=>  ({...state, ...payload}),
    
    // [types.STEPS_FETCH_STARTED]: (state, payload)=>  ({...state, ...payload}),

    // [types.STEPS_FETCH_SUCESS]: (state, payload)=>  ({...state, ...payload}),

    // [types.STEPS_FETCH_FAILED]: (state, payload)=>  ({...state, ...payload}),

    [types.RECIEVE_GET_STEPS]: (state, payload)=>  ({...state, steps: {...payload.map(stepState=> ({...stepState, visible: true}))}}),
    
    // [types.DELETE_STEP]: (state, payload)=>  ('DELETE_STEP'),
    
    // [types.UPDATE_STEP]: (state, payload)=>  ({...state,...payload}),
    
    // [types.SKIP_STEP]: (state, payload)=>  ('skipped'),
    
    // [types.SHOW_ENABLED_FILTER]: (state, payload)=>  ({...state,filtered: Object.keys(...state).map(stepState=> stepState.enabled === true ? stepState : {...stepState, visible: !stepState.visible})}),
    
    
    // [types.PROGRESSION_LEVEL_FILTER]: (state, payload)=>  ({...state,filtered: Object.keys(...state).map(stepState=> stepState.progressionLevel === payload ? stepState : {...stepState, visible: !stepState.visible})})
},{
    steps:{},
    fetching: false,
    error:false

})
export default steps
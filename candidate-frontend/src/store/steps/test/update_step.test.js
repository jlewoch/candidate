import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedUpdate} from './mockData'
const initialState = {
    steps:[],
    requesting: false,
    error: false,
    errorMessage:''
}

describe('update reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_STEP_REQUEST', () => {
    const startAction = actions.updateStepRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle UPDATE_STEP_SUCCESS', () => {
    const successAction = {
      type: 'UPDATE_STEP_SUCCESS',
      payload: expectedUpdate[0]
    };
    expect(reducer({steps: data}, successAction)).toEqual({steps:expectedUpdate});
  });

});
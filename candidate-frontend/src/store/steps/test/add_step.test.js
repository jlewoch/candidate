import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedAdd} from './mockData'
const initialState = {
    steps:[],
    requesting: false,
    error: false,
    errorMessage:''
}
describe('add reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_STEP_REQUEST', () => {
    const startAction = actions.addStepRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle ADD_STEP_SUCCESS', () => {
    const successAction = {
      type: 'ADD_STEP_SUCCESS',
      payload: expectedAdd[4]
      
    };
    expect(reducer({steps: data}, successAction)).toEqual({steps: expectedAdd});
  });

});
import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedRemove} from './mockData'
const initialState = {
    steps:[],
    requesting: false,
    error: false,
    errorMessage:''
}
describe('delete reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DELETE_STEP_REQUEST', () => {
    const startAction = actions.deleteStepRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle DELETE_STEP_SUCCESS', () => {
    const successAction = {
      type: 'DELETE_STEP_SUCCESS',
      payload: data[2]
      
    };
    expect(reducer({steps: data}, successAction)).toEqual({steps: expectedRemove});
  });

});
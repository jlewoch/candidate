import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedUpdate} from './mockData'
const initialState = {
    positions:[],
    requesting: false,
    error: false,
    errorMessage:''
}

describe('update reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_POSITION_REQUEST', () => {
    const startAction = actions.updatePositionRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle UPDATE_POSITION_SUCCESS', () => {
    const successAction = {
      type: 'UPDATE_POSITION_SUCCESS',
      payload: expectedUpdate[0]
    };
    expect(reducer({positions: data}, successAction)).toEqual({positions:expectedUpdate});
  });

});
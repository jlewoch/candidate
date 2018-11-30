import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedUpdate} from './mockData'
const initialState = {
    applications:[],
    requesting: false,
    error: false,
    errorMessage:''
}

describe('update reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_APPLICATION_REQUEST', () => {
    const startAction = actions.updateApplicationRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle UPDATE_APPLICATION_SUCCESS', () => {
    const successAction = {
      type: 'UPDATE_APPLICATION_SUCCESS',
      payload: expectedUpdate[0]
    };
    expect(reducer({applications: data}, successAction)).toEqual({applications:expectedUpdate});
  });

});
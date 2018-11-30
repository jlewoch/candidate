import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedUpdate} from './mockData'
const initialState = {
    users:[],
    requesting: false,
    error: false,
    errorMessage:''
}

describe('update reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_USER_REQUEST', () => {
    const startAction = actions.updateUserRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle UPDATE_USER_SUCCESS', () => {
    const successAction = {
      type: 'UPDATE_USER_SUCCESS',
      payload: expectedUpdate[0]
    };
    expect(reducer({users: data}, successAction)).toEqual({users:expectedUpdate});
  });

});
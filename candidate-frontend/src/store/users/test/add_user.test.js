import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedAdd} from './mockData'
const initialState = {
    users:[],
    requesting: false,
    error: false,
    errorMessage:''
}
describe('add reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_USER_REQUEST', () => {
    const startAction = actions.addUserRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle ADD_USER_SUCCESS', () => {
    const successAction = {
      type: 'ADD_USER_SUCCESS',
      payload: expectedAdd[2]
      
    };
    expect(reducer({users: data}, successAction)).toEqual({users: expectedAdd});
  });

});
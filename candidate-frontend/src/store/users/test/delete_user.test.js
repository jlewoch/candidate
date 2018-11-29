import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedRemove} from './mockData'
const initialState = {
    users:[],
    requesting: false,
    error: false,
    errorMessage:''
}
describe('delete reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DELETE_USER_REQUEST', () => {
    const startAction = actions.deleteUserRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle DELETE_USER_SUCCESS', () => {
    const successAction = {
      type: 'DELETE_USER_SUCCESS',
      payload: data[1]
      
    };
    expect(reducer({users: data}, successAction)).toEqual({users: expectedRemove});
  });

});
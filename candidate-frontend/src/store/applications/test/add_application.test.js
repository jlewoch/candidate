import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedAdd} from './mockData'
const initialState = {
    applications:[],
    requesting: false,
    error: false,
    errorMessage:''
}
describe('add reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_APPLICATION_REQUEST', () => {
    const startAction = actions.addApplicationRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle ADD_APPLICATION_SUCCESS', () => {
    const successAction = {
      type: 'ADD_APPLICATION_SUCCESS',
      payload: expectedAdd[4]
      
    };
    expect(reducer({applications: data}, successAction)).toEqual({applications: expectedAdd});
  });

});
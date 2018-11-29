import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedRemove} from './mockData'
const initialState = {
    applications:[],
    requesting: false,
    error: false,
    errorMessage:''
}
describe('delete reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DELETE_APPLICATION_REQUEST', () => {
    const startAction = actions.deleteApplicationRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle DELETE_APPLICATION_SUCCESS', () => {
    const successAction = {
      type: 'DELETE_APPLICATION_SUCCESS',
      payload: data[2]
      
    };
    expect(reducer({applications: data}, successAction)).toEqual({applications: expectedRemove});
  });

});
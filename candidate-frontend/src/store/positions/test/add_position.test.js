import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedAdd} from './mockData'
const initialState = {
    positions:[],
    requesting: false,
    error: false,
    errorMessage:''
}
describe('add reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_POSITION_REQUEST', () => {
    const startAction = actions.addPositionRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle ADD_POSITION_SUCCESS', () => {
    const successAction = {
      type: 'ADD_POSITION_SUCCESS',
      payload: expectedAdd[4]
      
    };
    expect(reducer({positions: data}, successAction)).toEqual({positions: expectedAdd});
  });

});
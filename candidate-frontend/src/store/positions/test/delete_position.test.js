import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedRemove} from './mockData'
const initialState = {
    positions:[],
    requesting: false,
    error: false,
    errorMessage:''
}
describe('delete reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DELETE_POSITION_REQUEST', () => {
    const startAction = actions.deletePositionRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle DELETE_POSITION_SUCCESS', () => {
    const successAction = {
      type: 'DELETE_POSITION_SUCCESS',
      payload: data[2]
      
    };
    expect(reducer({positions: data}, successAction)).toEqual({positions: expectedRemove});
  });

});
import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedRemove} from './mockData'
const initialState = {
    questions:[],
    requesting: false,
    error: false,
    errorMessage:''
}
describe('delete reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DELETE_QUESTION_REQUEST', () => {
    const startAction = actions.deleteQuestionRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle DELETE_QUESTION_SUCCESS', () => {
    const successAction = {
      type: 'DELETE_QUESTION_SUCCESS',
      payload: data[2]
      
    };
    expect(reducer({questions: data}, successAction)).toEqual({questions: expectedRemove});
  });

});
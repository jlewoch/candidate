import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedUpdate} from './mockData'
const initialState = {
    questions:[],
    requesting: false,
    error: false,
    errorMessage:''
}

describe('update reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_QUESTION_REQUEST', () => {
    const startAction = actions.updateQuestionRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle UPDATE_QUESTION_SUCCESS', () => {
    const successAction = {
      type: 'UPDATE_QUESTION_SUCCESS',
      payload: expectedUpdate[0]
    };
    expect(reducer({questions: data}, successAction)).toEqual({questions:expectedUpdate});
  });

});
import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedUpdate} from './mockData'
const initialState = {
    applicants:[],
    requesting: false,
    error: false,
    errorMessage:''
}

describe('update reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_APPLICANT_REQUEST', () => {
    const startAction = actions.updateApplicantRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle UPDATE_APPLICANT_SUCCESS', () => {
    const successAction = {
      type: 'UPDATE_APPLICANT_SUCCESS',
      payload: expectedUpdate[0]
    };
    expect(reducer({applicants: data}, successAction)).toEqual({applicants:expectedUpdate});
  });

});
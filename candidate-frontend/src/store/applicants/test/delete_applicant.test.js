import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedRemove} from './mockData'
const initialState = {
    applicants:[],
    requesting: false,
    error: false,
    errorMessage:''
}
describe('delete reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle DELETE_APPLICANT_REQUEST', () => {
    const startAction = actions.deleteApplicantRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle DELETE_APPLICANT_SUCCESS', () => {
    const successAction = {
      type: 'DELETE_APPLICANT_SUCCESS',
      payload: data[2]
      
    };
    expect(reducer({applicants: data}, successAction)).toEqual({applicants: expectedRemove});
  });

});
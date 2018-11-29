import reducer from '../reducer';
import * as actions from '../actions';
import {data, expectedAdd} from './mockData'
const initialState = {
    applicants:[],
    requesting: false,
    error: false,
    errorMessage:''
}
describe('add reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_APPLICANT_REQUEST', () => {
    const startAction = actions.addApplicantRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle ADD_APPLICANT_SUCCESS', () => {
    const successAction = {
      type: 'ADD_APPLICANT_SUCCESS',
      payload: expectedAdd[4]
      
    };
    expect(reducer({applicants: data}, successAction)).toEqual({applicants: expectedAdd});
  });

});
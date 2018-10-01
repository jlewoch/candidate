import reducer from '../reducer';
import * as actions from '../actions';
import {data} from './mockData'
const initalState = {
    positions:[],
    requesting: false,
    error: false,
    errorMessage:''
}
describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initalState);
  });

  it('should handle GET_POSITIONS_REQUEST', () => {
    const startAction = actions.getPositionsRequest()
    expect(reducer({}, startAction)).toEqual({requesting: true});
  });

  it('should handle GET_POSITIONS_SUCCESS', () => {
    const successAction = {
      type: 'GET_POSITIONS_SUCCESS',
      payload: data, // important to pass correct payload, that's what the tests are for ;)
    };
    expect(reducer({}, successAction)).toEqual({positions:data});
  });

//   it('should handle UPDATE_POST_SUCCESS', () => {
//     const updateAction = {
//       type: UPDATE_POST_SUCCESS,
//       post: getPostMock.data,
//     };
//     expect(reducer({}, updateAction)).toEqual(getPostMock.data);
//   });

  // it('should handle GET_POST_FAIL', () => {
  //   const failAction = {
  //     type: actions.GET_POST_FAIL,
  //     error: { success: false },
  //   };
  //   expect(reducer({}, failAction)).toEqual({ error:  });
  // });
});
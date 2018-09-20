import { combineReducers } from 'redux';
import steps from './steps/reducer'
import users from './users/reducer'
import positions from './positions/reducer'
import questions from './questions/reducer'
import grading from './grading/reducer'
import authentication from './authentication/reducer'


const reducers = combineReducers({
steps
})

export default reducers;
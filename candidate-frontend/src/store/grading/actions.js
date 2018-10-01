import * as types from './actionTypes';
import {createAction} from 'redux-act';

export const addNotes = createAction(types.ADD_NOTES)
export const removeNotes = createAction(types.REMOVE_NOTES)
export const submitGrade = createAction(types.SUBMIT_GRADE)
export const changeGrade = createAction(types.CHANGE_GRADE)
export const saveGrade = createAction(types.SAVE_GRADE)
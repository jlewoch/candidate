import { takeEvery, call, put } from 'redux-saga/effects'
import { get, update, create, destroy } from '../api/api'
import { setProcessing } from '../api/processing/actions'
import { setError } from '../api/error/actions'
import * as actions from './actions'
import * as types from './actionTypes'

function * getPhoneEvaluations () {
  setProcessing(types.GET_PHONE_EVALUATIONS, true)
  try {
    const phone_evaluations = yield call(get, `phone_evaluations`)
    yield put(actions.getPhoneEvaluationsSuccess(phone_evaluations.data))
  } catch (error) {
    setError(types.GET_PHONE_EVALUATIONS, error)
  }
  setProcessing(types.GET_PHONE_EVALUATIONS, false)
}

function * deletePhoneEvaluations (payload) {
  setProcessing(types.DELETE_PHONE_EVALUATIONS, true)

  try {
    const phone_evaluations = yield call(
      destroy,
      `phone_evaluations/${payload._}`
    )
    yield put(actions.deletePhoneEvaluationsSuccess(phone_evaluations))
  } catch (error) {
    setError(types.DELETE_PHONE_EVALUATIONS, error)
  }
  setProcessing(types.DELETE_PHONE_EVALUATIONS, false)
}
function * addPhoneEvaluations (payload) {
  setProcessing(types.ADD_PHONE_EVALUATIONS, true)

  try {
    const phone_evaluations = yield call(create, `phone_evaluations`, payload)
    yield put(actions.addPhoneEvaluationsSuccess(phone_evaluations.data))
  } catch (error) {
    setError(types.ADD_PHONE_EVALUATIONS, error)
  }
  setProcessing(types.ADD_PHONE_EVALUATIONS, false)
}
function * updatePhoneEvaluations (payload) {
  setProcessing(types.UPDATE_PHONE_EVALUATIONS, true)

  try {
    const phone_evaluations = yield call(
      update,
      `phone_evaluations/${payload._}`,
      payload.update
    )
    yield put(
      actions.updatePhoneEvaluationsSuccess(phone_evaluations.data[payload._])
    )
  } catch (error) {
    setError(types.UPDATE_PHONE_EVALUATIONS, error)
  }
  setProcessing(types.UPDATE_PHONE_EVALUATIONS, false)
}
export const phoneEvaluationSagas = function * () {
  yield takeEvery(types.GET_PHONE_EVALUATIONS, () => getPhoneEvaluations())
  yield takeEvery(types.DELETE_PHONE_EVALUATIONS, e =>
    deletePhoneEvaluations(e.payload)
  )
  yield takeEvery(types.ADD_PHONE_EVALUATIONS, e =>
    addPhoneEvaluations(e.payload)
  )
  yield takeEvery(types.UPDATE_PHONE_EVALUATIONS, e =>
    updatePhoneEvaluations(e.payload)
  )
}

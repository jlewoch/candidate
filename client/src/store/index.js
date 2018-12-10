import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, rootSaga } from './roots'

import { employeeSagas } from './employees/sagas'
import { accountSagas } from './accounts/sagas'
import { accountLevelSagas } from './account_levels/sagas'

const saga = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(saga))
const store = createStore(rootReducer, enhancer)
saga.run(employeeSagas)
saga.run(accountLevelSagas)
saga.run(accountSagas)

export default store

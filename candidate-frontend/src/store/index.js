import { createStore,applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';
import {rootReducer, rootSaga} from './roots';
import { requestStepsSaga } from './steps/sagas';


const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
rootSaga()
export default store;
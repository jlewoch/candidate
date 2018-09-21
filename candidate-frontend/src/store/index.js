import { createStore,applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';

const history = createBrowserHistory()

const sagaMiddleware = createSagaMiddleware()

const store = createStore(connectRouter(history)(reducers), applyMiddleware(routerMiddleware(history),sagaMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;
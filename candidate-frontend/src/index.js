import React from 'react';
import ReactDOM from 'react-dom';
import App from './main';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import {Provider} from 'react-redux'
import { add } from './store/steps/actions';

store.dispatch(add({hi:3}))
console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
    <Router>
    <App />
    </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

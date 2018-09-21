import React from 'react';
import ReactDOM from 'react-dom';
import App from './main';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import { ConnectedRouter} from 'connected-react-router'

ReactDOM.render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
    <App />
    </ConnectedRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

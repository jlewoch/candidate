import React from 'react';
import ReactDOM from 'react-dom';
import App from './main';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import { ConnectedRouter} from 'connected-react-router'
import { getSteps } from './store/steps/actions';
store.dispatch(getSteps({stpep:'hi'}))

ReactDOM.render(
    <Provider store={store}>
    <button onClick={()=>console.log(store.getState())}></button>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import App from './main';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import { ConnectedRouter} from 'connected-react-router'
import { getSteps } from './store/steps/actions';
import PositionCard from './components/postion_card/PositionCard';
store.dispatch(getSteps({stpep:'hi'}))

ReactDOM.render(
    <Provider store={store}>
    <PositionCard />
    <button onClick={()=>console.log(store.getState())}></button>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

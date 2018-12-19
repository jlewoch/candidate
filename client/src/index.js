import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import store from './store'
import registerServiceWorker from './registerServiceWorker'
import 'primereact/resources/themes/nova-dark/theme.css'
import 'primereact/resources/primereact.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'fullcalendar/dist/fullcalendar.css'

import './index.css'

import Routes from './routes/Routes'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

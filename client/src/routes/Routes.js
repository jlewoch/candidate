import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Admin } from '../components/admin'
const Routes = () => {
  return (
    <Switch>
      <Route path='/' exact component={Admin} />
    </Switch>
  )
}

export default Routes

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { UserAdmin } from './users'
import { QuestionsAdmin } from './questions'
import { StepsAdmin } from './steps'

export default class AdminDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Route path='/admin/users' exact component={UserAdmin} />
        <Route path='/admin/questions' exact component={QuestionsAdmin} />
        <Route path='/admin/steps' exact component={StepsAdmin} />
      </div>
    )
  }
}

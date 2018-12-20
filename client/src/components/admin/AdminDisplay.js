import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { UserAdmin } from './users'
import { QuestionsAdmin } from './evaluations/questions_admin'
import { StepsAdmin } from './evaluations/steps_admin'

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

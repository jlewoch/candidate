import React, { Component } from 'react'

import { UserDatatable } from './datatable'

export default class UserAdminDisplay extends Component {
  constructor () {
    super()
    this.state = {
      adding: false,
      displayDialog: false
    }
  }

  componentDidMount () {
    this.props.getEmployees()
    this.props.getAccountLevels()
    this.props.getAccounts()
    this.props.getDepartments()
  }

  render () {
    return (
      <div>
        <div className='content-section introduction'>
          <div className='feature-intro'>
            <h1>Admin</h1>
          </div>
        </div>

        <div className='content-section implementation'>
          <UserDatatable />
        </div>
      </div>
    )
  }
}

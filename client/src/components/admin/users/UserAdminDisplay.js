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

  save = () => {}

  delete = () => {}

  update = (property, value) => {}

  onSelect = e => {
    this.setState({
      displayDialog: true,
      selectedEmployee: Object.assign({}, e.data),
      activeIndex: null
    })
  }

  addNew = () => {
    this.setState({
      adding: true,
      displayDialog: true
    })
  }
  suggestions = e => {
    let results = this.props.departments.filter(item =>
      item.name.toLowerCase().startsWith(e.query.toLowerCase())
    )
    console.log(results)
    this.setState({ deptSuggestions: results })
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

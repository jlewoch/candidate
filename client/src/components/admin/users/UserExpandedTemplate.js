import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ToggleButton } from 'primereact/togglebutton'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { AutoComplete } from 'primereact/autocomplete'
import { InputMask } from 'primereact/inputmask'
import { Dropdown } from 'primereact/dropdown'

export default class UserExpandedTemplateDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = { editing: false, showDialog: false }
  }
  componentDidMount () {
    this.setState({
      selectedUser: this.props.selectedUser
    })
  }

  managerSuggestions = e => {
    console.log(e, this.props.managers)

    let results = this.props.managers.filter(item =>
      item.full_name.toLowerCase().includes(e.query.toLowerCase())
    )
    this.setState({ managerSuggestions: results })
  }
  departmentSuggestions = e => {
    let results = this.props.departments.filter(item =>
      item.name.toLowerCase().includes(e.query.toLowerCase())
    )

    this.setState({ deptSuggestions: results })
  }

  render () {
    const { selectedUser, editing } = this.state

    if (!selectedUser) {
      return <div />
    }
    return (
      <div className='p-grid p-dir-col' style={{ padding: '.75em' }}>
        <div className='p-grid p-fluid' style={{ padding: '.75em' }}>
          <div className='p-col-12 p-md-6 p-lg-3' style={{ padding: '.75em' }}>
            <span className='p-float-label'>
              <InputText
                onChange={e =>
                  this.setState({
                    selectedUser: {
                      ...selectedUser,
                      firstName: e.value
                    }
                  })
                }
                required
                disabled={!editing}
                value={selectedUser.firstName}
              />
              <label htmlFor='in'>First Name</label>
            </span>
          </div>
          <div className='p-col-12 p-md-6 p-lg-3' style={{ padding: '.75em' }}>
            <span className='p-float-label'>
              <InputText
                onChange={e =>
                  this.setState({
                    selectedUser: {
                      ...selectedUser,
                      lastName: e.value
                    }
                  })
                }
                required
                disabled={!editing}
                value={selectedUser.lastName}
              />
              <label htmlFor='in'>Last Name</label>
            </span>
          </div>

          <div className='p-col-12 p-md-6 p-lg-3' style={{ padding: '.75em' }}>
            <span className='p-float-label'>
              <InputText
                onChange={e =>
                  this.setState({
                    selectedUser: {
                      ...selectedUser,
                      email: e.value
                    }
                  })
                }
                required
                disabled={!editing}
                value={selectedUser.email}
              />
              <label htmlFor='in'>Email</label>
            </span>
          </div>

          <div className='p-col-12 p-md-6 p-lg-3' style={{ padding: '.75em' }}>
            <span className='p-float-label'>
              <InputMask
                id='phone'
                required
                mask='(999) 999-9999'
                disabled={!editing}
                value={selectedUser.phone}
                autoClear={false}
                onChange={e =>
                  this.setState({
                    selectedUser: {
                      ...selectedUser,
                      phone: e.value
                    }
                  })
                }
              />
              <label htmlFor='phone'>Phone Number</label>
            </span>
          </div>

          <div className='p-col-12 p-md-6 p-lg-3' style={{ padding: '.75em' }}>
            <span className='p-float-label'>
              <AutoComplete
                field='name'
                options={this.props.departments}
                suggestions={this.state.deptSuggestions}
                onChange={e =>
                  this.setState({
                    selectedUser: {
                      ...selectedUser,
                      deptName: e.value
                    }
                  })
                }
                completeMethod={this.departmentSuggestions}
                required
                disabled={!editing}
                dropdown
                value={selectedUser.deptName}
              />
              <label htmlFor='in'>Department</label>
            </span>
          </div>
          <div className='p-col-12 p-md-6 p-lg-3' style={{ padding: '.75em' }}>
            <span className='p-float-label'>
              <AutoComplete
                field='full_name'
                options={this.props.managers}
                suggestions={this.state.managerSuggestions}
                completeMethod={this.managerSuggestions}
                onChange={e =>
                  this.setState({
                    selectedUser: {
                      ...selectedUser,
                      manfull_name: e.value
                    }
                  })
                }
                required
                disabled={!editing}
                dropdown
                value={selectedUser.manfull_name}
              />
              <label htmlFor='in'>Manager</label>
            </span>
          </div>
          <div className='p-col-12 p-md-6 p-lg-3' style={{ padding: '.75em' }}>
            <Dropdown
              required
              disabled={!editing}
              optionLabel='name'
              dataKey='level'
              value={selectedUser.level}
              options={this.props.account_levels}
              onChange={e =>
                this.setState({
                  selectedUser: {
                    ...selectedUser,
                    level: e.value
                  }
                })
              }
              placeholder='Select Access Group'
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <div className='p-grid p-justify-center'>
          <div style={{ padding: '.75em' }}>
            <Button
              label='Edit'
              icon='pi pi-pencil'
              onClick={() =>
                this.setState({
                  editing: !this.state.editing
                })
              }
            />
          </div>
          <div style={{ padding: '.75em' }}>
            <Button
              className='p-button-danger'
              label='Delete'
              icon='pi pi-times'
            />
          </div>
          <div style={{ padding: '.75em' }}>
            <Button
              disabled={selectedUser === this.props.selectedUser}
              label='Save'
              icon='pi pi-check'
              iconPos='right'
            />
          </div>
        </div>
      </div>
    )
  }
}

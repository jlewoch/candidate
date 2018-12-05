import React, { Component } from 'react'
import FormShell from '../FormShell'
import { ToggleButton } from 'primereact/togglebutton'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import { InputMask } from 'primereact/inputmask'
import { AutoComplete } from 'primereact/autocomplete'

export default class EmployeeFormDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fname: '',
      lname: '',
      phone: '',
      manager: '',
      department: '',
      active: true,
      email: '',
      managerSuggestions: null,
      departmentSuggestions: null
    }
  }

  cancel = () => {
    this.setState(
      this.props.employee
        ? { ...this.props.employee }
        : {
          fname: '',
          lname: '',
          phone: '',
          manager: '',
          department: '',
          active: true,
          email: '',
          managerSuggestions: null,
          departmentSuggestions: null
        }
    )
  }

  suggestManagers = event => {
    let results = this.props.managers.filter(manager => {
      return manager.label.toLowerCase().startsWith(event.query.toLowerCase())
    })

    this.setState({ managerSuggestions: results })
  }

  suggestDepartments = event => {
    let results = this.props.departments.filter(manager => {
      return manager.label.toLowerCase().startsWith(event.query.toLowerCase())
    })

    this.setState({ departmentSuggestions: results })
  }
  componentDidMount () {
    this.props.employe && this.setState({ ...this.props.employee })
  }

  render () {
    return (
      <FormShell submit={this.submit} title='Employee' cancel={this.cancel}>
        <div className='form-controls'>
          <span className='p-float-label'>
            <InputText
              autoFocus
              id='fname'
              value={this.state.fname}
              onChange={e => this.setState({ fname: e.target.value })}
            />
            <label htmlFor='fname'>First Name</label>
          </span>
        </div>
        <div className='form-controls'>
          <span className='p-float-label'>
            <InputText
              id='lname'
              value={this.state.lname}
              onChange={e => this.setState({ lname: e.target.value })}
            />
            <label htmlFor='lname'>Last Name</label>
          </span>
        </div>
        <div className='form-controls'>
          <span className='p-float-label'>
            <InputMask
              id='phone'
              mask='(999) 999-9999'
              value={this.state.phone}
              onChange={e => this.setState({ phone: e.value })}
              autoClear={false}
            />
            <label htmlFor='phone'>Phone Number</label>
          </span>
        </div>
        <div className='form-controls'>
          <AutoComplete
            id='manager'
            field='label'
            dropdown
            value={this.state.manager}
            onChange={e => this.setState({ manager: e.value })}
            suggestions={this.state.managerSuggestions}
            completeMethod={this.suggestManagers}
          />
        </div>
      </FormShell>
    )
  }
}

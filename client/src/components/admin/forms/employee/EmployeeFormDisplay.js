import React, { Component } from 'react'
import FormWrapper from '../FormWrapper'
import { InputText } from 'primereact/inputtext'
import { ToggleButton } from 'primereact/togglebutton'
import { Dropdown } from 'primereact/dropdown'
import { InputMask } from 'primereact/inputmask'
import { AutoComplete } from 'primereact/autocomplete'
import { log } from 'util'

export default class EmployeeFormDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  clear = () => this.setState({})

  suggestManagers = event => {
    let results = this.props.managers.filter(manager => {
      return manager.fullName
        .toLowerCase()
        .startsWith(event.query.toLowerCase())
    })

    this.setState({ managerSuggestions: results })
  }

  submitCheck = () => {
    const {
      firstName,
      lastName,
      phone,
      manager,
      department,
      enabled
    } = this.state
    if (firstName && lastName && phone && manager && department && enabled) {
      return true
    } else {
      return false
    }
  }
  componentDidMount = () => {
    this.setState({ enabled: true })
  }

  render () {
    return (
      <FormWrapper
        submit={() => this.props.submit(this.state)}
        title='Employee'
        cancel={this.clear}
        canSubmit={this.submitCheck}
      >
        <div className='form-field'>
          <ToggleButton
            style={{ width: '100%' }}
            offLabel='Inactive'
            onLabel='Active'
            checked={this.state.enabled}
            onChange={e => this.setState({ enabled: e.value })}
          />
        </div>
        <div className='form-field'>
          <span className='p-float-label'>
            <InputText
              keyfilter='alpha'
              style={{ width: '100%' }}
              autoFocus
              value={this.state.firstName}
              onChange={e => this.setState({ firstName: e.target.value })}
            />
            <label htmlFor='firstName'>First Name</label>
          </span>
        </div>
        <div className='form-field'>
          <span className='p-float-label'>
            <InputText
              keyfilter='alpha'
              value={this.state.lastName}
              onChange={e => this.setState({ lastName: e.target.value })}
              style={{ width: '100%' }}
            />
            <label htmlFor='lastName'>Last Name</label>
          </span>
        </div>
        <div className='form-field'>
          <span className='p-float-label'>
            <InputMask
              mask='(999) 999-9999'
              value={this.state.phone}
              onChange={e => this.setState({ phone: e.value })}
              autoClear={false}
              style={{ width: '100%' }}
            />
            <label htmlFor='phone'>Phone Number</label>
          </span>
        </div>
        <div className='form-field'>
          <AutoComplete
            keyfilter='alpha'
            field='fullName'
            dropdown
            value={this.state.manager}
            onChange={e => this.setState({ manager: e.value })}
            suggestions={this.state.managerSuggestions}
            completeMethod={this.suggestManagers}
            style={{ width: 'stretch' }}
          />
        </div>

        <div className='form-field'>
          <Dropdown
            dataKey='_'
            optionLabel='name'
            options={Object.keys(this.props.departments).map(
              key => this.props.departments[key]
            )}
            onChange={e => this.setState({ department: e.value })}
            value={this.state.department}
            style={{ width: '100%' }}
            placeholder='Select a Department'
          />
        </div>
      </FormWrapper>
    )
  }
}

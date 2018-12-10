import React, { Component } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { ToggleButton } from 'primereact/togglebutton'
import './employee.css'
export default class EmployeeCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      locked: false,
      account_level: 0
    }
  }
  componentDidMount () {}

  render () {
    console.log(this.state)

    const { phone, email, full_name } = this.props.employee
    return (
      <tr>
        <td>{full_name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>
          <Dropdown
            optionLabel='name'
            sel={this.state.account_level}
            options={this.props.account_levels}
            onChange={e => {
              this.setState({ account_level: e.level })
            }}
            placeholder='Select Access Level'
            style={{ width: 'fit-content' }}
          />
        </td>
        <td>
          <ToggleButton
            onLabel='Locked'
            offLabel='Unlocked'
            onIcon='pi pi-lock'
            tooltip={
              this.state.locked
                ? 'Click to unlock account'
                : 'Click to lock account'
            }
            tooltipOptions={{ position: 'bottom' }}
            offIcon='pi pi-unlock'
            checked={this.state.locked}
            onChange={e => this.setState({ locked: e.value })}
          />
        </td>
        <td>profile</td>
      </tr>
    )
  }
}

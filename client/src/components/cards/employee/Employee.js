import React, { Component } from 'react'
import { Dropdown } from 'primereact/dropdown'
import { ToggleButton } from 'primereact/togglebutton'

export default class Employee extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='card'>
        <div className='card-section'>full name</div>
        <div className='card-section'>email</div>
        <div className='card-section'>phone</div>
        <div className='card-section'>
          <Dropdown />
        </div>
        <div className='card-section'>
          <ToggleButton />
        </div>
        <div className='card-section'>profile delete passwordreset disable</div>
      </div>
    )
  }
}

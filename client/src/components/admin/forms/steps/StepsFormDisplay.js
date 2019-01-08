import React, { Component } from 'react'
import { Slider } from 'primereact/slider'
import { ToggleButton } from 'primereact/togglebutton'
import { InputText } from 'primereact/inputtext'
import FormWrapper from '../FormWrapper'
import { Message } from 'primereact/message'
export default class StepsFormDisaply extends Component {
  constructor () {
    super()
    this.state = {
      enabled: true
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value })
  }
  sliderChange = e => {
    var newValue
    if (e.target && e.target.nodeName === 'INPUT') {
      newValue = e.target.value
    } else {
      newValue = e.value
    }

    this.setState({ weight: newValue })
  }

  render () {
    const { max, weight, enabled } = this.state
    return (
      <FormWrapper submit={() => this.props.submit(this.state)} title='Step'>
        <div className='form-field'>
          <span className='p-float-label'>
            <InputText
              required
              id='name'
              value={this.state.name}
              onChange={this.onChange}
            />

            <label>Name</label>
          </span>
        </div>
        <div className='form-field'>
          <span className='p-float-label'>
            <InputText
              id='level'
              required
              value={this.state.level}
              onChange={this.onChange}
            />

            <label>Level</label>
          </span>
        </div>
        <div className='form-field'>
          <span className='p-float-label'>
            <InputText
              required
              id='weight'
              keyfilter='int'
              max={max}
              min={0}
              value={weight}
              style={{ width: '100%' }}
              type='number'
              onChange={this.sliderChange}
            />

            <label>Weight</label>
          </span>

          <Slider
            max={max}
            min={0}
            value={weight}
            onChange={this.sliderChange}
            style={{ width: '100%' }}
          />
        </div>
        <div className='form-field'>
          <ToggleButton
            style={{ width: '100%' }}
            onLabel='Enabled'
            offLabel='Disabled'
            onIcon='pi pi-check'
            offIcon='pi pi-times'
            checked={enabled}
            onChange={e => this.setState({ enabled: e.value })}
          />
        </div>
      </FormWrapper>
    )
  }
}

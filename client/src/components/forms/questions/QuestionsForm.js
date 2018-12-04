import React, { Component } from 'react'
import { ToggleButton } from 'primereact/togglebutton'
import { InputTextarea } from 'primereact/inputtextarea'

import { Slider } from 'primereact/slider'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import FormShell from '../FormShell'
const steps = [
  { label: 'Resume Review', value: 'NY' },
  { label: 'Phone Screening', value: 'RM' },
  { label: 'Interview #1', value: 'LDN' },
  { label: 'interview #2', value: 'IST' },
  { label: 'Misc', value: 'PRS' }
]

export default class QuestionsForm extends Component {
  constructor () {
    super()
    this.state = {
      active: true,
      question: '',
      weight: 50,
      step: null,
      max: 100
    }
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

  cancel = () => {
    this.setState(
      this.props.question
        ? { ...this.props.question }
        : {
          active: true,
          question: '',
          weight: 50,
          step: null,
          max: 100
        }
    )
  }
  submit = e => {
    e.preventDefault()
  }

  componentDidMount = () => {
    this.setState({ ...this.props.question })
  }

  render () {
    const { question } = this.props
    return (
      <FormShell
        title='Question'
        cancel={this.cancel}
        submit={this.submit}
        item={question}
      >
        <div className='form-center-top'>
          <div className='form-controls'>
            <Dropdown
              value={this.state.step}
              options={steps}
              onChange={e => {
                this.setState({ step: e.value })
              }}
              placeholder='Select Step'
            />
          </div>
          <div className='form-controls'>
            <ToggleButton
              id='active'
              onLabel='Active'
              offLabel='Inactive'
              onIcon='pi pi-check'
              offIcon='pi pi-times'
              checked={this.state.active}
              onChange={e => this.setState({ active: e.value })}
            />
          </div>
          <div className='form-controls'>
            <InputText
              max={this.state.max}
              value={this.state.weight}
              style={{ width: '10em' }}
              type='number'
              onChange={this.sliderChange}
            />
            <Slider
              max={this.state.max}
              value={this.state.weight}
              onChange={this.sliderChange}
              style={{ width: '10em' }}
            />
          </div>
        </div>
        <div className='form-controls'>
          <InputTextarea
            tooltip='Enter a Question'
            rows={5}
            cols={50}
            value={this.state.question}
            onChange={e => this.setState({ question: e.target.value })}
            autoResize
          />
        </div>
      </FormShell>
    )
  }
}

import React, { Component } from 'react'
import { InputTextarea } from 'primereact/inputtextarea'
import { Slider } from 'primereact/slider'
import { ToggleButton } from 'primereact/togglebutton'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'
import FormWrapper from '../FormWrapper'

export default class QuestionsFormDisaply extends Component {
  constructor () {
    super()
    this.state = {
      enabled: true,
      question: '',
      weight: 0,
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

  render () {
    const { question, step, max, weight, enabled } = this.state
    return (
      <FormWrapper
        submit={() => this.props.submit(this.state)}
        title='Question'
      >
        <div className='form-group'>
          <div className='form-field'>
            <Dropdown
              optionLabel='name'
              dataKey='level'
              value={step}
              options={Object.keys(this.props.steps).map(
                key => this.props.steps[key]
              )}
              onChange={e => {
                this.setState({ step: e.value })
              }}
              placeholder='Select Step'
            />
          </div>
          <div className='form-field'>
            <span className='p-float-label'>
              <InputText
                keyfilter='int'
                max={max}
                min={0}
                value={weight}
                style={{ width: '10em' }}
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
              style={{ width: '10em' }}
            />
          </div>
          <div className='form-field'>
            <ToggleButton
              id='enabled'
              onLabel='Enabled'
              offLabel='Disabled'
              onIcon='pi pi-check'
              offIcon='pi pi-times'
              checked={enabled}
              onChange={e => this.setState({ enabled: e.value })}
            />
          </div>
        </div>
        <div className='form-field'>
          <InputTextarea
            tooltip='Enter a Question'
            rows={1}
            cols={46}
            value={question}
            onChange={e => this.setState({ question: e.target.value })}
            autoResize
            placeholder='Enter A Question'
          />
        </div>
      </FormWrapper>
    )
  }
}

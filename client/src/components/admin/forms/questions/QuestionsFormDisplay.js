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
      points: 0,
      step: null
    }
  }

  render () {
    const { question, step, max, points, enabled } = this.state
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
              options={this.props.steps}
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
                value={points}
                style={{ width: '10em' }}
                type='number'
                onChange={this.sliderChange}
              />
              <label>Points</label>
            </span>
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

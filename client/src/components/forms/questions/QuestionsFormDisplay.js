import React, { Component } from 'react'
import FormShell from '../FormShell'
import { InputTextarea } from 'primereact/inputtextarea'
import { Slider } from 'primereact/slider'
import { ToggleButton } from 'primereact/togglebutton'
import { InputText } from 'primereact/inputtext'
import { Dropdown } from 'primereact/dropdown'

export default class QuestionsFormDisaply extends Component {
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

  componentDidMount = () => {
    this.setState({ ...this.props.item })
  }

  render () {
    const { item } = this.props
    const { question, step, max, weight, active } = this.state
    return (
      <FormShell
        title='Question'
        cancel={this.cancel}
        submit={() =>
          this.props.submit({ question: { active, step, question, weight } })
        }
        item={item}
      >
        <div className='form-center-top'>
          <div className='form-controls'>
            <Dropdown
              value={step}
              options={this.props.steps}
              onChange={e => {
                this.setState({ step: e.value })
              }}
              placeholder='Select Step'
            />
          </div>
          <div className='form-controls'>
            <InputText
              max={max}
              min={0}
              value={weight}
              style={{ width: '10em' }}
              type='number'
              onChange={this.sliderChange}
            />
            <Slider
              max={max}
              min={0}
              value={weight}
              onChange={this.sliderChange}
              style={{ width: '10em' }}
            />
          </div>
          <div className='form-controls'>
            <ToggleButton
              id='active'
              onLabel='Active'
              offLabel='Inactive'
              onIcon='pi pi-check'
              offIcon='pi pi-times'
              checked={active}
              onChange={e => this.setState({ active: e.value })}
            />
          </div>
        </div>
        <div className='form-controls'>
          <InputTextarea
            tooltip='Enter a Question'
            rows={5}
            cols={50}
            value={question}
            onChange={e => this.setState({ question: e.target.value })}
            autoResize
          />
        </div>
      </FormShell>
    )
  }
}

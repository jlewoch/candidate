import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
export const enabled = [
  { label: 'Enabled', value: true },
  { label: 'Disabled', value: false }
]

export default class StepsExpandedTemplate extends Component {
  static propTypes = {
    steps: PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    this.setState({
      selectedStep: this.props.selectedStep
    })
  }

  componentWillUnmount () {
    // if (
    //   this.state.selectedStep &&
    //   this.state.selectedStep !== this.props.selectedStep
    // ) {
    //   this.props.save({
    //     _: this.state.selectedStep._,
    //     update: {
    //       ...Object.keys(this.state.selectedStep)
    //         .filter(key => !this.props.selectedStep[key])
    //         .map(i => ({ [i]: this.state.selectedStep[i] }))
    //     }
    //   })
    // }
  }

  render () {
    const { selectedStep } = this.state

    if (!selectedStep) {
      return <div />
    }
    return (
      <div className='p-grid p-dir-col' style={{ padding: '.75em' }}>
        <div className='p-grid p-fluid' style={{ padding: '.75em' }}>
          <div className='p-col-12' style={{ padding: '.75em' }}>
            <span className='p-float-label'>
              <InputText
                onChange={e =>
                  this.setState({
                    selectedStep: {
                      ...selectedStep,
                      question: e.value
                    }
                  })
                }
                required
                value={selectedStep.question}
              />
              <label>Name</label>
            </span>
          </div>
          <div style={{ padding: '.75em' }}>
            <span className='p-float-label'>
              <InputText
                keyfilter='pint'
                onChange={e =>
                  this.setState({
                    selectedStep: {
                      ...selectedStep,
                      weight: e.value
                    }
                  })
                }
                required
                value={selectedStep.weight}
              />
              <label>Weight</label>
            </span>
          </div>
          <div style={{ padding: '.75em' }}>
            <span className='p-float-label'>
              <InputText
                keyfilter='pint'
                onChange={e =>
                  this.setState({
                    selectedStep: {
                      ...selectedStep,
                      level: e.value
                    }
                  })
                }
                required
                value={selectedStep.level}
              />
              <label>Level</label>
            </span>
          </div>
          <div style={{ padding: '.75em' }}>
            <Dropdown
              optionLabel='name'
              dataKey='level'
              options={Object.keys(this.props.steps).map(
                i => this.props.steps[i]
              )}
              onChange={e =>
                this.setState({
                  selectedStep: {
                    ...selectedStep,
                    step: e.value.level
                  }
                })
              }
              required
              value={selectedStep.step}
            />
          </div>
        </div>
        <div className='p-grid p-justify-center'>
          <div style={{ padding: '.75em' }}>
            <Button
              className='p-button-danger'
              label='Delete'
              icon='pi pi-times'
            />
          </div>
          <div style={{ padding: '.75em' }}>
            <Button
              disabled={selectedStep === this.props.selectedStep}
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

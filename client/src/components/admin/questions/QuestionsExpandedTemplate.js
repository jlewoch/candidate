import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from 'primereact/dropdown'
import { Button } from 'primereact/button'
import { InputTextarea } from 'primereact/inputtextarea'
import { InputText } from 'primereact/inputtext'
export const enabled = [
  { label: 'Enabled', value: true },
  { label: 'Disabled', value: false }
]

export default class QuestionsExpandedTemplate extends Component {
  static propTypes = {
    steps: PropTypes.object.isRequired
  }
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    this.setState({
      selectedQuestion: this.props.selectedQuestion
    })
  }

  componentWillUnmount () {
    // if (
    //   this.state.selectedQuestion &&
    //   this.state.selectedQuestion !== this.props.selectedQuestion
    // ) {
    //   this.props.save({
    //     _: this.state.selectedQuestion._,
    //     update: {
    //       ...Object.keys(this.state.selectedQuestion)
    //         .filter(key => !this.props.selectedQuestion[key])
    //         .map(i => ({ [i]: this.state.selectedQuestion[i] }))
    //     }
    //   })
    // }
  }

  render () {
    const { selectedQuestion } = this.state
    if (!selectedQuestion) {
      return <div />
    }
    return (
      <div className='p-grid p-dir-col' style={{ padding: '.75em' }}>
        <div className='p-grid p-fluid' style={{ padding: '.75em' }}>
          <div className='p-col-12' style={{ padding: '.75em' }}>
            <InputTextarea
              cols={35}
              rows={5}
              autoResize
              onChange={e =>
                this.setState({
                  selectedQuestion: {
                    ...selectedQuestion,
                    question: e.value
                  }
                })
              }
              required
              value={selectedQuestion.question}
            />
          </div>
          <div style={{ padding: '.75em' }}>
            <span className='p-float-label'>
              <InputText
                keyfilter='pint'
                onChange={e =>
                  this.setState({
                    selectedQuestion: {
                      ...selectedQuestion,
                      weight: e.value
                    }
                  })
                }
                required
                value={selectedQuestion.weight}
              />
              <label>Weight</label>
            </span>
          </div>
          <div style={{ padding: '.75em' }}>
            <Dropdown
              options={enabled}
              onChange={e =>
                this.setState({
                  selectedQuestion: {
                    ...selectedQuestion,
                    enabled: e.value
                  }
                })
              }
              required
              value={selectedQuestion.enabled}
            />
          </div>
          <div style={{ padding: '.75em' }}>
            <Dropdown
              optionLabel='name'
              dataKey='step'
              options={Object.keys(this.props.steps).map(
                i => this.props.steps[i]
              )}
              onChange={e =>
                this.setState({
                  selectedQuestion: {
                    ...selectedQuestion,
                    step: e.value.level
                  }
                })
              }
              required
              value={selectedQuestion.step}
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
              disabled={selectedQuestion === this.props.selectedQuestion}
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

import React, { Component } from 'react'
import { StepsDatatable } from './steps_datatable'

export default class EvaluationsAdminDisplay extends Component {
  componentDidMount () {
    this.props.getQuestions()
    this.props.getSteps()
  }

  render () {
    return (
      <div>
        <div className='content-section introduction'>
          <div className='feature-intro'>
            <h1>Evaluations Admin</h1>
          </div>
        </div>

        <div className='content-section implementation'>
          <StepsDatatable />
        </div>
      </div>
    )
  }
}

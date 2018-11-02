import React, { Component } from 'react'
import './applicant_progress.css'
export default class ApplicantProgress extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newApp: true,
      resumeReview: false,
      phone: false,
      firstInterview: false,
      finalStage: false
    }
  }

  render () {
    const {
      newApp,
      resumeReview,
      phone,
      firstInterview,
      finalStage
    } = this.state
    return (
      <div className='applicant-progress'>

        <svg viewBox='0 0 500 50' stroke='black' fill='white' height='40'>
          <text x='0' y='30' style={{ fontSize: '.85rem' }}>
            New
          </text>

          <circle
            fill={newApp && (this.props.fillColor || 'blue')}
            cx='13'
            cy='7.5'
            r='7.5'
            className='progress-point'
          />

          <line x1='20.5' y1='7.5' x2='113' y2='7.5' />
          <circle
            fill={resumeReview && (this.props.fillColor || 'blue')}
            cx='120.5'
            cy='7.5'
            r='7.5'
          />
          <text x='98.5' y='30' style={{ fontSize: '.85rem' }}>
            Resume
          </text>
          <line x1='128' y1='7.5' x2='213' y2='7.5' />
          <circle
            fill={phone && (this.props.fillColor || 'blue')}
            cx='220.5'
            cy='7.5'
            r='7.5'
          />
          <text x='203.5' y='30' style={{ fontSize: '.85rem' }}>
            Phone
          </text>
          <line x1='228' y1='7.5' x2='313' y2='7.5' />
          <circle
            fill={firstInterview && (this.props.fillColor || 'blue')}
            cx='320.5'
            cy='7.5'
            r='7.5'
          />
          <text x='286.5' y='30' style={{ fontSize: '.85rem' }}>
            Interview #1
          </text>
          <line x1='328' y1='7.5' x2='413' y2='7.5' />

          <circle
            fill={finalStage && (this.props.fillColor || 'blue')}
            cx='420.5'
            cy='7.5'
            r='7'
          />
          <text x='389.5' y='30' style={{ fontSize: '.85rem' }}>
            Final Stage
          </text>
        </svg>

      </div>
    )
  }
}

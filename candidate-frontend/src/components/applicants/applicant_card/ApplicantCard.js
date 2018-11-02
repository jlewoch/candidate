import React, { Component } from 'react'
import './applicant_card.css'
export default class ApplicantCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showDetails: false
    }
  }

  toggle = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }
  render () {
    const { showDetails } = this.state
    return (
      <div className='applicant-card' onClick={this.toggle}>
        <div className='applicant-card-summary'>
          <p>id</p> <p>position</p> <p>rank</p> <p>arrow</p>
        </div>
        <div
          className={`applicant-card-details ${showDetails ? 'show' : 'hide'}`}
        >
          Details
        </div>
      </div>
    )
  }
}

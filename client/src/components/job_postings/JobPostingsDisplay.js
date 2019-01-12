import React, { Component } from 'react'
import SidePanel from './side_panel/SidePanel'
import { ApplicationsSection } from './applications_section'
import { OverviewPanel } from './overview_panel'

export default class JobPostingsDisplay extends Component {
  componentDidMount () {
    this.props.getSteps()
    this.props.getJobPostings()
    this.props.getApplicants()
    this.props.getApplications()
    this.props.getPositions()
  }

  render () {
    return (
      <div className='postings'>
        <SidePanel
          job_postings={this.props.job_postings}
          clickHandler={this.props.changeSelectedPosting}
          selected={this.props.selectedPosting}
        />

        <div className='postings-right'>
          <div className='postings-body'>
            <ApplicationsSection />
            <OverviewPanel />
          </div>
        </div>
      </div>
    )
  }
}

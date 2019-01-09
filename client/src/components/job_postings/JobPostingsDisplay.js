import React, { Component } from 'react'
import { MultiSelect } from 'primereact/multiselect'
import OverviewPanel from './overview_panel/OverviewPanel'
import JobApplicationCard from './cards/JobApplicationCard'
import SideOption from './cards/SideOption'
import PostingHeading from './PostingHeading'
export default class JobPostingsDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.props.getSteps()
    this.props.getJobPostings()
    this.props.getApplicants()
    this.props.getApplications()
    this.props.getPositions()
  }

  selectApp = e => {
    this.props.changeSelectedApplicant(e.applicant)
    this.props.changeSelectedApplication(e._)
  }
  render () {
    const { selectedPosting } = this.props
    if (this.props.isFetching) {
      return <h1>Loading</h1>
    }

    return (
      <div className='postings'>
        <div className='postings-left'>
          {this.props.job_postings.map((posting, index) => {
            return (
              <SideOption
                key={index}
                {...posting}
                clickHandler={this.props.changeSelectedPosting}
                selectedPosting={selectedPosting}
              />
            )
          })}
        </div>

        <div className='postings-right'>
          <PostingHeading {...selectedPosting} />

          <div className='postings-body'>
            <div className='postings-body-left'>
              <div className='postings-body-left-top'>
                <MultiSelect
                  optionLabel='name'
                  multiple
                  dataKey='level'
                  value={this.props.filterValues}
                  options={Object.values(this.props.steps)}
                  onChange={e => this.props.changeFilterValues(e.value)}
                  defaultLabel='Filter by Stage'
                />
              </div>
              <div className='postings-body-left-bottom'>
                {this.props.applications.map(info => {
                  return (
                    <JobApplicationCard
                      {...info}
                      key={info._}
                      select={this.selectApp}
                    />
                  )
                })}
              </div>
            </div>

            <OverviewPanel {...this.props.selectedApplicant} />
          </div>
        </div>
      </div>
    )
  }
}

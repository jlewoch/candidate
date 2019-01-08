import React, { Component } from 'react'
import { ScrollPanel } from 'primereact/scrollpanel'
import { MultiSelect } from 'primereact/multiselect'
import { OverviewPanel } from './overview_panel'
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

  jobFilter = () => {
    const { selectedValues, selectedJob } = this.state
    const { applications, steps } = this.props

    if (selectedValues) {
      return selectedValues.map(value => {
        return Object.values(applications)
          .filter(application =>
            selectedJob
              ? application.status === value.level &&
                application.job_posting === selectedJob._
              : application.status === value.level
          )
          .map(application => {
            application.statusTitle = value.name
            return application
          })
      })
    } else if (selectedJob) {
      return Object.values(applications)
        .filter(application => application.job_posting === selectedJob._)
        .map(application => {
          application.statusTitle = Object.values(steps).find(
            step => step.level === application.status
          ).name
          return application
        })
    } else if (applications) {
      return Object.values(applications).map(application => {
        application.statusTitle = Object.values(steps).find(
          step => step.level === application.status
        ).name
        return application
      })
    }
  }

  selectedJobChange = e => {
    this.setState({ selectedJob: e })
  }

  selectApp = e => {
    this.setState({
      selectedApplicant: e.applicant,
      selectedApplication: e.application
    })
  }
  render () {
    const { selectedJob, selectedApplicant, selectedApplication } = this.state
    const {
      positions,
      applications,
      job_postings,
      steps,
      applicants
    } = this.props

    if (
      this.props.fetchingApplicants ||
      this.props.fetchingPositions ||
      this.props.fetchingSteps ||
      this.props.fetchingPostings ||
      this.props.fetchingApplications
    ) {
      return <h1>Loading</h1>
    }

    return (
      <div className='postings'>
        <div className='postings-left'>
          {Object.values(job_postings).map(posting => (
            <SideOption
              key={posting._}
              clickHandler={this.selectedJobChange}
              postingTitle={
                positions[posting.position] && positions[posting.position].title
              }
              posting={posting}
              applications={
                Object.values(applications).filter(
                  app => app.job_posting === posting._
                ).length
              }
            />
          ))}
        </div>

        <div className='postings-right'>
          <PostingHeading selectedJob={selectedJob} />

          <div className='postings-body'>
            <div className='postings-body-left'>
              <div className='postings-body-left-top'>
                <MultiSelect
                  optionLabel='name'
                  multiple
                  dataKey='level'
                  value={this.state.selectedValues}
                  options={Object.keys(steps).map(key => steps[key])}
                  onChange={e => this.setState({ selectedValues: e.value })}
                  defaultLabel='Filter by Stage'
                />
              </div>
              <div className='postings-body-left-bottom'>
                {this.jobFilter().map((info, index) => {
                  return (
                    <JobApplicationCard
                      key={index}
                      application={info}
                      positions={positions}
                      job_posting={job_postings[info.job_posting]}
                      select={() =>
                        this.selectApp({
                          applicant: applicants[info.applicant],
                          application: info
                        })
                      }
                    />
                  )
                })}
              </div>
            </div>

            <div className='postings-body-right'>
              {selectedApplicant && (
                <OverviewPanel
                  selectedApplicant={selectedApplicant}
                  selectedApplication={selectedApplication}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { ScrollPanel } from 'primereact/scrollpanel'
import { MultiSelect } from 'primereact/multiselect'
import OverviewCard from './cards/overview/OverviewCard'
import JobApplicationCard from './cards/JobApplicationCard'
import SideOption from './SideOption'
export default class JobPostingsDisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedValues: [],
      selectedJob: {},
      selectedSub: 'Applications',
      selectedApplicant: {}
    }
  }
  jobFilter = () => {
    const { selectedValues, selectedJob } = this.state
    const { applications, steps } = this.props
    if (selectedValues.length > 0) {
      return selectedValues.reduce((acc, nexts) => {
        acc = acc.concat(
          Object.keys(applications)
            .filter(key =>
              selectedJob
                ? applications[key].status === nexts.level &&
                  applications[key].job_posting === selectedJob._
                : applications[key].status === nexts.level
            )
            .map(key => {
              let temp = applications[key] ? applications[key] : []
              temp.statusTitle = Object.values(steps).find(
                step => step.level === temp.status
              ).name
              return temp
            })
        )
        return acc
      }, [])
    } else if (selectedJob) {
      return Object.keys(applications)
        .filter(key => applications[key].job_posting === selectedJob._)
        .map(key => {
          let temp = applications[key] ? applications[key] : []
          temp.statusTitle = Object.values(steps).find(
            step => step.level === temp.status
          ).name
          return temp
        })
    } else if (applications) {
      return Object.keys(applications).map(key => {
        let temp = applications[key] ? applications[key] : []
        temp.statusTitle = Object.values(steps).find(
          step => step.level === temp.status
        ).name
        return temp
      })
    }
  }

  selectedJobChange = e => {
    this.setState({ selectedJob: e })
  }
  componentDidMount () {
    this.props.getSteps()
    this.props.getJobPostings()
    this.props.getApplicants()
    this.props.getApplications()
    this.props.getPositions()
  }

  selectApp = e => {
    this.setState({ selectedApplicant: this.props.applicants[e] })
  }
  render () {
    return (
      <div className='postings'>
        <div className='postings-left'>
          {Object.keys(this.props.job_postings).map(key => (
            <SideOption
              key={key}
              onClick={this.selectedJobChange}
              positions={this.props.positions}
              posting={this.props.job_postings[key]}
              applications={
                Object.keys(this.props.applications).filter(
                  akey =>
                    this.props.applications[akey].job_posting ===
                    this.props.job_postings[key]._
                ).length
              }
            />
          ))}
        </div>
        <div className='postings-right'>
          <h3>{}</h3>

          <div className='postings-body'>
            <div className='postings-body-left'>
              <div className='postings-body-left-top'>
                <MultiSelect
                  optionLabel='name'
                  multiple
                  dataKey='level'
                  value={this.state.selectedValues}
                  options={Object.keys(this.props.steps).map(
                    key => this.props.steps[key]
                  )}
                  onChange={e => this.setState({ selectedValues: e.value })}
                  defaultLabel='Filter by Stage'
                />
              </div>
              <div className='postings-body-left-bottom'>
                {this.jobFilter().map((info, index) => {
                  return (
                    <JobApplicationCard
                      key={index}
                      {...info}
                      steps={this.props.steps}
                      select={this.selectApp}
                    />
                  )
                })}
              </div>
            </div>

            <div className='postings-body-right'>
              {OverviewCard(
                this.state.selectedApplicant,
                this.state.selectedSub
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

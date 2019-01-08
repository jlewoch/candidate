import JobPostingsDisplay from './JobPostingsDisplay'
import { connect } from 'react-redux'
import { getSteps } from '../../store/steps/actions'
import { getJobPostings } from '../../store/job_postings/actions'
import { getApplicants } from '../../store/applicants/actions'
import { getApplications } from '../../store/applications/actions'
import { getPositions } from '../../store/positions/actions'
const mapStateToProps = state => ({
  job_postings: state.job_postings,
  steps: state.steps,
  applicants: state.applicants,
  applications: state.applications,
  positions: state.positions,
  fetchingApplicants: state.api.GET_APPLICANTS,
  fetchingPositions: state.api.GET_POSITIONS,
  fetchingSteps: state.api.GET_STEPS,
  fetchingPostings: state.api.GET_POSTINGS,
  fetchingApplications: state.api.GET_APPLICATIONS
})
const mapDispatchToProps = dispatch => ({
  getApplicants: () => dispatch(getApplicants()),
  getPositions: () => dispatch(getPositions()),
  getSteps: () => dispatch(getSteps()),
  getJobPostings: () => dispatch(getJobPostings()),
  getApplications: () => dispatch(getApplications())
})

export const JobPostings = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobPostingsDisplay)

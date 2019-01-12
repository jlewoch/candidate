import JobPostingsDisplay from './JobPostingsDisplay'
import { connect } from 'react-redux'
import { getSteps } from '../../store/steps/actions'
import {
  getJobPostings,
  changeSelectedJob
} from '../../store/job_postings/actions'
import { getApplicants } from '../../store/applicants/actions'
import { getApplications } from '../../store/applications/actions'
import { getPositions } from '../../store/positions/actions'
import { selectPostings, selectFilteredApps } from '../../store/selectors'
const mapStateToProps = state => ({
  job_postings: selectPostings(state),
  applications: selectFilteredApps(state),
  selectedPosting: state.job_postings.selected
})
const mapDispatchToProps = dispatch => ({
  getApplicants: () => dispatch(getApplicants()),
  getPositions: () => dispatch(getPositions()),
  getSteps: () => dispatch(getSteps()),
  getJobPostings: () => dispatch(getJobPostings()),
  getApplications: () => dispatch(getApplications()),
  changeSelectedPosting: e => dispatch(changeSelectedJob(e))
})

export const JobPostings = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobPostingsDisplay)

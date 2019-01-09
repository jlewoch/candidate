import JobPostingsDisplay from './JobPostingsDisplay'
import { connect } from 'react-redux'
import { getSteps } from '../../store/steps/actions'
import {
  getJobPostings,
  changeSelectedJob
} from '../../store/job_postings/actions'
import {
  getApplicants,
  changeSelectedApplicant
} from '../../store/applicants/actions'
import {
  getApplications,
  changeSelectedApplication,
  changeFilterValues
} from '../../store/applications/actions'
import { getPositions } from '../../store/positions/actions'
import {
  selectPostings,
  selectApplicant,
  selectFilteredApps,
  selectPosting
} from '../../store/selectors'
const mapStateToProps = state => ({
  steps: state.steps,
  filterValues: state.applications.filterValues,
  job_postings: selectPostings(state),
  selectedPosting: selectPosting(state),
  selectedApplicant: selectApplicant(state),
  applications: selectFilteredApps(state),
  isFetching:
    state.api.GET_APPLICANTS ||
    state.api.GET_POSITIONS ||
    state.api.GET_STEPS ||
    state.api.GET_POSTINGS ||
    state.api.GET_APPLICATIONS
})
const mapDispatchToProps = dispatch => ({
  getApplicants: () => dispatch(getApplicants()),
  getPositions: () => dispatch(getPositions()),
  getSteps: () => dispatch(getSteps()),
  getJobPostings: () => dispatch(getJobPostings()),
  getApplications: () => dispatch(getApplications()),
  changeSelectedApplicant: e => dispatch(changeSelectedApplicant(e)),
  changeSelectedApplication: e => dispatch(changeSelectedApplication(e)),
  changeSelectedPosting: e => dispatch(changeSelectedJob(e)),
  changeFilterValues: e => dispatch(changeFilterValues(e))
})

export const JobPostings = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobPostingsDisplay)

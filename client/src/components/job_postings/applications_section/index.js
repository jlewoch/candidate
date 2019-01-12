import ApplicationsSectionDisplay from './ApplicationsSectionDisplay'
import { connect } from 'react-redux'
import {
  selectSteps,
  selectPosting,
  selectFilteredApps
} from '../../../store/selectors'
import {
  changeSelectedApplication,
  changeFilterValues
} from '../../../store/applications/actions'
import { changeSelectedApplicant } from '../../../store/applicants/actions'

const mapStateToProps = state => ({
  steps: selectSteps(state),
  filterValues: state.applications.filterValues,
  selectedPosting: selectPosting(state),
  applications: selectFilteredApps(state)
})
const mapDispatchToProps = dispatch => ({
  selectApp: e => {
    dispatch(changeSelectedApplicant(e.applicant))
    dispatch(changeSelectedApplication(e._))
  },
  changeFilter: e => dispatch(changeFilterValues(e))
})

export const ApplicationsSection = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicationsSectionDisplay)

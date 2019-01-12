import OverviewPanelDisplay from './OverviewPanelDisplay'
import { connect } from 'react-redux'
import Loader from '../../../shared_components/loader/Loader'
import {
  selectSteps,
  selectApplication,
  selectApplicant
} from '../../../store/selectors'

const mapStateToProps = state => ({
  selectedApplicant: selectApplicant(state),
  applications: state.applications.apps,
  selectedApplication: selectApplication(state),
  steps: selectSteps(state)
})
const mapDispatchToProps = dispatch => ({})
export const OverviewPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(Loader('selectedApplication')(OverviewPanelDisplay))

import OverviewPanelDisplay from './OverviewPanelDisplay'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  job_postings: state.job_postings,
  steps: state.steps,
  applications: state.applications
})

export const OverviewPanel = connect(
  mapStateToProps,
  null
)(OverviewPanelDisplay)

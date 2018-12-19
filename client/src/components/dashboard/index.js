import DashboardDisplay from './DashboardDisplay'
import { connect } from 'react-redux'
import { getJobPostings } from '../../store/job_postings/actions'

const mapStateToProps = state => ({
  openJobs: state.job_postings
})
const mapDispatchToProps = dispatch => ({
  getJobs: () => dispatch(getJobPostings())
})

export const Dashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardDisplay)

import ApplicantsDisplay from './ApplicantsDisaplay'
import { connect } from 'react-redux'
import './applicants.css'
import { getApplicants } from '../../store/applicants/actions'

const mapStateToProps = state => ({
  applicants: state.applicants,
  applications: state.applications
})
const mapDispatchToProps = dispatch => ({
  getApplicants: () => dispatch(getApplicants())
})

export const Applicants = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplicantsDisplay)

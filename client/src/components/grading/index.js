import GradingDisaply from './GradingDisaply'
import { connect } from 'react-redux'
import './applicants.css'

const mapStateToProps = state => ({
  applicants: applicants
})
const mapDispatchToProps = dispatch => ({
  getApplicationQuestions: e => dispatch()
})

export const Grading = connect(
  mapStateToProps,
  mapDispatchToProps
)(GradingDisaply)

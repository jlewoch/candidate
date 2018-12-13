import EvaluatinosAdminDisplay from './EvaluationsAdminDisplay'
import { connect } from 'react-redux'

import { getQuestions } from '../../../store/questions/actions'
import { getSteps } from '../../../store/steps/actions'

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({
  getQuestions: () => dispatch(getQuestions()),
  getSteps: () => dispatch(getSteps())
})

export const EvaluationsAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(EvaluatinosAdminDisplay)

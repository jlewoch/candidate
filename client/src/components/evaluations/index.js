import EvaluationsDisplay from './EvaluationsDisplay'
import { connect } from 'react-redux'
import { getQuestions } from '../../store/questions/actions'
import { selectQuestions } from '../../store/selectors'

const mapStateToProps = state => ({
  questions: selectQuestions(state),
  existingValues: 'hello',
  selectedApplication: 'hi'
})
const mapDispatchToProps = dispatch => ({
  getQuestions: dispatch(getQuestions())
})

export const Evaluations = connect(
  mapStateToProps,
  mapDispatchToProps
)(EvaluationsDisplay)

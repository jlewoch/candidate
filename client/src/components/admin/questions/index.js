import QuestionsAdminDisplay from './QuestionsAdminDisplay'
import { connect } from 'react-redux'
import { updateQuestions, getQuestions } from '../../../store/questions/actions'
import { selectSteps, selectQuestions } from '../../../store/selectors'
import { getSteps } from '../../../store/steps/actions'

const mapStateToProps = state => ({
  questions: selectQuestions(state),
  steps: selectSteps(state)
})
const mapDispatchToProps = dispatch => ({
  updateQuestions: e => dispatch(updateQuestions(e)),
  getSteps: () => dispatch(getSteps()),
  getQuestions: () => dispatch(getQuestions())
})

export const QuestionsAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsAdminDisplay)

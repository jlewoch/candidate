import QuestionsAdminDisplay from './QuestionsAdminDisplay'
import { connect } from 'react-redux'
import {
  updateQuestions,
  getQuestions
} from '../../../../store/questions/actions'

const mapStateToProps = state => ({
  questions: state.questions,
  steps: state.steps
})
const mapDispatchToProps = dispatch => ({
  updateQuestions: e => dispatch(updateQuestions(e)),
  getQuestions: () => dispatch(getQuestions())
})

export const QuestionsAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsAdminDisplay)

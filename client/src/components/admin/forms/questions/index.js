import { connect } from 'react-redux'
import QuestionsFormDisplay from './QuestionsFormDisplay'
import { addQuestions } from '../../../../store/questions/actions'
import { selectSteps } from '../../../../store/selectors'
const mapStateToProps = state => ({
  steps: selectSteps(state)
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: e => dispatch(addQuestions(e))
})

export const QuestionsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsFormDisplay)

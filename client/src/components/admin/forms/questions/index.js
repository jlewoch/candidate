import { connect } from 'react-redux'
import QuestionsFormDisplay from './QuestionsFormDisplay'
import { addQuestions } from '../../../../store/questions/actions'
import { steps } from '../../../../testdata'
const mapStateToProps = state => ({
  steps: steps
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: e => dispatch(addQuestions(e))
})

export const QuestionsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsFormDisplay)

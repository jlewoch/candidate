import { connect } from 'react-redux'
import QuestionsFormDisplay from './QuestionsFormDisplay'
import {
  updateQuestionRequest,
  addQuestionRequest
} from '../../../store/questions/actions'

const mapStateToProps = state => ({
    steps:state.steps,
    
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: e =>
    ownProps.item
      ? dispatch(updateQuestionRequest({ ...e, id: ownProps.item.id }))
      : dispatch(addQuestionRequest(e))
})

export const QuestionsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionsFormDisplay)

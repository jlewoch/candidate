import { connect } from 'react-redux'
import StepsFormDisplay from './StepsFormDisplay'
import { addSteps } from '../../../../store/steps/actions'
const mapStateToProps = state => ({
  steps: state.steps
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: e => dispatch(addSteps(e))
})

export const StepsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsFormDisplay)

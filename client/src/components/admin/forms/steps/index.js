import { connect } from 'react-redux'
import StepsFormDisplay from './StepsFormDisplay'
import { steps } from '../../../../testdata'
import { addSteps } from '../../../../store/steps/actions'
const mapStateToProps = state => ({
  steps: steps
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: e => dispatch(addSteps(e))
})

export const StepsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsFormDisplay)

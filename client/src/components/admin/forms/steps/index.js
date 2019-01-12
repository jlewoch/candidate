import { connect } from 'react-redux'
import StepsFormDisplay from './StepsFormDisplay'
import { addSteps } from '../../../../store/steps/actions'
import { selectSteps } from '../../../../store/selectors'
const mapStateToProps = state => ({
  steps: selectSteps(state)
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: e => dispatch(addSteps(e))
})

export const StepsForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsFormDisplay)

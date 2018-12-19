import StepsAdminDisplay from './StepsAdminDisplay'
import { connect } from 'react-redux'
import { updateSteps, getSteps } from '../../../../store/steps/actions'

const mapStateToProps = state => ({
  steps: state.steps
})
const mapDispatchToProps = dispatch => ({
  updateSteps: e => dispatch(updateSteps(e)),
  getSteps: () => dispatch(getSteps())
})

export const StepsAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsAdminDisplay)

import StepsAdminDisplay from './StepsAdminDisplay'
import { connect } from 'react-redux'
import {
  updateSteps,
  getSteps,
  deleteSteps
} from '../../../store/steps/actions'
const mapStateToProps = state => ({
  steps: state.steps
})
const mapDispatchToProps = dispatch => ({
  updateSteps: e => {
    dispatch(updateSteps(e))
  },
  getSteps: () => dispatch(getSteps()),
  destroy: e => dispatch(deleteSteps(e))
})

export const StepsAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsAdminDisplay)

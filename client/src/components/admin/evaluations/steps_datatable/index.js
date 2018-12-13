import StepsDatatableDisplay from './StepsDatatableDisplay'
import { connect } from 'react-redux'
import { updateSteps } from '../../../../store/steps/actions'

const mapStateToProps = state => ({
  steps: state.steps
})
const mapDispatchToProps = dispatch => ({
  updateSteps: e => dispatch(updateSteps(e))
})

export const StepsDatatable = connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsDatatableDisplay)

import { connect } from 'react-redux'
import EmployeeFormDisplay from './EmployeeFormDisplay'
import {
  updateQuestionRequest,
  addQuestionRequest
} from '../../../store/employee/actions'

const mapStateToProps = state => ({
  managers: state.employees.managers,
  departments: state.departments
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: e =>
    ownProps.item
      ? dispatch(updateQuestionRequest({ ...e, id: ownProps.item.id }))
      : dispatch(addQuestionRequest(e))
})

export const EmployeeForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeFormDisplay)

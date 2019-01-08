import { connect } from 'react-redux'
import EmployeeFormDisplay from './EmployeeFormDisplay'
import { addEmployees } from '../../../../store/employees/actions'

const mapStateToProps = state => ({
  managers: state.employees.managers,
  departments: state.departments
})
const mapDispatchToProps = dispatch => ({
  submit: e => dispatch(addEmployees(e))
})

export const EmployeeForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeFormDisplay)

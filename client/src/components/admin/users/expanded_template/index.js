import UserExpandedTemplateDisplay from './UserExpandedTemplateDisplay'
import { connect } from 'react-redux'
import { updateEmployees } from '../../../../store/employees/actions'
import { updateAccounts } from '../../../../store/accounts/actions'
import { updateDepartments } from '../../../../store/departments/actions'

const mapStateToProps = state => ({
  employees: state.employees.employees,
  managers: state.employees.managers,
  account_levels: state.account_levels.account_levels,
  departments: state.departments
})
const mapDispatchToProps = dispatch => ({
  updateAccounts: e => dispatch(updateAccounts(e)),
  updateEmployees: e => dispatch(updateEmployees(e)),
  updateDepartments: e => dispatch(updateDepartments(e))
})

export const UserExpandedTemplate = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserExpandedTemplateDisplay)

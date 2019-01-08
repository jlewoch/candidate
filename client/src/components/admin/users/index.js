import UserAdminDisplay from './UserAdminDisplay'
import { connect } from 'react-redux'
import { getEmployees, updateEmployees } from '../../../store/employees/actions'
import { getAccounts, updateAccounts } from '../../../store/accounts/actions'
import {
  getDepartments,
  updateDepartments
} from '../../../store/departments/actions'
import { getAccountLevels } from '../../../store/account_levels/actions'

const mapStateToProps = state => ({
  employees: state.employees.employees,
  managers: state.employees.managers,
  account_levels: state.account_levels.account_levels,
  departments: state.departments
})
const mapDispatchToProps = dispatch => ({
  updateAccounts: e => dispatch(updateAccounts(e)),
  updateEmployees: e => dispatch(updateEmployees(e)),
  updateDepartments: e => dispatch(updateDepartments(e)),
  getEmployees: () => dispatch(getEmployees()),
  getAccountLevels: () => dispatch(getAccountLevels()),
  getDepartments: () => dispatch(getDepartments())
})

export const UserAdmin = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAdminDisplay)

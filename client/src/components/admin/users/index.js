import UserAdminDisplay from './UserAdminDisplay'
import { connect } from 'react-redux'
import { getEmployees, updateEmployees } from '../../../store/employees/actions'
import { getAccounts, updateAccounts } from '../../../store/accounts/actions'
import {
  getDepartments,
  updateDepartments
} from '../../../store/departments/actions'
import { getAccountLevels } from '../../../store/account_levels/actions'
import {
  selectManagers,
  selectEmployees,
  selectDepartments,
  selectAccountLevels
} from '../../../store/selectors'

const mapStateToProps = state => ({
  employees: selectEmployees(state),
  managers: selectManagers(state),
  account_levels: selectAccountLevels(state),
  departments: selectDepartments(state)
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

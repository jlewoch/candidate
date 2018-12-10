import AdminDisplay from './AdminDisplay'
import { connect } from 'react-redux'
import { getEmployees, updateEmployees } from '../../store/employees/actions'
import { getAccounts, updateAccounts } from '../../store/accounts/actions'
import { getAccountLevels } from '../../store/account_levels/actions'

const mapStateToProps = state => ({
  employees: state.employees.employees,
  account_levels: state.account_levels.account_levels,
  accounts: state.accounts,
  managers: state.employees.managers
})
const mapDispatchToProps = dispatch => ({
  getEmployees: () => dispatch(getEmployees()),
  getAccountLevels: () => dispatch(getAccountLevels()),
  getAccounts: () => dispatch(getAccounts()),
  updateAccounts: e => dispatch(updateAccounts(e)),
  updateEmployees: e => dispatch(updateEmployees(e))
})

export const Admin = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDisplay)

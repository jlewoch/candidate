import SubMenuDisplay from './SubMenuDisplay'
import { connect } from 'react-redux'
import { selectApplicant } from '../../../../store/selectors'

const mapStateToProps = state => ({
  selectedApplicant: selectApplicant(state)
})
const mapDispatchToProps = dispatch => ({})
export const SubMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(SubMenuDisplay)

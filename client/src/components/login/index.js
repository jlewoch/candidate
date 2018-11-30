import { connect } from 'react-redux'
import LoginComponent from './Login'
import { login } from '../../store/authentication/actions'

const mapDispatchToProps = dispatch => ({
  login: e => {
    e.preventDefault()
    return dispatch(
      login(e.target.usernameInput.value, e.target.passwordInput.value)
    )
  }
})

const mapStateToProps = state => ({
  authentication: state.authentication
})

export const Login = connect(mapStateToProps, mapDispatchToProps)(
  LoginComponent
)

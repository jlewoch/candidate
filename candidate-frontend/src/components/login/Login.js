import React from 'react'
import './Login.css'
import Modal from '../../shared_components/modal'


const Login = ({
  authentication,
  login
}) => {
  console.log(authentication, login);
  
  return (
    <Modal>
      <form onSubmit={login} className='login-form'>
        <h1 className='app-name'>CANDIDATE</h1>
        <div>
          <label className='login-form-label' htmlFor='username'>
            Username <span hidden={!authentication.error}
              className={`error-message`}
            >
              Invalid Credentials
            </span>
          </label>
          <input
            autoComplete='true'
            className='input-field'
            type='text'
            name='usernameInput'
            placeholder='username'
          />

          <label className='login-form-label' htmlFor='password'>
            Password
          </label>
          <input
            autoComplete='true'
            className='input-field'
            type='password'
            name='passwordInput'
            placeholder='password'
          />
        </div>
        <div className='login-form-end'>
          <input className='form-button' type='submit' value='Login' />
        </div>
      </form>
    </Modal>
  )
}
export default Login
import React, { Component } from "react";
import Modal from "../modal/Modal";
import "./Login.css";
class Login extends Component {

  render() {
    const { failed, passwordInput, usernameInput, onChange, login} = this.props;
    return (
      <Modal>
        <form onSubmit={login} className="login-form">
          <h1 className="app-name">CANDIDATE</h1>
          <div>
          
            <label className="login-form-label" htmlFor="username">
              Username  <span className={`error-message ${failed ? "show" : "hide"}`}>
              Invalid Credentials
            </span>
            </label>
            <input
              autoComplete="true"
              onChange={onChange}
              value={usernameInput}
              className="input-field"
              type="text"
              name="usernameInput"
              placeholder="username"
            />

            <label className="login-form-label" htmlFor="password">
              Password
            </label>
            <input
              autoComplete="true"
              onChange={onChange}
              value={passwordInput}
              className="input-field"
              type="password"
              name="passwordInput"
              placeholder="password"
            />
          </div>
          <div className="login-form-end">
            <input className="form-button" type="submit" value="Login" />
          </div>
        </form>
      </Modal>
    );
  }
}

export default Login;

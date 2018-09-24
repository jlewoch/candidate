import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class NavBar extends Component {
  render () {
    const { userinfo } = this.props
    return (
      <div className={`top-nav ${userinfo ? 'show' : 'hide'}`}>
        <div className='top-nav__left'>
          <Link to='/dashboard' className='app-name'>
            <h1 className='app-name'>CANDIDATE</h1>
          </Link>
        </div>
        <div className='top-nav__right'>
          <Link className='horizontal-nav-link' to='/dashboard'>
            Dashboard
          </Link>

          <Link className='horizontal-nav-link' to='/positions'>
            Open Postions
          </Link>

          <Link
            className={`horizontal-nav-link`}
            to={`${userinfo.accessLevel < 3 ? '/profile' : '/admin/users'}`}
          >
            {`${userinfo.accessLevel < 3 ? 'Profile' : 'Admin'}`}
          </Link>
        </div>
      </div>
    )
  }
}

export default NavBar

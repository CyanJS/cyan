import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, NavLink } from 'react-router-dom'

import { logout } from '../../actions/Auth'

import './style.scss'

class Navbar extends Component {
  render () {
    const { auth, logout, user } = this.props

    const buttonLoginOut = auth.authenticated
      ? (<a onClick={logout}>Logout</a>)
      : (<NavLink exact to='/login' activeClassName='active'>Login</NavLink>)

    const menuLoggedRight = auth.authenticated
      ? (
          <ul className='right'>
            <li><span className='text'>Hi {user.payload.username}</span></li>
          </ul>
        )
      : ''

    const menuLoggedLeft = auth.authenticated
      ? (
          <ul>
            <li><NavLink exact to='/dashboard' activeClassName='active'>Dashboard</NavLink></li>
            <li><NavLink exact to='/profile' activeClassName='active'>Profile</NavLink></li>
          </ul>
        )
      : ''

    return (
      <div className='navbar'>
        <ul>
          <li><NavLink exact to='/' activeClassName='active'>Cyan</NavLink></li>
          {menuLoggedLeft}
          <li className='right'>{buttonLoginOut}</li>
          {menuLoggedRight}
        </ul>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { logout },
  dispatch
)

const mapStateToProps = ({ auth, user }) => ({ auth, user })

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar))

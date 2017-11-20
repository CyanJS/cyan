import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter, NavLink } from 'react-router-dom'

import { logout } from '../../actions/Auth'

import './style.scss'

class Navbar extends Component {
  render () {
    const { auth, logout, user } = this.props

    const buttonRight = auth.authenticated
      ? (<a onClick={logout}>Logout</a>)
      : (<NavLink exact to='/login' activeClassName='active'>Login</NavLink>)

    const username = auth.authenticated
      ? (<li className='right'><span className='text'>Hi {user.payload.username}</span></li>)
      : ''

    const dashboard = auth.authenticated
      ? (<li><NavLink exact to='/dashboard' activeClassName='active'>Dashboard</NavLink></li>)
      : ''

    return (
      <div className='navbar'>
        <ul>
          <li><NavLink exact to='/' activeClassName='active'>Cyan</NavLink></li>
          {dashboard}
          <li className='right'>{buttonRight}</li>
          {username}
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

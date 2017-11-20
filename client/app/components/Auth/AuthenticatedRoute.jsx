import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import config from '../../../.env.js'

const ROUTER_LOGIN = config.router.login

const AuthenticatedRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route {...rest} render={props => {
    return (
      authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: ROUTER_LOGIN
        }} />
      )
    )
  }} />
)

const mapStateToProps = state => {
  const { auth } = state

  return { authenticated: auth.authenticated }
}

export default connect(mapStateToProps)(AuthenticatedRoute)

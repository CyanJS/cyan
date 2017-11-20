import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import config from '../../../.env.js'

const ROUTER_LOGGER = config.router.logged

const UnauthenticatedRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route {...rest} render={props => {
    return (
      !authenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: ROUTER_LOGGER
        }} />
      )
    )
  }} />
)

const mapStateToProps = state => {
  const { auth } = state

  return { authenticated: auth.authenticated }
}

export default connect(mapStateToProps)(UnauthenticatedRoute)

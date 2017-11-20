import React, { Component } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { authenticated } from '../../actions/Auth/Types'
import Cookie from '../../Cookie'
import { bindActionCreators } from 'redux'
import config from '../../../.env.js'
import { Redirect } from 'react-router-dom'

const ROUTER_LOGGED = config.router.logged

class Token extends Component {
  componentWillMount () {
    let { authenticated, location } = this.props
    const params = queryString.parse(location.search)

    Cookie.setToken(params.token)
    authenticated()
  }

  render () {
    return (
      <Redirect to={{
        pathname: ROUTER_LOGGED
      }} />
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { authenticated },
  dispatch
)

export default connect(
  null,
  mapDispatchToProps
)(Token)

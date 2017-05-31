import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { authenticated } from '../../actions/Auth/Types'
import Cookie from '../../Cookie'
import { bindActionCreators } from 'redux'
import config from '../../../.env.js'

const ROUTER_LOGGED = config.router.logged

class Token extends Component {
  componentWillMount () {
    const token = this.props.location.query.token
    let { authenticated } = this.props

    Cookie.setToken(token)
    authenticated()
    this.context.router.push(ROUTER_LOGGED)
  }

  render () {
    return (
      <div>Loading</div>
    )
  }
}

Token.contextTypes = {
  router: PropTypes.object
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { authenticated },
  dispatch
)

export default connect(
  null,
  mapDispatchToProps
)(Token)

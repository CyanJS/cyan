import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import config from '../../../.env.js'

const ROUTER_LOGIN = config.router.login

export default function (ComposedComponent) {
  class Authentication extends Component {
    componentWillMount () {
      if (!this.props.authenticated) {
        this.context.router.push(ROUTER_LOGIN)
      }
    }

    componentWillUpdate (nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push(ROUTER_LOGIN)
      }
    }

    render () {
      return <ComposedComponent {...this.props} />
    }
  }

  Authentication.contextTypes = {
    router: PropTypes.object
  }

  const mapStateToProps = state => {
    const { auth } = state
    return { authenticated: auth.authenticated }
  }

  return connect(mapStateToProps)(Authentication)
}

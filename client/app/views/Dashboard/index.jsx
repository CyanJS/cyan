import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadUser } from '../../actions/User'

import './style.scss'

class Dashboard extends Component {
  componentWillMount () {
    const { loadUser } = this.props

    loadUser()
  }

  render () {
    const { user } = this.props
    const userData = (() => {
      if (user.fetching) return { username: 'Loading...', email: 'Loading...' }
      return { username: user.payload.username, email: user.payload.email }
    })()

    return (
      <section className='section-dashboard'>
        <h2>
          Welcome {userData.username} !!!
        </h2>
        <p>Email: {userData.email}</p>
      </section>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { loadUser },
  dispatch
)

const mapStateToProps = ({ user }) => ({ user })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

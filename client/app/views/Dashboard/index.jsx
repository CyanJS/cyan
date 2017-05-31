import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadUser } from '../../actions/User'

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
      <section className='section'>
        <div className='container'>
          <div className='jumbotron'>
            <h2>
              Welcome {userData.username} !!!
            </h2>
            <p>Email: {userData.email}</p>
          </div>
        </div>
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

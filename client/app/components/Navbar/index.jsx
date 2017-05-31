import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../actions/Auth'
import { Link } from 'react-router'
import { NavbarDropdown } from './NavbarDropdown'

class NavbarTest extends Component {
  render () {
    const { auth, logout, user } = this.props

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>
                  NodejsReact
                </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavbarDropdown auth={auth.authenticated} logout={logout} user={user} />
          </Nav>
        </Navbar>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(
  { logout },
  dispatch
)

const mapStateToProps = ({ auth, user }) => ({ auth, user })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarTest)

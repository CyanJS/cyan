import React from 'react'
import { NavDropdown, NavItem, MenuItem, Glyphicon } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const IconUser = props => {
  const { text } = props

  return (
    <span>
      <Glyphicon glyph='user' /> {text}
    </span>
  )
}

const NavDropdownLogged = props => {
  const { logout, user } = props
  const username = user.fetching ? 'Loading...' : user.payload.username

  return (
    <NavDropdown eventKey={3} title={<IconUser text={username} />} id='NavDropdownLogged'>
      <LinkContainer to='/dashboard'>
        <MenuItem eventKey={3.1}>Dashboard</MenuItem>
      </LinkContainer>
      <MenuItem divider />
      <MenuItem eventKey={3.2} onClick={logout}><Glyphicon glyph='off' /> Logout</MenuItem>
    </NavDropdown>
  )
}

const NavDropdownLogin = () => {
  return (
    <LinkContainer to='/login'>
      <NavItem eventKey={1}>Signin</NavItem>
    </LinkContainer>
  )
}

export const NavbarDropdown = props => {
  const { logout, user, auth } = props

  if (auth) return <NavDropdownLogged logout={logout} user={user} />

  return <NavDropdownLogin />
}

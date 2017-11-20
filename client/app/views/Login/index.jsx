import React from 'react'
import config from '../../../.env.js'

import './style.scss'

class Login extends React.Component {
  render () {
    const URL_AUTH_GOOGLE = config.domain.server + '/auth/google'

    return (
      <section className='section-login'>
        <h1>Login</h1>
        <p><a href={URL_AUTH_GOOGLE}> Login with Google </a></p>
      </section>
    )
  }
}

export default Login

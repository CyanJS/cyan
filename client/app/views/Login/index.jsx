import React from 'react'
import config from '../../../.env.js'

import './style.scss'

class Login extends React.Component {
  render () {
    const URL_AUTH_GOOGLE = config.domain.server + '/auth/google'

    return (
      <section className='section'>
        <div className='container'>
          <div className='jumbotron'>
            <div className='text-center'>
              <h1>Signin <small>NodejsReact</small></h1>
              <p><a href={URL_AUTH_GOOGLE} type='button' className='btn btn-danger btn-lg'> Login with Google </a></p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Login

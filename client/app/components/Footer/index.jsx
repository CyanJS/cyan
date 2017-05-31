import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <hr />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-8'>
            <p>
              Licensed under <a href='https://github.com/meanstack.io/meanstack-io/blob/master/License'>MIT</a>. <a href='https://github.com/meanstack-io/meanstack.io'> <i className='fa fa-github' aria-hidden='true' /> Fork on GitHub.</a>
            </p>
          </div>
          <div className='col-md-4'>
            <p className='text-right'>Version 0.1</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

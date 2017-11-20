import React, { Component } from 'react'

import './style.scss'

class Footer extends Component {
  render () {
    return (
      <div className='footer'>
        <p>
          Licensed under <a href='https://github.com/CyanJS/cyan/blob/master/LICENSE'>MIT</a>. Fork on <a href='https://github.com/CyanJS/cyan'>GitHub</a>
        </p>
        <p className='right'>Version 0.2</p>
      </div>
    )
  }
}

export default Footer

import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './style.scss'

class Layout extends Component {
  render () {
    const { children } = this.props

    return (
      <div className='flex-container'>
        <header className='flex-header'>
          <Navbar />
        </header>
        <main className='flex-main'>
          { children }
        </main>
        <footer className='flex-footer'>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default Layout

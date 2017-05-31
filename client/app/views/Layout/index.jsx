import React, { Component } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import './style.scss'

class Layout extends Component {
  render () {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          { this.props.children }
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

export default Layout

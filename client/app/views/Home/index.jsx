import React, { Component } from 'react'

import './style.scss'

class Home extends Component {
  render () {
    return (
      <section className='section-home'>
        <h1>
          Cyan
        </h1>
        <p>
          bringing together the best of React and Node.js
        </p>
        <hr />

        <div className='clearfix'>
          <div className='left'>
            <h4>Front-End</h4>
            <ul>
              <li>React 16</li>
              <li>React-Router 4</li>
              <li>Redux</li>
              <li>Webpack 2</li>
              <li>Sass, Autoprefixer</li>
              <li>Autoprefixer</li>
            </ul>
          </div>
          <div className='left'>
            <h4>Back-End</h4>
            <ul>
              <li>Express</li>
              <li>Passport</li>
              <li>MongoDB, Mongoose</li>
              <li>Bluebird</li>
              <li>Service Provider Core</li>
            </ul>
          </div>
        </div>

        <h5>CodeStyle Standardjs</h5>
      </section>
    )
  }
}

export default Home

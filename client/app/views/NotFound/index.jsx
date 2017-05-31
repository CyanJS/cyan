import React from 'react'

class NotFound extends React.Component {
  render () {
    return (
      <section className='section'>
        <div className='container'>
          <div className='jumbotron'>
            <h1>404 - Page Not Found</h1>
            <p>I'm sorry, the page you were looking for cannot be found!</p>
          </div>
        </div>
      </section>
    )
  }
}

export default NotFound

/*
 |--------------------------------------------------------------------------
 | Start application
 |--------------------------------------------------------------------------
 |
 */
const http = require('http')

require('./bootstrap')(Core => {
    /**
     * Create HTTP server.
     */
  let server = http.createServer(Core.app)

  let pipePort = () => {
    let addr = server.address()
    return typeof addr === 'string'
                ? 'pipe ' + addr
                : 'port ' + addr.port
  }
  /**
   * Event listener for HTTP server "error" event.
   */
  let onError = error => {
    if (error.syscall !== 'listen') {
      throw error
    }

    let bind = pipePort()

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges')
        process.exit(1)
      case 'EADDRINUSE':
        console.error(bind + ' is already in use')
        process.exit(1)
      default:
        throw error
    }
  }

  /**
   * Event listener for HTTP server "listening" event.
   */
  let onListening = () => { console.log('Listening on ' + pipePort()) }

  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(Core.config.get('express').port)
  server.on('error', onError)
  server.on('listening', onListening)
})

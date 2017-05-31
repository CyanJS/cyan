'use strict'

const ServiceProvider = require('service-provider-core/support/ServiceProvider')
const express = require('express')
const compression = require('compression')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

let ExpressServiceProvider = ServiceProvider.extend(Core => {
  this.Core = Core
  this.Core.app = express()
  this._configApp = Core.config.get('app')
  this._configExpress = Core.config.get('express')
})

ExpressServiceProvider.prototype.register = done => {
  // view engine setup
  this.Core.app.use(compression())
  this.Core.app.use(logger(this._configExpress.logger))
  this.Core.app.use(bodyParser.json())
  this.Core.app.use(bodyParser.urlencoded({ extended: true }))
  this.Core.app.use(cookieParser())
  this.Core.app.set('port', this._configExpress.port)

  // Enable CORS from client-side
  this.Core.app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', this._configApp.domain.client)
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials')
    res.header('Access-Control-Allow-Credentials', 'true')

    next()
  })

  done()
}

ExpressServiceProvider.prototype.boot = done => {
  let Routes = require(this._configExpress.routes)

  // Register routes
  this.Core.app.use(Routes(this.Core))

  // catch 404 and forward to error handler
  this.Core.app.use((req, res, next) => {
    let err = new Error('Not Found')
    err.status = 404

    next(err)
  })

  // error handler
  this.Core.app.use((err, req, res, next) => {
    let response = {
      message: err.message
    }
    // set locals, only providing error in development
    response.err = req.app.get('env') === 'development' ? err : {}

    res.status(err.status || 500)
    return res.json(response)
  })

  done()
}

module.exports = ExpressServiceProvider

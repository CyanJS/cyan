'use strict'

/**
 * Module dependencies.
 */
const StrategyJwt = require('../services/passport/strategies/Jwt').strategy
const authenticateJwt = require('../services/passport/strategies/Jwt').authenticate
const StrategyGoogle = require('../services/passport/strategies/Google')
const ServiceProvider = require('service-provider-core/support/ServiceProvider')
const Passport = require('../services/passport/Passport')

/**
 * PassportServiceProvider
 *
 * @param App
 * @type {Function}
 */
let PassportServiceProvider = ServiceProvider.extend(Core => {
  this.Core = Core
  this._passport = new Passport(Core)
})

/**
 * Register Passport service Auth.
 *
 * @param done
 */
PassportServiceProvider.prototype.register = done => {
  // Initialize passport
  this.Core.app.use(this._passport.initialize())

  this._passport.passport.use(
    'google',
    StrategyGoogle(this.Core)
  )

  this._passport.passport.use(
    'jwt',
    StrategyJwt(this.Core)
  )

  this.Core.passport = this._passport.passport
  this.Core.authenticate = authenticateJwt(this.Core)

  return done()
}

module.exports = PassportServiceProvider

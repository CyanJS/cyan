'use strict'

const passport = require('passport')

class Passport {
  constructor (Core) {
    this._config = Core.config.get('passport')
    this.passport = passport
  }

  /**
   * initialize
   *   Initialize passport for middleware.
   *
   * @return {Function} passport.initialize
   */
  initialize () {
    return passport.initialize(this._config.initialize || {})
  }
}

module.exports = Passport

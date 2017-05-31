/**
 * Bootstrap application.
 *
 */

'use strict'

/**
 * Module dependencies.
 */
const Core = require('service-provider-core')
const path = require('path')

/**
 * bootstrap
 *
 * @param callback
 */
module.exports = callback => {
    // Set directory of configuration.
  let App = new Core(path.resolve(__dirname, '../config'))

    // Bootstrap Application
  App.bootstrap(callback)
}

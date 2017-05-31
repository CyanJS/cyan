'use strict'

const ServiceProvider = require('service-provider-core/support/ServiceProvider')
const Mongoose = require('../services/mongoose/Mongoose')

/**
 * MongooseServiceProvider
 *
 * @param Core
 * @type {Function}
 */
let MongooseServiceProvider = ServiceProvider.extend(Core => {
  this.Core = Core
  this._mongoose = new Mongoose(Core)
})

/**
 * Register Mongoose
 *
 * @param done
 */
MongooseServiceProvider.prototype.register = done => {
  this._mongoose.connect()
    .then(() => {
      this.Core.mongoose = this._mongoose.mongoose
      this.Core.model = this._mongoose.loadModels(this.Core)

      done()
    })
}

module.exports = MongooseServiceProvider

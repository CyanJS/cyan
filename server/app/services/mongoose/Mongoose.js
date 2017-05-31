'use strict'

const util = require('util')
const debug = require('debug')('react.nodejs:mongoose')

class Database {
  constructor (Core) {
    this._config = Core.config.get('mongoose')
    this.mongoose = require('mongoose')

    /**
   * Use bluebird Promise
   *    http://mongoosejs.com/docs/promises.html
   */
    this.mongoose.Promise = require('bluebird')
  }

  urlConnect () {
    return util.format(
          'mongodb://%s:%s@%s:%s/%s',
          this._config.connect.user,
          this._config.connect.password,
          this._config.connect.host,
          this._config.connect.port,
          this._config.connect.base
      )
  }

  /**
   * Connect MongoDB with mongoose
   *   Documentation mongoose: http://mongoosejs.com/docs/connections.html
   *
   * @returns {Promise}
   */
  connect () {
    let urlConnect = this.urlConnect()

    return this.mongoose.connect(urlConnect)
        .then(() => {
          debug('Connection established MongoDB. URL: ', urlConnect)
        })
        .catch((err) => {
          throw new Error(
                util.format('\nError during the connection MongoDB URL: %s.\n%s\n\n', urlConnect, err)
            )
        })
  }

  loadModels (Core) {
    let models = require(this._config.models)
    let modelsInst = {}

    Object.keys(models).forEach(function (key) {
      let model = models[key]
      modelsInst[key] = model(Core)
    })

    return modelsInst
  }
}

module.exports = Database

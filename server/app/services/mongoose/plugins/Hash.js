'use strict'

const crypto = require('crypto')

/**
 * Hash
 *
 * @param schema
 */
module.exports = schema => {
  /**
   * Get parameter
   *
   * Covers
   *  min: [6, 'Password accept min 6 characters !'],
   *  min: 6,
   *
   * @param param
   * @returns {*}
   */
  let getParam = param => {
    if (typeof param === 'undefined') {
      return false
    } else if (Array.isArray(param)) {
      return param[0]
    }

    return param
  }

  /**
   * Create methods to compare the hash fields.
   *
   * Example Schema:
   *   password: {
   *       type: String,
   *       minlength: [6, 'Password accept min 6 characters !'],
   *       hash: 'secret-key'
   *   }
   *
   * Method created:
   *   model.compareHash(Field, String); // return true of false
   */
  schema.methods.compareHash = (field, value) => {
    const document = this
    const secret = schema.paths[field]['options']['hash']

    if (typeof secret !== 'undefined') return false

    const valueSha256 = crypto.createHmac('sha256', secret).update(value).digest('hex')

    return valueSha256 === document[field]
  }

  /**
   * Generate hash.
   *
   * Middleware mongoose
   *   http://mongoosejs.com/docs/middleware.html
   *
   */
  schema.pre('save', next => {
    const document = this
    const paths = schema.paths

    Object.keys(paths).forEach(field => {
      const options = paths[field]['options']
      const min = getParam(options['minlength'])
      const max = getParam(options['maxlength'])
      const secret = options['hash']

      if (typeof secret !== 'undefined' &&
        document.isModified(field) &&
        !(max && (document[field]).length > max) &&
        !(min && (document[field]).length < min)) {
        document[field] = crypto.createHmac('sha256', secret).update(document[field]).digest('hex')
      }
    })

    return next()
  })
}

'use strict'

/**
 * Email
 *
 * @param {Schema} schema
 */
module.exports = schema => {
  const paths = schema.paths
  const fields = Object.keys(paths)
  const validaEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

  fields.forEach(field => {
    let options = paths[field]['options']
    if (typeof options['email'] !== 'undefined' && options['email'] !== false) {
      schema.path(field).validate(value => {
        return validaEmail.test(value)
      },
        (options['email'] === true) ? 'Field {PATH} {VALUE} not valid !' : options['email']
      )
    }
  })
}

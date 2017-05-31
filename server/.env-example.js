const app = require('./config/app')

/**
 * Config Environment
 * @type {}
 */
module.exports = {
  'app': {
    //
  },
  'express': {
    //
  },
  'mongoose': {
    'connect': {
      'host': '',
      'port': '',
      'user': '',
      'password': '',
      'base': ''
    }
  },
  'passport': {
    'google': {
      'id': '########.apps.googleusercontent.com',
      'secret': 'secretKey',
      'callback': app.domain.server + '/auth/google/callback',
      'redirectFront': app.domain.client + '/login/auth/?token=%s'
    },
    'jwt': {
      'secret': 'secretKey'
    }
  }
}

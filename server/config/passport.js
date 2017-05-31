const app = require('./app')

module.exports = {
  'initialize': {},
  'google': {
    'id': '########.apps.googleusercontent.com',
    'secret': 'secretKey',
    'callback': app.domain.server + '/auth/google/callback',
    'redirectFront': app.domain.client + '/login/auth/?token=%s'
  },
  'jwt': {
    'secret': 'secretKey',
    'authenticate': {session: false}
  }
}

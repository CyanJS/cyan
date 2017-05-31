const app = require('./app')

module.exports = {
  'initialize': {},
  'google': {
    'id': '639692645630-822fpnig8lsrbhr32rbuvsgpmk75dab5.apps.googleusercontent.com',
    'secret': 'OoLUytwT4LFCdbirNzUKiv0i',
    'callback': app.domain.server + '/auth/google/callback',
    'redirectFront': app.domain.client + '/login/auth/?token=%s'
  },
  'jwt': {
    'secret': 'secret',
    'authenticate': {session: false}
  }
}

const path = require('path')

module.exports = {
  'connect': {
    'host': 'localhost',
    'port': '27017',
    'user': 'user',
    'password': 'pwd',
    'base': 'base'
  },
  'models': path.resolve(__dirname, '../app/models/index.js')
}

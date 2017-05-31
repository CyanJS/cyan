const path = require('path')

module.exports = {
  'routes': path.resolve(__dirname, '../app/Routes.js'),
  'port': '8000',
  'logger': 'dev'
}

const path = require('path')

module.exports = {
  'domain': {
    'client': 'http://localhost:3000',
    'server': 'http://localhost:8000'
  },

  /*
  |--------------------------------------------------------------------------
  | Autoload Service Providers
  |--------------------------------------------------------------------------
  |
  */
  'providers': [
    path.resolve(__dirname, '../app/providers/Mongoose'),
    path.resolve(__dirname, '../app/providers/Passport'),
    path.resolve(__dirname, '../app/providers/Express')
  ],

  /*
  |--------------------------------------------------------------------------
  | Application Environment
  |--------------------------------------------------------------------------
  |
  | File to configuration your application environment.
  |
  */
  'env': path.resolve(__dirname, '../.env.js')
}

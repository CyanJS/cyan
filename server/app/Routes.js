const router = require('express').Router()

module.exports = Core => {
  router.use('/', require('./controllers/index')(Core))
  router.use('/user', require('./controllers/User')(Core))
  router.use('/auth', require('./controllers/Auth')(Core))

  return router
}

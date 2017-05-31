const router = require('express').Router()
const jwt = require('jsonwebtoken')
const util = require('util')

module.exports = Core => {
  const config = Core.config.get('passport')
  const passport = Core.passport

  router.get('/google', passport.authenticate('google', {scope: ['profile', 'email']}))

  router.get('/google/callback', (req, res, next) => {
    passport.authenticate('google', (err, user) => {
      if (err) return next(err)
      if (!user) return next('Bad request')

      const token = jwt.sign({id: user.id}, config.jwt.secret)
      const redirectFront = util.format(config.google.redirectFront, 'JWT ' + token)

      return res.redirect(redirectFront)
    })(req, res, next)
  })

  return router
}

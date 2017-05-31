const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const authenticate = (Core) => {
  const config = Core.config.get('passport')

  const passport = Core.passport

  return () => {
    return passport.authenticate('jwt', config.jwt.authenticate)
  }
}

const strategy = Core => {
  const config = Core.config.get('passport')
  const ModelUser = Core.model.User

  return new JwtStrategy(
    {
      secretOrKey: config.jwt.secret,
      jwtFromRequest: ExtractJwt.fromAuthHeader()
    },
    (payload, done) => {
      ModelUser.findById(payload.id)
        .then((user) => {
          if (user) return user

          return false
        }).nodeify(done, {spread: true})
    }
  )
}

module.exports = { authenticate, strategy }

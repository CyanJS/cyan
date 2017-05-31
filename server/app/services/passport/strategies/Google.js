'use strict'

/**
 * Strategy local.
 */
const GoogleStrategy = require('passport-google-oauth20').Strategy

module.exports = Core => {
  const config = Core.config.get('passport')
  const ModelUser = Core.model.User

  return new GoogleStrategy(
    {
      clientID: config.google.id,
      clientSecret: config.google.secret,
      callbackURL: config.google.callback
    },
    (accessToken, refreshToken, profile, done) => {
      ModelUser.findOne({'oauth': profile.id, 'provider': profile.provider})
        .then((user) => {
          if (user) return user

          let newModelUser = new ModelUser()
          newModelUser.oauth = profile.id
          newModelUser.provider = profile.provider
          newModelUser.username = profile.displayName
          newModelUser.email = profile.emails[0].value

          return newModelUser.save()
            .then(user => ({ user }))
        }).nodeify(done, {spread: true})
    }
  )
}

'use strict'

module.exports = Core => {
  const mongoose = Core.mongoose
  const Schema = mongoose.Schema

  /**
  * Schema User.
  *
  * @type {*|Schema}
  */
  const UserSchema = new Schema(
    {
      username: {
        type: String,
        trim: true,
        required: [true, 'Username is required']
      },
      age: {
        type: String,
        trim: true
      },
      email: {
        type: String,
        trim: true,
        required: [true, 'Email is required']
      },
      provider: {
        type: String,
        trim: true,
        required: [true, 'Provider is required']
      },
      oauth: {
        type: String,
        trim: true,
        required: [true, 'oAuth ID is required']
      }
    }
  )

  /**
   * Create model User.
   */
  return mongoose.model('users', UserSchema)
}

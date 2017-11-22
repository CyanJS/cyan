const router = require('express').Router()

module.exports = Core => {
  router.get('/', Core.authenticate(), (req, res) => {
    res.json(req.user)
  })

  router.put('/', Core.authenticate(), (req, res) => {
    const { body } = req
    
    Core.model.User.findById(req.user['_id'])
      .then(user => {
        if (!user) throw new Error('User not found !')

        user.username = body.username
        user.age = body.age
        
        return user.save()
      })
      .then(user => res.json(user))
      .catch(err => res.json(err))
  })

  return router
}

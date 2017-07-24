const router = require('express').Router()

module.exports = Core => {
  router.get('/', Core.authenticate(), (req, res) => {
    res.json(req.user)
  })

  return router
}

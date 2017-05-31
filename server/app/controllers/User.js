const router = require('express').Router()

module.exports = Core => {
  router.get('/', Core.authenticate(), (req, res) => {
    console.log(req.user)
    res.json(req.user)
  })

  return router
}

const router = require('express').Router()

module.exports = Core => {
  router.get('/', (req, res) => {
    res.json({'API': 'NodejsReact', 'Status': 'Up and running'})
  })

  return router
}

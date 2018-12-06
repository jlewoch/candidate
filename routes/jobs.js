const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')

router
  .route('/')
  .get((req, res) => {
    call.all('jobs')
  })
  .post((req, res) => {
    call.create(('jobs', body, res))
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('jobs', req.params, res)
  })

  .put((req, res) => {
    call.update('jobs', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('jobs', req.params, res)
  })

module.exports = router

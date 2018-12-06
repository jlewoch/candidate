const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')

router
  .route('/')
  .get((req, res) => {
    call.all('applications')
  })
  .post((req, res) => {
    call.create(('applications', body, res))
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('applications', req.params, res)
  })

  .put((req, res) => {
    call.update('applications', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('applications', req.params, res)
  })

module.exports = router

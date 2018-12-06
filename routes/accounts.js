const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
router
  .route('/')
  .get((req, res) => {
    call.all('accounts')
  })
  .post((req, res) => {
    call.create(('accounts', body, res))
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('accounts', req.params, res)
  })

  .put((req, res) => {
    call.update('accounts', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('accounts', req.params, res)
  })

module.exports = router

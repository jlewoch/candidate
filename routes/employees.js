const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')
router
  .route('/')
  .get((req, res) => {
    call.all('employees')
  })
  .post((req, res) => {
    call.create(('employees', body, res))
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('employees', req.params, res)
  })

  .put((req, res) => {
    call.update('employees', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('employees', req.params, res)
  })

module.exports = router

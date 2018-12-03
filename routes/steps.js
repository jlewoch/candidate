const express = require('express')
const router = express.Router()
const call = require('../service_helpers/general_api')

router
  .route('/')
  .get((req, res) => {
    call.all('steps')
  })
  .post((req, res) => {
    call.create(('steps', body, res))
  })
router
  .route('/:guid')
  .get((req, res) => {
    call.get('steps', req.params, res)
  })

  .put((req, res) => {
    call.update('steps', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('steps', req.params, res)
  })

module.exports = router

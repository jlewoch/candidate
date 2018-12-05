const express = require('express')
const router = express.Router()
const call = require('../service_helpers/general_api')

router
  .route('/employees')
  .get((req, res) => {
    call.all('employees')
  })
  .post((req, res) => {
    call.create(('employees', body, res))
  })
router
  .route('/employees/:guid')
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

const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')
const objs = require('../middleware/api/objectServices')
const { OK, CREATED } = require('./api_service_helpers/status_codes')

router
  .route('/')
  .get((req, res) => {
    call.all('employees').then(data =>
      res.status(OK.code).json({
        data: data.map(item => obj.employee(item)),
        message: OK.message
      })
    )
  })
  .post((req, res) => {
    call.create('employees', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: data.map(item => obj.employee(item)),
        message: CREATED.message
      })
    )
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('employees', req.params, res)
  })
  .put((req, res) => {
    call.update('employees', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('employees', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('employees', req.params, res)
  })

module.exports = router

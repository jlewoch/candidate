const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')
const objs = require('./data_objects/objectServices')
const { OK, CREATED } = require('./api_service_helpers/status_codes')

router
  .route('/')
  .get((req, res) => {
    call.all('departments').then(data =>
      res.status(OK.code).json({
        data: objs.convertToObject(data, obj.outDepartment),
        message: OK.message
      })
    )
  })
  .post((req, res) => {
    call.create('departments', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: objs.convertToObject(data, obj.outDepartment),
        message: CREATED.message
      })
    )
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('departments', req.params, res)
  })
  .put((req, res) => {
    call.update('departments', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('departments', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('departments', req.params, res)
  })

module.exports = router

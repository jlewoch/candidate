const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')
const objs = require('../middleware/api/objectServices')
const { OK, CREATED } = require('./api_service_helpers/status_codes')

router
  .route('/')
  .get((req, res) => {
    call.all('applications').then(data =>
      res.status(OK.code).json({
        data: data.map(item => obj.application(item)),
        message: OK.message
      })
    )
  })
  .post((req, res) => {
    call.create('applications', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: data.map(item => obj.application(item)),
        message: CREATED.message
      })
    )
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('applications', req.params, res)
  })
  .put((req, res) => {
    call.update('applications', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('applications', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('applications', req.params, res)
  })

module.exports = router

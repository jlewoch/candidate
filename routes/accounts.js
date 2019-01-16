const express = require('express')
const router = express.Router()
const call = require('./api/general_api')
const obj = require('./data_objects/objects')
const objs = require('./data_objects/objectServices')
const { OK, CREATED } = require('./api/status_codes')

router
  .route('/')
  .get((req, res) => {
    call.all('accounts').then(data =>
      res.status(OK.code).json({
        data: objs.convertToObject(data),
        message: OK.message
      })
    )
  })
  .post((req, res) => {
    call.create('accounts', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: objs.convertToObject(data),
        message: CREATED.message
      })
    )
  })

router
  .route('/:id')
  .get((req, res) => {
    call.get('accounts', req.params, res)
  })
  .put((req, res) => {
    call.update('accounts', req.body, req.params, res).then(data =>
      res.status(OK.code).json({
        data: objs.convertToObject(data, obj.account),
        message: OK.message
      })
    )
  })

  .delete((req, res) => {
    call.destroy('accounts', req.params, res)
  })

module.exports = router

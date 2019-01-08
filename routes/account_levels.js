const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')
const objs = require('./data_objects/objectServices')
const { OK, CREATED } = require('./api_service_helpers/status_codes')

router
  .route('/')
  .get((req, res) => {
    call.all('account_levels').then(data =>
      res.status(OK.code).json({
        data: data.map(item => obj.outAccountLevel(item)),
        message: OK.message
      })
    )
  })
  .post((req, res) => {
    call.create('account_levels', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: data.map(item => obj.outAccountLevel(item)),
        message: CREATED.message
      })
    )
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('account_levels', req.params, res)
  })
  .put((req, res) => {
    call.update('account_levels', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('account_levels', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('account_levels', req.params, res)
  })

module.exports = router

const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')
const { confirmValid } = require('../middleware/api/router_middleware')
const { OK, CREATED } = require('./api_service_helpers/status_codes')

router.get('/', (req, res) => {
  call.all('questions', res).then(data => {
    res.status(OK.code).json({
      data: data.map(item => obj.question(item)),
      message: OK.message
    })
  })
})

router.post('/', confirmValid, (req, res) => {
  call.create('questions', req.body, res).then(data =>
    res.status(CREATED.code).json({
      data: data.map(item => obj.question(item)),
      message: CREATED.message
    })
  )
})
router
  .route('/:id')
  .get((req, res) => {
    call.get('questions', req.params, res)
  })
  .put((req, res) => {
    call.update('questions', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('questions', req.body, req.params, res)
  })
  .patch((req, res) => {})
  .delete((req, res) => {
    call.destroy('questions', req.params, res)
  })

module.exports = router

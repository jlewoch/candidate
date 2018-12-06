const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')

router.route('/').get((req, res) => {
  call.all('section_evaluations').post((req, res) => {
    call.create(('section_evaluations', body, res))
  })
})

router
  .route('/:id')
  .get((req, res) => {
    call.get('section_evaluations', req.params, res)
  })
  .put((req, res) => {
    call.update('section_evaluations', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('section_evaluations', req.params, res)
  })
module.exports = router

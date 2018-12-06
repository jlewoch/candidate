const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')

router.route('/').get((req, res) => {
  call.all('first_interview_evaluations').post((req, res) => {
    call.create(('first_interview_evaluations', body, res))
  })
})

router
  .route('/:id')
  .get((req, res) => {
    call.get('first_interview_evaluations', req.params, res)
  })
  .put((req, res) => {
    call.update('first_interview_evaluations', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('first_interview_evaluations', req.params, res)
  })
module.exports = router

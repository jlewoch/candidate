const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')

router.route('/').get((req, res) => {
  call.all('second_interview_evaluations').post((req, res) => {
    call.create(('second_interview_evaluations', body, res))
  })
})

router
  .route('/:id')
  .get((req, res) => {
    call.get('second_interview_evaluations', req.params, res)
  })
  .put((req, res) => {
    call.update('second_interview_evaluations', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('second_interview_evaluations', req.params, res)
  })
module.exports = router

const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')
const objs = require('./data_objects/objectServices')
const { OK, CREATED } = require('./api_service_helpers/status_codes')

router
  .route('/')
  .get((req, res) => {
    call.all('second_interview_evaluations').then(data =>
      res.status(OK.code).json({
        data: data.map(item => obj.single_evalution(item)),
        message: OK.message
      })
    )
  })
  .post((req, res) => {
    call.create('second_interview_evaluations', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: data.map(item => obj.single_evalution(item)),
        message: CREATED.message
      })
    )
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('second_interview_evaluations', req.params, res)
  })
  .put((req, res) => {
    call.update('second_interview_evaluations', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('second_interview_evaluations', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('second_interview_evaluations', req.params, res)
  })

module.exports = router

const express = require('express')
const router = express.Router()
const call = require('./api/general_api')
const obj = require('./data_objects/objects')
const objs = require('./data_objects/objectServices')
const { OK, CREATED } = require('./api/status_codes')

router
  .route('/')
  .get((req, res) => {
    call.all('first_interview_evaluations').then(data =>
      res.status(OK.code).json({
        data: data.map(item => obj.single_evalution(item)),
        message: OK.message
      })
    )
  })
  .post((req, res) => {
    call.create('first_interview_evaluations', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: data.map(item => obj.single_evalution(item)),
        message: CREATED.message
      })
    )
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('first_interview_evaluations', req.params, res)
  })
  .put((req, res) => {
    call.update('first_interview_evaluations', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('first_interview_evaluations', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('first_interview_evaluations', req.params, res)
  })

module.exports = router

const express = require('express')
const router = express.Router()
const call = require('./api/general_api')
const obj = require('./data_objects/objects')
const objs = require('./data_objects/objectServices')
const { OK, CREATED } = require('./api/status_codes')

router
  .route('/')
  .get((req, res) => {
    call.all('resume_evaluations').then(data =>
      res.status(OK.code).json({
        data: data.map(item => obj.single_evalution(item)),
        message: OK.message
      })
    )
  })
  .post((req, res) => {
    call.create('resume_evaluations', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: data.map(item => obj.single_evalution(item)),
        message: CREATED.message
      })
    )
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('resume_evaluations', req.params, res)
  })
  .put((req, res) => {
    call.update('resume_evaluations', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('resume_evaluations', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('resume_evaluations', req.params, res)
  })

module.exports = router

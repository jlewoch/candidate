const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')
const objs = require('./data_objects/objectServices')
const { OK, CREATED } = require('./api_service_helpers/status_codes')

router
  .route('/')
  .get((req, res) => {
    call.all('job_postings').then(data =>
      res.status(OK.code).json({
        data: data.map(item => obj.job(item)),
        message: OK.message
      })
    )
  })
  .post((req, res) => {
    call.create('job_postings', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: data.map(item => obj.job(item)),
        message: CREATED.message
      })
    )
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('job_postings', req.params, res)
  })
  .put((req, res) => {
    call.update('job_postings', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('job_postings', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('job_postings', req.params, res)
  })

module.exports = router

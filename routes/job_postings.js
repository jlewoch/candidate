const express = require('express')
const router = express.Router()
const call = require('./api/general_api')
const obj = require('./data_objects/objects')
const objs = require('./data_objects/objectServices')
const { OK, CREATED } = require('./api/status_codes')
const knex = require('../db/knex/knex')

router
  .route('/')
  .get((req, res) => {
    call.all('job_postings', res).then(data =>
      res.status(OK.code).json({
        data: objs.convertToObject(data),
        message: OK.message
      })
    )
  })
  .post((req, res) => {
    call.create('job_postings', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: objs.convertToObject(data),
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

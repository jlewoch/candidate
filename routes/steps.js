const express = require('express')
const router = express.Router()
const call = require('./api/general_api')
const objs = require('./data_objects/objectServices')
const obj = require('./data_objects/objects')
const knex = require('../db/knex/knex')
// call.all('resume_evaluations'),call.all('first_interview_evaluations'),call.all('second_interview_evaluations'),call.all('phone_evaluations')
const { OK, CREATED, BAD_REQUEST } = require('./api/status_codes')

router.route('/').get((req, res) => {
  call.all('steps').then(data =>
    res.status(OK.code).json({
      data: objs.convertToObject(data),
      message: OK.message
    })
  )
})
router.post('/', (req, res) => {
  call.create('steps', req, res).then(data =>
    res.status(CREATED.code).json({
      data: objs.convertToObject(data),
      message: CREATED.message
    })
  )
})
router
  .route('/:id')
  .get((req, res) => {
    call.get('steps', req.params, res)
  })
  .put((req, res) => {
    call
      .update('steps', obj.recieveStep(req.body), req.params, res)
      .then(data => {
        res.status(OK.code).json({
          data: objs.convertToObject(data, obj.outStep),
          message: OK.message
        })
      })
  })
  .delete((req, res) => {
    call.destroy('steps', req.params, res)
  })

module.exports = router

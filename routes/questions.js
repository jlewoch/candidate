const express = require('express')
const router = express.Router()
const call = require('./api/general_api')
const obj = require('./data_objects/objects')
const objs = require('./data_objects/objectServices')

const { OK, CREATED } = require('./api/status_codes')

router.get('/', (req, res) => {
  call.all('questions', res).then(data => {
    res.status(OK.code).json({
      data: objs.convertToObject(data),
      message: OK.message
    })
  })
})

router.post('/', (req, res) => {
  call.create('questions', req.body, res).then(data =>
    res.status(CREATED.code).json({
      data: objs.convertToObject(data),
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
    call.update('questions', req.body, req.params, res).then(data =>
      res.status(OK.code).json({
        data: objs.convertToObject(data, obj.outQuestion),
        message: OK.message
      })
    )
  })
  .patch((req, res) => {
    call.update('questions', req.body, req.params, res)
  })
  .patch((req, res) => {})
  .delete((req, res) => {
    call.destroy('questions', req.params, res)
  })

module.exports = router

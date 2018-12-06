const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')
const objs = require('../middleware/api/objectServices')
const { BAD_REQUEST } = require('./api_service_helpers/status_codes')

function confirmValid (req, res, next) {
  objs.weightLeft(req.body.step).then(left => {
    req.body.enabled && req.body.weight && req.body.weight <= left
      ? next()
      : res
        .status(BAD_REQUEST.code)
        .json(
          BAD_REQUEST.message +
              `there is ${left}% weight left for the selected step`
        )
  })
}

router.get('/', (req, res) => {
  call.all('questions', res).then(data => {
    res.status(200).json({
      data: data.map(item => obj.question(item)),
      result: 'success'
    })
  })
})

router.post('/', confirmValid, (req, res) => {
  call
    .create('questions', req.body, res)
    .then(data =>
      res
        .status(201)
        .json({ data: data.map(item => obj.question(item)), result: 'success' })
    )
})
router
  .route('/:id')
  .get((req, res) => {
    call.get('questions', req.params, res)
  })
  .put((req, res) => {
    call.update('questions', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('questions', req.body, req.params, res)
  })
  .patch((req, res) => {})
  .delete((req, res) => {
    call.destroy('questions', req.params, res)
  })

module.exports = router

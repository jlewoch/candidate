const express = require('express')
const router = express.Router()
const call = require('../service_helpers/general_api')
const obj = require('../services/objects')

router
  .route('/')
  .get((req, res) => {
    call.all('questions', res).then(data => {
      res.status(200).json({
        data: data.map(item => obj.questions(item)),
        result: 'success'
      })
    })
  })
  .post((req, res) => {
    call.create(('questions', body, res))
  })
router
  .route('/:guid')
  .get((req, res) => {
    call.get('questions', req.params, res).then(data => {
      res.status(200).json({
        data: data.map(item => obj.questions(item)),
        result: 'success'
      })
    })
  })

  .put((req, res) => {
    call.update('questions', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('questions', req.params, res)
  })

module.exports = router

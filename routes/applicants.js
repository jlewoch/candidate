const express = require('express')
const router = express.Router()
const call = require('../service_helpers/general_api')

router
  .route('/')
  .get((req, res) => {
    call.all('applicants')
  })
  .post((req, res) => {
    call.create(('applicants', body, res))
  })
router
  .route('/:guid')
  .get((req, res) => {
    call.get('applicants', req.params, res)
  })

  .put((req, res) => {
    call.update('applicants', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('applicants', req.params, res)
  })

module.exports = router

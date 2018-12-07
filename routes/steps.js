const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')
const { checkRequiredFields } = require('../middleware/api/router_middleware')
const { OK, CREATED } = require('./api_service_helpers/status_codes')

router.route('/').get((req, res) => {
  call.all('steps').then(data =>
    res.status(OK.code).json({
      data: data.map(item => obj.step(item)),
      message: OK.message
    })
  )
})
router.post('/', checkRequiredFields, (req, res) => {
  call.create('applicants', req.body, res).then(data =>
    res.status(CREATED.code).json({
      data: data.map(item => obj.step(item)),
      message: CREATED.message
    })
  )
})
router
  .route('/:id')
  .get((req, res) => {
    call.get('applicants', req.params, res)
  })
  .put((req, res) => {
    call.update('applicants', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('applicants', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('applicants', req.params, res)
  })

module.exports = router

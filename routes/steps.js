const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const objs = require('./data_objects/objectServices')
const obj = require('./data_objects/objects')
const { checkRequiredFields } = require('../middleware/api/router_middleware')
const { OK, CREATED } = require('./api_service_helpers/status_codes')

router.route('/').get((req, res) => {
  call.all('steps').then(data =>
    res.status(OK.code).json({
      data: objs.convertToObject(data, obj.step),
      message: OK.message
    })
  )
})
router.post('/', (req, res) => {
  call.create('steps', req.body, res).then(data =>
    res.status(CREATED.code).json({
      data: data.map(item => obj.step(item)),
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
          data: objs.convertToObject(data, obj.step),
          message: OK.message
        })
      })
  })
  .delete((req, res) => {
    call.destroy('steps', req.params, res)
  })

module.exports = router

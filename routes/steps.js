const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const objs = require('./data_objects/objectServices')
const obj = require('./data_objects/objects')
const knex = require('../db/knex/knex')

const { checkRequiredFields } = require('../middleware/api/router_middleware')
const { OK, CREATED, BAD_REQUEST } = require('./api_service_helpers/status_codes')

router.route('/').get((req, res) => {
    knex('steps').select('enabled', 'id', 'name', 'level', 'weight').whereNot({name:'New'}).then(data=>{
      res.status(OK.code).json({
        data: objs.convertToObject(data, obj.step),
        message: OK.message
      })
    }).catch(error=>res.status(BAD_REQUEST.code).json(BAD_REQUEST.message))
   
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
      .update('steps', req.body, req.params, res)
      .then(data =>
        res.status(OK.code).json({
          data: objs.convertToObject(data, obj.step),
          message: OK.message
        })
      )
      .catch(error => console.log(error))
  })

  .delete((req, res) => {
    call.destroy('steps', req.params, res)
  })

module.exports = router

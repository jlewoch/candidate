const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')
const objs = require('../middleware/api/objectServices')
const { OK, CREATED } = require('./api_service_helpers/status_codes')
const knex = require('../db/knex/knex');
router
  .route('/')
  .get(async(req, res) => {
    let employees = await call.all('employees').then(data=>data)

    knex('employees as e')
      .select('e1.f_name', 'e1.l_name', 'e1.id').leftJoin('employees as e1', function(){
        this.on('e.manager' ,'=','e1.id' )
      }).distinct('e1.id')
      .then(data =>
        res.status(OK.code).json({
          data:{ employees:employees.map(item => obj.employee(item)), managers:data},
          message: OK.message
        })
      ).catch(err=>console.log(err))
  })
  .post((req, res) => {
    call.create('employees', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: data.map(item => obj.employee(item)),
        message: CREATED.message
      })
    )
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('employees', req.params, res)
  })
  .put((req, res) => {
    call.update('employees', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('employees', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('employees', req.params, res)
  })

module.exports = router

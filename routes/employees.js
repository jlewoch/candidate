const express = require('express')
const router = express.Router()
const call = require('./api_service_helpers/general_api')
const obj = require('./data_objects/objects')
const objs = require('./data_objects/objectServices')
const { OK, CREATED } = require('./api_service_helpers/status_codes')
const knex = require('../db/knex/knex')
router
  .route('/')
  .get((req, res) => {
    knex('employees as e')
      .select(
        'e.id as id',
        'e.email',
        'e.phone',
        'e.enabled',
        'e.f_name',
        'e.l_name',
        'a.locked',
        'al.level',
        'al.name',
        'e.department',
        'e1.f_name as managerFirst',
        'e1.l_name as managerLast',
        'd.name as dept',
        'a.enabled as accountStatus',
        'e.account'
      )
      .leftJoin('departments as d', function () {
        this.on('e.department', '=', 'd.id')
      })
      .leftJoin('employees as e1', function () {
        this.on('e.manager', '=', 'e1.id')
      })
      .leftJoin('accounts as a', function () {
        this.on('e.account', '=', 'a.id')
      })
      .leftJoin('account_levels as al', function () {
        this.on('a.account_level', '=', 'al.level')
      })
      .then(async data => {
        let employees = objs.convertToObject(data, obj.outEmployee)
        let managers = await knex('employees as m')
          .select('m1.f_name', 'm1.l_name', 'm1.id as _')
          .leftJoin('employees as m1', function () {
            this.on('m.manager', '=', 'm1.id')
          })
          .distinct('m1.id')
        managers = objs.convertToObject(managers, obj.manager)

        return { employees, managers }
      })
      .then(data => res.status(OK.code).json({ data, message: OK.message }))
      .catch(err => console.log(err))
  })
  .post((req, res) => {
    call
      .create('employees', obj.inEmployee(req.body), res, req.token)
      .then(data => {
        res.status(CREATED.code).json({
          data: objs.convertToObject(data, obj.outEmployee),
          message: CREATED.message
        })
      })
  })

router
  .route('/:id')

  .put((req, res) => {
    call.update(
      'employees',
      obj.inEmployee(req.body),
      req.params,
      res,
      req.token
    )
  })
  .delete((req, res) => {
    call.destroy('employees', req.params, res)
  })
module.exports = router

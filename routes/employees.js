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
        'e.id as _',
        'e.email',
        'e.phone',
        'e.enabled as activeEmployee',
        'e.f_name as firstName',
        'e.l_name as lastName',
        'a.locked',
        'al.level',
        'al.name as level_name',
        'e.department',
        'e1.f_name as managerFirst',
        'e1.l_name as managerLast',
        'd.name as deptName',
        'a.enabled as accountStatus',
        'e.account as _a'
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
        let employees = {}
        for (let i = 0; i < data.length; i++) {
          const element = data[i]
          employees[element._] = element
          employees[element._].empfull_name = obj.fullName(
            element.firstName,
            element.lastName
          )
          employees[element._].manfull_name = obj.fullName(
            element.managerFirst,
            element.managerLast
          )
          employees[element._].lockedLabel = element.locked ? 'Locked' : ''
          employees[element._].level = {
            level: element.level,
            name: element.level_name
          }
        }

        let managers = await knex('employees as m')
          .select('m1.f_name', 'm1.l_name', 'm1.id as _')
          .leftJoin('employees as m1', function () {
            this.on('m.manager', '=', 'm1.id')
          })
          .distinct('m1.id')
          .map(manager => ({
            _m: manager._m,
            full_name: obj.fullName(manager.f_name, manager.l_name)
          }))
        return { employees, managers }
      })
      .then(data => res.status(OK.code).json({ data, message: OK.message }))
      .catch(err => console.log(err))
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

  .delete((req, res) => {
    call.destroy('employees', req.params, res)
  })

module.exports = router

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
    // knex('applications as app')
    //   .select(
    //     'closing_date',
    //     'open_date',
    //     'priority',
    //     'p.title',
    //     'app.total_grade',
    //     'app.status',
    //     'a.f_name',
    //     'a.l_name',
    //     'app.id as _app',
    //     'e.f_name as upf',
    //     'e.l_name as upl',
    //     'app.updated_at'
    //   )
    //   .leftJoin('job_postings as jp', 'jp.id', 'app.job_posting')
    //   .leftJoin('applicants as a', 'a.id', 'app.applicant')
    //   .leftJoin('positions as p', 'p.id', 'jp.position')
    //   .leftJoin('employees as e', 'app.updated_by', 'e.id')
    //   .then(data => {
    //     let postings = {}

    //     data.map(app => {
    //       app.applicantFull = app.f_name + ' ' + app.l_name
    //       app.upFull = app.upf + ' ' + app.upl
    //       delete app.f_name
    //       delete app.l_name
    //       delete app.upf
    //       delete app.upl

    //       postings[app.title] = postings[app.title]
    //         ? [...postings[app.title], app]
    //         : [app]
    //       postings[app.title].total
    //     })
    call.all('job_postings', res).then(data =>
      res.status(OK.code).json({
        data: objs.convertToObject(data, obj.outJob),
        message: OK.message
      })
    )
  })
  .post((req, res) => {
    call.create('job_postings', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: data.map(item => obj.job(item)),
        message: CREATED.message
      })
    )
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('job_postings', req.params, res)
  })
  .put((req, res) => {
    call.update('job_postings', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('job_postings', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('job_postings', req.params, res)
  })

module.exports = router

const express = require('express')
const router = express.Router()
const call = require('./api/general_api')
const obj = require('./data_objects/objects')
const objs = require('./data_objects/objectServices')
const { OK, CREATED } = require('./api/status_codes')
const knex = require('../db/knex/knex')
knex('phone_evaluations').whereIn()
router
  .route('/')
  .get((req, res) => {
    knex('apps')
      // .select(
      //   'a.id',
      //   'a.job_posting',
      //   'a.applicant',
      //   'a.status',
      //   'a.updated_at',
      //   'a.updated_by',
      //   's.name as statusTitle',
      //   'a.created_at',
      //   'j.title'
      // )
      // .leftJoin('steps as s', 's.level', 'a.status')
      // .join('job_postings as j', 'j.id', 'a.job_posting')
      .then(async data => {
        let apps = objs.convertToObject(data)
        let qt = await knex('questions')
          .select('step as _')
          .sum('points as qt')
          .groupBy('_')
        qt = objs.convertToObject(qt)
        await objs.getEvaluations().then(res => {
          res.map(data => {
            data.map(i => {
              apps[i.application] = {
                ...apps[i.application],
                [i.step]: apps[i.application][i.step]
                  ? [...apps[i.application][i.step], i.qid]
                  : [i.qid],
                [i.name + '_rank']: apps[i.application][i.name + '_rank']
                  ? objs.calc(
                    apps[i.application][i.name + '_rank'],
                    i.provided_points,
                    i.qa,
                    qt[i.step].qt
                  )
                  : objs.calc(0, i.provided_points, i.qa, qt[i.step].qt)
              }
            })
          })
        })
        console.log(apps[1])

        res.status(OK.code).json({
          data: apps,
          message: OK.message
        })
      })
  })
  .post((req, res) => {
    call.create('applications', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: data.map(item => obj.application(item)),
        message: CREATED.message
      })
    )
  })
router
  .route('/:id')
  .get((req, res) => {
    call.get('applications', req.params, res)
  })
  .put((req, res) => {
    call.update('applications', req.body, req.params, res)
  })
  .patch((req, res) => {
    call.update('applications', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('applications', req.params, res)
  })

module.exports = router

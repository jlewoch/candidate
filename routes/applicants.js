const express = require('express')
const router = express.Router()
const call = require('./api/general_api')
const obj = require('./data_objects/objects')
const objs = require('./data_objects/objectServices')
const { OK, CREATED } = require('./api/status_codes')

router
  .route('/')
  .get((req, res) => {
    Promise.all([call.all('applicants'), call.all('applications')]).then(
      data => {
        let applicants = data[0].map(applicant => {
          applicant.applications = data[1]
            .filter(app => app.applicant === applicant.id)
            .map(i => i.id)
          return applicant
        })
        console.log(applicants)

        res.status(OK.code).json({
          data: objs.convertToObject(applicants, obj.applicant),
          message: OK.message
        })
      }
    )
  })
  .post((req, res) => {
    call.create('applicants', req.body, res).then(data =>
      res.status(CREATED.code).json({
        data: data.map(item => obj.applicant(item)),
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

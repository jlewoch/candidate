const express = require('express')
const router = express.Router()
const call = require('../service_helpers/general_api')

router.route('/resume').get((req, res) => {
  call.all('resume_evaluations')
})
router
  .route('/resume/:guid')
  .get((req, res) => {
    call.get('resume_evaluations', req.params, res)
  })
  .post((req, res) => {
    call.create(('resume_evaluations', body, res))
  })
  .put((req, res) => {
    call.update('resume_evaluations', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('resume_evaluations', req.params, res)
  })

router.route('/phone').get((req, res) => {
  call.all('phone_evaluations')
})
router
  .route('/phone/:guid')
  .get((req, res) => {
    call.get('phone_evaluations', req.params, res)
  })
  .post((req, res) => {
    call.create(('phone_evaluations', body, res))
  })
  .put((req, res) => {
    call.update('phone_evaluations', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('phone_evaluations', req.params, res)
  })

router.route('/interview').get((req, res) => {
  call.all('interview_evaluations')
})
router
  .route('/interview/:guid')
  .get((req, res) => {
    call.get('interview_evaluations', req.params, res)
  })
  .post((req, res) => {
    call.create(('interview_evaluations', body, res))
  })
  .put((req, res) => {
    call.update('interview_evaluations', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('interview_evaluations', req.params, res)
  })

router
  .route('/misc')
  .get((req, res) => {
    call.all('misc_evaluations')
  })
  .post((req, res) => {
    call.create(('misc_evaluations', body, res))
  })
router
  .route('/misc/:guid')
  .get((req, res) => {
    call.get('misc_evaluations', req.params, res)
  })

  .put((req, res) => {
    call.update('misc_evaluations', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('misc_evaluations', req.params, res)
  })

module.exports = router

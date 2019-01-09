const express = require('express')
const router = express.Router()

router.use('/applicants', require('./applicants'))
router.use('/applications', require('./applications'))
router.use('/job_postings', require('./job_postings'))

router.use('/questions', require('./questions'))
router.use(
  '/first_interview_evaluations',
  require('./first_interview_evaluations')
)
router.use('/phone_evaluations', require('./phone_evaluations'))
router.use(
  '/second_interview_evaluations',
  require('./second_interview_evaluations')
)
router.use('/resume_evaluations', require('./resume_evaluations'))
router.use('/section_evaluations', require('./section_evaluations'))
router.use('/steps', require('./steps'))

router.use('/departments', require('./departments'))
router.use('/employees', require('./employees'))
router.use('/positions', require('./positions'))
router.use('/account_levels', require('./account_levels'))
router.use('/accounts', require('./accounts'))

module.exports = router

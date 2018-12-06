const express = require('express')
const router = express.Router()

router.use('/applicants', require('./applicants'))
router.use('/applications', require('./applications'))
router.use('/jobs', require('./jobs'))

router.use('/questions', require('./questions'))
router.use('/first_interview', require('./first_interview_evaluations'))
router.use('/phone', require('./phone_evaluations'))
router.use('/second_interview', require('./second_interview_evaluations'))
router.use('/resume', require('./resume_evaluations'))
router.use('/section', require('./section_evaluations'))
router.use('/steps', require('./steps'))

router.use('/employees', require('./employees'))
router.use('/positions', require('./positions'))

router.use('/session', require('./session'))
router.use('/accounts', require('./accounts'))
router.use('/login', require('./login'))

module.exports = router

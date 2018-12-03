const express = require('express')
const router = express.Router()

router.use('/session', require('./session'))
router.use('/questions', require('./questions'))
router.use('/login', require('./login'))
router.use('/accounts', require('./accounts'))
router.use('/applicants', require('./applicants'))
router.use('/applications', require('./applications'))
router.use('/positions', require('./positions'))
router.use('/steps', require('./steps'))
router.use('/accounts', require('./accounts'))
router.use('/evaluations', require('./evaluations'))

module.exports = router

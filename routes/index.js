const express = require('express')
const router = express.Router()

// unauthenticated
router.use('/login', require('./login'))

// authenticated
router.use('/session', require('./session'))
router.use('/questions', require('./questions'))
router.use('/accounts', require('./accounts'))
router.use('/applicants', require('./applicants'))
router.use('/applications', require('./applications'))
router.use('/departments', require('./departments'))
router.use('/employees', require('./employees'))
router.use('/positions', require('./positions'))
router.use('/positings', require('./postings'))
router.use('/steps', require('./steps'))
router.use('/accounts', require('./accounts'))
router.use('/evaluations', require('./evaluations'))

module.exports = router

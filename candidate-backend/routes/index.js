const express = require('express')
const router = express.Router()

router.use('/db/session', require('./session'))
router.use('/db/questions', require('.'))
router.use('/db/login', require('./login'))
router.use('/db/accounts', require('./accounts'))
router.use('/db/applicants', require('./applicants'))
router.use('/db/applications', require('./applications'))
router.use('/db/positions', require('./positions'))
router.use('/db/steps', require('./steps'))
router.use('/db/accounts', require('./accounts'))

module.exports = router

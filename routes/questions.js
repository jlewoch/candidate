const express = require('express')
const router = express.Router()
const call = require('../service_helpers/api')

router
  .route('/')
  .get((req, res) => {})
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {})

module.exports = router

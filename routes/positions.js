const express = require('express')
const router = express.Router()
const call = require('../service_helpers/general_api')
const obj = require('../services/objects')

router
  .route('/')
  .get((req, res) => {
    call.all('positions').then(data => {
      res.status(200).json({
        data: data.map(item => obj.positions(item)),
        result: 'success'
      })
    })
  })
  .post((req, res) => {
    call.create(('positions', body, res))
  })
router
  .route('/:guid')
  .get((req, res) => {
    call.get('positions', req.params, res)
  })

  .put((req, res) => {
    call.update('positions', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('positions', req.params, res)
  })

module.exports = router

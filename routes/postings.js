router
  .route('/jobs')
  .get((req, res) => {
    call.all('jobs').then(data => {
      res.status(200).json({
        data: data.map(item => obj.jobs(item)),
        result: 'success'
      })
    })
  })
  .post((req, res) => {
    call.create(('jobs', body, res))
  })
router
  .route('/jobs/:guid')
  .get((req, res) => {
    call.get('jobs', req.params, res)
  })

  .put((req, res) => {
    call.update('jobs', req.body, req.params, res)
  })
  .delete((req, res) => {
    call.destroy('jobs', req.params, res)
  })

module.exports = router

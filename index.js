require('dotenv').config()
const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const jwt = require('jsonwebtoken')
const knex = require('./db/knex/knex')

const PORT = process.env.PORT || 8000
app.use(require('cors')())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'client/build')))

app.use((req, res, next) => {
  console.log(req.headers.authtoken)

  if (req.url === '/db/login') next()
  else {
    const sessionToken = req.headers.authtoken.split(' ')[0]

    if (sessionToken) {
      if (jwt.verify(sessionToken, process.env.KEY)) {
        req.token = jwt.decode(sessionToken)
        next()
      } else {
        res.sendStatus(401)
      }
    } else {
      res.sendStatus(400)
    }
  }
})

// app.use((req, res, next) => {
//   if (req.body.authtoken) next()
//   else {
//     res.json(jwt.sign({ user: 0 }, process.env.KEY))
//   }
// })
app.use('/db', require('./routes/index'))
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'))
// })
app.listen(PORT, () => console.log(`The server is up and listening on ${PORT}`))

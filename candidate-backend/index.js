require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 9000
const jwt = require('jsonwebtoken')
app.use(cors())
app.use(bodyParser.json())

// app.use((req, res, next) => {

//     if(req.url === '/db/login') next()
//     else {
//        const sessionToken = req.headers.authtoken.split(' ')[0]

//        if (sessionToken) {
//            if (jwt.verify(sessionToken, process.env.KEY)) {
//             req.token = jwt.decode(sessionToken)
//             next()
//            } else {
//             res.sendStatus(401)
//            }
//        } else {
//         res.sendStatus(400)
//        }
//     }
// })
<<<<<<< HEAD
const test = require('./services/database/accounts');
=======

app.use('/db', require('./routes/session'))
>>>>>>> c18083fd976e6a59c2fae9c0a866f94c0bf20f5d

app.listen(PORT, () => console.log(`The server is up and listening on ${PORT}`))

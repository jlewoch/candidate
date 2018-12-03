require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000
// const jwt = require('jsonwebtoken')
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

app.use('/db', require('./routes/index'))

app.listen(PORT, () => console.log(`The server is up and listening on ${PORT}`))

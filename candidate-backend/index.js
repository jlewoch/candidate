require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 9000;
const jwt = require('jsonwebtoken');
app.use(cors());
app.use(bodyParser.json());

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


app.use('/db/session', require('./routes/session'))
app.use('/db/questions', require('./routes/questions'))
app.use('/db/login', require('./routes/login'))
app.use('/db/accounts', require('./routes/accounts'))
app.use('/db/applicants', require('./routes/applicants'))
app.use('/db/applications', require('./routes/applications'))
app.use('/db/positions', require('./routes/positions'))
app.use('/db/steps', require('./routes/steps'))
app.use('/db/accounts', require('./routes/accounts'))

app.listen(PORT, () =>
  console.log(`The server is up and listening on ${PORT}`)
); 

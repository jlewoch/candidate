const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.route("/").post((req, res) => {
  const { username, password } = req.body;

  knex("Accounts as a")
    .select("employeeId", "password", 'fName','lName', 'accessLevel').leftJoin('Employees as e', function(){
      this.on('a.employeeId', '=', 'e.id')
    })
    .where({ username: username, locked: 0, active: 1 })
    .then(data => {      
      if (data.length === 0) {
      res.sendStatus(400)
    }
      
        if (bcrypt.compareSync(password, data[0].password)) {
          res.json({
            userInfo: {name: `${data[0].fName} ${data[0].lName}`, accessLevel: data[0].accessLevel},
            session: jwt.sign({ user: data[0].employeeId }, process.env.KEY)
          });
        } else {
          res.sendStatus(400)
        }

    })
    .catch(err => console.log(err));
});

module.exports = router;

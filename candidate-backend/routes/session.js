const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");

router.route("/").get((req, res) => {
  knex("Accounts as a")
    .select("fName", "lName", "accessLevel")
    .leftJoin("Employees as e", function() {
      this.on("a.employeeId", "=", "e.id");
    })
    .where({ employeeId: req.token.user, locked: 0, active: 1 })
    .then(data => {
      const userInfo = {
        fullName: `${data[0].fName} ${data[0].lName}`,
        accessLevel: data[0].accessLevel
      };
      res.json(userInfo);
    })
    .catch(err => console.log(err));
});

module.exports = router;

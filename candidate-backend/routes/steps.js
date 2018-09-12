const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");
const objects = require("../services/objects");
const dbServices = require("../services/databaseServices");
router.route("/").get((req, res) => {
  knex
    .select("name", "progressionLevel", "required", "type")
    .from("Steps")
    .where({ enabled: 1 })
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

router
  .route("/admin")
  .post((req, res) => {
    const { stepInfo} = req.body;
    const {employee} = req.token.user
    dbServices.insertStep(stepInfo,employee)
  })
  .put((req, res) => {
    const { updatedInfo, employee } = req.body;
    dbServices.updateStep(updatedInfo,employee);
  });

router
  .route("/evaluation/:applicationId/:stepId")
  .post((req, res) => {
    const {skipped } = req.body;
    const { applicationId, stepId } = req.params;
    dbServices.updateStepEvaluation(applicationId,stepId,  req.token.user, skipped).then(data => 
      dbServices.updateApplication(applicationId, req.token.user))
      .then(data=> {
      res.sendStatus(200)
    }).catch(err=>console.log(err)
    )
  })

module.exports = router;

const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");
const dbServices = require("../services/databaseServices");
const objects = require('../services/objects');
router
  .route("/")
  .get((req, res) => {
    knex
      .select("*")
      .from("Questions")
      .then(data => res.json(data))
      .catch(err => console.log(err));
  })
  .post((req, res) => {
    const { questionObj } = req.body;
    const date = new Date();
    const temp = objects.createQuestion(questionObj, date, req.token.user);
    knex("Questions")
      .insert(temp)
      .catch(err => console.log(err));
  })
  .put((req, res) => {
    req.body.updatedAt = new Date();
    req.body.modifiedBy = req.token.user;
    const temp = req.body;
    knex("Questions")
      .where({ id: req.body.id })
      .update(temp)
      .catch(err => console.log(err));
  }).delete((req, res) => {
    knex("Questions")
      .where({ id: req.body.id })
      .del()
      .catch(err => console.log(err));
  })

router.route("/list/:applicationId/:stepId").get((req, res) => {
  const { applicationId, stepId } = req.params;
  dbServices
    .allQuestionInfo(stepId, applicationId)
    .then(data => res.json(data));
});

router.route("/evaluation/:applicationId/:stepId").post((req, res) => {
  const { updatedInfo } = req.body;
  const { applicationId, stepId } = req.params;
  dbServices
    .insertUpadateQuestionEvaluations(
      updatedInfo,
      stepId,
      applicationId,
      req.token.user
    )
    .then(data =>
      dbServices.updateStepEvaluation(
        applicationId,
        stepId,
        req.token.user,
        req.body.skipped
      )
    )
    .then(data => dbServices.updateApplication(applicationId, req.token.user))
    .then(data => res.sendStatus(200))
    .catch(err => console.log(err));
});

module.exports = router;
// .then(data=> dbServices.updateApplication(applicationId,req.token.user))

const express = require("express");
const router = express.Router();
const knex = require('../knex/knex.js');
const dbServices = require('../services/databaseServices');


router.route('/').post((req,res)=>{
    const {applicant} = req.body
dbServices.insertApplicant(applicant);
})

module.exports = router;
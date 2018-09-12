const express = require("express");
const router = express.Router();
const knex = require("../knex/knex.js");
const dbServices = require('../services/databaseServices');
router
  .route("/list/:positionId").get((req, res)=>{
    knex('Applications as a').select('status', 'currentStep' , 'a.id as appId', 'fName','lName', 'a.createdAt as created', 'a.updatedAt as updated','positionId').leftJoin('Employees', function(){
      this.on('a.modifiedBy', '=','Employees.id')
    }).where({positionId:req.params.positionId}).then(data=> res.json(data)).catch(err=>console.log(err))
})
router
  .route("/fullList/:positionId").get((req, res)=>{
    dbServices.getAllApplicationInfo(req.params.positionId).then(data=> res.json(data)).catch(err=>console.log(err))
})
router.route('/apply/:positionId').post((req,res)=>{
  const {applicantId} = req.body
  const {positionId} = req.params
dbServices.insertApplication(applicantId,positionId)
})
router.route('/one/:applicationId').get((req,res)=>{

  knex.select('*').from('Applications').where({id:req.params.applicationId}).then(data=>res.json(data[0]))
})


module.exports = router;

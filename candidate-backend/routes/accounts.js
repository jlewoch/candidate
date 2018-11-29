<<<<<<< HEAD
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const accountDbSrv = require('../services/database/accounts');
router
.route('/')
.post((req,res)=>{
    accountDbSrv.insertAccount(req.account_info, req.token.user).then(data=> res.json(data)).catch(err=> res.json({inserted:false}))
})
.get((req,res)=>{
    accountDbSrv.getAccounts().then(data=>res.json(data)).catch(err=>res.json({got_list: false}))
})
.put((req,res)=>{
    accountDbSrv.removeAccount(req.account_id, req.token.user).then(data=>res.json(data)).catch(err=>res.json({updated:false}))
})
.delete((req,res)=>{
    console.log(req.body.account_id);
    
accountDbSrv.removeAccount(req.body.account_id).then(data=>res.json(data)).catch(err=>res.json({removed: false}))
})
//     .post((req,res)=>{
//    const temp = objects.createEmployee(req.body,new Date(), req.token.user)
//     knex('Employees').insert(temp).returning('*').then(data=> {
//         req.body.employeeId = data[0];
//        const temp = objects.createAccount(req.body,new Date(),req.token.user);

//         knex('Accounts').insert(temp).then(data=> res.sendStatus(200)).catch(err=>console.log(err))
//     }).catch(err=>console.log(err))})
//     .put((req,res)=>{
//         const { username, updatedInfo} = req.body
//         const {employee} = req.token.user
//         const date = new Date();
//         let temp = updatedInfo
//         temp.updatedAt = date.toLocaleString()
//         temp.modifiedBy = employee
//             knex('Accounts').where({employeeId: employee, username: username}).update(temp).then(data=> res.status(200)).catch(err=>console.log(err))
//         })

=======
const express = require('express')
const router = express.Router()
const call = require('../service_helpers/general_call_functions')
router
  .route('/')
  .get((req, res) => {})
  .post((req, res) => {})
  .put((req, res) => {})
  .delete((req, res) => {})
>>>>>>> c18083fd976e6a59c2fae9c0a866f94c0bf20f5d

module.exports = router

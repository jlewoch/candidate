const express = require("express");
const router = express.Router();
const knex = require('../knex/knex.js');
const objects = require('../services/objects');
const bcrypt = require('bcrypt');

router
.route('/').get((req,res)=>{
    knex.select('*').from('Accounts').then(data=>res.json(data)).catch(err=>res.json(err))
})
    .post((req,res)=>{
   const temp = objects.createEmployee(req.body,new Date(), req.token.user)
    knex('Employees').insert(temp).returning('*').then(data=> {
        req.body.employeeId = data[0];
       const temp = objects.createAccount(req.body,new Date(),req.token.user);

        knex('Accounts').insert(temp).then(data=> res.sendStatus(200)).catch(err=>console.log(err))
    }).catch(err=>console.log(err))})
    .put((req,res)=>{
        const { username, updatedInfo} = req.body
        const {employee} = req.token.user
        const date = new Date();
        let temp = updatedInfo
        temp.updatedAt = date.toLocaleString()
        temp.modifiedBy = employee
            knex('Accounts').where({employeeId: employee, username: username}).update(temp).then(data=> res.status(200)).catch(err=>console.log(err))
        })


module.exports = router;

const express = require("express");
const router = express.Router();
const knex = require('../knex/knex.js');
const objects = require('../services/objects');
router.route('/admin').get((req, res)=>{
    knex.select('*').from('Positions').where().then(data=> res.json(data)).catch(err=>console.log(err))
}).put((req,res)=>{
    const {positionId, updatedInfo} = req.body
    const {employee} = req.token.user
    const date = new Date();
    let temp = updatedInfo
    temp.updatedAt = date.toLocaleString()
    temp.modifiedBy = employee
        knex('Positions').where({id: positionId}).update(temp).then(data=> res.status(200)).catch(err=>console.log(err))
    }).post((req,res)=>{
    const {positionObj, employee} = req.body
        const date = new Date()
        let temp = objects.createPosition(positionObj,date,employee)
        knex('QuestionEvaluations').insert(temp).then(data=> res.status(200)).catch(err=>console.log(err))
    })

router.route('/').get((req, res)=>{
    knex('Positions').select('id', 'title','openingDate','closingDate', 'priority').where({resolved: 0}).then(data=>res.json(data)).catch(err=>console.log(err))

})

module.exports = router;

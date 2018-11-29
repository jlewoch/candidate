const knex = require("../../knex/knex.js");
const Obj = require('../objects');

async function insertStep (req, res, data){

    return await knex('Steps').insert(data).returning(obj)
}

async function updateStep (){
    
}

async function getSteps (){
    
}

async function removeStep (){
    
}

module.exports = {
    insertStep,
    updateStep,
    getSteps,
    removeStep
}
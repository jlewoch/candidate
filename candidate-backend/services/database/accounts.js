const knex = require("../../knex/knex.js");
const obj = require('../objects');

async function insertAccount (userData, creator){
    const temp = obj.account(userData, creator)
  return await  knex('Accounts').insert(temp).return({inserted:true})
}


async function updateAccount (updated_info){
    return await knex('Accounts').where({'account_id': undated_info.id}).update(updated_info).return({updated:true})
}

async function getAccounts (){
    return await knex.select('*').from('Accounts')
}

async function removeAccount (id){
  return await  knex('Accounts').where({'account_id': id}).del().return({removed:true})    
}

module.exports = {
    insertAccount,
    updateAccount,
    getAccounts,
    removeAccount
}
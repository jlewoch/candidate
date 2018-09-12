const knex = require('../knex/knex.js');


function getPercent(data){
 
    return data.filter(element => element.providedGrade && element.weight)
    .reduce((previous,next)=> previous 
    + parseFloat(evaluateScore(next.providedGrade,next.points,next.weight))
    ,0)

}
    
function totalProvidedPoints(data){
    return data.reduce((prev, next)=> prev + next.providedGrade ,0)
 }

function evaluateScore(providedPoints, availablePoints, weight){ 
 return (((providedPoints / availablePoints) * (weight / 100))* 100).toFixed(1)
}

function totalAvailablePoints(data){
    return data.reduce((prev, next)=> prev + next.points ,0)
 }

function lockout(attepts, maxAllowed){
    if (attepts > maxAllowed) {
        locked:true
    }
}



// knex.select().from('applicants')
// knex.select().from('applications')
// knex.select().from('documents')
// knex.select().from('employees')
// knex.select().from('positions')
// knex.select().from('questions')
// knex.select().from('questionevaluations')
// knex.select().from('steps')
// knex.select().from('stepevaluations')

module.exports = {
    totalAvailablePoints,
    getPercent,
    totalProvidedPoints
}


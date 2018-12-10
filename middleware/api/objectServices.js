const knex = require('../../db/knex/knex.js')
function error (err) {
  console.error(err)
}

function getPercent (data) {
  return data
    .filter(element => element.providedGrade && element.weight)
    .reduce(
      (previous, next) =>
        previous +
        parseFloat(evaluateScore(next.providedGrade, next.points, next.weight)),
      0
    )
}

function weightLeft (step) {
  return knex
    .select('weight')
    .from('questions')
    .where({ step })
    .then(item => item.reduce((prev, next) => prev - next.weight, 100))
    .catch(error)
}
async function getGrade (application, table, step) {
  let x = await knex
    .select('points_provided', 'step')
    .from('questions')
    .leftJoin(table, function () {
      this.on(`${table}.question`, 'questions.id').andOnIn(
        `${table}.application`,
        application
      )
    })
    .where({ step })
    .then(item =>
      item.reduce(
        (prev, next) =>
          next.points_provided > -1 && prev + next.points_provided,
        0
      )
    )
    .catch(error)

  console.log(x)
}
function totalProvidedPoints (data) {
  return data.reduce((prev, next) => prev + next.providedGrade, 0)
}

function evaluateApplicationGrade (providedPoints, availablePoints, weight) {
  return ((providedPoints / availablePoints) * (weight / 100) * 100).toFixed(1)
}

function totalAvailablePoints (data) {
  return data.reduce((prev, next) => prev + next.points, 0)
}

function sectionTotalGrade () {}
function lockAccount (attepts, maxAllowed) {
  if (attepts >= maxAllowed) {
    locked: true
  }
}

module.exports = {
  getGrade,
  weightLeft
}

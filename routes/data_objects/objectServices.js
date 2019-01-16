const knex = require('../../db/knex/knex')

const convertToObject = data => {
  let temp = {}
  for (let i = 0; i < data.length; i++) {
    const element = data[i]
    temp[element._] = element
  }
  return temp
}
const formatPhoneNumber = phone => {
  if (phone.length === 10) {
    let temp = phone.match(/^(\d{3})(\d{3})(\d{4})$/)
    return '1 ' + '(' + temp[1] + ') ' + temp[2] + '-' + temp[3]
  } else {
    return phone
  }
}
const fullName = (fname, lname) => {
  return fname + ' ' + lname
}

const formatToDate = date => new Date(date).toLocaleDateString('en-us')

const formatToTime = date => new Date(date).toLocaleTimeString('en-us')
const calcRank = (data, title) => {
  return {
    [title]: ((data.provided / data.total) * 10).toFixed(1)
  }
}

const getEvaluations = () => {
  return Promise.all([
    singleEvaluation('resume_evaluations'),
    singleEvaluation('phone_evaluations'),
    singleEvaluation('first_interview_evaluations'),
    singleEvaluation('second_interview_evaluations')
  ])
}

const singleEvaluation = table => {
  return knex(table)
    .select(
      `${table}.application`,
      `${table}.provided_points`,
      'q.step',
      's.points as sa',
      `q.points as qa`,
      'q.id as qid',
      's.name'
    )
    .leftJoin('questions as q', 'q.id', `${table}.question`)
    .leftJoin('steps as s', 's.level', 'q.step')
}
const calc = (initial, nextProvided, questionPoints, nextTotal) => {
  let x =
    parseFloat(initial) +
    parseFloat(nextProvided) *
      (parseFloat(questionPoints) / parseFloat(nextTotal))
  return x.toFixed(1)
}
module.exports = {
  convertToObject,
  formatPhoneNumber,
  fullName,
  formatToDate,
  formatToTime,
  getEvaluations,
  singleEvaluation,
  calc
}

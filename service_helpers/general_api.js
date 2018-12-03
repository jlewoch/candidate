const knex = require('../db/knex/knex')

const all = (table, res) => {
  return knex(table)
    .select('*')
    .catch(err => res.status(400).json(err))
}

const get = (table, params, res) => {
  return knex(table)
    .select('*')
    .where({ guid: params.guid })
    .catch(err => res.status(400).json(err))
}
const update = (table, body, params, res) => {
  knex(table)
    .update(body)
    .where({ guid: params.guid })
    .then(res.status(200).json({ result: 'success' }))
    .catch(err => res.status(400).json(err))
}
const create = (table, body, res) => {
  knex(table)
    .insert(body)
    .returning('guid')
    .then(data => res.status(201).json({ data, result: 'success' }))
    .catch(err => res.status(400).json(err))
}
const destroy = (table, params, res) => {
  knex(table)
    .where({ guid: params.guid })
    .del()
    .then(res.status(200).json({ result: 'success' }))
    .catch(res.status(400).json)
}
module.exports = {
  all,
  create,
  get,
  update,
  destroy
}

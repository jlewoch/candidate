const knex = require('../db/knex/knex')

const all = (table, body, params) => {
  knex(table)
    .select('*')
    .then(async data => {
      res.status(200).json({ data, result: 'success' })
    })
    .catch(err => res.status(400).json(err))
}

const get = () => {
  knex(table)
    .select('*')
    .where({ id: params.id })
    .then(async data => {
      res.status(200).json({ data, result: 'success' })
    })
    .catch(err => res.status(400).json(err))
}
const update = () => {
  knex(table)
    .update(body)
    .where({ id: params.id })
    .then(res.status(200).json({ result: 'success' }))
    .catch(err => res.status(400).json(err))
}
const create = () => {
  knex(table)
    .insert(body)
    .returning('id')
    .then(data => res.status(201).json({ data, result: 'success' }))
    .catch(err => res.status(400).json(err))
}
const destroy = () => {
  knex(table)
    .where({ id: params.id })
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

const knex = require('../../db/knex/knex')
const { OK, BAD_REQUEST } = require('./status_codes')

const all = (table, res) => {
  return knex(table)
    .select('*')
    .catch(error =>
      res.status(BAD_REQUEST.code).json({ error, message: BAD_REQUEST.message })
    )
}

const get = async (table, params, res) => {
  return await knex(table)
    .select('*')
    .where({ id: params.id })
    .catch(error =>
      res.status(BAD_REQUEST.code).json({ error, message: BAD_REQUEST.message })
    )
}

const update = (table, body, params, res) => {
  knex(table)
    .update(body)
    .where({ id: params.id })
    .then(data => res.status(OK.code).json({ data: data, message: OK.message }))
    .catch(error =>
      res.status(BAD_REQUEST.code).json({ error, message: BAD_REQUEST.message })
    )
}

const create = async (table, body, res) => {
  return await knex(table)
    .returning('*')
    .insert(body)
    .catch(error =>
      res.status(BAD_REQUEST.code).json({ error, message: BAD_REQUEST.message })
    )
}

const destroy = async (table, params, res) => {
  await knex(table)
    .where({ id: params.id })
    .del()
    .then(data => res.status(OK.code).json({ message: OK.message }))
    .catch(error =>
      res.status(BAD_REQUEST.code).json({ error, message: BAD_REQUEST.message })
    )
}

module.exports = {
  all,
  create,
  get,
  update,
  destroy
}

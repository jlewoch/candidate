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

const update = async (table, body, params, res, token) => {
  return await knex(table)
    .returning('*')
    .update({ ...body, updated_by: token.user })
    .where({ id: params.id })
    .catch(error =>
      res.status(BAD_REQUEST.code).json({ error, message: BAD_REQUEST.message })
    )
}

const create = (table, body, res, token) => {
  return knex(table)
    .returning('*')
    .insert({
      ...body,
      created_by: token.user,
      updated_by: token.user
    })
    .catch(error =>
      res.status(BAD_REQUEST.code).json({ error, message: BAD_REQUEST.message })
    )
}

const destroy = async (table, params, res) => {
  await knex(table)
    .where({ id: params.id })
    .del()
    .then(data =>
      res.status(OK.code).json({ data: { _: params.id }, message: OK.message })
    )
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

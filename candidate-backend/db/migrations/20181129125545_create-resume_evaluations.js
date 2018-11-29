const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('resume_evaluations', table => {
    table
      .increments('id')
      .unsigned()
      .primary()
    table.integer('application_id').notNull()
    table
      .integer('points_provided')
      .notNull()
      .defaultTo(0)

    table.integer('last_updated_by').notNull()
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(new Date().toUTCString())
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('resume_evaluations')
}

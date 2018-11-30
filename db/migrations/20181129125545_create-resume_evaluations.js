const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('resume_evaluations', table => {
    table
      .increments('id')
      .unsigned()
      .primary()
    table.integer('application_id').notNull()

    table.string('notes').notNull()

    table
      .integer('points_provided')
      .notNull()
      .defaultTo(0)
    table.integer('question').notNull()

    table.integer('updated_by').notNull()
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(new Date.toUTCString())
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('resume_evaluations')
}

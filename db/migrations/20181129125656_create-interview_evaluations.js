const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('interview_evaluations', table => {
    table
      .increments('id')
      .unsigned()
      .primary()
    table.integer('application_id').notNull()
    table
      .integer('points_provided')
      .notNull()
      .defaultTo(0)

    table.string('notes').notNull()

    table.integer('updated_by').notNull()
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.fn.now())
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('interview_evaluations')
}

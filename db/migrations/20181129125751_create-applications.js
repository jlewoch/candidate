const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('applications', table => {
    table
      .increments('id')
      .unsigned()
      .primary()
    table.integer('applicant_id').notNull()
    table.integer('status').notNull()
    table.integer('position').notNull()
    table
      .boolean('enabled')
      .notNull()
      .defaultTo(true)
    table
      .integer('assigned_to')
      .notNull()
      .defaultTo(null)
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
  await knex.schema.dropTableIfExists('applications')
}

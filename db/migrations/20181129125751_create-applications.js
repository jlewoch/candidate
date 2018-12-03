const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('applications', table => {
    table
      .uuid('guid')
      .unsigned()
      .primary()
    table.uuid('applicant').notNull()
    table.integer('status').notNull()
    table.uuid('position').notNull()
    table
      .boolean('enabled')
      .notNull()
      .defaultTo(true)

    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.fn.now())
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.fn.now())
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('applications')
}

const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('resume_evaluations', table => {
    table
      .uuid('guid')
      .unsigned()
      .primary()
    table.uuid('application').notNull()

    table.string('notes').notNull()

    table
      .integer('points_provided')
      .notNull()
      .defaultTo(0)
    table.uuid('question').notNull()

    table.uuid('updated_by').notNull()
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
  await knex.schema.dropTableIfExists('resume_evaluations')
}

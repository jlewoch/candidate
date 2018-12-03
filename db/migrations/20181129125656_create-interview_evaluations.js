const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('interview_evaluations', table => {
    table
      .uuid('guid')
      .unsigned()
      .primary()
    table.uuid('application').notNull()
    table
      .integer('points_provided')
      .notNull()
      .defaultTo(0)

    table.string('notes').notNull()
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
  await knex.schema.dropTableIfExists('interview_evaluations')
}

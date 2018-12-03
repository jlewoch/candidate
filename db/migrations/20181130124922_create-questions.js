const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('questions', table => {
    table
      .uuid('guid')
      .unsigned()
      .primary()

    table.string('question').notNull()
    table
      .integer('weight')
      .notNull()
      .defaultTo(0)
    table.uuid('updated_by').notNull()
    table.uuid('created_by').notNull()
    table.uuid('step').notNull()

    table
      .boolean('active')
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
  await knex.schema.dropTableIfExists('questions')
}

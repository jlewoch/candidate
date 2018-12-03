const knex = require('../knex/knex')

exports.up = async () => {
  await knex.schema.createTable('positions', table => {
    table
      .uuid('guid')
      .unsigned()
      .primary()
    table.string('title').notNull()
    table
      .integer('openings')
      .notNull()
      .defaultTo(1)

    table
      .integer('priority')
      .notNull()
      .defaultTo(1)
    table.uuid('assigned_to')
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.fn.now())
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.fn.now())
    table
      .timestamp('open_date')
      .notNull()
      .defaultTo(knex.fn.now())
    table
      .timestamp('close_date')
      .notNull()
      .defaultTo(knex.fn.now())
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('positions')
}

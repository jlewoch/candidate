const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('departments', table => {
    table
      .uuid('guid')
      .unsigned()
      .primary()

    table.string('name').notNull()
    table.uuid('updated_by').notNull()
    table.uuid('created_by').notNull()
    table
      .boolean('required')
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
  await knex.schema.dropTableIfExists('departments')
}

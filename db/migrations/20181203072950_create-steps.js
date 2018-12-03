const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('steps', table => {
    table
      .uuid('guid')
      .unsigned()
      .primary()

    table.string('description').notNull()
    table
      .integer('weight')
      .notNull()
      .defaultTo(0)
    table.uuid('updated_by').notNull()
    table.uuid('created_by').notNull()
    table
      .boolean('required')
      .notNull()
      .defaultTo(true)
    table.integer('level').notNull()

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
  await knex.schema.dropTableIfExists('steps')
}

const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('account_levels', table => {
    table
      .uuid('guid')
      .unsigned()
      .primary()
    table.string('description').notNull()
    table.integer('level').notNull()
    table.uuid('updated_by').notNull()

    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.fn.now())
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.fn.now())
    table.unique(['level'])
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('account_levels')
}

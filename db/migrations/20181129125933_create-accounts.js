const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('accounts', table => {
    table
      .uuid('guid')
      .unsigned()
      .primary()
    table.string('username').notNull()
    table.string('password').notNull()
    table
      .boolean('enabled')
      .notNull()
      .defaultTo(true)

    table.uuid('access_level').notNull()
    table.uuid('updated_by').notNull()

    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.fn.now())
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.fn.now())

    table.unique(['password'])
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('accounts')
}

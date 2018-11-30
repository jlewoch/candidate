const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('account_level', table => {
    table
      .increments('id')
      .unsigned()
      .primary()
    table.string('description').notNull()
    table.integer('access_level').notNull()
    table
      .integer('updated_by')
      .notNull()
      .defaultTo(0)

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
  await knex.schema.dropTableIfExists('account_level')
}

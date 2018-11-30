const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('account', table => {
    table
      .increments('id')
      .unsigned()
      .primary()
    table.string('username').notNull()
    table.string('password').notNull()
    table
      .boolean('enabled')
      .notNull()
      .defaultTo(true)

    table
      .integer('access_level')
      .notNull()
      .defaultTo(0)
    table
      .integer('updated_by')
      .notNull()
      .defaultTo(0)

    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(new Date.toUTCString())
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))

    table.unique(['password'])
    table
      .timestamps('updated_at')
      .notNull()
      .defaultTo(new Date().toUTCString())
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('account')
}

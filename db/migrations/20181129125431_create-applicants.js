const knex = require('../knex/knex')

exports.up = async () => {
  await knex.schema.createTable('applicants', table => {
    table
      .increments('id')
      .unsigned()
      .primary()
    table.string('name').notNull()

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
  await knex.schema.dropTableIfExists('applicants')
}

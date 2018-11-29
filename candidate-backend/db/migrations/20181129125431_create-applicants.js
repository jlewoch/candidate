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
      .defaultTo(new Date().toUTCString())
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('applicants')
}

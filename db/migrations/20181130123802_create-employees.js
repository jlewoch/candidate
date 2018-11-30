const knex = require('../db/knex/knex')
exports.up = async () => {
  await knex.schema.createTable('employee', table => {
    table
      .increments('id')
      .unsigned()
      .primary()
    table.string('f_name').notNull()
    table.string('l_name').notNull()
    table.integer('phone')
    table.string('email')
    table.integer('department').notNull()
    table.integer('manager').notNull()
    table
      .integer('updated_by')
      .notNull()
      .defaultTo(0)
    table
      .boolean('active')
      .notNull()
      .defaultTo(true)
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(new Date.toUTCString())
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
    table.unique(['email', 'phone'])
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('employee')
}

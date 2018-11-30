const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('questions', table => {
    table
      .increments('id')
      .unsigned()
      .primary()
    table.string('question').notNull()
    table
      .integer('weight')
      .notNull()
      .defaultTo(0)
    table.integer('updated_by').notNull()
    table.integer('created_by').notNull()
    table.integer('step').notNull()

    table
      .boolean('active')
      .notNull()
      .defaultTo(true)
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
  await knex.schema.dropTableIfExists('questions')
}

const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('employees', table => {
    table
      .uuid('guid')
      .unsigned()
      .primary()
    table.string('f_name').notNull()
    table.string('l_name').notNull()
    table.string('phone')
    table.string('email')
    table.integer('department').notNull()
    table.uuid('manager').notNull()
    table.uuid('updated_by').notNull()
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
      .defaultTo(knex.fn.now())
    table.unique(['email', 'phone'])
  })
}

exports.down = async () => {
  await knex.schema.dropTableIfExists('employees')
}

const knex = require('../knex/knex')
exports.up = async () => {
  await knex.schema.createTable('employees', table => {
    table
      .uuid('guid')
      .unsigned()
      .primary()
    table.string('f_name').notNull()
    table.string('l_name').notNull()
    table.integer('phone').defaultTo(9999999999)
    table.string('email').notNull()
    table.uuid('department').notNull()
    table.uuid('account').notNull()
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

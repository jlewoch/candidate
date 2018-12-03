const knex = require('../knex/knex')

exports.up = async () => {
  await knex.schema.createTable('applicants', table => {
    table
      .uuid('guid')
      .unsigned()
      .primary()
    table.string('f_name').notNull()
    table.string('l_name').notNull()
    table.string('email').notNull()
    table.string('phone').notNull()

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
  await knex.schema.dropTableIfExists('applicants')
}

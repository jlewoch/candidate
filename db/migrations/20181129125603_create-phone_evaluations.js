exports.up = async knex => {
  await knex.schema.createTable('phone_evaluations', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()

    table.string('notes')

    table
      .integer('provided_points')
      .notNull()
      .defaultTo(0)
    table.bigInteger('application').notNull()
    table.bigInteger('question').notNull()
    table.bigInteger('updated_by').notNull()
    table.bigInteger('created_by').notNull()
    table
      .timestamp('created_at')
      .notNull()
      .defaultTo(knex.fn.now())
    table
      .timestamp('updated_at')
      .notNull()
      .defaultTo(knex.fn.now())
  })
}

exports.down = async knex => {
  await knex.schema.dropTableIfExists('phone_evaluations')
}

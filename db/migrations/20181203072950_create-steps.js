exports.up = async knex => {
  await knex.schema.createTable('steps', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()
    table
      .string('name')
      .notNull()
      .unique()
    table
      .integer('points')
      .notNull()
      .defaultTo(0)
    table
      .boolean('enabled')
      .notNull()
      .defaultTo(true)

    table.integer('level').notNull()
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
  await knex.schema.dropTableIfExists('steps')
}

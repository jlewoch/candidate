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
      .integer('weight')
      .notNull()
      .defaultTo(0)
    table
      .boolean('enabled')
      .notNull()
      .defaultTo(true)
    table
      .boolean('required')
      .notNull()
      .defaultTo(true)
    table
      .integer('level')
      .notNull()
      .unique()
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

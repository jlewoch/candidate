exports.up = async knex => {
  await knex.schema.createTable('questions', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()

    table
      .string('question')
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
    table.bigInteger('step').notNull()
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
  await knex.schema.dropTableIfExists('questions')
}

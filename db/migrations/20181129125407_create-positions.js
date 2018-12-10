exports.up = async knex => {
  return knex.schema.createTable('positions', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()
    table.string('title').notNull()
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
  await knex.schema.dropTableIfExists('positions')
}

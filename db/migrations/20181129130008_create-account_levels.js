exports.up = async knex => {
  await knex.schema.createTable('account_levels', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()
    table
      .string('description')
      .notNull()
      .unique()
    table
      .integer('level')
      .notNull()
      .unique()
      .defaultTo(0)
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
  await knex.schema.dropTableIfExists('account_levels')
}

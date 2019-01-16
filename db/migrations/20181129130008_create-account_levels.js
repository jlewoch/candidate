exports.up = async knex => {
  await knex.schema.createTable('account_levels', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()
    table
      .string('name')
      .notNull()
      .unique()
    table
      .string('description')
      .notNull()
      .defaultTo('N/A')
    table
      .integer('level')
      .notNull()
      .unique()
      .defaultTo(0)
    table.bigInteger('updated_by').notNull()
    table.bigInteger('created_by').notNull()
    table
      .datetime('created_at')
      .notNull()
      .defaultTo(knex.fn.now())
    table
      .datetime('updated_at')
      .notNull()
      .defaultTo(knex.fn.now())
  })
}

exports.down = async knex => {
  await knex.schema.dropTableIfExists('account_levels')
}

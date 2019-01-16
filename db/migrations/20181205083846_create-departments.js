exports.up = async knex => {
  await knex.schema.createTable('departments', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()
    table.string('name').notNull()
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
  await knex.schema.dropTableIfExists('departments')
}

exports.up = async knex => {
  await knex.schema.createTable('employees', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()
    table.string('f_name').notNull()
    table.string('l_name').notNull()
    table
      .bigInteger('phone')
      .notNull()
      .defaultTo(9999999999)
    table
      .string('email')
      .notNull()
      .unique()

    table
      .boolean('enabled')
      .notNull()
      .defaultTo(true)
    table.bigInteger('account').notNull()
    table.bigInteger('department').notNull()
    table.bigInteger('manager').notNull()
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
  await knex.schema.dropTableIfExists('employees')
}

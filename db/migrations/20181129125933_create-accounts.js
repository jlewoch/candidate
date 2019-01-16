exports.up = async knex => {
  await knex.schema.createTable('accounts', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()
    table
      .string('username')
      .notNull()
      .unique()
    table.string('password').notNull()
    table
      .boolean('enabled')
      .notNull()
      .defaultTo(true)
    table
      .boolean('locked')
      .notNull()
      .defaultTo(false)
    table
      .integer('login_attempts')
      .notNull()
      .defaultTo(0)
    table.bigInteger('account_level').notNull()
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
  await knex.schema.dropTableIfExists('accounts')
}

exports.up = async knex => {
  return knex.schema.createTable('applicants', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()
    table.string('f_name').notNull()
    table.string('l_name').notNull()
    table
      .string('email')
      .unique()
      .notNull()
    table.bigInteger('phone').notNull()
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
  await knex.schema.dropTableIfExists('applicants')
}

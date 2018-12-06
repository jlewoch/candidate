exports.up = async knex => {
  await knex.schema.createTable('section_evaluations', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()
    table
      .integer('total_grade')
      .notNull()
      .defaultTo(0)
    table
      .boolean('skipped')
      .notNull()
      .defaultTo(false)
    table.bigInteger('step').notNull()
    table.bigInteger('application').notNull()
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
  await knex.schema.dropTableIfExists('section_evaluations')
}

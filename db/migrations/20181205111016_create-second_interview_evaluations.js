exports.up = async knex => {
  await knex.schema.createTable('second_interview_evaluations', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()

    table
      .integer('provided_points')
      .notNull()
      .defaultTo(0)

    table.string('notes')
    table.bigInteger('application').notNull()
    table.bigInteger('question').notNull()
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
  await knex.schema.dropTableIfExists('second_interview_evaluations')
}

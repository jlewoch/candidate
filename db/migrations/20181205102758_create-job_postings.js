exports.up = async knex => {
  await knex.schema.createTable('job_postings', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()
    table.string('title').notNull()

    table
      .integer('openings')
      .notNull()
      .defaultTo(1)

    table
      .integer('priority')
      .notNull()
      .defaultTo(1)
    table.bigInteger('assigned_to').notNull()
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
    table
      .timestamp('open_date')
      .notNull()
      .defaultTo(knex.fn.now())
    table
      .timestamp('closing_date')
      .notNull()
      .defaultTo(knex.fn.now())
  })
}

exports.down = async knex => {
  await knex.schema.dropTableIfExists('job_postings')
}

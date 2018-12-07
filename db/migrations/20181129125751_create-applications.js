exports.up = async knex => {
  await knex.schema.createTable('applications', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()

    table.integer('status').notNull()

    table
      .float('total_grade')
      .notNull()
      .defaultTo(0)
    table.bigInteger('applicant').notNull()
    table.bigInteger('job_posting').notNull()
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
  await knex.schema.dropTableIfExists('applications')
}

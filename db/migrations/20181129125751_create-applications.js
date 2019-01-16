exports.up = async knex => {
  await knex.schema.createTable('applications', table => {
    table
      .bigIncrements('id')
      .unsigned()
      .primary()

    table
      .integer('status')
      .notNull()
      .defaultTo(0)

    table
      .float('total_grade')
      .notNull()
      .defaultTo(0)
    table.bigInteger('applicant').notNull()
    table.bigInteger('job_posting').notNull()
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
  await knex.schema.dropTableIfExists('applications')
}

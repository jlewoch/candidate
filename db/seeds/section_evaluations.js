exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('section_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('section_evaluations').insert([
        {
          total_grade: 22,
          skipped: false,
          step: 0,
          application: 0,
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}

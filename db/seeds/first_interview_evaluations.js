exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('first_interview_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('first_interview_evaluations').insert([
        {
          notes: 'Sandoval',
          updated_by: 0,
          question: 0,
          application: 0,
          points_provided: 4,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Kemp',
          updated_by: 0,
          question: 4,
          application: 0,
          points_provided: 6,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Morrison',
          updated_by: 0,
          question: 5,
          application: 0,
          points_provided: 8,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Gonzalez',
          updated_by: 0,
          question: 1,
          application: 0,
          points_provided: 6,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Fox',
          updated_by: 0,
          question: 2,
          application: 0,
          points_provided: 2,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Reid',
          updated_by: 0,
          question: 3,
          application: 0,
          points_provided: 8,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Reid',
          updated_by: 0,
          question: 3,
          application: 1,
          points_provided: 8,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Reid',
          updated_by: 0,
          question: 3,
          application: 2,
          points_provided: 8,
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}

exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('first_interview_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('first_interview_evaluations').insert([
        {
          notes: 'Sandoval',
          question: 0,
          application: 0,
          points_provided: 4,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Kemp',
          question: 4,
          application: 0,
          points_provided: 6,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Morrison',
          question: 5,
          application: 0,
          points_provided: 8,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Gonzalez',
          question: 1,
          application: 0,
          points_provided: 6,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Fox',
          question: 2,
          application: 0,
          points_provided: 2,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Reid',
          question: 3,
          application: 0,
          points_provided: 8,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Reid',
          question: 3,
          application: 1,
          points_provided: 8,
          created_by: 0,
          updated_by: 0
        },
        {
          notes: 'Reid',
          question: 3,
          application: 2,
          points_provided: 8,
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}

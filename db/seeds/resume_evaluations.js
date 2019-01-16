exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('resume_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('resume_evaluations').insert([
        {
          notes: 'notes',
          provided_points: 4,
          question: 10,
          application: 1,
          created_by: 0,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 1,
          application: 1,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 2,
          application: 1,
          created_by: 7,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 3,
          application: 1,
          created_by: 7,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 4,
          application: 1,
          created_by: 8,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 5,
          application: 1,
          created_by: 2,
          updated_by: 0
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 6,
          application: 1,
          created_by: 3,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 7,
          application: 1,
          created_by: 2,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 8,
          application: 1,
          created_by: 1,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 9,
          application: 1,
          created_by: 0,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 10,
          application: 2,
          created_by: 1,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 1,
          application: 2,
          created_by: 9,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 2,
          application: 2,
          created_by: 3,
          updated_by: 0
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 3,
          application: 2,
          created_by: 7,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 4,
          application: 2,
          created_by: 10,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 5,
          application: 2,
          created_by: 10,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 6,
          application: 2,
          created_by: 6,
          updated_by: 0
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 7,
          application: 2,
          created_by: 2,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 8,
          application: 2,
          created_by: 2,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 9,
          application: 2,
          created_by: 8,
          updated_by: 4
        },

        {
          notes: 'notes',
          provided_points: 0,
          question: 10,
          application: 3,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 1,
          application: 3,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 2,
          application: 3,
          created_by: 0,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 3,
          application: 3,
          created_by: 6,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 4,
          application: 3,
          created_by: 2,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 5,
          application: 3,
          created_by: 5,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 6,
          application: 3,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 7,
          application: 3,
          created_by: 5,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 8,
          application: 3,
          created_by: 6,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 9,
          application: 3,
          created_by: 6,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 10,
          application: 4,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 1,
          application: 4,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 2,
          application: 4,
          created_by: 0,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 3,
          application: 4,
          created_by: 6,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 4,
          application: 4,
          created_by: 2,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 5,
          application: 4,
          created_by: 5,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 6,
          application: 4,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 7,
          application: 4,
          created_by: 5,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 8,
          application: 4,
          created_by: 6,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 9,
          application: 4,
          created_by: 6,
          updated_by: 5
        }
      ])
    })
}

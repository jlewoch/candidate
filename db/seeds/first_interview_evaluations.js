exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('first_interview_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('first_interview_evaluations').insert([
        {
          notes: 'notes',
          provided_points: 0,
          question: 30,
          application: 1,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 21,
          application: 1,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 22,
          application: 1,
          created_by: 0,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 23,
          application: 1,
          created_by: 6,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 24,
          application: 1,
          created_by: 2,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 25,
          application: 1,
          created_by: 5,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 26,
          application: 1,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 27,
          application: 1,
          created_by: 5,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 28,
          application: 1,
          created_by: 6,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 29,
          application: 1,
          created_by: 6,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 30,
          application: 2,
          created_by: 6,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 21,
          application: 2,
          created_by: 3,
          updated_by: 0
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 22,
          application: 2,
          created_by: 1,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 23,
          application: 2,
          created_by: 3,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 24,
          application: 2,
          created_by: 7,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 25,
          application: 2,
          created_by: 9,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 26,
          application: 2,
          created_by: 9,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 27,
          application: 2,
          created_by: 8,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 28,
          application: 2,
          created_by: 4,
          updated_by: 0
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 29,
          application: 2,
          created_by: 9,
          updated_by: 0
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 30,
          application: 3,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 21,
          application: 3,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 22,
          application: 3,
          created_by: 0,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 23,
          application: 3,
          created_by: 6,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 24,
          application: 3,
          created_by: 2,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 25,
          application: 3,
          created_by: 5,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 26,
          application: 3,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 27,
          application: 3,
          created_by: 5,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 28,
          application: 3,
          created_by: 6,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 29,
          application: 3,
          created_by: 6,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 30,
          application: 4,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 21,
          application: 4,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 22,
          application: 4,
          created_by: 0,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 23,
          application: 4,
          created_by: 6,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 24,
          application: 4,
          created_by: 2,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 25,
          application: 4,
          created_by: 5,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 26,
          application: 4,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 27,
          application: 4,
          created_by: 5,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 28,
          application: 4,
          created_by: 6,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 29,
          application: 4,
          created_by: 6,
          updated_by: 5
        }
      ])
    })
}

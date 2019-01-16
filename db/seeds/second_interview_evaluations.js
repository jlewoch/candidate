exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('second_interview_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('second_interview_evaluations').insert([
        {
          notes: 'notes',
          provided_points: 9,
          question: 40,
          application: 1,
          created_by: 8,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 31,
          application: 1,
          created_by: 10,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 32,
          application: 1,
          created_by: 5,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 33,
          application: 1,
          created_by: 6,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 34,
          application: 1,
          created_by: 0,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 35,
          application: 1,
          created_by: 2,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 36,
          application: 1,
          created_by: 8,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 37,
          application: 1,
          created_by: 9,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 38,
          application: 1,
          created_by: 5,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 39,
          application: 1,
          created_by: 1,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 40,
          application: 2,
          created_by: 1,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 31,
          application: 2,
          created_by: 4,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 32,
          application: 2,
          created_by: 4,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 33,
          application: 2,
          created_by: 6,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 34,
          application: 2,
          created_by: 10,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 35,
          application: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 36,
          application: 2,
          created_by: 2,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 37,
          application: 2,
          created_by: 0,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 38,
          application: 2,
          created_by: 1,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 7,
          question: 39,
          application: 2,
          created_by: 5,
          updated_by: 1
        },

        {
          notes: 'notes',
          provided_points: 0,
          question: 40,
          application: 3,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 31,
          application: 3,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 32,
          application: 3,
          created_by: 0,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 33,
          application: 3,
          created_by: 6,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 34,
          application: 3,
          created_by: 2,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 35,
          application: 3,
          created_by: 5,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 36,
          application: 3,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 37,
          application: 3,
          created_by: 5,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 38,
          application: 3,
          created_by: 6,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 39,
          application: 3,
          created_by: 6,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 40,
          application: 4,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 31,
          application: 4,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 32,
          application: 4,
          created_by: 0,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 33,
          application: 4,
          created_by: 6,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 34,
          application: 4,
          created_by: 2,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 35,
          application: 4,
          created_by: 5,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 36,
          application: 4,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 37,
          application: 4,
          created_by: 5,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 38,
          application: 4,
          created_by: 6,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 39,
          application: 4,
          created_by: 6,
          updated_by: 5
        }
      ])
    })
}

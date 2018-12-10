exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('resume_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('resume_evaluations').insert([
        {
          notes: 'notes',
          provided_points: 6,
          question: 9,
          application: 10,
          created_by: 4,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 7,
          question: 19,
          application: 2,
          created_by: 10,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 19,
          application: 5,
          created_by: 5,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 28,
          application: 10,
          created_by: 7,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 10,
          application: 9,
          created_by: 3,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 8,
          application: 3,
          created_by: 3,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 6,
          application: 8,
          created_by: 3,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 24,
          application: 7,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 4,
          application: 3,
          created_by: 1,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 33,
          application: 3,
          created_by: 3,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 28,
          application: 7,
          created_by: 9,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 11,
          application: 8,
          created_by: 9,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 8,
          application: 9,
          created_by: 1,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 17,
          application: 3,
          created_by: 2,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 17,
          application: 7,
          created_by: 4,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 4,
          application: 5,
          created_by: 10,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 21,
          application: 2,
          created_by: 10,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 39,
          application: 7,
          created_by: 4,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 13,
          application: 2,
          created_by: 3,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 33,
          application: 2,
          created_by: 6,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 38,
          application: 9,
          created_by: 2,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 33,
          application: 6,
          created_by: 2,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 6,
          application: 2,
          created_by: 4,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 18,
          application: 9,
          created_by: 10,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 7,
          application: 4,
          created_by: 2,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 7,
          application: 7,
          created_by: 6,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 22,
          application: 6,
          created_by: 10,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 10,
          application: 9,
          created_by: 1,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 37,
          application: 2,
          created_by: 10,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 16,
          application: 8,
          created_by: 6,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 18,
          application: 10,
          created_by: 10,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 20,
          application: 2,
          created_by: 7,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 39,
          application: 1,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 27,
          application: 9,
          created_by: 7,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 4,
          application: 1,
          created_by: 1,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 34,
          application: 6,
          created_by: 3,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 7,
          application: 10,
          created_by: 9,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 37,
          application: 2,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 20,
          application: 1,
          created_by: 5,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 24,
          application: 4,
          created_by: 10,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 28,
          application: 2,
          created_by: 6,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 32,
          application: 10,
          created_by: 2,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 15,
          application: 6,
          created_by: 8,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 14,
          application: 5,
          created_by: 1,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 17,
          application: 10,
          created_by: 8,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 30,
          application: 5,
          created_by: 4,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 40,
          application: 3,
          created_by: 7,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 29,
          application: 6,
          created_by: 3,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 18,
          application: 2,
          created_by: 9,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 7,
          question: 18,
          application: 10,
          created_by: 1,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 12,
          application: 3,
          created_by: 10,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 12,
          application: 8,
          created_by: 4,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 38,
          application: 7,
          created_by: 4,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 4,
          application: 7,
          created_by: 10,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 14,
          application: 4,
          created_by: 9,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 39,
          application: 1,
          created_by: 8,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 21,
          application: 1,
          created_by: 5,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 12,
          application: 4,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 19,
          application: 5,
          created_by: 9,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 24,
          application: 3,
          created_by: 2,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 30,
          application: 6,
          created_by: 9,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 7,
          question: 8,
          application: 4,
          created_by: 7,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 16,
          application: 9,
          created_by: 6,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 16,
          application: 1,
          created_by: 9,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 5,
          application: 1,
          created_by: 3,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 34,
          application: 9,
          created_by: 6,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 28,
          application: 4,
          created_by: 7,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 32,
          application: 8,
          created_by: 8,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 11,
          application: 4,
          created_by: 9,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 18,
          application: 6,
          created_by: 5,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 35,
          application: 10,
          created_by: 8,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 35,
          application: 4,
          created_by: 5,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 22,
          application: 7,
          created_by: 9,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 7,
          question: 9,
          application: 10,
          created_by: 7,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 19,
          application: 9,
          created_by: 9,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 7,
          question: 37,
          application: 9,
          created_by: 6,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 11,
          application: 8,
          created_by: 1,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 28,
          application: 8,
          created_by: 3,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 39,
          application: 6,
          created_by: 7,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 37,
          application: 2,
          created_by: 4,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 1,
          application: 6,
          created_by: 7,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 28,
          application: 4,
          created_by: 9,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 25,
          application: 7,
          created_by: 5,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 17,
          application: 8,
          created_by: 6,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 33,
          application: 5,
          created_by: 10,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 7,
          question: 32,
          application: 2,
          created_by: 4,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 7,
          question: 3,
          application: 8,
          created_by: 1,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 20,
          application: 10,
          created_by: 5,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 7,
          question: 1,
          application: 7,
          created_by: 1,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 2,
          application: 2,
          created_by: 10,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 39,
          application: 5,
          created_by: 7,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 18,
          application: 3,
          created_by: 4,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 35,
          application: 8,
          created_by: 6,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 37,
          application: 8,
          created_by: 5,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 28,
          application: 6,
          created_by: 2,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 11,
          application: 1,
          created_by: 2,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 32,
          application: 5,
          created_by: 9,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 2,
          question: 15,
          application: 7,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 21,
          application: 6,
          created_by: 9,
          updated_by: 9
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 18,
          application: 5,
          created_by: 6,
          updated_by: 1
        }
      ])
    })
}

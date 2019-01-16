exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('phone_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('phone_evaluations').insert([
        {
          notes: 'notes',
          provided_points: 4,
          question: 20,
          application: 1,
          created_by: 10,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 11,
          application: 1,
          created_by: 8,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 12,
          application: 1,
          created_by: 5,
          updated_by: 0
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 13,
          application: 1,
          created_by: 9,
          updated_by: 0
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 14,
          application: 1,
          created_by: 7,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 7,
          question: 15,
          application: 1,
          created_by: 2,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 16,
          application: 1,
          created_by: 8,
          updated_by: 2
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 17,
          application: 1,
          created_by: 10,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 18,
          application: 1,
          created_by: 3,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 4,
          question: 19,
          application: 1,
          created_by: 4,
          updated_by: 10
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 20,
          application: 2,
          created_by: 7,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 11,
          application: 2,
          created_by: 5,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 12,
          application: 2,
          created_by: 8,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 13,
          application: 2,
          created_by: 9,
          updated_by: 0
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 14,
          application: 2,
          created_by: 9,
          updated_by: 0
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 15,
          application: 2,
          created_by: 0,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 16,
          application: 2,
          created_by: 0,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 17,
          application: 2,
          created_by: 8,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 18,
          application: 2,
          created_by: 1,
          updated_by: 0
        },
        {
          notes: 'notes',
          provided_points: 6,
          question: 19,
          application: 2,
          created_by: 7,
          updated_by: 4
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 20,
          application: 3,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 11,
          application: 3,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 12,
          application: 3,
          created_by: 0,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 13,
          application: 3,
          created_by: 6,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 14,
          application: 3,
          created_by: 2,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 15,
          application: 3,
          created_by: 5,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 16,
          application: 3,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 17,
          application: 3,
          created_by: 5,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 18,
          application: 3,
          created_by: 6,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 19,
          application: 3,
          created_by: 6,
          updated_by: 5
        },
        {
          notes: 'notes',
          provided_points: 0,
          question: 20,
          application: 4,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 11,
          application: 4,
          created_by: 4,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 12,
          application: 4,
          created_by: 0,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 5,
          question: 13,
          application: 4,
          created_by: 6,
          updated_by: 1
        },
        {
          notes: 'notes',
          provided_points: 10,
          question: 14,
          application: 4,
          created_by: 2,
          updated_by: 7
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 15,
          application: 4,
          created_by: 5,
          updated_by: 6
        },
        {
          notes: 'notes',
          provided_points: 9,
          question: 16,
          application: 4,
          created_by: 7,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 3,
          question: 17,
          application: 4,
          created_by: 5,
          updated_by: 3
        },
        {
          notes: 'notes',
          provided_points: 8,
          question: 18,
          application: 4,
          created_by: 6,
          updated_by: 8
        },
        {
          notes: 'notes',
          provided_points: 1,
          question: 19,
          application: 4,
          created_by: 6,
          updated_by: 5
        }
      ])
    })
}

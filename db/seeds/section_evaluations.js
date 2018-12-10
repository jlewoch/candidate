exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('section_evaluations')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('section_evaluations').insert([
        {
          notes: 'notes',
          total_grade: 32,
          skipped: true,
          application: 30,
          step: 4,
          created_by: 6,
          updated_by: 6
        },
        {
          notes: 'notes',
          total_grade: 60,
          skipped: false,
          application: 1,
          step: 4,
          created_by: 8,
          updated_by: 4
        },
        {
          notes: 'notes',
          total_grade: 43,
          skipped: true,
          application: 2,
          step: 1,
          created_by: 1,
          updated_by: 8
        },
        {
          notes: 'notes',
          total_grade: 72,
          skipped: false,
          application: 3,
          step: 1,
          created_by: 5,
          updated_by: 7
        },
        {
          notes: 'notes',
          total_grade: 89,
          skipped: false,
          application: 4,
          step: 3,
          created_by: 2,
          updated_by: 6
        },
        {
          notes: 'notes',
          total_grade: 7,
          skipped: false,
          application: 5,
          step: 1,
          created_by: 7,
          updated_by: 6
        },
        {
          notes: 'notes',
          total_grade: 14,
          skipped: true,
          application: 6,
          step: 1,
          created_by: 8,
          updated_by: 3
        },
        {
          notes: 'notes',
          total_grade: 83,
          skipped: false,
          application: 7,
          step: 1,
          created_by: 4,
          updated_by: 5
        },
        {
          notes: 'notes',
          total_grade: 9,
          skipped: false,
          application: 8,
          step: 4,
          created_by: 9,
          updated_by: 6
        },
        {
          notes: 'notes',
          total_grade: 7,
          skipped: false,
          application: 9,
          step: 3,
          created_by: 4,
          updated_by: 1
        },
        {
          notes: 'notes',
          total_grade: 42,
          skipped: true,
          application: 10,
          step: 2,
          created_by: 5,
          updated_by: 10
        },
        {
          notes: 'notes',
          total_grade: 30,
          skipped: true,
          application: 11,
          step: 1,
          created_by: 9,
          updated_by: 2
        },
        {
          notes: 'notes',
          total_grade: 20,
          skipped: true,
          application: 12,
          step: 2,
          created_by: 3,
          updated_by: 4
        },
        {
          notes: 'notes',
          total_grade: 37,
          skipped: false,
          application: 13,
          step: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          notes: 'notes',
          total_grade: 61,
          skipped: false,
          application: 14,
          step: 2,
          created_by: 2,
          updated_by: 4
        },
        {
          notes: 'notes',
          total_grade: 57,
          skipped: false,
          application: 15,
          step: 2,
          created_by: 5,
          updated_by: 4
        },
        {
          notes: 'notes',
          total_grade: 83,
          skipped: true,
          application: 16,
          step: 1,
          created_by: 8,
          updated_by: 9
        },
        {
          notes: 'notes',
          total_grade: 29,
          skipped: false,
          application: 17,
          step: 1,
          created_by: 9,
          updated_by: 4
        },
        {
          notes: 'notes',
          total_grade: 23,
          skipped: false,
          application: 18,
          step: 4,
          created_by: 8,
          updated_by: 1
        },
        {
          notes: 'notes',
          total_grade: 68,
          skipped: true,
          application: 19,
          step: 2,
          created_by: 8,
          updated_by: 6
        },
        {
          notes: 'notes',
          total_grade: 5,
          skipped: false,
          application: 20,
          step: 1,
          created_by: 10,
          updated_by: 3
        },
        {
          notes: 'notes',
          total_grade: 70,
          skipped: true,
          application: 21,
          step: 4,
          created_by: 5,
          updated_by: 5
        },
        {
          notes: 'notes',
          total_grade: 3,
          skipped: true,
          application: 22,
          step: 3,
          created_by: 10,
          updated_by: 7
        },
        {
          notes: 'notes',
          total_grade: 86,
          skipped: false,
          application: 23,
          step: 1,
          created_by: 5,
          updated_by: 3
        },
        {
          notes: 'notes',
          total_grade: 71,
          skipped: true,
          application: 24,
          step: 4,
          created_by: 4,
          updated_by: 4
        },
        {
          notes: 'notes',
          total_grade: 90,
          skipped: true,
          application: 25,
          step: 3,
          created_by: 7,
          updated_by: 10
        },
        {
          notes: 'notes',
          total_grade: 42,
          skipped: false,
          application: 26,
          step: 3,
          created_by: 2,
          updated_by: 2
        },
        {
          notes: 'notes',
          total_grade: 22,
          skipped: false,
          application: 27,
          step: 3,
          created_by: 6,
          updated_by: 3
        },
        {
          notes: 'notes',
          total_grade: 1,
          skipped: false,
          application: 28,
          step: 3,
          created_by: 2,
          updated_by: 10
        },
        {
          notes: 'notes',
          total_grade: 55,
          skipped: false,
          application: 29,
          step: 3,
          created_by: 8,
          updated_by: 8
        }
      ])
    })
}

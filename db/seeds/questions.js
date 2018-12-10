exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('questions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          enabled: true,
          weight: 10,
          question: 'question 0',
          step: 3,
          created_by: 7,
          updated_by: 10
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 1',
          step: 4,
          created_by: 4,
          updated_by: 10
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 2',
          step: 4,
          created_by: 8,
          updated_by: 8
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 3',
          step: 2,
          created_by: 2,
          updated_by: 2
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 4',
          step: 4,
          created_by: 5,
          updated_by: 5
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 5',
          step: 1,
          created_by: 4,
          updated_by: 3
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 6',
          step: 2,
          created_by: 6,
          updated_by: 9
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 7',
          step: 4,
          created_by: 8,
          updated_by: 5
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 8',
          step: 1,
          created_by: 8,
          updated_by: 10
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 9',
          step: 3,
          created_by: 7,
          updated_by: 9
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 10',
          step: 2,
          created_by: 8,
          updated_by: 8
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 11',
          step: 2,
          created_by: 10,
          updated_by: 9
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 12',
          step: 2,
          created_by: 8,
          updated_by: 4
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 13',
          step: 1,
          created_by: 10,
          updated_by: 3
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 14',
          step: 3,
          created_by: 7,
          updated_by: 10
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 15',
          step: 4,
          created_by: 1,
          updated_by: 9
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 16',
          step: 3,
          created_by: 3,
          updated_by: 2
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 17',
          step: 1,
          created_by: 2,
          updated_by: 3
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 18',
          step: 4,
          created_by: 9,
          updated_by: 2
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 19',
          step: 3,
          created_by: 8,
          updated_by: 4
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 20',
          step: 4,
          created_by: 2,
          updated_by: 7
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 21',
          step: 4,
          created_by: 5,
          updated_by: 3
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 22',
          step: 4,
          created_by: 1,
          updated_by: 1
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 23',
          step: 4,
          created_by: 10,
          updated_by: 1
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 24',
          step: 1,
          created_by: 6,
          updated_by: 1
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 25',
          step: 1,
          created_by: 10,
          updated_by: 1
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 26',
          step: 4,
          created_by: 10,
          updated_by: 9
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 27',
          step: 1,
          created_by: 3,
          updated_by: 1
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 28',
          step: 2,
          created_by: 7,
          updated_by: 7
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 29',
          step: 3,
          created_by: 8,
          updated_by: 4
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 30',
          step: 1,
          created_by: 4,
          updated_by: 2
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 31',
          step: 4,
          created_by: 9,
          updated_by: 7
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 32',
          step: 1,
          created_by: 5,
          updated_by: 5
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 33',
          step: 3,
          created_by: 5,
          updated_by: 9
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 34',
          step: 2,
          created_by: 8,
          updated_by: 5
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 35',
          step: 4,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 36',
          step: 3,
          created_by: 9,
          updated_by: 1
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 37',
          step: 2,
          created_by: 5,
          updated_by: 10
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 38',
          step: 4,
          created_by: 10,
          updated_by: 5
        },
        {
          enabled: true,
          weight: 10,
          question: 'question 39',
          step: 1,
          created_by: 8,
          updated_by: 7
        }
      ])
    })
}

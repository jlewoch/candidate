exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('questions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          enabled: true,
          points: 10,
          question: 'question 0',
          step: 1,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 1',
          step: 1,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 2',
          step: 1,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 3',
          step: 1,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 4',
          step: 1,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 5',
          step: 1,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 6',
          step: 1,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 7',
          step: 1,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 8',
          step: 1,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 9',
          step: 1,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 10',
          step: 2,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 11',
          step: 2,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 12',
          step: 2,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 13',
          step: 2,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 14',
          step: 2,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 15',
          step: 2,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 16',
          step: 2,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 17',
          step: 2,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 18',
          step: 2,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 19',
          step: 2,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 20',
          step: 3,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 21',
          step: 3,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 22',
          step: 3,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 23',
          step: 3,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 24',
          step: 3,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 25',
          step: 3,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 26',
          step: 3,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 27',
          step: 3,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 28',
          step: 3,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 29',
          step: 3,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 30',
          step: 4,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 31',
          step: 4,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 32',
          step: 4,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 33',
          step: 4,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 34',
          step: 4,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 35',
          step: 4,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 36',
          step: 4,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 37',
          step: 4,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 38',
          step: 4,
          created_by: 6,
          updated_by: 4
        },
        {
          enabled: true,
          points: 10,
          question: 'question 39',
          step: 4,
          created_by: 6,
          updated_by: 4
        }
      ])
    })
}

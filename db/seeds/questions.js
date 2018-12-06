exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('questions')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('questions').insert([
        {
          question: 'Do they have the required skills',
          step: 0,
          enabled: true,
          weight: 10,
          created_by: 0,
          updated_by: 0
        },
        {
          question: 'Would they fit in the company culture',
          step: 0,
          enabled: true,
          weight: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          question: 'Do they have the Required Education',
          step: 0,
          enabled: true,
          weight: 30,
          created_by: 0,
          updated_by: 0
        },
        {
          question: 'Is the applicant genuine',
          step: 0,
          enabled: true,
          weight: 5,
          created_by: 0,
          updated_by: 0
        },
        {
          question: 'Is there any misleading informtation',
          step: 0,
          enabled: true,
          weight: 15,
          created_by: 0,
          updated_by: 0
        },
        {
          question: 'Is there any concerns',
          step: 0,
          enabled: true,
          weight: 5,
          created_by: 0,
          updated_by: 0
        },
        {
          question: 'was the applicant late',
          step: 0,
          enabled: true,
          weight: 5,
          created_by: 0,
          updated_by: 0
        },
        {
          question: 'are they personable',
          step: 1,
          enabled: true,
          weight: 100,
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}

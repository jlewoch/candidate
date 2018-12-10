exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('steps')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          name: 'New',
          required: true,
          level: 0,
          weight: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          name: 'Resume Review',
          required: true,
          level: 1,
          weight: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          name: 'Phone Screening',
          required: true,
          level: 2,
          weight: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          name: 'First Interview',
          required: true,
          level: 3,
          weight: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          name: 'Second Interview',
          required: true,
          level: 5,
          weight: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          name: 'Assesment',
          required: false,
          level: 4,
          weight: 20,
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}

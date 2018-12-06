exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('steps')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          description: 'Resume Review',
          required: true,
          level: 0,
          weight: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          description: 'Phone Screening',
          required: true,
          level: 1,
          weight: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          description: 'First Interview',
          required: true,
          level: 3,
          weight: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          description: 'Second Interview',
          required: true,
          level: 4,
          weight: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          description: 'Assesment',
          required: false,
          level: 2,
          weight: 20,
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}

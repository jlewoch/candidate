exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('steps')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          name: 'New',
         
          level: 0,
          points: 0,
          created_by: 0,
          updated_by: 0
        },
        {
          name: 'Resume Review',
         
          level: 1,
          points: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          name: 'Phone Screening',
         
          level: 2,
          points: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          name: 'First Interview',
         
          level: 3,
          points: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          name: 'Second Interview',
         
          level: 5,
          points: 20,
          created_by: 0,
          updated_by: 0
        },
        {
          name: 'Assesment',
          level: 4,
          points: 20,
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}

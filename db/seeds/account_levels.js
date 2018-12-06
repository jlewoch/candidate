exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('account_levels')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('account_levels').insert([
        {
          description: 'No Access',
          level: 0,
          created_by: 0,
          updated_by: 0
        },
        {
          description: 'Recruiter',
          level: 1,
          created_by: 0,
          updated_by: 0
        },
        {
          description: 'Head Recruiter',
          level: 2,
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}

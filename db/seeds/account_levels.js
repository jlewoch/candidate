exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('account_levels')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('account_levels').insert([
        {
          name: 'No Access',
          level: 1,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Recruiter',
          level: 2,
          created_by: 1,
          updated_by: 1
        },
        {
          name: 'Head Recruiter',
          level: 3,
          created_by: 1,
          updated_by: 1
        }
      ])
    })
}

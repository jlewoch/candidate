exports.seed = async knex => {
  // Deletes ALL existing entries
  return knex('accounts')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {
          username: 'test',
          password: 'test',
          enabled: true,
          locked: 0,
          login_attempts: 0,
          access_level: 2,
          created_by: 0,
          updated_by: 0
        }
      ])
    })
}
